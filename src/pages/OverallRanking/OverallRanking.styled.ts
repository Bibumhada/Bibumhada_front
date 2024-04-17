import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: var(--color-main-orange);
`;

export const OverallRankingWrapper = styled.div`
  padding: 45px 19px 43px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 25px;
  height: 100vh;
`;

export const Header = styled.header`
  display: flex;

  .page-title {
    display: inline-block;
    margin: 0 auto;
    font-size: var(--xl);
    font-weight: var(--font-bold);
    color: #fff;
  }
`;

export const RestaurantList = styled.ul`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 18px;
`;

export const RestaurantItem = styled.li`
  width: 100%;
  min-height: 92px;
  background-color: #fff;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;

  .detailbutton {
    margin: 0 15px 0 10px;
  }
`;

export const Ranking = styled.div`
  margin: 0 10px 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-shrink: 0;

  .ranking {
    display: block;
    font-size: 23px;
    font-weight: var(--font-bold);
    line-height: 1.5;
  }

  .total-number {
    display: inline-block;
    color: #c2c2c2;
  }
`;

export const RestaurantData = styled.div`
  padding-top: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  min-width: 40%;

  .name-distance-group {
    margin-bottom: 7px;
  }

  .name-wrapper {
    display: inline-block;
    max-width: 80%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .name {
    font-size: var(--md);
    font-weight: var(--font-bold);
  }

  .tags {
    display: flex;
    gap: 5px;
    color: var(--color-main-orange);
  }

  .distance {
    display: inline-block;
    color: var(--color-sub-gray);
    margin-left: 9px;
    vertical-align: top;
  }
`;

export const ButtonLayout = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const ButtonShare = styled.button`
  display: block;
  background-color: rgba(255, 255, 255, 0.2);
  color: #fff;
  padding: 11px 48px;
  border-radius: 20px;
  margin: 0 auto;
  margin-bottom: auto;

  img {
    margin-right: 10px;
    vertical-align: bottom;
  }
`;
