import { useTranslation } from 'react-i18next';
import ReactTooltip from 'react-tooltip';
import { useTheme } from '@emotion/react';
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
  minWidth?: string;
  containerMaxWidth?: string;
  errorMode?: boolean;
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
  containerMaxWidth,
  ...rest
}) => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <S.FieldWrapper containerMaxWidth={containerMaxWidth}>
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
        errorMode={Boolean(errorMessage) || Boolean(errors && inputName && errors[inputName])}
        {...rest}
      />
      <S.ErrorMessage>
        <Typography type="caption2">{errorMessage}</Typography>
      </S.ErrorMessage>
      {errors && inputName && errors[inputName] && (
        <>
          <S.IconWrapper data-type="light" data-border={true} data-tip data-for={`${inputName}Error`}>
            <Icon type="warning" />
          </S.IconWrapper>
          <ReactTooltip
            borderColor={theme.colors.backgroundColor.red}
            textColor={theme.colors.backgroundColor.red}
            id={`${inputName}Error`}
            place="bottom"
            effect="solid"
          >
            {errors && inputName && errors[inputName]}
          </ReactTooltip>
        </>
      )}
    </S.FieldWrapper>
  );
};

export { Input };
