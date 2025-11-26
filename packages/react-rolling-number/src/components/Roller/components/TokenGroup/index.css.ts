import { styleVariants } from '@vanilla-extract/css';

import type { RollerAnimationRollwayType } from '@/components/Roller/type';

const rollwayVariants = {
  up: 'up',
  down: 'down',
} as const satisfies Record<string, RollerAnimationRollwayType>;

export const tokenGroup = styleVariants(rollwayVariants, (rollWay) => [
  {
    display: 'flex',
    position: 'absolute',
  },
  rollWay === 'up'
    ? {
        top: 0,
      }
    : {
        bottom: 0,
        alignItems: 'flex-end',
      },
]);
