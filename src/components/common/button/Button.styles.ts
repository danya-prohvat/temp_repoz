import styled from '@emotion/styled';
import { ButtonProps } from './Button';

interface TextWrapperProps {
  opacity: boolean;
}

const S: Record<Required<ButtonProps>['variant'] | 'IconWrapper' | 'LoaderWrapper' | 'TextWrapper', any> = {
  primary: styled.button`
    color: ${(props) => props.theme.colors.textColor.white};
    background-color: ${(props) => props.theme.colors.backgroundColor.red};
    border: none;
    border-radius: 4px;
    cursor: pointer;
    padding: 10px 20px;
    display: flex;
    align-items: center;
  `,
  secondary: styled.button`
    color: ${(props) => props.theme.colors.textColor.white};
    background-color: ${(props) => props.theme.colors.backgroundColor.blue};
    border: none;
    border-radius: 4px;
    cursor: pointer;
    padding: 10px 20px;
    display: flex;
    align-items: center;
  `,
  outlined: styled.button`
    color: ${(props) => props.theme.colors.textColor.black};
    background-color: ${(props) => props.theme.colors.backgroundColor.white};
    border: 1px solid ${(props) => props.theme.colors.borderColor.darkGray};
    border-radius: 4px;
    cursor: pointer;
    padding: 10px 20px;
    display: flex;
    align-items: center;
  `,
  IconWrapper: styled.div`
    display: inline;
    margin-right: 5px;
    font-size: 16px;
  `,
  LoaderWrapper: styled.div`
    margin-left: 10px;
    width: 20px;
    height: 20px;
  `,
  TextWrapper: styled.div<TextWrapperProps>`
    opacity: ${(props) => (props.opacity ? '0' : '1')};
  `,
};

export { S };
