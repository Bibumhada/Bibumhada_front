import Button from 'components/common/Button/Button';
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
`;

export const ModalLayout = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 337px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  box-sizing: border-box;
  border-radius: 10px;
  text-align: center;
`;

export const ModalHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 53px;
  background-color: var(--color-main-orange);
  border-radius: 10px 10px 0 0;
  color: #fff;
  font-size: var(--lg);
  font-weight: var(--bold);
`;

export const ModalContents = styled.div`
  padding: 40px 30px 16px;
  color: var(--color-sub-gray);
  line-height: 1.3;
`;

export const MainText = styled.p`
  margin-top: 16px;

  .name {
    font-weight: var(--font-bold);
  }

  .strong {
    font-weight: var(--font-bold);
    text-decoration: underline;
  }
`;

export const DateText = styled.p`
  margin: 34px 0;
  font-weight: var(--font-medium);
  font-size: var(--sm);
`;

export const ContactText = styled.p`
  margin-bottom: 8px;
  font-size: var(--xs);
`;

export const OrangeStyledButtons = styled(Button)`
  padding: 11px;
  /* width: 44px; */
  border-radius: 10px;
  font-size: var(--md);
  font-weight: var(--font-bold);
  background-color: var(--color-main-orange);
  color: #fff;
`;
