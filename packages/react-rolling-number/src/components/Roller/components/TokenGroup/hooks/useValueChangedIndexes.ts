import { useMemo } from 'react';
import { usePrevious } from 'react-simplikit';

import { regex } from '@/utils/regex';

export const useValueChangedIndexes = (value: string) => {
  const prevValue = usePrevious(value);

  const parseValue = (v: string) => v.replaceAll(regex.commaOrDot, '');

  return useMemo(() => {
    const prevString = parseValue(prevValue);
    const currentString = parseValue(value);

    return Array.from(currentString)
      .map((c, i) => (prevString[i] !== c ? i : null))
      .filter((i) => i !== null);
  }, [prevValue, value]);
};
