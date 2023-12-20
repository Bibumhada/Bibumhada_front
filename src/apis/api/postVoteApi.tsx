import { axiosInstance } from 'apis/base/instance';

interface VoteApiParams {
  roomId: string;
  voteList: number[];
}

const postVoteApi = async ({ roomId, voteList }: VoteApiParams) => {
  const response = await axiosInstance.post(`/api/v1${roomId}/vote`, { restaurantIdList: voteList });
  return response.data;
};

export default postVoteApi;
