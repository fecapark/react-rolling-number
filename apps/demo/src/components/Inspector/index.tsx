'use client';

import { type Dispatch, type SetStateAction, useState } from 'react';
import { MdFormatAlignCenter, MdFormatAlignLeft, MdFormatAlignRight } from 'react-icons/md';
import { tv } from 'tailwind-variants';

import type { InspectorOption } from '@/components/Inspector/type';

import { IconWrapper } from '@/components/IconWrapper';
import { NumberInspector } from '@/components/Inspector/components/NumberInspector';
import { SelectInspector } from '@/components/Inspector/components/SelectInspector';

interface Props {
  option: InspectorOption;
  setOption: Dispatch<SetStateAction<InspectorOption>>;
}

const inspector = tv({
  slots: {
    item: 'flex w-full items-center justify-between',
    label: 'text-sm font-semibold tracking-wide uppercase',
  },
});

export const Inspector = ({ option, setOption }: Props) => {
  const { item, label } = inspector();
  const [open, setOpen] = useState(true);

  return (
    <div className="bg-background fixed top-0 right-8 z-10 flex w-full max-w-[340px] flex-col items-center">
      <button
        className="bg-layerBackground hover:bg-hoverBackground w-full cursor-pointer py-2 text-sm"
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? 'Close' : 'Open'} Inspector
      </button>
      {open && (
        <div className="flex w-full flex-col gap-5 p-4">
          <div className={item()}>
            <div className={label()}>ALIGN</div>
            <SelectInspector
              fields={[
                {
                  label: (
                    <IconWrapper>
                      <MdFormatAlignLeft />
                    </IconWrapper>
                  ),
                  value: 'left',
                },
                {
                  label: (
                    <IconWrapper>
                      <MdFormatAlignCenter />
                    </IconWrapper>
                  ),
                  value: 'center',
                },
                {
                  label: (
                    <IconWrapper>
                      <MdFormatAlignRight />
                    </IconWrapper>
                  ),
                  value: 'right',
                },
              ]}
              onChange={(v) => setOption((prev) => ({ ...prev, align: v }))}
              value={option.align}
            />
          </div>
          <div className={item()}>
            <div className={label()}>ROLLWAY</div>
            <SelectInspector
              fields={[
                {
                  label: 'UP',
                  value: 'up',
                },
                {
                  label: 'DOWN',
                  value: 'down',
                },
              ]}
              onChange={(v) => setOption((prev) => ({ ...prev, rollWay: v }))}
              value={option.rollWay}
            />
          </div>
          <div className={item()}>
            <div className={label()}>ROLL DURATION</div>
            <NumberInspector
              isFloat
              onChange={(v) => setOption((prev) => ({ ...prev, rollDuration: v }))}
              suffix="s"
              value={option.rollDuration}
            />
          </div>
          <div className={item()}>
            <div className={label()}>SHIFT DURATION</div>
            <NumberInspector
              isFloat
              onChange={(v) => setOption((prev) => ({ ...prev, shiftDuration: v }))}
              suffix="s"
              value={option.shiftDuration}
            />
          </div>
          <div className={item()}>
            <div className={label()}>STAGGER</div>
            <SelectInspector
              fields={[
                {
                  label: 'TRUE',
                  value: true,
                },
                {
                  label: 'FALSE',
                  value: false,
                },
              ]}
              onChange={(v) => setOption((prev) => ({ ...prev, stagger: v }))}
              value={option.stagger}
            />
          </div>
          <div className={item()}>
            <div className={label()}>ANIMATE DIFF</div>
            <SelectInspector
              fields={[
                {
                  label: 'TRUE',
                  value: true,
                },
                {
                  label: 'FALSE',
                  value: false,
                },
              ]}
              onChange={(v) => setOption((prev) => ({ ...prev, animateDiff: v }))}
              value={option.animateDiff}
            />
          </div>
          <div className={item()}>
            <div className={label()}>COMMAIZE</div>
            <SelectInspector
              fields={[
                {
                  label: 'TRUE',
                  value: true,
                },
                {
                  label: 'FALSE',
                  value: false,
                },
              ]}
              onChange={(v) => setOption((prev) => ({ ...prev, commaize: v }))}
              value={option.commaize}
            />
          </div>
          <div className={item()}>
            <div className={label()}>SHOW PLUS SIGN</div>
            <SelectInspector
              fields={[
                {
                  label: 'TRUE',
                  value: true,
                },
                {
                  label: 'FALSE',
                  value: false,
                },
              ]}
              onChange={(v) => setOption((prev) => ({ ...prev, showPlusSign: v }))}
              value={option.showPlusSign}
            />
          </div>
        </div>
      )}
    </div>
  );
};
