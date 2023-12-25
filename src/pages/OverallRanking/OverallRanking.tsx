import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as S from './OverallRanking.styled';
import ShareBottomSheet from 'components/common/modal/ShareBottomSheet';
import Button from 'components/common/Button/Button';
import toDetail from 'assets/icons/btn-link-gray.svg';
import shareResult from 'assets/icons/icon-share-resut.svg';
import winner from 'assets/icons/icon-winner.svg';
import { useGetResult } from 'apis/query/useGetResult';
import splitCategory from 'util/splitCategory';
import AsyncBoundary from 'components/common/AsyncBoundary';
import Loading from 'pages/Loading/Loading';
import Error from 'pages/Error/Error';
import { useRecoilState } from 'recoil';
import { roomIdData } from 'recoil/roomIdData';
import { randomListData } from 'recoil/randomListData';
import ReactGA from 'react-ga4';

const OverallRankingWrapper = () => {
  return (
    <AsyncBoundary errorFallback={<Error />} suspenseFallback={<Loading message={'투표 결과 가져오는 중'} />}>
      <OverallRanking />
    </AsyncBoundary>
  );
};

function OverallRanking() {
  const [IsModalOn, setIsModalOn] = useState<boolean>(false);
  const navigate = useNavigate();
  const { id: roomId } = useParams();
  const [recoilRoomId, setRecoilRoomId] = useRecoilState(roomIdData);
  const [randomList, setRandomList] = useRecoilState(randomListData);
  const resultData = useGetResult(roomId).voteOverallResultData?.data;
  const totalVote = resultData.total;
  const overallRankingData = [...resultData.win, ...resultData.voteResultRes];

  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: '투표 결과 화면(전체)',
      title: '투표결과_화면(전체)',
    });
  }, []);

  const handleModalClick = () => {
    ReactGA.event({
      category: 'click',
      action: '투표결과_공유하기_버튼',
      label: '투표 결과 화면(전체)',
    });
    setIsModalOn(true);
  };

  const handleModalClose = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    event.preventDefault();
    setIsModalOn(false);
  };

  const handleRetry = () => {
    ReactGA.event({
      category: 'click',
      action: '처음부터_다시하기_버튼',
      label: '투표 결과 화면(전체)',
    });
    if (recoilRoomId !== null) {
      setRecoilRoomId(null);
    }
    if (randomList !== null) {
      setRandomList([]);
    }
    navigate('/');
  };

  const handleLinkClick = (event: React.MouseEvent<HTMLButtonElement>, link: string) => {
    event.stopPropagation();
    window.open(link);
  };

  return (
    <>
      <S.Wrapper>
        <S.OverallRankingWrapper>
          <h3 className="page-title">전체 순위</h3>
          <S.RestaurantList>
            {overallRankingData?.slice(0, 5).map((item: any) => (
              <S.RestaurantItem key={item.id}>
                <S.Ranking>
                  {item.rank === 1 ? <img src={winner} alt="winner icon" /> : undefined}
                  <strong className="ranking">{item.rank}등</strong>
                  <p>
                    {item.count}
                    <span className="total-number">/{totalVote}명</span>
                  </p>
                </S.Ranking>
                <S.RestaurantData>
                  <strong className="name">{item.title}</strong>
                  <div className="tags">{`# ${splitCategory(item.category)}`}</div>
                </S.RestaurantData>
                <S.Distance className="distance">{item.distance}m</S.Distance>
                <button className="detailbutton" type="button" onClick={(event) => handleLinkClick(event, item.link)}>
                  <img src={toDetail} alt="more detail icon" />
                </button>
              </S.RestaurantItem>
            ))}
            <S.ButtonShare onClick={handleModalClick}>
              <img src={shareResult} alt="share result icon" />
              공유하기
            </S.ButtonShare>
          </S.RestaurantList>
          <S.ButtonLayout>
            <Button onClick={handleRetry}>처음부터 다시하기</Button>
          </S.ButtonLayout>
        </S.OverallRankingWrapper>
      </S.Wrapper>
      {/* 모달은 포탈 써서 전역으로 나중에 바꿀게요!! */}
      {IsModalOn && <ShareBottomSheet handleModalClose={handleModalClose} isPollPage={false} isFirstPlace={false} />}
    </>
  );
}

export default OverallRankingWrapper;
