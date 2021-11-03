import styled from '@emotion/styled';
import { ButtonProps } from './Button';

const S: Record<Required<ButtonProps>['variant'] | 'IconWrapper', any> = {
  primary: styled.button`
    color: ${(props) => props.theme.colors.textColor.white};
    background-color: ${(props) => props.theme.colors.backgroundColor.red};
    border: none;
    border-radius: 4px;
    cursor: pointer;
    padding: 10px 20px;
  `,
  secondary: styled.button`
    color: ${(props) => props.theme.colors.textColor.white};
    background-color: ${(props) => props.theme.colors.backgroundColor.blue};
    border: none;
    border-radius: 4px;
    cursor: pointer;
    padding: 10px 20px;
  `,
  outlined: styled.button`
    color: ${(props) => props.theme.colors.textColor.black};
    background-color: ${(props) => props.theme.colors.backgroundColor.white};
    border: 1px solid ${(props) => props.theme.colors.borderColor.darkGray};
    border-radius: 4px;
    cursor: pointer;
    padding: 10px 20px;
  `,
  IconWrapper: styled.div`
    display: inline;
    margin-right: 5px;
  `,
};

export { S };
