import { useRollerOptionContext } from '@/components/Roller/context';

export const useSignToken = (value: string) => {
  const { showPlusSign } = useRollerOptionContext();

  const valueHasPlusSign = value.startsWith('+');

  if (!showPlusSign && valueHasPlusSign) {
    return null;
  }

  return value[0];
};
