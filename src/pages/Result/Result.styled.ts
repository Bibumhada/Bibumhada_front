import Button from 'components/common/Button/Button';
import styled from 'styled-components';

interface ShareResultProps {
  $isFirstText: boolean;
  $opacity?: number;
}

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: var(--color-main-orange);
  padding: 110px 26px 25px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const ShareResult = styled.div<ShareResultProps>`
  width: 100%;
  position: absolute;
  left: 50%;
  top: ${(props) => (props.$isFirstText ? '100px' : '70px')};
  transform: translate(-50%, 0);
  color: #fff;
  font-weight: var(--font-bold);
  font-size: var(--xxl);
  line-height: 35px;
  text-align: center;
  white-space: pre-line;
  vertical-align: baseline;
  opacity: ${(props) => props.$opacity};
  transition: opacity 5ms;
`;

export const ContactUsButton = styled.button`
  position: absolute;
  top: 45px;
  right: 28px;
`;

export const ButtonLayout = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const ButtonShare = styled.button`
  display: block;
  background-color: rgba(255, 255, 255, 0.2);
  color: #fff;
  padding: 11px 48px;
  border-radius: 20px;
  margin: 23px auto 55px;
  margin-bottom: auto;
  line-height: 1.4;

  img {
    margin-right: 10px;
    vertical-align: bottom;
  }
`;

export const ReloadButton = styled(Button)`
  margin-top: 15px;
  img {
    display: inline-block;
    margin-left: 15px;
    vertical-align: baseline;
  }
`;
