import {startDate} from "../utils";

const generateDay = () => {
  return {
    dueDate: startDate,
  };
};

export const generateDays = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateDay);
};
