import styled from '@emotion/styled';
import { TextareaProps } from './Textarea';

const S = {
  FieldWrapper: styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    flex: 1 1 auto;
  `,
  Field: styled.textarea<TextareaProps>`
    outline: none;
    border-radius: 2px;
    height: 100%;
    min-width: 300px;
    width: 100%;
    padding-left: 15px;
    padding-top: 10px;
    display: flex;
    background-color: ${(props) => (props.disabled ? props.theme.colors.backgroundColor.darkGray : '')};
    border: 1px solid
      ${(props) => (props.disabled ? props.theme.colors.borderColor.darkGray : props.theme.colors.borderColor.gray)};
    resize: none;
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
