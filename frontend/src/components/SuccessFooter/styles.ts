import styled, { css } from 'styled-components';

export const Container = styled.div`
  background-color: #f6f8fb;
  border: 1px solid #e0e0e0;
  border-radius: 8px;

  height: 40px;
  width: 82%;

  display: flex;
  flex-direction: row;

  padding: 2px;
`;

export const TextArea = styled.input`
  ${({ theme }) => css`
    border: none;
    background-color: transparent;

    flex-grow: 2;

    color: ${theme.colors.text1};

    margin: 0 14px 0 8px;
    font-size: ${theme.font.sizes.small};

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &:focus {
      outline: none;
    }
  `}
`;
