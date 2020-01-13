const createMenuMarkup = (menuItem, isActive) => {
  return (
    `<a class="trip-tabs__btn  trip-tabs__btn--${isActive ? `` : `active`}" href="#">
      ${menuItem}
    </a>`
  );
};

export const createSiteMenuTemplate = (menuItems) => {
  const menuMarkup = menuItems.map((element, i) => createMenuMarkup(element, i)).join(`\n`);
  return (
    `<nav class="trip-controls__trip-tabs  trip-tabs">
      ${menuMarkup}
    </nav>`
  );
};
