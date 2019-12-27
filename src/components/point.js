import {getRandomIntegerNumber} from "../utils";


// Контент
const createOffers = (offers) => {

  return offers
    .map((offer) => {
      return (
        `<span class="event__offer-title">${offer}</span>
          &plus;
          &euro;&nbsp;
          <span class="event__offer-price">${getRandomIntegerNumber(80)}</span><br>`
      );
    })
    .join(`\n`);
};


export const createPointTemplate = (point) => {

  const {basePrice, dateFrom, dateTo, offers, type} = point;
  // const date = `${dueDate.getDate()} ${MONTH_NAMES[dueDate.getMonth()]}`;
  // const time = formatTime(dueDate);
  const pointOffers = createOffers(Array.from(offers));

  return (
    `<li class="trip-events__item">
      <div class="event">
        <div class="event__type">
          <img class="event__type-icon" width="42" height="42" src="img/icons/taxi.png" alt="Event type icon">
        </div>
        <h3 class="event__title">${type}</h3>

        <div class="event__schedule">
          <p class="event__time">
            <time class="event__start-time" datetime="2019-03-18T10:30">${dateFrom}</time>
            &mdash;
            <time class="event__end-time" datetime="2019-03-18T11:00">${dateTo}</time>
          </p>
          <p class="event__duration">${basePrice}</p>
        </div>

        <p class="event__price">
          &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
        </p>

        <h4 class="visually-hidden">Offers:</h4>
        <ul class="event__selected-offers">
          <li class="event__offer">
            ${pointOffers}
           </li>
        </ul>

        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </div>
    </li>`
  );
};
