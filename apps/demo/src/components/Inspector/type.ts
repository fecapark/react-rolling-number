import type { RollerAnimationType, RollerProps } from 'react-rolling-number';

import type { Prettify } from '@/utils/type';

export type InspectorOption = Prettify<
  Required<
    Omit<
      Omit<RollerProps, 'animation'> & RollerAnimationType,
      'ease' | 'prefix' | 'suffix' | 'value'
    >
  >
>;
