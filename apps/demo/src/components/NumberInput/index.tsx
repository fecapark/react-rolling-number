import { clamp } from 'es-toolkit';

import type { Merge } from '@/utils/type';

type NumberInputProps = Merge<
  React.InputHTMLAttributes<HTMLInputElement>,
  { max?: number; min?: number; onChange?: (value?: number) => void; value?: number }
>;

const numberParser = (value: string): '' | number =>
  value === '' ? '' : Number(value.replaceAll(',', ''));

export const NumberInput = ({
  value,
  min = -Number.MAX_SAFE_INTEGER,
  max = Number.MAX_SAFE_INTEGER,
  onChange,
  ...props
}: NumberInputProps) => {
  const stringifiedValue = value !== undefined ? String(clamp(value, min, max)) : '';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const parsedValue = numberParser(e.target.value);
    if (parsedValue === '' || !isNaN(parsedValue)) {
      onChange?.(parsedValue === '' ? undefined : clamp(parsedValue, min, max));
    }
  };

  return <input {...props} inputMode="decimal" onChange={handleChange} value={stringifiedValue} />;
};
