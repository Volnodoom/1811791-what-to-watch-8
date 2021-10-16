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

export const appRoute = {
  Main: '/',
  SignIn: '/login',
  MyList: '/mylist',
  MovieCard : '/films/:id',
  AddReview: '/films/:id/review',
  Player : '/player/:id',
} as const;

export const AuthorizationStatus = {
  Auth: 'AUTH',
  NoAuth: 'NO_AUTH',
  Unknown: 'UNKNOWN',
} as const;
