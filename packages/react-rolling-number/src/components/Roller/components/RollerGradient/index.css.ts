import { style } from '@vanilla-extract/css';

export const gradientMask = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  maskImage: 'linear-gradient(to top, transparent, #fff 10%, #fff 90%, transparent)',
  WebkitMaskImage: 'linear-gradient(to top, transparent, #fff 10%, #fff 90%, transparent)',
  overflow: 'hidden',
});
