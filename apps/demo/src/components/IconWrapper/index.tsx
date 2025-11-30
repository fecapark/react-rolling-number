import { cn } from '@/utils/dom';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const IconWrapper = ({ children, className }: Props) => {
  return <div className={cn('inline-flex items-center justify-center', className)}>{children}</div>;
};
