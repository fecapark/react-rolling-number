import { useTokenRectSizeContext } from '@/components/Roller/context';
import { useResizeObserver } from '@/hooks/useResizeObserver';

export const useTokenResizeObserver = <E extends HTMLElement>() => {
  const { setTokenRectSize } = useTokenRectSizeContext();

  const ref = useResizeObserver<E>((entry) => {
    const numberToken = entry.target.querySelector<HTMLElement>('[data-token-type="number"]');
    const specialToken = entry.target.querySelector<HTMLElement>('[data-token-type="special"]');
    const signToken = entry.target.querySelector<HTMLElement>('[data-token-type="sign"]');

    if (!numberToken) {
      return;
    }

    const { height: numberTokenHeight, width: numberTokenWidth } =
      numberToken.getBoundingClientRect();
    const specialTokenRect = specialToken?.getBoundingClientRect();
    const signTokenRect = signToken?.getBoundingClientRect();

    setTokenRectSize({
      number: {
        height: numberTokenHeight,
        width: numberTokenWidth,
      },
      special: {
        height: specialTokenRect?.height ?? 0,
        width: specialTokenRect?.width ?? 0,
      },
      sign: {
        height: signTokenRect?.height ?? 0,
        width: signTokenRect?.width ?? 0,
      },
    });
  });

  return ref;
};
