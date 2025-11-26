import { motion } from 'motion/react';

import { useRollerTargetWidth } from '@/components/Roller/components/RollerContainer/hooks/useRollerTargetWidth';
import { container } from '@/components/Roller/components/RollerContainer/index.css';
import { useRollerOptionContext, useTokenRectSizeContext } from '@/components/Roller/context';

interface Props {
  children: React.ReactNode;
  value: string;
}

export const RollerContainer = ({ children, value }: Props) => {
  const {
    align,
    prefix,
    suffix,
    animation: { shiftDuration, ease },
  } = useRollerOptionContext();
  const targetWidth = useRollerTargetWidth(value);
  const { tokenRectSize } = useTokenRectSizeContext();

  return (
    <div className={container[align]}>
      {prefix && <div>{prefix}</div>}
      <motion.div
        animate={{
          width: targetWidth,
        }}
        style={{
          height: tokenRectSize?.number.height,
        }}
        transition={{
          duration: shiftDuration,
          ease,
        }}
      >
        {children}
      </motion.div>
      {suffix && <div>{suffix}</div>}
    </div>
  );
};
