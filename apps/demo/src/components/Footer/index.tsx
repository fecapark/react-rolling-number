'use client';

import Link from 'next/link';

import { ValueField } from '@/components/Footer/ValueField';

interface Props {
  onValueChange: (value?: number) => void;
  value: number | undefined;
}

export const Footer = ({ value, onValueChange }: Props) => {
  return (
    <footer className="text-neutralSubtle flex flex-col items-center">
      <ValueField onValueChange={onValueChange} value={value} />
      <div className="mt-5 hidden text-[13px] lg:block">
        MIT License. {new Date().getFullYear()}{' '}
        <Link href="https://github.com/fecapark" rel="noopener noreferrer" target="_blank">
          Sanghyeok Park.
        </Link>
      </div>
    </footer>
  );
};
