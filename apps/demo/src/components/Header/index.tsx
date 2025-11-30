import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

import { PackageHelper } from '@/components/Header/PackageHelper';
import { IconWrapper } from '@/components/IconWrapper';

export const Header = () => {
  return (
    <header className="items-cetner flex w-full justify-center">
      <Link
        className="text-neutralMuted hover:bg-hoverBackgroundAccent ease-materialBase mr-1.5 flex rounded-full px-4 py-1 text-2xl transition-colors duration-200"
        href="https://github.com/fecapark/react-rolling-number"
        rel="noopener noreferrer"
        target="_blank"
      >
        <IconWrapper>
          <FaGithub />
        </IconWrapper>
      </Link>
      <PackageHelper />
    </header>
  );
};
