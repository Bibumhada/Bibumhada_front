import React, { useState } from 'react';
import * as S from './MenuCard.styled';
import icon_change from 'assets/icons/btn-change.svg';
import icon_inactiveCheck from 'assets/icons/icon-inactiveCheck.svg';
import icon_activeCheck from 'assets/icons/icon-activeCheck.svg';
import splitCategory from 'util/splitCategory';
import icon_link from 'assets/icons/btn-link.svg';
import ReactGA from 'react-ga4';

interface MenuCardProps {
  information: {
    restaurantId: number;
    index: number;
    title: string;
    category: string;
    link: string;
    distance: number;
    address: string;
  };
  isPoll?: boolean;
  handleClick: any;
}

const MenuCard = (props: MenuCardProps) => {
  const { restaurantId, index, title, category, link, distance, address } = props.information;
  const handleClick = props.handleClick;
  const categories = splitCategory(category);
  const [isSelected, setIsSelected] = useState(false);

  const handleLinkClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    window.open(link);
    if (props.isPoll) {
      ReactGA.event({
        category: 'click',
        action: '음식점_정보',
        label: '투표하기 화면',
      });
    } else {
      ReactGA.event({
        category: 'click',
        action: '음식점_정보',
        label: '음식점 추천 화면',
      });
    }
  };

  const handleIconClick = () => {
    if (props.isPoll) {
      handleClick(restaurantId);
    } else {
      handleClick(restaurantId, index);
    }
    setIsSelected((prev) => !prev);
  };

  return (
    <S.MenuList>
      <section>
        <S.TitleLayout onClick={handleLinkClick}>
          <S.RestaurantName>{title}</S.RestaurantName>
          <S.RestaurantLinkImg src={icon_link} />
        </S.TitleLayout>
        <S.RestaurantTagsUl>
          {categories.map((category, i) => (
            <S.RestaurantTag key={i}>{`# ${category}`}</S.RestaurantTag>
          ))}
        </S.RestaurantTagsUl>
        <S.RestaurantDistance>{`${distance}m | ${address} `}</S.RestaurantDistance>
      </section>
      <S.ButtonsDiv onClick={handleIconClick}>
        <button>
          {props.isPoll ? (
            <img src={isSelected ? icon_activeCheck : icon_inactiveCheck} alt={'check button'} />
          ) : (
            <img src={icon_change} alt={'retry button'} />
          )}
        </button>
      </S.ButtonsDiv>
    </S.MenuList>
  );
};
export default MenuCard;
