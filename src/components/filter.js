
import {createElement} from '..//utils.js';

const createFilterMarkup = (filter, isChecked) => {
  return (
    `<div class="trip-filters__filter">
      <input id="filter-${filter}"
        class="trip-filters__filter-input
        visually-hidden" type="radio"
        name="trip-filter"
        value="${filter}"
        ${isChecked ? `` : `checked`}
        />
        <label class="trip-filters__filter-label"
          for="filter-${filter}">${filter}
        </label>
    </div>`
  );
};


const createSiteFilterTemplate = (filters) => {
  const filtersMarkup = filters.map((element, i) => createFilterMarkup(element, i)).join(`\n`);
  return (
    `<form class="trip-filters" action="#" method="get">
      ${filtersMarkup}
      <button class="visually-hidden" type="submit">Accept filter</button>
    </form>`
  );
};

export default class Filter {
  constructor(filters) {
    this._filters = filters;
    this._element = null;
  }

  getTemplate() {
    return createSiteFilterTemplate(this._filters);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
