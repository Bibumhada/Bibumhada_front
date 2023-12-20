import { axiosInstance } from 'apis/base/instance';

interface ResuggestParams {
  roomId: string;
  restaurantId: string;
}

const postResuggestOneApi = async ({ roomId, restaurantId }: ResuggestParams) => {
  const response = await axiosInstance.post(`/api/v1/${roomId}/resuggest/${restaurantId}`);
  return response.data;
};

export default postResuggestOneApi;
