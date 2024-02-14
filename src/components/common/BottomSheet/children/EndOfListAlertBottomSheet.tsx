import React from 'react';
import logo from 'assets/images/logo.svg';
import Button from 'components/common/Button/Button';
import * as S from './EndOfListAlertBottomSheet.styled';

type EndOfListAlertBottomSheetProps = {
  onClickGetNewRestaurantList: React.MouseEventHandler<HTMLButtonElement>;
  onClickCloseModal: React.MouseEventHandler<HTMLButtonElement>;
};

const EndOfListAlertBottomSheet = ({ onClickGetNewRestaurantList, onClickCloseModal }: EndOfListAlertBottomSheetProps) => {
  return (
    <S.Layout>
      <S.Logo src={logo} alt="오늘의 메뉴 로고" />
      <S.Title>오늘 준비한 메뉴 추천은 여기까지에요!</S.Title>
      <S.ButtonLayout>
        <Button onClick={onClickGetNewRestaurantList}>초기화</Button>
        <Button $variant="orange" onClick={onClickCloseModal}>
          이어서 고르기
        </Button>
      </S.ButtonLayout>
    </S.Layout>
  );
};

export default EndOfListAlertBottomSheet;
