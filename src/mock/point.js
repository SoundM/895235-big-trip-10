import {getRandomIntegerNumber, getRandomArrayItem, getRandomBoolean, startDate, formatTime} from '../utils';
import {DESCRIPTION, TITLE, TYPE, CITY} from '../const';


const getOffer = (title) => {
  return title
    .filter(() => Math.random() > 0.5)
    .slice(0, 2);
};

const generatePoint = () => {

  return {
    basePrice: getRandomIntegerNumber(300),
    dateFrom: formatTime(startDate),
    dateTo: formatTime(startDate),
    destination: getRandomArrayItem(DESCRIPTION),
    id: `0`,
    isFavorite: getRandomBoolean,
    offers: new Set(getOffer(TITLE)),
    type: getRandomArrayItem(TYPE) + ` ` + getRandomArrayItem(CITY)
  };
};

const generatePoints = (count) => {
  return new Array(count)
    .fill(``)
    .map(generatePoint);
};

export {generatePoint, generatePoints};
