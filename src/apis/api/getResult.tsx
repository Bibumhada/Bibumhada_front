import { axiosInstance } from 'apis/base/instance';

interface ResultParams {
  roomId: string | undefined;
}

const getResult = async ({ roomId }: ResultParams) => {
  const response = await axiosInstance.get(`/api/v1/${roomId}/result`);
  return response;
};

export default getResult;
