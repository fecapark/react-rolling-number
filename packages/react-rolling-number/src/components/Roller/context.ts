import { assert } from 'es-toolkit';
import { createContext, type Dispatch, type SetStateAction, useContext } from 'react';

import type {
  RollerAlignType,
  RollerAnimationType,
  TokenRectSizeType,
} from '@/components/Roller/type';

interface RollerOptionContextType {
  align: RollerAlignType;
  animation: Required<RollerAnimationType>;
  prefix?: React.ReactNode;
  showPlusSign?: boolean;
  suffix?: React.ReactNode;
}

interface TokenRectSizeContextType {
  setTokenRectSize: Dispatch<SetStateAction<null | TokenRectSizeType>>;
  tokenRectSize: null | TokenRectSizeType;
}

export const RollerOptionContext = createContext<null | RollerOptionContextType>(null);

export const TokenRectSizeContext = createContext<null | TokenRectSizeContextType>(null);

export const useRollerOptionContext = () => {
  const context = useContext(RollerOptionContext);
  assert(context, 'useRollerOptionContext must be used within a RollerOptionContext.Provider');
  return context;
};

export const useTokenRectSizeContext = () => {
  const context = useContext(TokenRectSizeContext);
  assert(context, 'useTokenRectSizeContext must be used within a TokenRectSizeContext.Provider');
  return context;
};
