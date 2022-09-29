/* eslint-disable import/prefer-default-export */
export const random = (): string => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 1:
      return 'hello one';
    case 2:
      return 'hello two';
    default:
      // 0 case
      return 'hello zero';
  }
};
