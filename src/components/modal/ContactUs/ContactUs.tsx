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
  const openForm = (url: string) => (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    window.open(url);
  };

  const handleFeedbackFormClick = openForm('https://docs.google.com/forms/d/1gzJMOdNPdUeB5yUHmmUx8Ccax2t0x7ptT13TjDhfITU/edit');

  const handleToInQuiryFormClick = openForm('https://forms.gle/SSdu5rTXxreTZtQk8');

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
        <S.ButtonGroup>
          <S.StyledButton onClick={handleFeedbackFormClick}>피드백 남기기</S.StyledButton>
          <S.OrangeStyledButtons onClick={handleToInQuiryFormClick}>문의하러 가기</S.OrangeStyledButtons>
        </S.ButtonGroup>
      </S.ModalLayout>
    </S.ModalBackground>
  );
};

export default ContactUsModal;
