import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import ReactTooltip from 'react-tooltip';
import { Typography } from 'components/common/typography';
import { Icon } from 'components/common/icon';
import { S } from './SignInForm.styles';
import { signInThunk } from 'store/UserSlice';
import * as Yup from 'yup';

export interface SingInFormProps {
  email: string;
  password: string;
}

const SignInForm: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    email: Yup.string().email(t(`FormValidErrors.InvalidEmail`)).required(t(`FormValidErrors.Required`)),
    password: Yup.string().required(t(`FormValidErrors.Required`)),
  });

  const initialValuess: SingInFormProps = {
    email: '',
    password: '',
  };

  const formik = useFormik({
    initialValues: initialValuess,
    onSubmit: (value: SingInFormProps) => {
      dispatch(signInThunk(value));
    },
    validationSchema,
  });

  return (
    <S.Form onSubmit={formik.handleSubmit}>
      <S.FormTitle>
        <Typography type="heading2">{t(`SignIn.SignIn`)}</Typography>
      </S.FormTitle>
      <S.FormDescription>
        <Typography type="body2">{t(`SignIn.YouCanSignUpHere`)}</Typography>
      </S.FormDescription>

      <S.FieldWrapper>
        <S.FieldLabel htmlFor="email">
          <Typography type="label1">{t(`SignIn.Email*`)}</Typography>
        </S.FieldLabel>
        <S.Field
          id="email"
          name="email"
          type="email"
          placeholder={t(`SignIn.Email`)}
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email && (
          <>
            <S.IconWrapper data-type="light" data-border={true} data-tip data-for="emailError">
              <Icon type="warning" />
            </S.IconWrapper>
            <ReactTooltip borderColor="red" textColor="red" id="emailError" place="bottom" effect="solid">
              {formik.errors.email}
            </ReactTooltip>
          </>
        )}
      </S.FieldWrapper>

      <S.FieldWrapper>
        <S.FieldLabel htmlFor="password">
          <Typography type="label1">{t(`SignIn.Password*`)}</Typography>
        </S.FieldLabel>
        <S.Field
          id="password"
          name="password"
          type="password"
          placeholder={t(`SignIn.Password`)}
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password && (
          <>
            <S.IconWrapper data-type="light" data-border={true} data-tip data-for="passwordError">
              <Icon type="warning" />
            </S.IconWrapper>
            <ReactTooltip borderColor="red" textColor="red" id="passwordError" place="bottom" effect="solid">
              {formik.errors.password}
            </ReactTooltip>
          </>
        )}
      </S.FieldWrapper>

      <S.Button type="submit">
        <Typography type="button1">{t(`SignIn.SignIn`)}</Typography>
      </S.Button>
    </S.Form>
  );
};

export { SignInForm };
