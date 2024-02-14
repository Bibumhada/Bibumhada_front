import styled from 'styled-components';

export const Layout = styled.div`
  background-color: #fff;
  width: 337px;
  height: 199px;
  padding: 20px 28px;
`;

export const ModalBackground = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 390px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: default;
`;

export const ModalLayout = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 337px;
  height: 199px;
  padding: 28px 28px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  box-sizing: border-box;
  border-radius: 10px;
`;

export const ModalTitle = styled.strong`
  color: var(--color-main-orange);
  font-size: var(--md);
  font-weight: var(--font-bold);
  margin-right: 5px;
`;

export const ModalTitleImage = styled.img`
  display: inline-block;
  vertical-align: top;
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  right: 21px;
  top: 21px;
`;

export const ModalContent = styled.p`
  color: var(--color-sub-gray);
  font-size: var(--sm);
  font-weight: var(--font-medium);
  line-height: 1.4;
`;

export const GoToInquireButton = styled.button`
  padding: 11px;
  width: 100%;
  background-color: var(--color-main-orange);
  color: #fff;
  border-radius: 10px;
  font-size: var(--md);
  font-weight: var(--font-bold);
`;
