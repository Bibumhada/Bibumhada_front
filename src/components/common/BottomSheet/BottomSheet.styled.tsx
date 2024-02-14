import styled from 'styled-components';

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

export const SlideBar = styled.div`
  margin: 0 auto 14px;
  width: 50px;
  height: 4px;
  border-radius: 10px;
  background-color: var(--color-sub-gray);
`;

export const ModalLayout = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 16px 5px 0;
  background-color: #fff;
  box-shadow: 0px -2px 2px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  border-radius: 20px 20px 0 0;
  animation: fadeInModal 0.5s ease;

  @keyframes fadeInModal {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }
`;
