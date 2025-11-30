'use client';

import { useState } from 'react';
import { Roller } from 'react-rolling-number';
import { tv } from 'tailwind-variants';

import type { InspectorOption } from '@/components/Inspector/type';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Inspector } from '@/components/Inspector';

const rollerContainer = tv({
  base: 'relative w-full px-3 text-5xl leading-[1.1]',
  variants: {
    align: {
      left: 'translate-x-[calc(50%-180px)]',
      center: '',
      right: 'translate-x-[calc(-50%+180px)]',
    },
  },
});

const alignInspector = tv({
  base: 'bg-negativeBackground animate-fadeout absolute z-10 mx-1 h-full w-0.5',
  variants: {
    align: {
      left: 'left-0',
      center: 'left-1/2 -translate-x-1/2',
      right: 'right-0',
    },
  },
});

const Home = () => {
  const [value, setValue] = useState<number | undefined>(130000);
  const [option, setOption] = useState<InspectorOption>({
    align: 'center',
    rollWay: 'down',
    commaize: true,
    showPlusSign: false,
    rollDuration: 0.6,
    shiftDuration: 0.45,
    animateDiff: true,
    stagger: false,
  });

  return (
    <>
      <div className="flex size-full flex-col items-center overflow-x-hidden py-8">
        <Header />
        <main className="flex w-full grow items-center justify-center">
          <div className={rollerContainer({ align: option.align })}>
            <div className={alignInspector({ align: option.align })} key={option.align} />
            <Roller
              align={option.align}
              animation={{
                animateDiff: option.animateDiff,
                rollDuration: option.rollDuration,
                shiftDuration: option.shiftDuration,
                rollWay: option.rollWay,
                stagger: option.stagger,
              }}
              commaize={option.commaize}
              showPlusSign={option.showPlusSign}
              value={value ?? 0}
            />
          </div>
        </main>
        <Footer onValueChange={setValue} value={value} />
      </div>
      <Inspector option={option} setOption={setOption} />
    </>
  );
};

export default Home;
