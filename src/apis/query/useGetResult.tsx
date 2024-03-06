import { useQuery } from '@tanstack/react-query';
import getResult from 'apis/api/getResult';

const useGetResult = (roomId: string | undefined) => {
  const { data: voteOverallResultData, refetch } = useQuery({
    queryKey: ['voteOverallResult', roomId],
    queryFn: () => getResult({ roomId }),
  });

  return { voteOverallResultData, refetch };
};

export default useGetResult;
