import { CheckCircleFill } from '@styled-icons/bootstrap/CheckCircleFill';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors.text1};
    margin-bottom: 1.563rem;
  `}
`;

export const SuccessIcon = styled(CheckCircleFill)`
  ${({ theme }) => css`
    margin: 2.5rem 0 0.75rem;
    color: ${theme.colors.success};
  `}
`;
