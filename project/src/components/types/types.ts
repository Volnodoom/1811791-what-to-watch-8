import { AppRoute } from '../const/const';

export type MovieInfo = {
  id: number,
  title: string,
  poster: string,
  previewImg: string,
  backgroundImg: string,
  colorOfBackground: string,
  srcVideo: string,
  scrPreviewVideo: string,
  description: string,
  ratingAbsolute: number,
  ratingCount: number,
  director: string,
  actors: string[],
  runTime: number,
  genre: string,
  year: number,
  isFavorite: boolean,
};

export type RawFilm = {
  name: string,
  ['poster_image']: string,
  ['preview_image']: string,
  ['background_image']: string,
  ['background_color']: string,
  description: string,
  rating: number,
  ['scores_count']: number,
  director: string,
  ['run_time']: number,
  genre: string,
  release: number,
  id: number,
  ['is_favorite']: boolean,
  ['preview_video_link']: string,
  ['video_link']: string,
  starring: string[],
  released: number,
};

export type RawUserInfo = {
  id: number,
  email: string,
  name: string,
  ['avatar_url']: string,
  token: string,
}

export type IdParam = {id: string};

export type Comment = {
  id: number,
  user: {
    id: number,
    name: string,
  },
  rating: number | string,
  comment: string,
  date: string,
}

export type CommentToServer = {
  rating: string | number,
  comment: string,
};

export type AuthData = {
  login: string,
  password: string,
};

export type PostMyListData = {
  id: number | string,
  actionToFilm: number,
};

type KeysOfAppRoute = keyof typeof AppRoute;
export type ValuesOfAppRoute = typeof AppRoute[KeysOfAppRoute]

