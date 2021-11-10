import styled from '@emotion/styled';
import { InputProps } from './Input';

const S = {
  FieldWrapper: styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    flex: 1 1 auto;
  `,
  Field: styled.input<InputProps>`
    outline: none;
    border-radius: 2px;
    height: 40px;
    min-width: 300px;
    width: 100%;
    padding-left: 35px;
    display: flex;
    background-color: ${(props) => (props.disabled ? props.theme.colors.backgroundColor.darkGray : '')};
    border: 1px solid
      ${(props) => (props.disabled ? props.theme.colors.borderColor.darkGray : props.theme.colors.borderColor.gray)};
  `,
  FieldLabel: styled.label`
    margin-bottom: 6px;
  `,
  IconWrapper: styled.div`
    position: absolute;
    right: 10px;
    top: 40px;
    cursor: pointer;
  `,
  ErrorMessage: styled.span`
    color: ${(props) => props.theme.colors.textColor.red};
  `,
};

export { S };
