import { axiosInstance } from 'apis/base/instance';

interface RestaurantInfoParams {
  restaurantId: string;
}

const getRestaurantInfo = async ({ restaurantId }: RestaurantInfoParams) => {
  const response = await axiosInstance.get(`/api/v1/${restaurantId}`);
  return response;
};

export default getRestaurantInfo;
