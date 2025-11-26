import type { ResolvedValues, TargetAndTransition } from 'motion/react';

import { cubicBezier } from 'motion';

export const easing = {
  expoInOut: cubicBezier(0.87, 0, 0.13, 1),
  expoOut: cubicBezier(0.19, 1.0, 0.22, 1.0),
  materialBase: cubicBezier(0.2, 0, 0, 1),
  materialAccel: cubicBezier(0, 0, 0, 1),
  expoIn: cubicBezier(0.7, 0, 0.84, 0),
};

type TypedTargetResolver<T extends object> = (
  custom: T,
  current: ResolvedValues,
  velocity: ResolvedValues,
) => string | TargetAndTransition;

export type VariantsWithResolver<T extends object> = {
  [k: string]: TargetAndTransition | TypedTargetResolver<T>;
};
