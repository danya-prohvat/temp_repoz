import { useTranslation } from 'react-i18next';
import ReactTooltip from 'react-tooltip';
import { S } from './Input.styles';
import { Typography } from 'components/common/typography';
import { Icon } from 'components/common/icon';
// import { FormikProps } from 'formik';

export interface InputProps {
  isDisabled?: boolean;
  isRequired?: boolean;
  errorMessage?: string;
  // formik: FormikProps;
  formik: any;
  inputType: string;
  input: string;
  label: string;
}

const Input: React.FC<InputProps> = ({ isDisabled, isRequired, errorMessage, formik, inputType, input, label }) => {
  const { t } = useTranslation();

  return (
    <S.FieldWrapper>
      <S.FieldLabel htmlFor={input}>
        <Typography type="label1">
          {t(`Sign-in/up.${label}`)}
          {isRequired && '*'}
        </Typography>
      </S.FieldLabel>
      <S.Field
        isDisabled={isDisabled}
        disabled={isDisabled}
        id={input}
        name={input}
        type={inputType}
        placeholder={t(`Sign-in/up.${label}`)}
        onChange={formik.handleChange}
        value={formik.values[input]}
      />
      {String(errorMessage).length > 0 && (
        <S.ErrorMessage>
          <Typography type="caption2">{errorMessage}</Typography>
        </S.ErrorMessage>
      )}
      {formik.errors[input] && (
        <>
          <S.IconWrapper data-type="light" data-border={true} data-tip data-for={`${input}Error`}>
            <Icon type="warning" />
          </S.IconWrapper>
          <ReactTooltip borderColor="red" textColor="red" id={`${input}Error`} place="bottom" effect="solid">
            {formik.errors[input]}
          </ReactTooltip>
        </>
      )}
    </S.FieldWrapper>
  );
};

export { Input };
