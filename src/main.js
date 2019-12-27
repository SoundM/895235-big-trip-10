import {createInfoTemplate} from './components/info.js';
import {createSiteMenuTemplate} from './components/site-menu.js';
import {createSortingTemplate} from './components/sorting';
import {createFilterTemplate} from './components/filter.js';
import {createListEventsTemplate} from './components/list-event.js';
import {createPointTemplate} from './components/point.js';
import {createEventEditTemplate} from './components/event-edit.js';
import {createDayTemplate} from './components/day';
import {generatePoints} from './mock/point';
import {generateDays} from './mock/day';
import {DAYS_COUNT, POINT_COUNT} from './const';

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const headerElement = document.querySelector(`.page-header`);
const infoElement = headerElement.querySelector(`.trip-main__trip-info`);
const menuElement = headerElement.querySelector(`.trip-main__trip-controls h2`);
const filterElement = headerElement.querySelector(`.trip-main__trip-controls`);

render(infoElement, createInfoTemplate(), `afterBegin`);
render(menuElement, createSiteMenuTemplate(), `afterEnd`);
render(filterElement, createFilterTemplate(), `beforeEnd`);


const eventsElement = document.querySelector(`.trip-events`);

render(eventsElement, createSortingTemplate(), `beforeEnd`);
render(eventsElement, createEventEditTemplate(), `beforeEnd`);
render(eventsElement, createListEventsTemplate(), `beforeEnd`);

const contentsDaysElement = eventsElement.querySelector(`.trip-days`);
const days = generateDays(DAYS_COUNT);
days.slice(0, DAYS_COUNT).forEach((day) => render(contentsDaysElement, createDayTemplate(day), `afterBegin`));
// new Array(TASK_COUNT)
//   .fill(createDayTemplate())
//   .forEach((element) => render(contentsDaysElement, element, `afterBegin`)
//   );

const pointsElement = document.querySelector(`.trip-events__list`);
const points = generatePoints(POINT_COUNT);
points.slice(0, POINT_COUNT).forEach((point) => render(pointsElement, createPointTemplate(point), `beforeEnd`));


