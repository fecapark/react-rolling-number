import type { Easing } from 'motion';

export type RollerAlignType = 'center' | 'left' | 'right';

export type RollerAnimationRollwayType = 'down' | 'up';

export type RollerAnimationEaseType = Easing;

export type RollerAnimationType = {
  animateDiff?: boolean;
  ease?: Easing;
  rollDuration?: number;
  rollWay?: RollerAnimationRollwayType;
  shiftDuration?: number;
  stagger?: boolean;
};

export type RollerProps = {
  align?: RollerAlignType;
  animation?: RollerAnimationType;
  commaize?: boolean;
  prefix?: React.ReactNode;
  showPlusSign?: boolean;
  suffix?: React.ReactNode;
  value: number | string;
};

export type TokenRectSizeType = {
  number: {
    height: number;
    width: number;
  };
  sign: {
    height: number;
    width: number;
  };
  special: {
    height: number;
    width: number;
  };
};
