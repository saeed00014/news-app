export function timeStampDecoder(timeStamp: string) {
  const date = new Date(timeStamp);
  return {
    year: date.getFullYear(),
    mounth: date.getMonth() + 1,
    day: date.getDate(),
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
  };
}
