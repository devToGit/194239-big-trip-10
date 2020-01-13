const Cities = [
  `Praga`,
  `Berlin`,
  `Amsterdam`,
  `London`
];

const Offers = [
  {
    type: `Add`,
    title: `luggage`,
    price: 30
  },
  {
    type: `Switch to`,
    title: `comfort class`,
    price: 100
  },
  {
    type: `Add`,
    title: `meal`,
    price: 15
  },
  {
    type: `Choose`,
    title: `seats`,
    price: 5
  },
  {
    type: `Travel by`,
    title: `train`,
    price: 40
  },
];

const Events = [
  `bus`,
  `check-in`,
  `drive`,
  `flight`,
  `restaurant`,
  `ship`,
  `sightseeing`,
  `taxi`,
  `train`,
  `transport`
];

const Description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`;


const getRandomIntegerNumber = (min, max) => {
  return min + Math.floor(max * Math.random());
};


const getRandomArrayItem = (array) => {
  const randomIndex = getRandomIntegerNumber(0, array.length);
  return array[randomIndex];
};

const generateTypeOfPoint = (events) => {
  const typesOfPoint = events.map((it) => {
    return {
      name: it,
      icon: `"img/icons/${it}.png"`
    };
  });
  return getRandomArrayItem(typesOfPoint);
};

const generateDescription = (prgph) => {
  const descriptionItems = prgph.split(`. `);
  return descriptionItems.filter(() => Math.random() > 0.5).slice(0, 3);
};

const generateOffers = (options) => {
  return options.filter(() => Math.random() > 0.5).slice(0, 2);
};

const generatePics = () => {
  return new Array(5).fill(`http://picsum.photos/300/150?r=${Math.floor(Math.random() * 10)}`);
};

const generateRandomDate = () => {
  const firstDate0fRange = new Date(`2019, 12, 1`);
  const secondDateOfRange = new Date(`2019, 12, 4`);
  let randomDates = [firstDate0fRange, secondDateOfRange].map(() => new Date(firstDate0fRange.getTime() + Math.random() * (secondDateOfRange.getTime() - firstDate0fRange.getTime()))).sort((a, b) => a - b);
  return randomDates;
};


const generatePointOfRoute = () => {
  let startTime;
  let endTime;
  [startTime, endTime] = generateRandomDate();
  const period = Math.abs(Date.parse(startTime) - Date.parse(endTime));
  return {
    typeOfEvent: generateTypeOfPoint(Events),
    cityOfEvent: getRandomArrayItem(Cities),
    destination: `unknown place`,
    description: new Set(generateDescription(Description)),
    offers: generateOffers(Offers),
    images: generatePics(),
    startTime,
    endTime,
    period,
    price: getRandomIntegerNumber(100, 400)
  };
};


const generatePointsOfRoute = (count) => {
  return new Array(count)
    .fill(``)
    .map(generatePointOfRoute);
};

export {generatePointOfRoute, generatePointsOfRoute};

