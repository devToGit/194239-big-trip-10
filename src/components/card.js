import {formatTime} from '../utils.js';
import {durFormat} from '../utils.js';

const createOffersMarkup = (offer) => {
  const {type, title, price} = offer;
  return (
    `<li class="event__offer">
      <span class="event__offer-title">${type}&nbsp${title}</span>
        +
        €&nbsp;
      <span class="event__offer-price">${price}</span>
    </li>`
  );
};

export const createTripCardItem = (points) => {
  const {typeOfEvent, destination, offers, startTime, endTime, period, price} = points;
  const event = typeOfEvent.name;
  const offersItem = offers.map((el) => createOffersMarkup(el));
  const icon = typeOfEvent.icon;
  const startTimeOfPoint = formatTime(startTime);
  const endTimeOfPoint = formatTime(endTime);
  const peroidTime = durFormat(period);
  const eventPlchdr = [
    `check-in`,
    `restaurant`,
    `sightseeing`,
  ];
  const placeholder = eventPlchdr.includes(event) ? ` in ` : ` to `;
  /* const durationHH = formatTime(period);
  console.log(peroidTime);
  const durationDD = parseN(peroidTime.slice(8, 10));
  console.log(durationDD);
  console.log(typeof (durationDD));
  const durationHH = peroidTime.slice(11, 13);
  console.log(durationHH);
  const durationMM = peroidTime.slice(14, 16);
  console.log(durationMM);
*/
  return (
    `<li class="trip-events__item">
      <div class="event">
        <div class="event__type">
          <img class="event__type-icon" width="42" height="42" src=${icon} alt="Event type icon">
        </div>
        <h3 class="event__title">${event}${placeholder}${destination}</h3>

        <div class="event__schedule">
          <p class="event__time">
            <time class="event__start-time" datetime=${startTime}>${startTimeOfPoint}</time>
            —
            <time class="event__end-time" datetime="${endTime}">${endTimeOfPoint}</time>
          </p>
          <p class="event__duration">${peroidTime}</p>
        </div>

        <p class="event__price">
          €&nbsp;<span class="event__price-value">${price}</span>
        </p>

        <h4 class="visually-hidden">Offers:</h4>
        <ul class="event__selected-offers">
          ${offersItem}
        </ul>

        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </div>
    </li>`
  );
};


