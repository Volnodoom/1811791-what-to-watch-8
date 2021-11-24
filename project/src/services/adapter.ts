import { UserData } from '../components/types/state';
import { MovieInfo, RawFilm, RawUserInfo } from '../components/types/types';

export const adaptMovieToClient = (film: RawFilm): MovieInfo => ({
  id: film['id'],
  title: film['name'],
  poster: film['poster_image'],
  previewImg: film['preview_image'],
  backgroundImg: film['background_image'],
  backgroundColor: film['background_color'],
  srcVideo: film['video_link'],
  scrPreviewVideo: film['preview_video_link'],
  description: film['description'],
  ratingAbsolute: film['rating'],
  ratingCount: film['scores_count'],
  director: film['director'],
  actors: film['starring'],
  runTime: film['run_time'],
  genre: film['genre'],
  year: film['released'],
  isFavorite: film['is_favorite'],
});

export const adaptUserInfoToClient = (user: RawUserInfo): UserData => ({
  userName: user.name,
  userAvatar: user['avatar_url'],
});
