import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactGA from 'react-ga4';
import { useRecoilState, useRecoilValue } from 'recoil';
import { roomIdData } from 'recoil/roomIdData';
import { randomListData } from 'recoil/randomListData';
import { locationData } from 'recoil/locationData';
import * as S from './RandomList.styled';
import Loading from 'pages/Loading/Loading';
import Error from 'pages/Error/Error';
import MenuCard from 'components/common/MenuCard/MenuCard';
import AsyncBoundary from 'components/common/AsyncBoundary';
import Button from 'components/common/Button/Button';
import BottomSheet from 'components/common/BottomSheet/BottomSheet';
import EndOfListAlertBottomSheet from 'components/common/BottomSheet/children/EndOfListAlertBottomSheet';
import ContactUsModal from 'components/modal/ContactUs/ContactUs';
import { useRetryMutation } from 'apis/query/useRetryMutation';
import { useResuggestOneMutation } from 'apis/query/useResuggestOneMutation';
import { useRandomListMutation } from 'apis/query/useRandomListMutation';
import { convertToBase64 } from 'util/convertToFromBase64';
import ContactUsButton from 'assets/icons/btn-contact-us.svg';
import LoadingAsGif from 'assets/gif/loading.gif';

const RandomListWrapper = () => {
  return (
    <AsyncBoundary errorFallback={<Error />} suspenseFallback={<Loading message={'음식점을 추천 중이에요'} />}>
      <RandomList />
    </AsyncBoundary>
  );
};

const RandomList = () => {
  const navigate = useNavigate();
  const [randomList, setRandomList] = useRecoilState(randomListData);
  const [isAlertModalOn, setIsAlertModalOn] = useState<boolean>(false);
  const [isContactUsModalOn, setIsContactUsModalOn] = useState<boolean>(false);
  const [isLoadingOn, setIsLoadingOn] = useState<boolean>(false);
  const location = useRecoilValue(locationData);

  const [roomId, setRoomId] = useRecoilState(roomIdData);
  let encodedRoomId: string;
  if (roomId) {
    encodedRoomId = convertToBase64(roomId);
  }

  const { mutate: retryMutate } = useRetryMutation();
  const { mutate: resuggestOneMutate } = useResuggestOneMutation();
  const { mutate: randomListMutate } = useRandomListMutation();

  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: '음식점 추천 화면',
      title: '음식점_추천_리스트',
    });
  }, []);

  const handleSubmit = () => {
    if (roomId) {
      ReactGA.event({
        category: 'click',
        action: '투표공유하기_버튼',
        label: '음식점 추천 화면',
        value: Number(roomId),
      });
    }
    navigate(`/random-menu/${encodedRoomId}`);
  };

  const handleModalClose = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    event.preventDefault();
    setIsAlertModalOn(false);
  };

  const handleClick = (restaurantId: string, index: number) => {
    ReactGA.event({
      category: 'click',
      action: '마이너스_버튼',
      label: '음식점 추천 화면',
    });

    const resuggestOneOnSuccess = (data: any) => {
      setRandomList((prev) => {
        if (prev) {
          const updatedList = [...prev];
          updatedList.splice(index, 1);
          updatedList.push(data.restaurantResList[4]);
          return updatedList;
        }
        return prev;
      });
    };
    if (roomId && restaurantId) {
      resuggestOneMutate({ roomId, restaurantId }, { onSuccess: resuggestOneOnSuccess, onError: () => setIsAlertModalOn(true) });
    }
  };

  const retryOnSuccess = (data: any) => {
    setRandomList(data.restaurantResList);
  };

  const handleRetry = () => {
    ReactGA.event({
      category: 'click',
      action: '다시_추천_버튼',
      label: '음식점 추천 화면',
    });
    if (roomId) {
      retryMutate({ roomId }, { onSuccess: retryOnSuccess, onError: () => setIsAlertModalOn(true) });
    }
  };

  const handleGetNewRestaurantList = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    event.preventDefault();
    setIsAlertModalOn(false);
    if (roomId && location) {
      const latitude = location?.latitude;
      const longitude = location?.longitude;

      setIsLoadingOn(true);

      // 2초 동안 로딩 gif를 보여준 후에 데이터를 가져옴
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // 데이터를 가져온 후에 로딩 상태를 false로 변경하고 randomListMutate 함수를 호출
      randomListMutate(
        { longitude, latitude },
        {
          onSuccess: (newRandomData) => {
            setIsLoadingOn(false); // 로딩 상태를 false로 변경
            setIsAlertModalOn(false);
            setRandomList(newRandomData.data.restaurantResList);
            setRoomId(newRandomData.data.id);
          },
        },
      );
    }
  };

  const handleContactUsModalClick = () => {
    setIsContactUsModalOn(!isContactUsModalOn);
  };

  const handleContactUsModalClose = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    event.preventDefault();
    setIsContactUsModalOn(false);
  };

  const handleModalCloseWithButtonClick = () => {
    setIsContactUsModalOn(false);
  };

  return (
    <>
      <S.Layout>
        <S.Header>
          <S.Title>오늘의 메뉴 후보 </S.Title>
          <S.ContactUsButton onClick={handleContactUsModalClick}>
            <img src={ContactUsButton} alt="contact us button" />
          </S.ContactUsButton>
          {isContactUsModalOn && (
            <ContactUsModal handleModalClose={handleContactUsModalClose} handleModalCloseWithButton={handleModalCloseWithButtonClick}></ContactUsModal>
          )}
        </S.Header>
        <S.CardUl>
          {randomList?.map((el: any, i: number) => (
            <MenuCard
              key={el.id}
              information={{ restaurantId: el.id, index: i, title: el.title, category: el.category, link: el.link, distance: el.distance, address: el.address }}
              handleClick={handleClick}
            ></MenuCard>
          ))}
        </S.CardUl>
        <S.ButtonLayout>
          <Button onClick={handleRetry}>다시 추천</Button>
          <Button $variant={'orange'} onClick={handleSubmit}>
            투표 공유하기
          </Button>
        </S.ButtonLayout>
      </S.Layout>
      {isAlertModalOn && (
        <BottomSheet handleModalClose={handleModalClose}>
          <EndOfListAlertBottomSheet onClickGetNewRestaurantList={handleGetNewRestaurantList} onClickCloseModal={() => setIsAlertModalOn(false)} />
        </BottomSheet>
      )}
      {isLoadingOn && (
        <S.LoadingGifBackground>
          <S.LoadingGif src={LoadingAsGif} />
        </S.LoadingGifBackground>
      )}
    </>
  );
};

export default RandomListWrapper;
