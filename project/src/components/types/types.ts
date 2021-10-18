export type MovieInfo = {
  id: number,
  backgroundImg: string,
  backgroundColor: string,
  poster: string,
  previewImg: string,
  title: string,
  videoLink: string,
  previewVideo: string,
  genre: string,
  year: number,
  ratingAbsolute: number | string,
  ratingCount: number,
  runTime: number,
  description: string,
  director: string,
  actors: string[],
  isFavorite: boolean,
};

export type IdParam = {id: string};

export type Comment = {
  id: number,
  user: {
    id: number,
    name: string,
  },
  rating: number | string,
  comment: string,
  date: Date,
}

export type CommentToServer = {
  rating: number,
  comment: string,
};
