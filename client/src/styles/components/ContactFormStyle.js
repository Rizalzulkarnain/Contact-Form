import styled from 'styled-components';
import theme from '../theme';
import mixins from '../mixins';

export const H3 = styled.h3`
  text-align: center;
`;

export const ButtonContainer = styled.div`
  ${mixins.Center}
`;

export const Button = styled.button`
  width: 300px;
  padding: 5px;
  border-radius: 3px;
  border: none;
  outline: none;

  &:hover {
    background: ${theme.colors.blue};
    transition: ${theme.transition};
    color: ${theme.colors.white};
  }
`;
