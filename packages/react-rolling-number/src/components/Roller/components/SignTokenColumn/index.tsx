import { motion, type Variants } from 'motion/react';

import { SignToken } from '@/components/Roller/components/SignToken';
import { useRollerOptionContext } from '@/components/Roller/context';

interface Props {
  sign: string;
}

const variants: Variants = {
  plusup: {
    y: 0,
  },
  plusdown: {
    y: '50%',
  },
  minusup: {
    y: '-50%',
  },
  minusdown: {
    y: 0,
  },
};

export const SignTokenColumn = ({ sign }: Props) => {
  const {
    animation: { rollWay, ease, rollDuration },
  } = useRollerOptionContext();

  return (
    <motion.div
      animate={sign === '+' ? `plus${rollWay}` : `minus${rollWay}`}
      style={{ height: 'fit-content' }}
      transition={{
        duration: rollDuration,
        ease,
      }}
      variants={variants}
    >
      <SignToken sign="+" />
      <SignToken sign="-" />
    </motion.div>
  );
};
