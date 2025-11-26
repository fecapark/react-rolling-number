import { style, styleVariants } from '@vanilla-extract/css';

import type { RollerAnimationRollwayType } from '@/components/Roller/type';

const rollwayTransformVariants = {
  up: 'translate3d(0, 0, 0)',
  down: 'translate3d(0, -100%, 0)',
} as const satisfies Record<RollerAnimationRollwayType, string>;

export const token = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const tokenRollwayTransform = styleVariants(rollwayTransformVariants, (transform) => [
  {
    transform,
  },
]);
