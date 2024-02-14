import React from 'react';
import * as S from './ContactUs.styled';
import InquireIcon from 'assets/icons/btn-to-inquire.svg';
import CloseModalButton from 'assets/icons/btn-close-contact-us-modal.svg';

type Props = {
  className?: string;
  children?: React.ReactNode;
  handleModalClose: React.MouseEventHandler<HTMLDivElement>;
  handleModalCloseWithButton: React.MouseEventHandler<HTMLButtonElement>;
};

const ContactUsModal = (props: Props) => {
  const handleToFormClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSeUVqetIOFi3pOV1LH50b1wdq2GNnt1PQqFUMbP4pIvIqvSFg/viewform?usp=send_form');
  };
  return (
    <S.ModalBackground className={props.className} onClick={props.handleModalClose}>
      <S.ModalLayout onClick={(event: React.MouseEvent<HTMLDivElement>) => event.stopPropagation()}>
        <header>
          <S.ModalTitle>서비스 문의하기</S.ModalTitle>
          <S.ModalTitleImage src={InquireIcon} alt="contact us icon" />
          <S.ModalCloseButton onClick={props.handleModalCloseWithButton}>
            <img src={CloseModalButton} alt="close button of contact us modal" />
          </S.ModalCloseButton>
        </header>
        <S.ModalContent>
          불편하시거나 궁금하신
          <br />
          내용이 있다면 남겨주세요
        </S.ModalContent>
        <S.GoToInquireButton onClick={handleToFormClick}>문의하러 가기</S.GoToInquireButton>
      </S.ModalLayout>
    </S.ModalBackground>
  );
};

export default ContactUsModal;
