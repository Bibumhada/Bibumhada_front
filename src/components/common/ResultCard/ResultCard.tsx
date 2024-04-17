import React from 'react';
import { useParams } from 'react-router-dom';
import * as S from './ResultCard.styled';
import toDetail from 'assets/icons/icon-to-detail-black.svg';
import soup from 'assets/icons/icon-soup.svg';
import pizza from 'assets/icons/icon-pizza.svg';
import hamburger from 'assets/icons/icon-hamburger.svg';
import noodle from 'assets/icons/icon-noodle.svg';
import splitCategory from 'util/splitCategory';
import ReactGA from 'react-ga4';

type ResultCardProps = {
  roomId: string | undefined;
  winnerNum: number;
  rank: number;
  name: string;
  distance: number;
  pollNumber: number;
  categories: string;
  link: string;
  totalPollNumber?: number;
};

const ResultCard = (props: ResultCardProps) => {
  const categories = splitCategory(props.categories);
  const { id: roomId } = useParams();

  const handleLinkClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    ReactGA.event({
      category: 'click',
      action: '1등_카드',
      label: '투표 결과 화면(1등)',
    });
    event.stopPropagation();
    window.open(props.link);
  };

  const handleClickOverallRanking = () => {
    ReactGA.event({
      category: 'click',
      action: '전체순위_버튼',
      label: '투표 결과 화면(1등)',
    });
  };

  const oneWinner = (
    <S.RankingWrapper>
      <S.foodIcon src={soup} alt="soup icon" />
      <S.foodIcon src={pizza} alt="pizza icon" />
      <S.oneWinnerRanking>{props.rank}등</S.oneWinnerRanking>
      <S.foodIcon src={hamburger} alt="hamburger icon" />
      <S.foodIcon src={noodle} alt="noodle icon" />
    </S.RankingWrapper>
  );

  const multipleWinner = (
    <S.RankingWrapper>
      <S.foodIcon src={pizza} alt="pizza icon" />
      <S.multipleWinnerRanking>공동 {props.rank}등</S.multipleWinnerRanking>
      <S.foodIcon src={hamburger} alt="hamburger icon" />
    </S.RankingWrapper>
  );
  return (
    <S.RestaurantDetail>
      {props.winnerNum === 1 ? oneWinner : multipleWinner}
      <span className="line"></span>
      <S.RestaurantName onClick={handleLinkClick}>
        <div className="name-container">
          <strong className="name">{props.name}</strong>
        </div>
        <img src={toDetail} alt="to external link icon" />
      </S.RestaurantName>
      <S.RestaurantTags>
        {categories.map((category, i) => (
          <S.RestaurantTag key={i}>{`# ${category}`}</S.RestaurantTag>
        ))}
      </S.RestaurantTags>
      <S.RestaurantDistance>{props.distance}m</S.RestaurantDistance>
      <S.VoteNumber>
        <span>{props.pollNumber}</span>/{props.totalPollNumber}명
      </S.VoteNumber>
      <S.ToOverallRanking to={`/random-menu/${roomId}/result/overall-ranking`} onClick={handleClickOverallRanking}>
        전체 순위 보기
      </S.ToOverallRanking>
    </S.RestaurantDetail>
  );
};

export default ResultCard;
