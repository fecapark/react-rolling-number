import { styleVariants } from '@vanilla-extract/css';

import type { RollerAlignType } from '@/components/Roller/type';

const justifyVariants = {
  center: 'center',
  left: 'left',
  right: 'right',
} as const satisfies Record<string, RollerAlignType>;

export const container = styleVariants(justifyVariants, (justify) => [
  {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: justify,
  },
]);
