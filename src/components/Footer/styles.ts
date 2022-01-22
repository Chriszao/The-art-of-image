import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  position: absolute;
  bottom: 0;
  margin-bottom: 1.5rem;
  width: 100%;
`;

export const Title = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    color: ${theme.colors.text3};
  `}
`;

export const UserName = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.text3};
    transition: color 0.5s;
    font-weight: 700;

    &:hover {
      color: ${theme.colors.text2};
    }
  `}
`;
