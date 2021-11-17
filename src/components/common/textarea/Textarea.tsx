import { useTranslation } from 'react-i18next';
import ReactTooltip from 'react-tooltip';
import { S } from './Textarea.styles';
import { Typography } from 'components/common/typography';
import { Icon } from 'components/common/icon';
import { FormikValues, FormikErrors } from 'formik';
import React from 'react';

export interface TextareaProps
  extends React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  errorMessage?: string;
  errors?: FormikErrors<FormikValues>;
  values?: FormikValues;
  textareaName?: string;
  hasLabel?: boolean;
  label?: string;
  // TODO
  handleChange?: (e: any) => void;
}

const Textarea: React.FC<TextareaProps> = ({
  disabled,
  required,
  handleChange,
  errors,
  values,
  textareaName,
  label,
  hasLabel,
  ...rest
}) => {
  const { t } = useTranslation();

  return (
    <S.FieldWrapper>
      {hasLabel && (
        <S.FieldLabel htmlFor={textareaName}>
          <Typography type="label1">
            {t(String(label))}
            {required && '*'}
          </Typography>
        </S.FieldLabel>
      )}
      <S.Field
        disabled={disabled}
        id={textareaName}
        name={textareaName}
        placeholder={t(String(label))}
        onChange={handleChange}
        value={values && textareaName && values[textareaName]}
        {...rest}
      />
      {errors && textareaName && errors[textareaName] && (
        <>
          <S.IconWrapper data-type="light" data-border={true} data-tip data-for={`${textareaName}Error`}>
            <Icon type="warning" />
          </S.IconWrapper>
          <ReactTooltip borderColor="red" textColor="red" id={`${textareaName}Error`} place="bottom" effect="solid">
            {errors && textareaName && errors[textareaName]}
          </ReactTooltip>
        </>
      )}
    </S.FieldWrapper>
  );
};

export { Textarea };
