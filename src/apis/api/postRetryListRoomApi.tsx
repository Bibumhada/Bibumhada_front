import { axiosInstance } from 'apis/base/instance';

interface RetryRoomApiParams {
  roomId: string;
}

const postRetryListRoomApi = async ({ roomId }: RetryRoomApiParams) => {
  const response = await axiosInstance.post(`/api/v1/retry/${roomId}`);

  return response.data;
};

export default postRetryListRoomApi;
