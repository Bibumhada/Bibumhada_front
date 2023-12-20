import { axiosInstance } from 'apis/base/instance';

interface RetryApiParams {
  roomId: string;
}

const postRetryApi = async ({ roomId }: RetryApiParams) => {
  const response = await axiosInstance.post(`/api/v1/retry/${roomId}`);
  return response.data;
};

export default postRetryApi;
