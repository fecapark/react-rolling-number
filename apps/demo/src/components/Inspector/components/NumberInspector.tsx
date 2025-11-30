'use client';

import { useEffect, useRef } from 'react';

interface Props {
  isFloat?: boolean;
  onChange: (value: number) => void;
  suffix?: string;
  value: number;
}

export const NumberInspector = ({ suffix, value, isFloat = false, onChange }: Props) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const prevY = useRef(0);
  const isDown = useRef(false);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    if (value === '') {
      onChange(0);
    } else {
      onChange(isFloat ? parseFloat(value) : parseInt(value, 10));
    }
  };

  const onPointerDown = (e: React.PointerEvent) => {
    isDown.current = true;
    prevY.current = e.clientY;
  };

  useEffect(() => {
    const resetDragStyle = () => {
      if (!wrapperRef.current) {
        return;
      }
      wrapperRef.current.style.borderBottomColor = '';
      wrapperRef.current.style.borderBottomWidth = '';
      wrapperRef.current.style.borderBottomLeftRadius = '';
      wrapperRef.current.style.borderBottomRightRadius = '';
      wrapperRef.current.style.borderTopColor = '';
      wrapperRef.current.style.borderTopWidth = '';
      wrapperRef.current.style.borderTopLeftRadius = '';
      wrapperRef.current.style.borderTopRightRadius = '';
    };

    const setDragStyle = (direction: 'down' | 'up') => {
      if (!wrapperRef.current) {
        return;
      }

      if (direction === 'down') {
        wrapperRef.current.style.borderBottomColor = 'var(--color-blueAccent)';
        wrapperRef.current.style.borderBottomWidth = '4px';
        wrapperRef.current.style.borderBottomLeftRadius = '2px';
        wrapperRef.current.style.borderBottomRightRadius = '2px';
      } else {
        wrapperRef.current.style.borderTopColor = 'var(--color-blueAccent)';
        wrapperRef.current.style.borderTopWidth = '4px';
        wrapperRef.current.style.borderTopLeftRadius = '2px';
        wrapperRef.current.style.borderTopRightRadius = '2px';
      }
    };

    const onPointerMove = (e: MouseEvent) => {
      if (!isDown.current || !inputRef.current || !wrapperRef.current) {
        return;
      }

      const SCALER = 1000;
      const curY = e.clientY;
      const y = prevY.current - curY;

      resetDragStyle();
      if (y < 0) {
        for (let i = 0; i < -y / SCALER; i++) {
          inputRef.current.stepDown();
        }
        setDragStyle('down');
      } else {
        for (let i = 0; i < y / SCALER; i++) {
          inputRef.current.stepUp();
        }
        setDragStyle('up');
      }

      inputRef.current.dispatchEvent(new Event('change', { bubbles: true }));
      prevY.current = curY;
    };

    const onPointerUp = () => {
      if (!isDown.current) {
        return;
      }
      isDown.current = false;
      resetDragStyle();
    };

    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
    };
  }, []);

  return (
    <div
      className="text-neutralInspector border-neutralInspector cursor-ns-resize rounded-md border"
      onPointerDown={onPointerDown}
      ref={wrapperRef}
    >
      <input
        className="w-12 bg-transparent py-2 pl-3 text-center tracking-wider outline-none"
        min={0}
        onChange={onInputChange}
        ref={inputRef}
        step={isFloat ? 0.01 : 1}
        type="number"
        value={value.toString()}
      />
      {suffix && <label className="ml-2 h-full pr-3.5">{suffix}</label>}
    </div>
  );
};
