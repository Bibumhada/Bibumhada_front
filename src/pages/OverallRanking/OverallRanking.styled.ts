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

  .page-title {
    margin-bottom: 3px;
    font-size: 30px;
    font-weight: var(--font-bold);
    color: #fff;
    text-align: center;
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
  line-height: 1.7;
  padding-top: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  min-width: 40%;

  .name {
    font-size: var(--md);
    font-weight: var(--font-bold);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .tags {
    display: flex;
    gap: 5px;
    color: var(--color-main-orange);
  }
`;

export const Distance = styled.p`
  color: var(--color-sub-gray);
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
