import { sum } from 'es-toolkit';
import { useMemo } from 'react';

import { useTokenRectSizeContext } from '@/components/Roller/context';
import { isSignToken, isSpecialToken } from '@/utils/string';

export const useRollerTargetWidth = (value: string) => {
  const { tokenRectSize } = useTokenRectSizeContext();

  return useMemo(() => {
    if (!tokenRectSize) {
      return undefined;
    }

    const tokenWidth = Math.ceil(tokenRectSize.number.width);
    const specialTokenWidth = Math.ceil(tokenRectSize.special.width);
    const signTokenWidth = Math.ceil(tokenRectSize.sign.width);

    const getWidth = (t: string) => {
      if (isSpecialToken(t)) {
        return specialTokenWidth;
      }
      if (isSignToken(t)) {
        return signTokenWidth;
      }
      return tokenWidth;
    };

    return sum(Array.from(value).map(getWidth));
  }, [tokenRectSize, value]);
};
