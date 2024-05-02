import React from 'react';
import { useRecoilValue } from 'recoil';
import { noticeModalState } from 'recoil/noticeModalState';
import * as S from './Notice.styled';
import iconMaintenance from 'assets/icons/icon-maintenance.svg';

const Notice = () => {
  const isOpen = useRecoilValue(noticeModalState);

  const openForm = (url: string) => (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    window.open(url);
  };

  const handleToInQuiryFormClick = openForm('https://forms.gle/SSdu5rTXxreTZtQk8');

  return isOpen ? (
    <S.ModalBackground>
      <S.ModalLayout>
        <S.ModalHeader>공지사항</S.ModalHeader>
        <S.ModalContents>
          <img src={iconMaintenance} alt="under maintenance icon" />
          <S.MainText>
            보다 안정적이고 개선된 서비스 제공을 위해
            <br />
            <strong className="name">[오늘의 메뉴]</strong>가 <strong className="strong">일시적으로 중단</strong>됩니다.
          </S.MainText>
          <S.DateText>서비스 재개: 6월 중</S.DateText>
          <S.ContactText>
            문의사항이 있는 경우,
            <br />
            아래 [문의하러 가기]를 이용해주세요.
          </S.ContactText>
          <S.OrangeStyledButtons onClick={handleToInQuiryFormClick}>문의하러 가기</S.OrangeStyledButtons>
        </S.ModalContents>
      </S.ModalLayout>
    </S.ModalBackground>
  ) : null;
};

export default Notice;
