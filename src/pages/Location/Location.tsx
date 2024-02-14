import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DaumPostcodeEmbed, { Address } from 'react-daum-postcode';
import Loading from 'pages/Loading/Loading';
import BottomSheet from 'components/common/BottomSheet/BottomSheet';
import * as S from './Location.styled';
import getAddressAPI from 'apis/api/getAddressApi';
import { useSetRecoilState } from 'recoil';
import { randomListData } from 'recoil/randomListData';
import { roomIdData } from 'recoil/roomIdData';
import { locationData } from 'recoil/locationData';
import { useRandomListMutation } from 'apis/query/useRandomListMutation';
import ReactGA from 'react-ga4';

const Location: React.FC = () => {
  const navigate = useNavigate();
  const geocoder = new window.kakao.maps.services.Geocoder();
  const [isModalOn, setIsModalOn] = useState<boolean>(false);
  const [address, setAddress] = useState<string>('');
  const addressInput = useRef<HTMLInputElement>(null);
  const [buttonActive, setButtonActive] = useState<boolean>(false);
  const [latitude, setLatitude] = useState<string | null>(null);
  const [longitude, setLongitude] = useState<string | null>(null);
  const setRandomList = useSetRecoilState(randomListData);
  const setRoomId = useSetRecoilState(roomIdData);
  const setLocationDataSet = useSetRecoilState(locationData);
  const { mutate, isLoading } = useRandomListMutation();

  useEffect(() => {
    if (addressInput.current) {
      addressInput.current.value = address;
    }
  }, [address]);

  useEffect(() => {
    if (latitude && longitude) {
      setButtonActive(true);
    }
  }, [latitude, longitude]);

  const handlePostcodeModal = (event: React.MouseEvent<HTMLInputElement>) => {
    event.preventDefault();
    setIsModalOn(true);
    ReactGA.event({
      category: 'click',
      action: '위치_검색',
      label: '메인 화면',
    });
  };

  const handleComplete = (data: Address) => {
    const dataAddress = data.address;

    geocoder.addressSearch(data.address, (result: any, status: any) => {
      if (status === window.kakao?.maps.services.Status.OK) {
        setLatitude(result[0].y.slice(0, 9));
        setLongitude(result[0].x.slice(0, 10));
      } else {
        console.error('kakao get coordinate error');
      }
    });
    setAddress(dataAddress);
    setIsModalOn(false);
  };

  const handleError = (error: GeolocationPositionError) => {
    switch (error.code) {
      case 1:
        alert('위치 정보 엑세스가 거부되어 있습니다. 설정에서 위치정보 사용을 허용해주세요.');
        break;
      case 2:
        alert('장치에서 위치 정보를 제공할 수 없습니다.');
        break;
      case 3:
        alert('위치 정보를 가져오는 데 시간 초과가 발생했습니다.');
        break;
      default:
        alert('알 수 없는 오류가 발생했습니다.');
        break;
    }
  };

  // 현재 위치 정보 가져오기
  const getCurrentLocation = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    ReactGA.event({
      category: 'click',
      action: '현재_위치',
      label: '메인 화면',
    });
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(async ({ coords: { latitude, longitude } }) => {
        try {
          setLatitude(latitude.toFixed(6));
          setLongitude(longitude.toFixed(6));
          const response = await getAddressAPI({ longitude, latitude });
          const formattedAddress = response.data.documents[0].address.address_name;
          setAddress(formattedAddress);
        } catch (error) {
          console.error('Error fetching address:', error);
        }
      }, handleError);
    } else {
      alert('Geolocation is not available in this browser.');
    }
  };

  const handleModalClose = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    event.preventDefault();
    setIsModalOn(false);
  };

  const onSuccessFn = (data: any) => {
    setRandomList(data.data.restaurantResList);
    setRoomId(data.data.id);
    if (latitude && longitude) {
      setLocationDataSet({ latitude: latitude, longitude: longitude });
    } else {
      console.log('location 정보없음');
    }
    navigate('/random-menu');
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    ReactGA.event({
      category: 'click',
      action: '점심메뉴_고르기_버튼',
      label: '메인 화면',
    });
    if (latitude && longitude) {
      mutate({ longitude, latitude }, { onSuccess: onSuccessFn });
    }
  };

  return (
    <>
      {isLoading ? (
        <Loading message={'음식점을 추천 중이에요'} />
      ) : (
        <S.Layout>
          <S.Title>
            입력하신 위치 기반으로
            <br />
            오늘의 메뉴를 추천해드려요
          </S.Title>
          <S.Form>
            <S.AddressInput placeholder="회사명, 근처 역 출구, 상세 주소 검색" readOnly onClick={handlePostcodeModal} ref={addressInput} />
            <S.GetCurrentLocationButton onClick={getCurrentLocation}>현재 위치로 설정하기</S.GetCurrentLocationButton>
            <S.SubmitButton $isActive={buttonActive} onClick={handleSubmit} disabled={!buttonActive}>
              점심메뉴 같이 고르기
            </S.SubmitButton>
          </S.Form>
        </S.Layout>
      )}
      {/* 모달은 포탈 써서 전역으로 나중에 바꿀게요!! */}
      {isModalOn && (
        <BottomSheet handleModalClose={handleModalClose}>
          <DaumPostcodeEmbed onComplete={handleComplete} autoClose style={{ width: '100%', height: 500 }} />
        </BottomSheet>
      )}
    </>
  );
};

export default Location;
