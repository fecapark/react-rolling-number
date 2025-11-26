import fromExponential from 'from-exponential';
import { useMemo } from 'react';

import { commaizeNumber, formatToSignedNumber } from '@/utils/number';

interface FormatValueOptions {
  commaize: boolean;
}

export const useFormattedValue = (value: number | string, options: FormatValueOptions) => {
  const { commaize } = options;

  return useMemo(() => {
    const stringValue = fromExponential(String(value));
    const commaizedValue = commaize ? commaizeNumber(stringValue) : stringValue;
    return formatToSignedNumber(commaizedValue);
  }, [value, commaize]);
};
