
const AVATAR_IMG_KEY_NAME = 'avatar img';
const AVATAR_NAME_KEY_NAME = 'avatar name';

export const getAvatarImg = (): string => {
  const avatar = localStorage.getItem(AVATAR_IMG_KEY_NAME);
  return avatar ?? '';
};

export const saveAvatarImg = (avatarImg: string): void => {
  localStorage.setItem(AVATAR_IMG_KEY_NAME, avatarImg);
};

export const dropAvatarImg = (): void => {
  localStorage.removeItem(AVATAR_IMG_KEY_NAME);
};

export const getAvatarName = (): string => {
  const avatar = localStorage.getItem(AVATAR_NAME_KEY_NAME);
  return avatar ?? '';
};

export const saveAvatarName = (avatarName: string): void => {
  localStorage.setItem(AVATAR_NAME_KEY_NAME, avatarName);
};

export const dropAvatarName = (): void => {
  localStorage.removeItem(AVATAR_NAME_KEY_NAME);
};
