import { useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import getResult from 'apis/api/getResult';

const useGetResult = (roomId: string | undefined) => {
  const isFirstRun = useRef(true);

  const queryFn = async () => {
    if (isFirstRun.current) {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      isFirstRun.current = false;
    }
    return getResult({ roomId });
  };

  const { data: voteOverallResultData, refetch } = useQuery({
    queryKey: ['voteOverallResult', roomId],
    queryFn,
    staleTime: Infinity,
    cacheTime: Infinity,
  });

  return { voteOverallResultData, refetch };
};

export { useGetResult };
