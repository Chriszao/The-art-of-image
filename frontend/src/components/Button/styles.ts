import styled, { css } from 'styled-components';

type ButtonComponentProps = {
  withMargin: boolean;
};

export const ButtonComponent = styled.button<ButtonComponentProps>`
  ${({ theme, withMargin }) => css`
    padding: 8px 16px;

    background-color: ${theme.colors.primary};

    border-radius: 8px;
    border: none;

    color: ${theme.colors.boxBg};

    margin: ${withMargin ? `1.375rem 0 2.25rem;` : 0};
  `}
`;
