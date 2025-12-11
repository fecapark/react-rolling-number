'use client';

import { LuMinus } from 'react-icons/lu';
import { MdAdd, MdRefresh } from 'react-icons/md';
import { PiPlusMinusBold } from 'react-icons/pi';
import { tv } from 'tailwind-variants';

import { IconWrapper } from '@/components/IconWrapper';
import { NumberInput } from '@/components/NumberInput';

interface Props {
  onValueChange: (value?: number) => void;
  value: number | undefined;
}

const stepButton = tv({
  base: 'hover:bg-hoverBackground bg-layerBackground flex size-10 cursor-pointer items-center justify-center rounded-full',
  variants: {
    icon: {
      true: 'text-2xl',
      false: 'text-lg',
    },
  },
});

export const ValueField = ({ value, onValueChange }: Props) => {
  const getRandomNumber = () => {
    let val = '';
    let floatVal = '0.';
    const isFloat = Math.random() > 0.6;
    const isMinus = Math.random() > 0.7;
    const floatLength = Math.floor(Math.random() * 3) + 1;
    const length = Math.floor(Math.random() * 10) + 1;
    for (let i = 0; i < length; i++) {
      val += Math.floor(Math.random() * 10).toString();
    }
    for (let i = 0; i < floatLength; i++) {
      floatVal += Math.floor(Math.random() * 10).toString();
    }
    return (isMinus ? -1 : 1) * (parseInt(val) + (isFloat ? parseFloat(floatVal) : 0));
  };

  return (
    <div className="flex flex-col items-center gap-4 md:flex-row md:gap-2">
      <div className="order-2 flex items-center gap-2 md:contents">
        <div className="flex items-center gap-2 md:order-1">
          <button className={stepButton({ icon: false })} onClick={() => onValueChange(0)}>
            0
          </button>
          <button
            className={stepButton({ icon: true })}
            onClick={() => onValueChange((value ?? 0) * -1)}
          >
            <IconWrapper>
              <PiPlusMinusBold />
            </IconWrapper>
          </button>
        </div>

        <div className="flex items-center gap-2 md:order-3">
          <button
            className={stepButton({ icon: true })}
            onClick={() => onValueChange((value ?? 0) + 1)}
          >
            <IconWrapper>
              <MdAdd />
            </IconWrapper>
          </button>
          <button
            className={stepButton({ icon: true })}
            onClick={() => onValueChange((value ?? 0) - 1)}
          >
            <IconWrapper>
              <LuMinus />
            </IconWrapper>
          </button>
        </div>
      </div>

      <div className="relative order-1 md:order-2">
        <NumberInput
          className="bg-layerBackground min-w-[320px] rounded-full px-6 py-4 text-center text-lg font-medium tracking-widest"
          onChange={onValueChange}
          value={value}
        />
        <button
          className="hover:bg-hoverBackground absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer rounded-full p-2 text-2xl"
          onClick={() => onValueChange(getRandomNumber())}
        >
          <MdRefresh />
        </button>
      </div>
    </div>
  );
};
