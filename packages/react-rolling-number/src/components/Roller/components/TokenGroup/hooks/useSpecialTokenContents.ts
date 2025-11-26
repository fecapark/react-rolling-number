import { useMemo } from 'react';

import { useValueChangeType } from '@/components/Roller/components/TokenGroup/hooks/useValueChangeType';
import { useTokenRectSizeContext } from '@/components/Roller/context';
import { regex } from '@/utils/regex';
import { isSpecialToken } from '@/utils/string';

export const useSpecialTokenContents = (value: string) => {
  const noSignValue = value.replaceAll(regex.plusOrMinus, '');

  const { tokenRectSize } = useTokenRectSizeContext();
  const valueChangeType = useValueChangeType(noSignValue);

  const tokens = useMemo(() => Array.from(noSignValue), [noSignValue]);

  return useMemo(() => {
    if (!tokenRectSize) {
      return [];
    }

    let specialCount = 0;
    return tokens
      .map((token, i) => {
        if (isSpecialToken(token)) {
          const left =
            (i - specialCount) * tokenRectSize.number.width +
            specialCount * tokenRectSize.special.width +
            tokenRectSize.sign.width;
          return {
            left,
            token,
            index: specialCount++,
            triggerAnimate: valueChangeType !== 'not-changed',
          };
        }
        return null;
      })
      .filter((t) => t !== null);
  }, [tokens, tokenRectSize, valueChangeType]);
};
