import { useTranslation } from 'react-i18next';
import ReactTooltip from 'react-tooltip';
import { S } from './Input.styles';
import { Typography } from 'components/common/typography';
import { Icon } from 'components/common/icon';
import { FieldProps } from './Input.styles';
import { FormikHandlers, FormikValues, FormikErrors } from 'formik';

export interface InputProps extends FieldProps, Pick<FormikHandlers, 'handleChange'> {
  errorMessage?: string;
  errors: FormikErrors<FormikValues>;
  values: FormikValues;
  inputType: string;
  input: string;
  label: string;
}

const Input: React.FC<InputProps> = ({
  disabled,
  required,
  errorMessage,
  handleChange,
  errors,
  values,
  inputType,
  input,
  label,
}) => {
  const { t } = useTranslation();

  return (
    <S.FieldWrapper>
      <S.FieldLabel htmlFor={input}>
        <Typography type="label1">
          {t(`Sign-in/up.${label}`)}
          {required && '*'}
        </Typography>
      </S.FieldLabel>
      <S.Field
        disabled={disabled}
        id={input}
        name={input}
        type={inputType}
        placeholder={t(`Sign-in/up.${label}`)}
        onChange={handleChange}
        value={values[input]}
      />
      {String(errorMessage).length > 0 && (
        <S.ErrorMessage>
          <Typography type="caption2">{errorMessage}</Typography>
        </S.ErrorMessage>
      )}
      {errors[input] && (
        <>
          <S.IconWrapper data-type="light" data-border={true} data-tip data-for={`${input}Error`}>
            <Icon type="warning" />
          </S.IconWrapper>
          <ReactTooltip borderColor="red" textColor="red" id={`${input}Error`} place="bottom" effect="solid">
            {errors[input]}
          </ReactTooltip>
        </>
      )}
    </S.FieldWrapper>
  );
};

export { Input };
