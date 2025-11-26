import { token } from '@/components/Roller/components/SignToken/index.css';

interface Props {
  sign: string;
}

export const SignToken = ({ sign }: Props) => {
  return (
    <div className={token} data-token-type="sign">
      {sign}
    </div>
  );
};
