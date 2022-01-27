export const getTimeGap = (time) => {
  const unixTime = Math.floor(new Date().getTime() - new Date(time).getTime());
  const date = new Date(unixTime);

  if (date.getMonth()) return `${date.getMonth()}달`;
  else if (date.getDay()) return `${date.getDay()}일`;
  else if (date.getHours()) return `${date.getHours()}시간`;
  else if (date.getMinutes()) return `${date.getMinutes()}분`;
  else if (date.getSeconds()) return `${date.getSeconds()}초`;
};
