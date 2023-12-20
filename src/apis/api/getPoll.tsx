import { axiosInstance } from 'apis/base/instance';

interface PollParams {
  roomId: string | undefined;
}

const getPoll = async ({ roomId }: PollParams) => {
  const response = await axiosInstance.get(`/api/v1/${roomId}`);
  return response;
};

export default getPoll;
