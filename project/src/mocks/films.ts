import { MovieInfo } from '../components/types/types';
import { getRandomInteger, getRandomPositiveFloat } from '../utils/common';

const FILM_COUNT = 8;

const colors = ['##FF66FF', '##00FFCC', '##3366FF', '##FFCC00', '#FF3366', '#FFFF66', '#CC0033', '#FF3300'];

const images = [
  'img/the-grand-budapest-hotel-poster.jpg',
  'img/bohemian-rhapsody.jpg',
  'img/johnny-english.jpg',
  'img/shutter-island.jpg',
  'img/pulp-fiction.jpg',
  'img/war-of-the-worlds.jpg',
  'img/snatch.jpg',
  'img/what-we-do-in-the-shadows.jpg',
];

const movieName = [
  'The Grand Budapest Hotel',
  'Bohemian Rhapsody',
  'Johnny English',
  'Shutter Island',
  'Pulp Fiction',
  'War of the worlds',
  'Snatch',
  'What we do in the shadows',
];

const movieGenres = ['Comedy', 'Western', 'Thriller', 'History', 'Comedy', 'Western', 'Thriller', 'History'];
const movieDirectors = ['Wes Anderson', 'James Cameron', 'Willem Dafoe', 'Saoirse Ronan', 'Edward Norton', 'Martin Scorsese', 'James Cameron', 'Edward Norton'];
const movieActors = ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan', 'Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'];

const Films: MovieInfo[] = new Array(FILM_COUNT).fill(' ').map((_,index) => (
  {
    id: index + 1,
    backgroundColor: colors[index],
    backgroundImg: images[index],
    poster: images[index],
    previewImg: images[index],
    title: movieName[index],
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideo: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    genre: movieGenres[index],
    year: getRandomInteger(1990, 2021),
    ratingAbsolute: getRandomPositiveFloat(2.2, 10),
    ratingCount: getRandomInteger(100, 1000),
    runTime: getRandomInteger(60, 300),
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege. Gustave prides himself on providing first-class service to the hotel\'s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave\'s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.',
    director: movieDirectors[index],
    actors: movieActors.slice(0, getRandomInteger(1,10)),
    isFavorite: !!getRandomInteger(0,1),
  }));

export {Films};
