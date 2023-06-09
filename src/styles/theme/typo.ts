import { css } from '@emotion/react';

export const calcRem = (px: number) => `${px / 16}rem`;

export const typo = {
  Header_28: css`
    font-family: 'Pretendard';
    font-size: ${calcRem(28)};
    line-height: 150%;
    font-weight: 700;
  `,
  Header_24: css`
    font-family: 'Pretendard';
    font-size: ${calcRem(24)};
    line-height: 150%;
    font-weight: 700;
  `,
  Header_20: css`
    font-family: 'Pretendard';
    font-size: ${calcRem(20)};
    line-height: 150%;
    font-weight: 700;
  `,
  Text_18: css`
    font-family: 'Pretendard';
    font-size: ${calcRem(18)};
    line-height: 150%;
    font-weight: 500;
  `,
  Text_18_SB: css`
    font-family: 'Pretendard';
    font-size: ${calcRem(18)};
    line-height: 150%;
    font-weight: 600;
  `,
  Text_16: css`
    font-family: 'Pretendard';
    font-size: ${calcRem(16)};
    line-height: 150%;
    font-weight: 500;
  `,
  Text_16_SB: css`
    font-family: 'Pretendard';
    font-size: ${calcRem(16)};
    line-height: 150%;
    font-weight: 600;
  `,
  Text_14: css`
    font-family: 'Pretendard';
    font-size: ${calcRem(14)};
    line-height: 150%;
    font-weight: 500;
  `,
  Text_14_SB: css`
    font-family: 'Pretendard';
    font-size: ${calcRem(14)};
    line-height: 150%;
    font-weight: 600;
  `,
  Text_12: css`
    font-family: 'Pretendard';
    font-size: ${calcRem(12)};
    line-height: 150%;
    font-weight: 500;
  `,
  Text_12_SB: css`
    font-family: 'Pretendard';
    font-size: ${calcRem(12)};
    line-height: 150%;
    font-weight: 600;
  `,
  Text_10: css`
    font-family: 'Pretendard';
    font-size: ${calcRem(10)};
    line-height: 150%;
    font-weight: 500;
  `,
  Navbar_17: css`
    font-family: 'Pretendard';
    font-size: ${calcRem(17)};
    line-height: 150%;
    font-weight: 500;
  `,
  // ------------------------------- new font -------------------------------
  // Header
  G_Header_28_B: css`
    font-family: 'KCC-Ganpan';
    font-weight: normal;
    font-size: ${calcRem(28)};
    line-height: 120%;
  `,
  G_Header_24_B: css`
    font-family: 'KCC-Ganpan';
    font-weight: normal;
    font-size: ${calcRem(24)};
    line-height: 120%;
  `,
  G_Header_20_B: css`
    font-family: 'KCC-Ganpan';
    font-weight: normal;
    font-size: ${calcRem(20)};
    line-height: 100%;
  `,
  G_Header_18_M: css`
    font-family: 'KCC-Ganpan';
    font-weight: normal;
    font-size: ${calcRem(18)};
    line-height: 150%;
  `,
  // Button
  P_Button_16_SB: css`
    font-family: 'Pretendard';
    font-weight: 600;
    font-size: ${calcRem(16)};
    line-height: 120%;
  `,
} as const;
