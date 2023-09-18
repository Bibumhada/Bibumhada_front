import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--color-main-orange);
`;

export const OverallRankingWrapper = styled.div`
  padding: 45px 19px 43px;
  display: flex;
  flex-direction: column;
  gap: 25px;

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
  gap: 18px;
`;

export const RestaurantItem = styled.li`
  width: 100%;
  background-color: #fff;
  padding: 20px 22px;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
`;

export const Ranking = styled.div`
  padding: 0 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  img {
    width: 16px;
  }

  .ranking {
    /* margin: 1px 0 5px; */
    display: block;
    font-size: 23px;
    font-weight: var(--font-bold);
    line-height: 1.5;
  }

  .total-number {
    display: inline-block;
    color: #c2c2c2;
    /* line-height: 1.7; */
  }
`;

export const RestaurantData = styled.div`
  width: 60%;
  line-height: 1.7;
  padding-top: 4px;

  .name {
    font-size: var(--md);
    font-weight: var(--font-bold);
    margin-right: 10px;
  }
  .distance {
    display: inline;
    color: var(--color-sub-gray);
  }

  .tags {
    display: flex;
    gap: 5px;
    color: var(--color-main-orange);
  }
`;

export const ButtonShare = styled.button`
  display: block;
  background-color: rgba(255, 255, 255, 0.2);
  color: #fff;
  padding: 11px 48px;
  border-radius: 20px;
  margin: 0 auto;

  img {
    margin-right: 10px;
    vertical-align: bottom;
  }
`;
