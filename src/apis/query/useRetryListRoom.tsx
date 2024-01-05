import { useMutation } from '@tanstack/react-query';
import postRetryListRoomApi from 'apis/api/postRetryListRoomApi';

export const useRetryListRoom = () => {
  const mutation = useMutation({
    mutationFn: postRetryListRoomApi,
  });
  return mutation;
};
