import { ALL_GENRES } from '../components/const/const';
import { MovieInfo } from '../components/types/types';

const MINUTES = 60;

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
