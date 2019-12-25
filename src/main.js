import {createInfoTemplate} from './components/info.js';
import {createSiteMenuTemplate} from './components/site-menu.js';
import {createSortingTemplate} from './components/sorting';
import {createFilterTemplate} from './components/filter.js';
import {createListEventsTemplate} from './components/list-event.js';
import {createItemEventTemplate} from './components/item-event.js';
import {createEventEditTemplate} from './components/event-edit.js';

const TASK_COUNT = 3;

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

new Array(TASK_COUNT)
  .fill(createItemEventTemplate())
  .forEach((element) => render(contentsDaysElement, element, `beforeEnd`)
  );
