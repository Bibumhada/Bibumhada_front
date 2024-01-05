export const convertToBase64 = (roomId: string) => {
  return btoa(roomId);
};

export const convertFromBase64 = (roomId: string) => {
  return atob(roomId);
};
