export const Poster = {
  Class: {
    Main: 'film-card__poster',
    MovieCard: 'film-card__poster film-card__poster--big',
    AddReview: 'film-card__poster film-card__poster--small',
  },
  BigWidth: 218,
  BigHeight: 327,
  SmallWidth: 280,
  SmallHeight: 175,
} as const;

export const LogoUrl = {
  Main: 'main.html',
  SignIn: 'sign-in.html',
};

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

export const AddReviewRatingStars = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
];
