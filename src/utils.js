const castTimeFormat = (value) => {
  return value < 10 ? `0${value}` : String(value);
};

const formatTime = (date) => {
  const hours = castTimeFormat(date.getHours() % 12);
  const minutes = castTimeFormat(date.getMinutes());
  return `${hours}:${minutes}`;
};

const durFormat = (period) => {
  const peroidTime = new Date(period).toISOString();
  const durationDD = +peroidTime.slice(8, 10);
  const durationHH = +peroidTime.slice(11, 13);
  const durationMM = +peroidTime.slice(14, 16);
  let duration;
  if (durationDD > 1) {
    duration = durationDD - 1 + `D ` + durationHH + `H ` + durationMM + `M`;
  } else if (durationHH > 1) {
    duration = durationHH + `H ` + durationMM + `M`;
  } else if (durationMM > 1) {
    duration = durationMM + `M`;
  }
  return duration;
};

export const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`
};

export const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

export const renderN = (container, element, place) => {
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(element);
      break;
    case RenderPosition.BEFOREEND:
      container.append(element);
      break;
  }
};

export {castTimeFormat, formatTime, durFormat};
