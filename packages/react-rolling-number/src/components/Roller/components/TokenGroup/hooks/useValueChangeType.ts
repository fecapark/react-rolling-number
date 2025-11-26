import { usePrevious } from 'react-simplikit';

import { regex } from '@/utils/regex';

export const useValueChangeType = (value: string) => {
  const previousValue = usePrevious(value);

  const previousLength = previousValue.replaceAll(regex.commaOrDot, '').length;
  const currentLength = value.replaceAll(regex.commaOrDot, '').length;

  if (previousLength > currentLength) {
    return 'decreased';
  }
  if (previousLength < currentLength) {
    return 'increased';
  }
  return 'not-changed';
};
