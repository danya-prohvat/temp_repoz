import styled from '@emotion/styled';

export interface StyledButtonProps {
  color: 'red' | 'blue';
}

const S = {
  Button: styled.button<StyledButtonProps>`
    color: ${(props) => props.theme.colors.textColor.white};
    background-color: ${(props) => props.theme.colors.backgroundColor[props.color]};
    border: none;
    border-radius: 4px;
    cursor: pointer;
    padding: 10px 20px;
    margin-top: 15px;
  `,
};

export { S };
