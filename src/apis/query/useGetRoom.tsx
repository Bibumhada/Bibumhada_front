import { useQuery } from '@tanstack/react-query';
import getPoll from 'apis/api/getPoll';

export const useGetRoom = (roomId: string | undefined) => {
  const { data, isLoading, isError } = useQuery({ queryKey: ['room', roomId], queryFn: () => getPoll({ roomId }) });

  return {
    data,
    isLoading,
    isError,
  };
};
