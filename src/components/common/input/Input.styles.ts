import styled from '@emotion/styled';
import { InputProps } from './Input';

const S = {
  FieldWrapper: styled.div<InputProps>`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    min-width: ${(props) => props.containerWidth};
    flex: 1 1 auto;
  `,
  Field: styled.input<InputProps>`
    outline: none;
    border-radius: 2px;
    height: 40px;
    width: 100%;
    min-width: ${(props) => props.minWidth || ''};
    padding-left: ${(props) => props.paddingLeft || '15px'};
    display: flex;
    background-color: ${(props) => (props.disabled ? props.theme.colors.backgroundColor.darkGray : '')};
    border: 1px solid
      ${(props) =>
        props.errorMode
          ? props.theme.colors.borderColor.red
          : props.disabled
          ? props.theme.colors.borderColor.darkGray
          : props.theme.colors.borderColor.gray};
  `,
  FieldLabel: styled.label`
    margin-bottom: 6px;
  `,
  IconWrapper: styled.div`
    position: absolute;
    right: 10px;
    top: 40px;
    cursor: pointer;
    color: ${(props) => props.theme.colors.textColor.red};
  `,
  ErrorMessage: styled.span`
    color: ${(props) => props.theme.colors.textColor.red};
    position: absolute;
    bottom: 0;
    min-width: 300px;
    transform: translateY(100%);
  `,
};

export { S };
