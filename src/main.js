import MenuComponent from './components/menu';
import RouteInfoComponent from './components/menu-route-info';
import FilterComponent from './components/filter';
import SiteSortingComponent from './components/sorting';
import FormAddComponent from './components/form-add';
import EditingFormComponent from './components/form-edit';
import CardsContainerComponent from './components/cards-container';
import Card from './components/card';
import {filterNames} from './mock/filter';
import {menuList} from './mock/menu';
import {generatePointsOfRoute} from './mock/point';
import {renderN, RenderPosition} from './utils.js';


const TRIP_EVENT_COUNT = 3;


const siteHeaderElement = document.querySelector(`.trip-main`);


const siteRouteElement = siteHeaderElement.querySelector(`.trip-info`);

const routeInfoComponent = new RouteInfoComponent();
renderN(siteRouteElement, routeInfoComponent.getElement(), RenderPosition.AFTERBEGIN);


const siteMenuElement = siteHeaderElement.querySelector(`.trip-controls`);


renderN(siteMenuElement, new MenuComponent(menuList).getElement(), RenderPosition.AFTERBEGIN);


renderN(siteMenuElement, new FilterComponent(filterNames).getElement(), RenderPosition.BEFOREEND);

const siteTripEventsElement = document.querySelector(`.trip-events`);

const sortingComponent = new SiteSortingComponent();
renderN(siteTripEventsElement, sortingComponent.getElement(), RenderPosition.BEFOREEND);

// const cardAddComponent = new FormAddComponent();
// renderN(siteTripEventsElement, cardAddComponent.getElement(), RenderPosition.BEFOREEND);


const points = generatePointsOfRoute(TRIP_EVENT_COUNT);

// const siteAddFormElememnt = siteTripEventsElement.querySelector(`.event--edit`);


const renderPoint = (currentPoint) => {
  const pointComponent = new Card(currentPoint);
  const pointEditComponent = new EditingFormComponent(currentPoint);

  const editButton = pointComponent.getElement().querySelector(`.event__rollup-btn`);
  editButton.addEventListener(`click`, () => {
    siteTripEventList.replaceChild(pointEditComponent.getElement(), pointComponent.getElement());
  });

  const editForm = pointEditComponent.getElement().querySelector(`form`);
  editForm.addEventListener(`submit`, () => {
    siteTripEventList.replaceChild(pointComponent.getElement(), pointEditComponent.getElement());
  });

  renderN(siteTripEventList, pointComponent.getElement(), RenderPosition.BEFOREEND);

};

const cardsContainerComponent = new CardsContainerComponent();
renderN(siteTripEventsElement, cardsContainerComponent.getElement(), RenderPosition.BEFOREEND);


const siteTripEventList = siteTripEventsElement.querySelector(`.trip-events__list`);

points.forEach((point) => renderPoint(point));

