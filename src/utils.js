export const getRandomIntegerNumber = (max) => {
  return Math.floor(max * Math.random());
};

export const getRandomArrayItem = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

export const getRandomBoolean = () => {
  return Math.random() > 0.5;
};

const getStartDate = () => {
  // const sign = Math.random() > 0.5 ? 1 : -1;
  // const diffValue = sign * getRandomIntegerNumber(0, 7);
  // targetDate.setDate(targetDate.getDate());
  return new Date();
};

export const startDate = getStartDate();

const castTimeFormat = (value) => {
  return value < 10 ? `0${value}` : String(value);
};

export const formatTime = (date) => {
  const hours = castTimeFormat(date.getHours() % 12);
  const minutes = castTimeFormat(date.getMinutes());

  // const interval = date.getHours() > 11 ? `pm` : `am`;

  return `${hours}:${minutes}`;
};
