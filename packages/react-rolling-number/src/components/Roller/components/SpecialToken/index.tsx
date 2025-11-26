import { token } from '@/components/Roller/components/SpecialToken/index.css';

interface Props {
  children: string;
}

export const SpecialToken = ({ children }: Props) => {
  return (
    <div className={token} data-token-type="special">
      {children}
    </div>
  );
};
