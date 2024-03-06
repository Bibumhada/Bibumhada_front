import styled from 'styled-components';
import bg_vote from 'assets/images/background-top.png';
import icon_yummy from 'assets/icons/icon-yummy.svg';

export const Layout = styled.div`
  width: 100%;
  min-height: 100vh;
  background: url(${bg_vote}) 0 0 no-repeat;
  background-color: var(--color-bg-gray);
  padding: 50px 18px 30px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin-left: 15px;
  margin-right: 10px;
  margin-bottom: 11px;
`;

export const Title = styled.h1`
  display: inline-block;
  width: 200px;
  font-size: var(--xl);
  font-weight: var(--font-bold);
  color: white;
  position: relative;

  &::after {
    content: '';
    display: inline-block;
    position: absolute;
    width: 27px;
    height: 27px;
    bottom: 2px;
    right: -1px;
    background: url(${icon_yummy}) 0 0 no-repeat;
  }
`;

export const ContactUsButton = styled.button`
  /* cursor: pointer; */
`;

export const CardUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 22px;
  flex-grow: 1;
`;

export const ButtonLayout = styled.div`
  display: flex;
  gap: 7px;
`;

export const LoadingGifBackground = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 390px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const LoadingGif = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 25%;
`;
