import { styled } from 'styled-components';

export const MenuList = styled.li`
  padding: 16px 17px 17px;
  background: #ffffff;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
  cursor: pointer;
`;

export const RestaurantName = styled.strong`
  font-weight: var(--font-semi-bold);
  font-size: var(--md);
`;

export const RestaurantLinkImg = styled.img`
  display: inline-block;
`;

export const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
`;

export const RestaurantTagsUl = styled.ul`
  display: flex;
  gap: 10px;
  align-items: center;
  margin: 3px 0 10px;
`;

export const RestaurantTag = styled.p`
  padding: 3px 0;
  margin-left: 2px;
  border-radius: 5px;
  color: var(--color-sub-gray);
  font-size: var(--sm);
  display: inline-block;
  vertical-align: bottom;
  line-height: normal;
  color: var(--color-main-orange);
`;

export const RestaurantDistance = styled.p`
  color: var(--color-sub-gray);
  font-size: var(--sm);
  font-weight: var(--font-light);
`;

export const RestaurantDetail = styled.button`
  color: var(--color-sub-gray);
  border: 1px #dbdbdb solid;
  padding: 4px 5px 3px;
  border-radius: 5px;
`;
