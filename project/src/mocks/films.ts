import { MovieInfo } from '../components/types/types';
import { getRandomInteger, getRandomPositiveFloat } from '../utils/common';

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

const PreviewVideoF = [
  'https://video.internetvideoarchive.net/video.mp4?cmd=6&fmt=4&customerid=654126&publishedid=591865&e=2208902400&videokbrate=1500&h=4527e4cff2f0c499851edbd084e83cad',
  'https://video.internetvideoarchive.net/video.mp4?cmd=6&fmt=4&customerid=654126&publishedid=845741&e=2208902400&videokbrate=1500&h=f0bcc08edf5ef9731cb3d653afee1299',
  'https://video.internetvideoarchive.net/video.mp4?cmd=6&fmt=4&customerid=654126&publishedid=442122&e=2208902400&videokbrate=1500&h=4b0af7931a9e4e520b6b7e5813e7faff',
  'https://video.internetvideoarchive.net/video.mp4?cmd=6&fmt=4&customerid=654126&publishedid=111975&e=2208902400&videokbrate=1500&h=909c72a98f14424307c52390b80eb90b',
  'https://video.internetvideoarchive.net/video.mp4?cmd=6&fmt=4&customerid=654126&publishedid=331845&e=2208902400&videokbrate=1500&h=7193c0c1623451925151f5ee6178b715',
  'https://video.internetvideoarchive.net/video.mp4?cmd=6&fmt=4&customerid=654126&publishedid=442122&e=2208902400&videokbrate=1500&h=4b0af7931a9e4e520b6b7e5813e7faff',
  'https://video.internetvideoarchive.net/video.mp4?cmd=6&fmt=4&customerid=654126&publishedid=591865&e=2208902400&videokbrate=1500&h=4527e4cff2f0c499851edbd084e83cad',
  'https://video.internetvideoarchive.net/video.mp4?cmd=6&fmt=4&customerid=654126&publishedid=442122&e=2208902400&videokbrate=1500&h=4b0af7931a9e4e520b6b7e5813e7faff',
];

export const Films: MovieInfo[] = new Array(8).fill(' ').map((_,index) => (
  {
    id: index + 1,
    backgroundColor: colors[index],
    backgroundImg: images[index],
    poster: images[index],
    previewImg: images[index],
    title: movieName[index],
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideo: PreviewVideoF[index],
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

