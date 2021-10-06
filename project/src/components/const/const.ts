export const Poster = {
  BigWidth: 218,
  BigHeight: 327,
  SmallWidth: 280,
  SmallHeight: 175,
} as const;

export const AvatarAdjustment = {
  Img: 'img/avatar.jpg',
  AltImg: 'User avatar',
  Width: 63,
  Height: 63,
  UrlSingIn: 'sign-in.html',
  UrlSingOut: 'sign-in.html',
} as const;

export const LOGO_URL = 'sign-in.html';

export const KindOfMovieCardButtons = {
  Play: {
    'ClassName': 'btn btn--play film-card__button',
    'ViewBox': '0 0 19 19',
    'Use': '#play-s',
    'Snap': 'Play',
    'Width': 19,
    'Height': 19,
  },
  AddToMyList: {
    'ClassName': 'btn btn--list film-card__button',
    'ViewBox': '0 0 19 20',
    'Use': '#add',
    'Snap': 'My list',
    'Width': 19,
    'Height': 20,
  },
  InMyList: {
    'ClassName': 'btn btn--play film-card__button',
    'ViewBox': '0 0 18 14',
    'Use': '#in-list',
    'Snap': 'My list',
    'Width': 18,
    'Height': 14,
  },
} as const;

export const KindOfButton = {
  Play: 'Play',
  AddToMyList: 'AddToMyList',
  InMyList: 'InMyList',
}as const;

export const genreFilterFrames = [
  {
    filterGenre: 'All filterGenres',
    filterUrl: 'null',
    isGenreActive: true,

  },
  {
    filterGenre: 'Comedies',
    filterUrl: 'null',
    isGenreActive: false,
  },
  {
    filterGenre: 'Crime',
    filterUrl: 'null',
    isGenreActive: false,
  },
  {
    filterGenre: 'Documentary',
    filterUrl: 'null',
    isGenreActive: false,
  },
  {
    filterGenre: 'Dramas',
    filterUrl: 'null',
    isGenreActive: false,
  },
  {
    filterGenre: 'Horror',
    filterUrl: 'null',
    isGenreActive: false,
  },
  {
    filterGenre: 'Kids & Family',
    filterUrl: 'null',
    isGenreActive: false,
  },
  {
    filterGenre: 'Romance',
    filterUrl: 'null',
    isGenreActive: false,
  },
  {
    filterGenre: 'Sci-Fi',
    filterUrl: 'null',
    isGenreActive: false,
  },
  {
    filterGenre: 'Thrillers',
    filterUrl: 'null',
    isGenreActive: false,
  },
];

export const WTWHiddenLine = {
  MainPage: {
    wtwHidden: true,
  },
} as const;


