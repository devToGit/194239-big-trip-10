import {createSiteMenuTemplate} from './components/menu';
import {createRouteInfoTemplate} from './components/menu-route-info';
import {createSiteFilterTemplate} from './components/filter';
import {createSiteSortingElement} from './components/sorting';
import {createAddFormElement} from './components/form-add';
import {createEditingFormElement} from './components/form-edit';
import {createTripCardsContainer} from './components/cards-container';
import {createTripCardItem} from './components/card';
import {filterNames} from './mock/filter';
import {menuList} from './mock/menu';
import {generatePointsOfRoute} from './mock/point';

const TRIP_EVENT_COUNT = 3;

const render = (container, template, position) => {
  return (container.insertAdjacentHTML(position, template));
};


const siteHeaderElement = document.querySelector(`.trip-main`);


const siteRouteElement = siteHeaderElement.querySelector(`.trip-info`);


render(siteRouteElement, createRouteInfoTemplate(), `afterbegin`);


const siteMenuElement = siteHeaderElement.querySelector(`.trip-controls`);

const menus = menuList;
render(siteMenuElement, createSiteMenuTemplate(menus), `afterbegin`);
const filters = filterNames;
render(siteMenuElement, createSiteFilterTemplate(filters), `beforeend`);

const siteTripEventsElement = document.querySelector(`.trip-events`);


render(siteTripEventsElement, createSiteSortingElement(), `beforeend`);
render(siteTripEventsElement, createAddFormElement(), `beforeend`);


render(siteTripEventsElement, createTripCardsContainer(), `beforeend`);

const siteTripEventList = siteTripEventsElement.querySelector(`.trip-events__list`);
const points = generatePointsOfRoute(TRIP_EVENT_COUNT);
console.info(points);
const siteAddFormElememnt = siteTripEventsElement.querySelector(`.event--edit`);
render(siteAddFormElememnt, createEditingFormElement(points[0]), `beforeend`);
points.forEach((point) => render(siteTripEventList, createTripCardItem(point), `beforeend`));

