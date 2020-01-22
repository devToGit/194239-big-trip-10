import {createElement} from '..//utils.js';

const createMenuMarkup = (menuItem, isActive) => {
  return (
    `<a class="trip-tabs__btn  trip-tabs__btn--${isActive ? `` : `active`}" href="#">
      ${menuItem}
    </a>`
  );
};

const createSiteMenuTemplate = (menuItems) => {
  const menuMarkup = menuItems.map((element, i) => createMenuMarkup(element, i)).join(`\n`);
  return (
    `<nav class="trip-controls__trip-tabs  trip-tabs">
      ${menuMarkup}
    </nav>`
  );
};

export default class Menu {
  constructor(menuItems) {
    this._menuItems = menuItems;
    this._element = null;
  }

  getTemplate() {
    return createSiteMenuTemplate(this._menuItems);
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
