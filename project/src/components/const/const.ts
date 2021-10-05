export const Poster = {
  BigWidth: 218,
  BigHeight: 327,
  SmallWidth: 280,
  SmallHeight: 175,
};

export type MovieProps = {
  poster: string,
  altPoster: string,
  title: string,
  genre: string,
  year: number,
  urlMovie: string,
  privateInfoWeb: {
    isInMyList: boolean,
    hasAddReview: boolean,
    isGenreActive: boolean,
  }
};


