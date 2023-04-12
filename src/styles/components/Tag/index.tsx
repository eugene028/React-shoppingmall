import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { KeyOfPalette, KeyOfTypo } from '../../theme';

export type TagColorKey = "woman" | "man" | 'electronics' | 'jewelery' | 'mono';

type TagColorType = {
  [key in TagColorKey]: {
    background: KeyOfPalette;
    text: KeyOfPalette;
  };
};

type TagSizeKey = 'sm' | 'md' | 'lg';
type TagSizeType = {
  [key in TagSizeKey]: {
    typo: KeyOfTypo;
    padding: string;
    radius: 6 | 8 | 12;
  };
};

const TAG_COLOR: TagColorType = {
  woman: {
    background: 'main_100',
    text: 'main_500',
  },
  man: {
    background: 'point_blue',
    text: 'gray_500',
  },
  electronics: {
    background: 'sub_300',
    text:'black',
  },
  jewelery: {
    background: 'point_mint',
    text: 'black',
  },
  mono: {
    background: 'gray_100',
    text: 'gray_500',
  }
};

const TAG_SIZE: TagSizeType = {
  sm: { typo: 'Text_10', padding: '2px 10px', radius: 6 },
  md: { typo: 'Text_12', padding: '3px 12px', radius: 8 },
  lg: { typo: 'Text_14', padding: '7.5px 20px', radius: 8 },
};

export interface TagProps extends React.ComponentProps<'div'> {
  text: string;
  color: TagColorKey;
  size: TagSizeKey;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export const Tag = ({ text, color, size, onClick, ...props }: TagProps) => {
  return (
    <Wrapper color={color} size={size} onClick={onClick} {...props}>
      {text}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ color: TagColorKey; size: TagSizeKey }>`
  ${({ size, theme }) => theme.typo[TAG_SIZE[size].typo]}
  padding: ${({ size }) => TAG_SIZE[size].padding};
  border-radius: ${({ size }) => TAG_SIZE[size].radius}px;
  background-color: ${({ theme, color }) =>
    theme.palette[TAG_COLOR[color].background]};
  color: ${({ theme, color }) => theme.palette[TAG_COLOR[color].text]};
  display: inline-block;
`;
