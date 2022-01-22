import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 25rem;
    height: 8.938rem;

    box-shadow: 0px 4px 12px 0px #0000001a;
    border-radius: 12px;

    padding: 36px 32px;

    background-color: ${theme.colors.boxBg};
  `}
`;

export const Title = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors.text1};

    margin-bottom: 1.875rem;
  `}
`;
