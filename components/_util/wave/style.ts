import { genComponentStyleHook } from '../../theme/internal';
import type { FullToken, GenerateStyle } from '../../theme/internal';

export interface ComponentToken {}

export interface WaveToken extends FullToken<'Wave'> {}

const genWaveStyle: GenerateStyle<WaveToken> = (token) => {
  const { componentCls, colorPrimary } = token;
  return {
    [componentCls]: {
      position: 'fixed',
      background: 'transparent',
      pointerEvents: 'none',
      boxSizing: 'border-box',
      color: `var(--wave-color, ${colorPrimary})`,

      boxShadow: `0 0 0 0 currentcolor`,
      opacity: 0.2,

      // =================== Motion ===================
      '&.wave-motion-appear': {
        transition: [
          `box-shadow 0.4s ${token.motionEaseOutCirc}`,
          `opacity 2s ${token.motionEaseOutCirc}`,
        ].join(','),

        '&-active': {
          boxShadow: `0 0 0 calc(6px * var(--wave-scale)) currentcolor`,
          opacity: 0,
        },
      },
    },
  };
};

export default genComponentStyleHook('Wave', (token) => [genWaveStyle(token)]);
