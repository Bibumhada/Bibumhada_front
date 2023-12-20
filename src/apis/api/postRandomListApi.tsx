import { axiosInstance } from 'apis/base/instance';

interface RandomListApiParams {
  longitude: string;
  latitude: string;
}

const postRandomListApi = async ({ longitude, latitude }: RandomListApiParams) => {
  const response = await axiosInstance.post('/api/v1/create', {
    longitude,
    latitude,
  });
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return response;
};

export default postRandomListApi;
