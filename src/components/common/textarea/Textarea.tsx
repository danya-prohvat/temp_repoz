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
  textarea?: string;
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
  textarea,
  label,
  hasLabel,
  ...rest
}) => {
  const { t } = useTranslation();

  return (
    <S.FieldWrapper>
      {hasLabel && (
        <S.FieldLabel htmlFor={textarea}>
          <Typography type="label1">
            {t(String(label))}
            {required && '*'}
          </Typography>
        </S.FieldLabel>
      )}
      <S.Field
        disabled={disabled}
        id={textarea}
        name={textarea}
        placeholder={t(String(label))}
        onChange={handleChange}
        value={values && textarea && values[textarea]}
        {...rest}
      />
      {errors && textarea && errors[textarea] && (
        <>
          <S.IconWrapper data-type="light" data-border={true} data-tip data-for={`${textarea}Error`}>
            <Icon type="warning" />
          </S.IconWrapper>
          <ReactTooltip borderColor="red" textColor="red" id={`${textarea}Error`} place="bottom" effect="solid">
            {errors && textarea && errors[textarea]}
          </ReactTooltip>
        </>
      )}
    </S.FieldWrapper>
  );
};

export { Textarea };
