import { Comment } from '../components/types/types';
import { getRandomInteger, getRandomPositiveFloat } from '../utils/common';

const names = ['Wes Anderson', 'James Cameron', 'Willem Dafoe', 'Saoirse Ronan', 'Edward Norton', 'Martin Scorsese', 'James Cameron', 'Edward Norton'];

export const mockComments: Comment[] = new Array(getRandomInteger (1,7)).fill('').map((_, index) => (
  {
    id: index,
    user: {
      id: index + 10,
      name: names[getRandomInteger(1,8)],
    },
    rating: getRandomPositiveFloat(1, 10),
    comment: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director\'s funniest and most exquisitely designed movies in years.',
    date: new Date(getRandomInteger(2000, 2021)),
  }
));

