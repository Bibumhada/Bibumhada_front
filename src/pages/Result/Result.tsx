import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Slider from 'react-slick';
import { useGetResult } from 'apis/query/useGetResult';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as S from './Result.styled';
import ResultCard from 'components/common/ResultCard/ResultCard';
import Button from 'components/common/Button/Button';
import ShareBottomSheet from 'components/common/modal/ShareBottomSheet';
import shareResult from 'assets/icons/icon-share-result.svg';
import retry from 'assets/icons/icon-retry-orange.svg';
import AsyncBoundary from 'components/common/AsyncBoundary';
import Loading from 'pages/Loading/Loading';
import Error from 'pages/Error/Error';
import { useRecoilState } from 'recoil';
import { randomListData } from 'recoil/randomListData';
import { roomIdData } from 'recoil/roomIdData';
import ReactGA from 'react-ga4';
import { convertFromBase64 } from 'util/convertToFromBase64';

const ResultWrapper = () => {
  return (
    <AsyncBoundary errorFallback={<Error />} suspenseFallback={<Loading message={'투표 결과 가져오는 중'} />}>
      <Result />
    </AsyncBoundary>
  );
};

const Result = () => {
  const { id: encodedRoomId } = useParams();
  let roomId: string | undefined;
  if (encodedRoomId) {
    roomId = convertFromBase64(encodedRoomId);
  }
  const [IsModalOn, setIsModalOn] = useState<boolean>(false);
  const [text, setText] = useState('1등 음식점을 확인해보세요 👀');
  const [opacity, setOpacity] = useState(1);
  const navigate = useNavigate();
  const [recoilRoomId, setRecoilRoomId] = useRecoilState(roomIdData);
  const [randomList, setRandomList] = useRecoilState(randomListData);

  const { voteOverallResultData, refetch } = useGetResult(roomId);

  const voteResult = voteOverallResultData?.data;

  const totalVote = voteResult.total;
  const winnerData = voteResult.win;

  const handleModalClick = () => {
    setIsModalOn(true);
    ReactGA.event({
      category: 'click',
      action: '투표결과_공유하기_버튼',
      label: '투표 결과 화면(1등)',
    });
  };

  const handleModalClose = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    setIsModalOn(false);
  };

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 1.1,
    slidesToScroll: 1,
    arrows: false,
  };

  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: '투표 결과 화면(1등)',
      title: '투표결과_화면(1등)',
    });

    const fadeOutTimer = setTimeout(() => {
      setOpacity(0);
    }, 3000);

    const changeTextTimer = setTimeout(() => {
      setText('새로고침하면\n최신 투표 결과를 볼 수 있어요');
      setOpacity(1);
    }, 3200);

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(changeTextTimer);
    };
  }, []);

  const handleClickFromScratch = () => {
    ReactGA.event({
      category: 'click',
      action: '처음부터_다시하기_버튼',
      label: '투표 결과 화면(1등)',
    });
    if (recoilRoomId !== null) {
      setRecoilRoomId(null);
    }
    if (randomList !== null) {
      setRandomList([]);
    }
    navigate('/');
  };

  return (
    <>
      <button style={{ position: 'absolute' }}>Result</button>
      <S.Wrapper>
        <S.ShareResult $isFirstText={text === '1등 음식점을 확인해보세요 👀'} $opacity={opacity}>
          {text}
        </S.ShareResult>
        {winnerData.length === 1 ? (
          winnerData.map((item: any, i: number) => (
            <ResultCard
              key={i}
              roomId={roomId}
              rank={item.rank}
              name={item.title}
              distance={item.distance}
              pollNumber={item.count}
              winnerNum={winnerData.length}
              categories={item.category}
              link={item.link}
              totalPollNumber={totalVote}
            />
          ))
        ) : (
          <Slider {...settings}>
            {winnerData.map((item: any, i: number) => (
              <ResultCard
                key={i}
                roomId={roomId}
                rank={item.rank}
                name={item.title}
                distance={item.distance}
                pollNumber={item.count}
                winnerNum={winnerData.length}
                categories={item.category}
                link={item.link}
                totalPollNumber={totalVote}
              />
            ))}
          </Slider>
        )}
        <S.ButtonLayout>
          <S.ButtonShare onClick={handleModalClick}>
            <img src={shareResult} alt="share result icon" />
            공유하기
          </S.ButtonShare>
          <S.ReloadButton
            type="button"
            onClick={() => {
              refetch();
              ReactGA.event({
                category: 'click',
                action: '새로고침_버튼',
                label: '투표 결과 화면(1등)',
              });
            }}
          >
            {totalVote}명째 투표중
            <img src={retry} alt="retry icon" />
          </S.ReloadButton>
          <Button $variant="retry" onClick={handleClickFromScratch}>
            처음부터 다시하기
          </Button>
        </S.ButtonLayout>
      </S.Wrapper>
      {IsModalOn && <ShareBottomSheet handleModalClose={handleModalClose} isPollPage={false} isFirstPlace={true} />}
    </>
  );
};

export default ResultWrapper;
