import { token, tokenRollwayTransform } from '@/components/Roller/components/NumberToken/index.css';
import { useRollerOptionContext } from '@/components/Roller/context';

interface Props {
  children: number | string;
}

export const NumberToken = ({ children }: Props) => {
  const {
    animation: { rollWay },
  } = useRollerOptionContext();

  return (
    <div className={`${token} ${tokenRollwayTransform[rollWay]}`} data-token-type="number">
      {children}
    </div>
  );
};
