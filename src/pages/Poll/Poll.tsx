import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AsyncBoundary from 'components/common/AsyncBoundary';
import * as S from './Poll.styled';
import { useGetRoom } from 'apis/query/useGetRoom';
import MenuCard from 'components/common/MenuCard/MenuCard';
import Button from 'components/common/Button/Button';
import Loading from 'pages/Loading/Loading';
import ShareBottomSheet from 'components/common/modal/ShareBottomSheet';
import icon_share from 'assets/icons/icon-share.svg';
import { roomIdData } from 'recoil/roomIdData';
import { useRecoilValue } from 'recoil';
import { useVoteMutation } from 'apis/query/useVoteMutation';
import Error from 'pages/Error/Error';
import ReactGA from 'react-ga4';
import { convertFromBase64 } from 'util/convertToFromBase64';

const PollWrapper = () => {
  return (
    <AsyncBoundary errorFallback={<Error />} suspenseFallback={<></>}>
      <Poll />
    </AsyncBoundary>
  );
};

const Poll = () => {
  const { id: encodedRoomId } = useParams();
  let roomId: string | undefined;
  if (encodedRoomId) {
    roomId = convertFromBase64(encodedRoomId);
  }
  const isSharedPage = useRecoilValue(roomIdData);
  const [isShareModalOn, setIsShareModalOn] = useState<boolean>(!!isSharedPage);
  const [clickedIndexArray, setClickedIndexArray] = useState<number[]>([]);
  const [buttonActive, setButtonActive] = useState<boolean>(false);
  const navigate = useNavigate();
  const { data } = useGetRoom(roomId);
  const { mutate, isLoading } = useVoteMutation();

  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: '투표하기 화면',
      title: '투표하기_화면',
    });
  }, []);

  const onSuccessFn = () => {
    navigate(`/random-menu/${encodedRoomId}/result`);
  };

  const handleSubmit = () => {
    if (roomId) {
      ReactGA.event({
        category: 'click',
        action: '투표하고_결과보기_버튼',
        label: '투표하기 화면',
        value: parseInt(roomId),
      });
    }
    if (clickedIndexArray && roomId) {
      mutate({ roomId, voteList: clickedIndexArray }, { onSuccess: onSuccessFn });
      navigate(`/random-menu/${encodedRoomId}/result`);
    }
  };

  const handleShareClick = () => {
    ReactGA.event({
      category: 'click',
      action: '투표화면_공유하기_버튼',
      label: '투표하기 화면',
    });
    setIsShareModalOn(true);
  };

  const handleModalClose = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    setIsShareModalOn(false);
  };

  const handleClick = (restaurantId: number) => {
    ReactGA.event({
      category: 'click',
      action: '체크박스_버튼',
      label: '투표하기 화면',
    });
    setClickedIndexArray((prev) => {
      const updatedList = [...prev];
      const i = prev.findIndex((el) => el === restaurantId);
      if (i === -1) {
        updatedList.push(restaurantId);
      } else {
        updatedList.splice(i, 1);
      }
      if (updatedList.length) {
        setButtonActive(true);
      } else {
        setButtonActive(false);
      }
      return updatedList.sort((a, b) => a - b);
    });
  };

  return (
    <>
      {isLoading ? (
        <Loading message={'투표 결과 가져오는중'} />
      ) : (
        <S.Layout>
          <S.Title>오늘 당기는 메뉴는? 🤤</S.Title>
          <S.CardUl>
            {data?.data.restaurantResList.map((el: any, i: number) => (
              <MenuCard
                key={i}
                information={{
                  restaurantId: el.id,
                  index: i,
                  title: el.title,
                  category: el.category,
                  link: el.link,
                  distance: el.distance,
                  address: el.address,
                }}
                isPoll={true}
                handleClick={handleClick}
              ></MenuCard>
            ))}
          </S.CardUl>
          <S.ButtonLayout>
            <Button onClick={handleShareClick} $style={{ width: '25%' }}>
              <S.ShareImg src={icon_share} alt="공유하기 버튼" />
            </Button>
            <Button $variant={buttonActive ? 'orange' : 'gray'} onClick={handleSubmit} disabled={!buttonActive}>
              투표하고 결과보기
            </Button>
          </S.ButtonLayout>
        </S.Layout>
      )}
      {isShareModalOn && <ShareBottomSheet isPollPage={true} handleModalClose={handleModalClose} />}
    </>
  );
};

export default PollWrapper;
