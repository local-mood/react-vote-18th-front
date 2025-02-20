import { axiosInstance } from "@/common/libs/axios";

export default async function usePatchTeamVote(teamId: number) {
  try {
    const response = await axiosInstance.patch(`/app/team/${teamId}/vote`);
    return response.data;
  } catch (error) {
    throw error;
  }
}
