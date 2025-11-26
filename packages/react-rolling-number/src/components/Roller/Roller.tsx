import { useState } from 'react';

import type { RollerProps, TokenRectSizeType } from '@/components/Roller/type';

import { RollerContainer } from '@/components/Roller/components/RollerContainer';
import { RollerGradient } from '@/components/Roller/components/RollerGradient';
import { TokenGroup } from '@/components/Roller/components/TokenGroup';
import { RollerOptionContext, TokenRectSizeContext } from '@/components/Roller/context';
import { useFormattedValue } from '@/components/Roller/hooks/useFormattedValue';
import { easing } from '@/utils/motion';

export const Roller = ({
  value,
  prefix,
  suffix,
  commaize = true,
  showPlusSign = false,
  align = 'center',
  animation: {
    rollWay = 'down',
    animateDiff = false,
    rollDuration = 0.6,
    shiftDuration = 0.45,
    stagger = false,
    ease = easing.expoOut,
  } = {},
}: RollerProps) => {
  const formattedValue = useFormattedValue(value, { commaize });
  const [tokenRectSize, setTokenRectSize] = useState<null | TokenRectSizeType>(null);

  return (
    <RollerOptionContext.Provider
      value={{
        align,
        prefix,
        suffix,
        showPlusSign,
        animation: {
          rollWay,
          animateDiff,
          rollDuration,
          shiftDuration,
          stagger,
          ease,
        },
      }}
    >
      <TokenRectSizeContext.Provider
        value={{
          tokenRectSize,
          setTokenRectSize,
        }}
      >
        <RollerContainer value={formattedValue}>
          <RollerGradient>
            <TokenGroup value={formattedValue} />
          </RollerGradient>
        </RollerContainer>
      </TokenRectSizeContext.Provider>
    </RollerOptionContext.Provider>
  );
};
