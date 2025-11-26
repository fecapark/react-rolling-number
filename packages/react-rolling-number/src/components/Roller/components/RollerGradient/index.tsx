import { gradientMask } from '@/components/Roller/components/RollerGradient/index.css';

interface Props {
  children: React.ReactNode;
}

export const RollerGradient = ({ children }: Props) => {
  return <div className={gradientMask}>{children}</div>;
};
