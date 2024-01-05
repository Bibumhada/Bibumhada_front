import React from 'react';
import logo from 'assets/images/logo.svg';
import Button from 'components/common/Button/Button';
import * as S from './EndOfListAlertBottomSheet.styled';
import { useNavigate } from 'react-router-dom';

const EndOfListAlertBottomSheet = ({ onClickGetNewRestaurantList }: { onClickGetNewRestaurantList: React.MouseEventHandler<HTMLButtonElement> }) => {
  const navigate = useNavigate();

  const handleToLocationPage = () => {
    navigate('/');
  };

  return (
    <S.Layout>
      <S.Logo src={logo} alt="오늘의 메뉴 로고" />
      <S.Title>오늘 준비한 메뉴 추천은 여기까지에요!</S.Title>
      <S.ButtonLayout>
        <Button onClick={handleToLocationPage}>처음으로</Button>
        <Button $variant="orange" onClick={onClickGetNewRestaurantList}>
          이어서 고르기
        </Button>
      </S.ButtonLayout>
    </S.Layout>
  );
};

export default EndOfListAlertBottomSheet;
