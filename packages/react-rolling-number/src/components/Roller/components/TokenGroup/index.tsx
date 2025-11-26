import { AnimatePresence } from 'motion/react';

import { NumberTokenColumn } from '@/components/Roller/components/NumberTokenColumn';
import { SignTokenColumn } from '@/components/Roller/components/SignTokenColumn';
import { SpecialToken } from '@/components/Roller/components/SpecialToken';
import { SpecialTokenColumn } from '@/components/Roller/components/SpecialTokenColumn';
import { useNumberTokenContents } from '@/components/Roller/components/TokenGroup/hooks/useNumberTokenContents';
import { useSpecialTokenContents } from '@/components/Roller/components/TokenGroup/hooks/useSpecialTokenContents';
import { useTokenResizeObserver } from '@/components/Roller/components/TokenGroup/hooks/useTokenResizeObserver';
import { tokenGroup } from '@/components/Roller/components/TokenGroup/index.css';
import { useRollerOptionContext } from '@/components/Roller/context';

interface Props {
  value: string;
}

export const TokenGroup = ({ value }: Props) => {
  const { animation, showPlusSign } = useRollerOptionContext();

  const sign = !showPlusSign && value.startsWith('+') ? null : value[0];
  const numberTokenContents = useNumberTokenContents(value);
  const specialTokenContents = useSpecialTokenContents(value);

  const ref = useTokenResizeObserver<HTMLDivElement>();

  return (
    <div className={tokenGroup[animation.rollWay]} ref={ref}>
      {sign && <SignTokenColumn sign={sign} />}

      {numberTokenContents.map((token, i) => {
        if (token.type === 'special') {
          return (
            <div key={`${i}-${value.length}`} style={{ visibility: 'hidden' }}>
              <SpecialToken>{token.token}</SpecialToken>
            </div>
          );
        }
        return (
          <NumberTokenColumn
            changed={token.changed}
            index={token.index}
            key={animation.animateDiff ? i : `${value}-${token.token}-${token.index}`}
            token={token.token}
          />
        );
      })}

      <AnimatePresence>
        {specialTokenContents.map((token) => {
          return (
            <SpecialTokenColumn
              index={token.index}
              key={token.left}
              left={token.left}
              token={token.token}
              triggerAnimate={token.triggerAnimate}
            />
          );
        })}
      </AnimatePresence>
    </div>
  );
};
