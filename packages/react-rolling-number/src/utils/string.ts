import { regex } from '@/utils/regex';

export const isSpecialToken = (token: string) => {
  if (token.length !== 1) {
    return false;
  }
  return regex.commaOrDot.test(token);
};

export const isSignToken = (token: string) => {
  if (token.length !== 1) {
    return false;
  }
  return regex.plusOrMinus.test(token);
};
