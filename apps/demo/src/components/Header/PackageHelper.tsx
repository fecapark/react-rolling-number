'use client';

import { useState } from 'react';
import { FaYarn } from 'react-icons/fa';
import { MdContentCopy } from 'react-icons/md';
import { RiNpmjsFill } from 'react-icons/ri';
import { SiBun, SiPnpm } from 'react-icons/si';
import { Tooltip } from 'react-tooltip';

import { IconWrapper } from '@/components/IconWrapper';
import { cn } from '@/utils/dom';

export const PackageHelper = () => {
  const [selectedManagerName, setSelectedManagerName] =
    useState<(typeof packageManagers)[number]['name']>('npm');

  const selectedManager = packageManagers.find((manager) => manager.name === selectedManagerName)!;

  const copyCommandToClipboard = () => {
    const command = `${selectedManager.name} ${selectedManager.command} ${packageName}`;
    navigator.clipboard.writeText(command);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="bg-layerBackground text-neutralSubtle relative flex h-[42px] min-w-[320px] items-center justify-center rounded-md">
        <div className="text-sm font-medium">
          <span>{selectedManager.name} </span>
          <span className="text-neutralPlaceholder">{selectedManager.command} </span>
          <span>{packageName}</span>
        </div>
        <div
          className="hover:bg-hoverBackground absolute top-1/2 right-1.5 flex -translate-y-1/2 cursor-pointer rounded-full p-2"
          data-tooltip-id="tooltip-copy"
          onClick={copyCommandToClipboard}
        >
          <IconWrapper>
            <MdContentCopy />
          </IconWrapper>
        </div>
        <Tooltip
          content="Copied!"
          id="tooltip-copy"
          openOnClick={true}
          place="bottom"
          style={{ fontSize: 13, fontWeight: 500, backgroundColor: '#323232' }}
        />
      </div>

      <div className="bg-layerBackground ml-4 flex h-9 items-center overflow-hidden rounded-md">
        {packageManagers.map(({ name, color, icon, withBackground }) => {
          const selected = name === selectedManagerName;

          return (
            <button
              className={cn(
                'relative flex h-full cursor-pointer px-3 text-xl',
                selected
                  ? 'bg-selectedBackground'
                  : 'text-neutralPlaceholder hover:bg-hoverBackgroundAccent ease-materialBase transition-colors duration-200',
              )}
              key={name}
              onClick={() => setSelectedManagerName(name)}
              style={{
                color: selected ? color : undefined,
              }}
            >
              {withBackground && selected && (
                <div className="absolute inset-0 top-1/2 left-1/2 z-1 size-[0.8rem] -translate-1/2 bg-white" />
              )}
              <IconWrapper className="z-10">{icon}</IconWrapper>
            </button>
          );
        })}
      </div>
    </div>
  );
};

const packageName = 'react-rolling-number';

const packageManagers = [
  {
    name: 'npm',
    command: 'install',
    icon: <RiNpmjsFill />,
    color: '#cc3534',
    withBackground: true,
  },
  {
    name: 'yarn',
    command: 'add',
    icon: <FaYarn />,
    color: '#3692BD',
    withBackground: true,
  },
  {
    name: 'pnpm',
    command: 'add',
    icon: <SiPnpm />,
    color: '#ffba17',
    withBackground: false,
  },
  {
    name: 'bun',
    command: 'add',
    icon: <SiBun />,
    color: '#f3e8d8',
    withBackground: false,
  },
] as const;
