import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const RestaurantDetail = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 25px 10px 32px;
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
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 20px;
`;

export const foodIcon = styled.img`
  width: 25px;
  height: 25px;
`;

export const oneWinnerRanking = styled.p`
  color: #fff;
  background-color: rgba(239, 90, 57, 0.9);
  padding: 8px 16px 6px;
  border-radius: 10px;
  font-weight: var(--font-bold);
  font-size: var(--md);
`;

export const multipleWinnerRanking = styled.p`
  display: inline;
  color: #fff;
  background-color: rgba(239, 90, 57, 0.9);
  padding: 8px 16px 6px;
  border-radius: 10px;
  font-weight: var(--font-bold);
  font-size: var(--md);
`;

export const RestaurantName = styled.button`
  margin: 35px 0 25px;
  color: var(--color-sub-gray);
  position: relative;

  .name-container {
    display: inline-block;
    width: 80%;
  }

  .name {
    font-size: var(--xxl);
    font-weight: var(--font-bold);
    white-space: normal;
    word-break: keep-all;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #000;
  }

  img {
    position: absolute;
    display: inline;
    top: 50%;
    transform: translateY(-60%);
  }
`;

export const RestaurantTags = styled.div`
  color: var(--color-sub-gray);
  font-size: var(--sm);
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
  font-size: var(--lg);
`;

export const VoteNumber = styled.p`
  color: #c2c2c2;
  font-size: var(--sm);
  text-align: center;

  span {
    color: rgba(239, 90, 57, 0.8);
    display: inline-block;
  }
`;

export const ToOverallRanking = styled(Link)`
  margin: 17px auto 0;
  font-weight: var(--font-bold);
  font-size: var(--md);
  color: var(--color-main-orange);
  text-decoration: underline;

  img {
    margin: 0 10px;
    vertical-align: middle;
  }
`;
