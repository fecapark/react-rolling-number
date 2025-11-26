import { motion } from 'motion/react';

import { SpecialToken } from '@/components/Roller/components/SpecialToken';
import { useRollerOptionContext } from '@/components/Roller/context';

interface Props {
  index: number;
  left: number;
  token: string;
  triggerAnimate: boolean;
}

export const SpecialTokenColumn = ({ index, token, triggerAnimate, left }: Props) => {
  const {
    animation: { rollDuration, stagger, rollWay, ease },
  } = useRollerOptionContext();

  const defaultTransition = {
    duration: rollDuration * 0.5,
    ease,
  };

  return (
    <motion.div
      animate={
        triggerAnimate && {
          x: 0,
          opacity: 1,
          transition: {
            ...defaultTransition,
            delay: stagger ? index * 0.05 * 3 : 0,
          },
        }
      }
      exit={{
        x: triggerAnimate ? '50%' : 0,
        opacity: 0,
        transition: defaultTransition,
      }}
      initial={
        triggerAnimate && {
          opacity: 0,
        }
      }
      style={{
        position: 'absolute',
        left,
        bottom: rollWay === 'down' ? 0 : undefined,
      }}
    >
      <SpecialToken>{token}</SpecialToken>
    </motion.div>
  );
};
