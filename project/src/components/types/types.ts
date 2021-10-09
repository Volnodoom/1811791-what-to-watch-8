export type MovieInfo = {
  backgroundImg: string,
  backgroundImgAlt: string,
  poster: string,
  altPoster: string,
  title: string,
  genre: string,
  urlMovie: string,
  year: number,
  ratingAbsolute: number | string,
  ratingRelative: string,
  ratingCount: number,
  description: string,
  director: string,
  actors: string,
  privateInfoWeb: {
    isInMyList: boolean,
    hasAddReview: boolean,
    isLogged: boolean,
  }
};

export type LogoProps = {
  Main: string,
  SignIn: string,
};

