import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const RestaurantDetail = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: 58px auto 0;
  padding: 25px 30px 36px;
  background-color: #fff;
  border-radius: 20px;
  height: 380px;

  .line {
    width: 100%;
    border: 1px solid #d9d9d9;
  }
`;

export const RankingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 22px;
`;

export const oneWinnerRanking = styled.p`
  color: #fff;
  background-color: rgba(239, 90, 57, 0.9);
  padding: 10px 20px 7px;
  border-radius: 10px;
  font-weight: var(--font-bold);
  font-size: var(--lg);
`;

export const multipleWinnerRanking = styled.p`
  color: #fff;
  background-color: rgba(239, 90, 57, 0.9);
  padding: 11px 20px 9px;
  border-radius: 10px;
  font-weight: var(--font-bold);
  font-size: var(--lg);
`;

export const RestaurantName = styled.button`
  display: flex;
  align-items: center;
  margin: 28px 0;

  .name {
    display: inline;
    font-size: var(--xl);
    font-weight: var(--font-bold);
    flex-grow: 1;
    white-space: normal;
    word-break: keep-all;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  img {
    display: inline-block;
    margin-left: 9px;
    flex-shrink: 0;
  }
`;

export const RestaurantTags = styled.div`
  color: var(--color-main-orange);
  font-size: 16px;
  font-weight: var(--font-medium);
  margin: 0 auto;
`;

export const RestaurantTag = styled.p`
  display: inline-block;
  margin-left: 5px;

  &:first-child {
    margin-left: 0;
  }
`;

export const RestaurantDistance = styled.div`
  margin: 20px auto auto;
  color: var(--color-sub-gray);
  font-size: 22px;
`;

export const VoteNumber = styled.p`
  color: #c2c2c2;
  font-size: 21px;
  text-align: center;

  span {
    color: rgba(239, 90, 57, 0.8);
    display: inline-block;
  }
`;

export const ToOverallRanking = styled(Link)`
  margin: 17px auto 0;
  font-weight: var(--font-bold);
  font-size: var(--sm);
  color: #a8a8a8;
  text-decoration: underline;

  img {
    margin: 0 10px;
    vertical-align: middle;
  }
`;
