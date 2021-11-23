import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ReactTooltip from 'react-tooltip';
import { useTheme } from '@emotion/react';
import { S } from './Input.styles';
import { Typography } from 'components/common/typography';
import { Icon } from 'components/common/icon';
import { FormikValues, FormikErrors } from 'formik';

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
  type,
  ...rest
}) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [inputType, setInputType] = useState(type);

  const PasswordIconOnClick = () => {
    setInputType('text');
  };

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
      {type === 'password' && (
        <S.PasswordIcon onClick={PasswordIconOnClick}>
          <Icon type={inputType === 'password' ? 'lock-close' : 'lock-open'} />
        </S.PasswordIcon>
      )}
      <S.Field
        disabled={disabled}
        paddingLeft={paddingLeft}
        id={inputName}
        name={inputName}
        placeholder={t(String(label))}
        onChange={handleChange}
        value={values && inputName && values[inputName]}
        type={inputType}
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
