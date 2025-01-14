import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as S from './OverallRanking.styled';
import ShareBottomSheet from 'components/common/BottomSheet/ShareBottomSheet';
import Button from 'components/common/Button/Button';
import toDetail from 'assets/icons/btn-link-gray.svg';
import shareResult from 'assets/icons/icon-share-resut.svg';
import winner from 'assets/icons/icon-winner.svg';
import toBackIcon from 'assets/icons/icon-to-back.svg';
import splitCategory from 'util/splitCategory';
import AsyncBoundary from 'components/common/AsyncBoundary';
import useGetResult from 'apis/query/useGetResult';
import Error from 'pages/Error/Error';
import { useRecoilState } from 'recoil';
import { roomIdData } from 'recoil/roomIdData';
import { randomListData } from 'recoil/randomListData';
import ReactGA from 'react-ga4';
import { convertFromBase64 } from 'util/convertToFromBase64';

const OverallRankingWrapper = () => {
  return (
    <AsyncBoundary errorFallback={<Error />}>
      <OverallRanking />
    </AsyncBoundary>
  );
};

function OverallRanking() {
  const { id: encodedRoomId } = useParams();
  let roomId: string | undefined;
  if (encodedRoomId) {
    roomId = convertFromBase64(encodedRoomId);
  }
  const [IsModalOn, setIsModalOn] = useState<boolean>(false);
  const navigate = useNavigate();
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
          <S.Header>
            <button>
              <img src={toBackIcon} alt="to-previous-icon" onClick={() => navigate(-1)}></img>
            </button>
            <h3 className="page-title">전체 순위</h3>
          </S.Header>
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
                  <div className="name-distance-group">
                    <div className="name-wrapper">
                      <strong className="name">{item.title}</strong>
                    </div>
                    <p className="distance">{item.distance}m</p>
                  </div>
                  <div className="tags">{`# ${splitCategory(item.category)}`}</div>
                </S.RestaurantData>
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
