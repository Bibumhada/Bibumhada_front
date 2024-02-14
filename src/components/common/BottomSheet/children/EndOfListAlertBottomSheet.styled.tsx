import styled from 'styled-components';
import { vars } from 'styles/GlobalStyle';

export const Layout = styled.div`
  margin: 10px 18px 43px;
  margin: 20px 18px 43px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 41px;
`;
export const Logo = styled.img`
  width: 193px;
`;

export const Title = styled.h2`
  font-size: ${vars.static.font20};
  font-weight: ${vars.static.font600};
`;

export const ButtonLayout = styled.div`
  width: 100%;
  display: flex;
  gap: 7px;

  button {
    flex-grow: 1;
  }
`;
