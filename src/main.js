
import {createSiteMenuTemplate} from './components/menu';
import {createRouteInfoTemplate} from './components/menu-route-info';
import {createSiteFilterTemplate} from './components/filter';
import {createSiteSortingElement} from './components/sorting';
import {createAddFormElement} from './components/form-add';
import {createEditingFormElement} from './components/form-edit';
import {createTripCardsContainer} from './components/cards-container';
import {createTripCardItem} from './components/card';

const TRIP_EVENT_COUNT = 3;

const render = (container, template, position) => {
  return (container.insertAdjacentHTML(position, template));
};


const siteHeaderElement = document.querySelector(`.trip-main`);


const siteRouteElement = siteHeaderElement.querySelector(`.trip-info`);


render(siteRouteElement, createRouteInfoTemplate(), `afterbegin`);


const siteMenuElement = siteHeaderElement.querySelector(`.trip-controls`);


render(siteMenuElement, createSiteMenuTemplate(), `afterbegin`);
render(siteMenuElement, createSiteFilterTemplate(), `beforeend`);

const siteTripEventsElement = document.querySelector(`.trip-events`);


render(siteTripEventsElement, createSiteSortingElement(), `beforeend`);
render(siteTripEventsElement, createAddFormElement(), `beforeend`);

const siteAddFormElememnt = siteTripEventsElement.querySelector(`.event--edit`);

render(siteAddFormElememnt, createEditingFormElement(), `beforeend`);


render(siteTripEventsElement, createTripCardsContainer(), `beforeend`);

const siteTripEventList = siteTripEventsElement.querySelector(`.trip-events__list`);

new Array(TRIP_EVENT_COUNT).fill(``).forEach(() =>
  render(siteTripEventList, createTripCardItem(), `beforeend`)
);
