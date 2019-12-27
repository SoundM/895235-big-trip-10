import {startDate} from "../utils";
import {MONTH_NAMES} from '../const.js';

export const createDayTemplate = () => {

  const date = `${startDate.getDate()} ${MONTH_NAMES[startDate.getMonth()]}`;

  return (
    `<li class="trip-days__item  day">
      <div class="day__info">
        <span class="day__counter">1</span>
        <time class="day__date" datetime="2019-03-18">${date}</time>
      </div>

      <ul class="trip-events__list">
      </ul>
    </li>`
  );
};
