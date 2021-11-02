import styled from '@emotion/styled';

export interface FieldProps {
  disabled?: boolean;
  required?: boolean;
}

const S = {
  FieldWrapper: styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    margin-left: 10px;
    margin-right: 10px;
  `,
  Field: styled.input<FieldProps>`
    outline: none;
    border-radius: 2px;
    height: 40px;
    width: 280px;
    padding-left: 15px;
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
    margin-top: 4px;
    color: ${(props) => props.theme.colors.textColor.red};
  `,
};

export { S };
