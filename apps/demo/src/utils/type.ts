export type Merge<T, U> = Omit<T, keyof U> & U;

export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};
