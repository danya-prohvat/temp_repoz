import { useTranslation } from 'react-i18next';
import ReactTooltip from 'react-tooltip';
import { S } from './Input.styles';
import { Typography } from 'components/common/typography';
import { Icon } from 'components/common/icon';
import { FormikValues, FormikErrors } from 'formik';
import React from 'react';

export interface InputProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  errorMessage?: string;
  errors?: FormikErrors<FormikValues>;
  values?: FormikValues;
  inputName?: string;
  hasLabel?: boolean;
  label?: string;
  paddingLeft?: string;
  // TODO
  handleChange?: (e: any) => void;
}

const Input: React.FC<InputProps> = ({
  disabled,
  required,
  errorMessage,
  handleChange,
  errors,
  values,
  inputName,
  label,
  paddingLeft,
  hasLabel,
  ...rest
}) => {
  const { t } = useTranslation();

  return (
    <S.FieldWrapper>
      {hasLabel && (
        <S.FieldLabel htmlFor={inputName}>
          <Typography type="label1">
            {t(String(label))}
            {required && '*'}
          </Typography>
        </S.FieldLabel>
      )}
      <S.Field
        disabled={disabled}
        paddingLeft={paddingLeft}
        id={inputName}
        name={inputName}
        placeholder={t(String(label))}
        onChange={handleChange}
        value={values && inputName && values[inputName]}
        {...rest}
      />
      {String(errorMessage).length > 0 && (
        <S.ErrorMessage>
          <Typography type="caption2">{errorMessage}</Typography>
        </S.ErrorMessage>
      )}
      {errors && inputName && errors[inputName] && (
        <>
          <S.IconWrapper data-type="light" data-border={true} data-tip data-for={`${inputName}Error`}>
            <Icon type="warning" />
          </S.IconWrapper>
          <ReactTooltip borderColor="red" textColor="red" id={`${inputName}Error`} place="bottom" effect="solid">
            {errors && inputName && errors[inputName]}
          </ReactTooltip>
        </>
      )}
    </S.FieldWrapper>
  );
};

export { Input };
