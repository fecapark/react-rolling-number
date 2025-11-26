import { range } from 'es-toolkit';
import { motion } from 'motion/react';
import { useMemo } from 'react';

import type { RollerAnimationRollwayType } from '@/components/Roller/type';

import { NumberToken } from '@/components/Roller/components/NumberToken';
import { useRollerOptionContext } from '@/components/Roller/context';
import { type VariantsWithResolver } from '@/utils/motion';

interface Props {
  changed: boolean;
  index: number;
  token: string;
}

const columnRollVariants: VariantsWithResolver<{
  rollWay: RollerAnimationRollwayType;
  token: string;
}> = {
  base: ({ rollWay }) => ({
    y: rollWay === 'down' ? '50%' : '-50%',
  }),
  diff: ({ rollWay, token }) => ({
    y: rollWay === 'down' ? `${Number(token) * 10 + 10}%` : `-${Number(token) * 10}%`,
  }),
};

export const NumberTokenColumn = ({ index, token, changed }: Props) => {
  const {
    animation: { animateDiff, rollDuration, rollWay, stagger, ease },
  } = useRollerOptionContext();

  const tokenSequence = useMemo(() => {
    if (animateDiff) {
      return rollWay === 'down' ? range(0, 10).reverse() : range(0, 10);
    }
    return range(0, 20).map((i) => (Number(token) + i) % 10);
  }, [animateDiff, rollWay, token]);

  const getTransition = () => {
    const preventAnimate = animateDiff && !changed;
    if (preventAnimate) {
      return {
        duration: 0,
      };
    }
    // eslint-disable-next-line react-hooks/purity
    const randomDelay = animateDiff || stagger ? 0 : Math.random() * 0.2;
    const staggerDelay = index * 0.05;
    return {
      duration: rollDuration + randomDelay,
      delay: stagger ? staggerDelay : 0,
      ease,
    };
  };

  return (
    <motion.div
      animate={animateDiff ? 'diff' : 'base'}
      custom={{ rollWay, token }}
      transition={getTransition()}
      variants={columnRollVariants}
    >
      {tokenSequence.map((v, i) => (
        <NumberToken key={`${v}${i}`}>{v}</NumberToken>
      ))}
    </motion.div>
  );
};
