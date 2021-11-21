import { LineOfUpdate } from '../components/const/const';
import { FilmsData } from '../components/types/state';
import { MovieInfo } from '../components/types/types';

const MINUTES = 60;
const SEC_IN_MINUTE = 60;
const SEC_IN_HOUR = 3600;
const TEN = 10;

export const getRandomInteger = (a = 0, b = 1): number => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const getRandomPositiveFloat = function(valueA: number, valueB: number, digits = 1): string {
  const lower = Math.min (Math.abs(valueA), Math.abs(valueB));
  const upper = Math.max (Math.abs(valueA), Math.abs(valueB));
  const result = Math.random () * (upper - lower) + lower;
  return result.toFixed (digits);
};

export const getTime = (runTime: number): string  => {
  const hours = Math.trunc(runTime/MINUTES);
  let duration = '';
  const timeConditions = [
    runTime < MINUTES,
    runTime === MINUTES,
    runTime > MINUTES,
  ];

  switch (true) {
    case timeConditions[0]:
      duration = `${runTime}m`;
      break;
    case timeConditions[1]:
      duration = '1h';
      break;
    case timeConditions[2]:
      duration = `${hours}h ${runTime-hours*MINUTES}m`;
      break;
  }
  return duration;
};

export const getTimeForPlayer = (total: number, current: number): string => {
  const hours = (time: number) => Math.floor(time/SEC_IN_HOUR);
  const secondsAfterHours = (amount: number) => Math.floor(amount % SEC_IN_HOUR);
  const minutes = (time: number) => Math.floor(time/SEC_IN_MINUTE);
  const secondsAfterMinutes = (amount: number) => Math.floor(amount % SEC_IN_MINUTE);

  const timeConditions = [
    total < SEC_IN_HOUR,
    total >= SEC_IN_HOUR,
  ];

  const leftTime = total - current;
  let duration = '';

  const properFormat = (value: number): string => value >= TEN ? `${value}` : `0${value}`;

  switch (true) {
    case timeConditions[0]:
      duration = `-${properFormat(minutes(leftTime))}:${properFormat(secondsAfterMinutes(leftTime))}`;
      break;
    case timeConditions[1]:
      duration = `-${properFormat(hours(leftTime))}:${properFormat(minutes(secondsAfterHours(leftTime)))}:${properFormat(secondsAfterMinutes(leftTime))}`;
      break;
  }
  return duration;
};

export const getProgress = (total: number, current: number): number => (current/total)*100;

export const updateArrowData = (stateData: FilmsData, actionData: {id: number, updatedFilm: MovieInfo}, lineOfUpdate: LineOfUpdate): void => {
  const {id, updatedFilm} = actionData;


  if (lineOfUpdate === LineOfUpdate.Films) {

    let films = stateData.films;
    const index: number = films.findIndex((film) => film.id === id);
    if (index === -1) {
      throw new Error('Can\'t update unexisting film');
    }

    films = [
      ...films.slice(0, index),
      updatedFilm,
      ...films.slice(index + 1),
    ];

  } else if (lineOfUpdate === LineOfUpdate.MyFavorite) {

    let myFavorite = stateData.myFavoriteMovies;
    const index: number = myFavorite.findIndex((film) => film.id === id);

    if (index === -1) {
      if (myFavorite.length === 0) {
        myFavorite = [updatedFilm];
      } else {
        myFavorite = [
          ...myFavorite,
          updatedFilm,
        ];
      }
    }

    myFavorite = [
      ...myFavorite.slice(0, index),
      updatedFilm,
      ...myFavorite.slice(index + 1),
    ];
  }
};
