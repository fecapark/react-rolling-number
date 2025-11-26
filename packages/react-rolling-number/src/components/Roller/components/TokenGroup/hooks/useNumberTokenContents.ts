import { useMemo } from 'react';

import { useValueChangedIndexes } from '@/components/Roller/components/TokenGroup/hooks/useValueChangedIndexes';
import { useTokenRectSizeContext } from '@/components/Roller/context';
import { regex } from '@/utils/regex';
import { isSpecialToken } from '@/utils/string';

export const useNumberTokenContents = (value: string) => {
  const noSignValue = value.replaceAll(regex.plusOrMinus, '');

  const { tokenRectSize } = useTokenRectSizeContext();
  const valueChangedIndexes = useValueChangedIndexes(noSignValue);

  const tokens = useMemo(() => Array.from(noSignValue), [noSignValue]);
  const isTokenSetted = !!tokenRectSize;

  return useMemo(() => {
    let numberCount = 0;
    return tokens.map((token) => {
      if (isSpecialToken(token)) {
        return {
          type: 'special',
          token,
        } as const;
      }
      return {
        type: 'number',
        changed: !isTokenSetted ? true : valueChangedIndexes.includes(numberCount),
        index: numberCount++,
        token,
      } as const;
    });
  }, [tokens, valueChangedIndexes, isTokenSetted]);
};
