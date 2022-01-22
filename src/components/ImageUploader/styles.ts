import styled, { css, DefaultTheme } from 'styled-components';

type SubtitleProps = {
  variant: 'subtitle1' | 'subtitle2';
};

const subtitleModifiers = {
  subtitle1: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.text4};
  `,
  subtitle2: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.text2};
    margin-bottom: 1.875rem;
  `,
};

export const Wrapper = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  ${({ theme }) => css`
    height: 27.375rem;
    width: 25.25rem;

    display: flex;
    align-items: center;
    flex-direction: column;

    background-color: ${theme.colors.boxBg};
    border-radius: 12px;
    box-shadow: 0px 4px 12px 0px #0000001a;
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors.text1};
  `}

  margin: 1rem 0;
`;

export const Subtitle = styled.h2<SubtitleProps>`
  ${({ theme, variant }) => css`
    ${subtitleModifiers[variant](theme)}
  `}
`;

export const Legend = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.text2};
    margin: 2.313rem 0 2.5rem;
  `}
`;

export const ImageBox = styled.div`
  ${({ theme }) => css`
    width: 340px;
    height: 220px;

    background-color: ${theme.colors.secondary};

    border-radius: 12px;
    border: 1px dashed #97bef4;

    margin-bottom: 1.188rem;

    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
  `}
`;

export const NoImage = styled.img`
  max-height: 115px;
  max-width: 88px;

  margin-top: 2.188rem;
`;

export const Button = styled.button`
  ${({ theme }) => css`
    padding: 8px 16px;

    background-color: ${theme.colors.primary};

    border-radius: 8px;
    border: none;

    color: ${theme.colors.boxBg};

    margin: 1.375rem 0 2.25rem;
  `}
`;
