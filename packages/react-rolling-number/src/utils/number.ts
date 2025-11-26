import { regex } from '@/utils/regex';

export const commaizeNumber = (value: number | string) => {
  const stringValue = String(value);
  const decimalPointIndex = stringValue.indexOf('.');

  return decimalPointIndex > -1
    ? stringValue.slice(0, decimalPointIndex).replace(regex.commaize, '$1,') +
        stringValue.slice(decimalPointIndex)
    : stringValue.replace(regex.commaize, '$1,');
};

export const formatToSignedNumber = (value: number | string) => {
  const stringValue = String(value);
  const noSign = !stringValue.startsWith('-') && !stringValue.startsWith('+');
  if (noSign) {
    return `+${stringValue}`;
  }
  return stringValue;
};
