import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { Typography } from 'components/common/typography';
import { S } from './SignInForm.styles';
import { signInThunk } from 'store/UserSlice';

export interface SingInFormProps {
  email: string;
  password: string;
}

const SignInForm: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const initialValuess: SingInFormProps = {
    email: '',
    password: '',
  };

  const formik = useFormik({
    initialValues: initialValuess,
    onSubmit: (value: SingInFormProps) => {
      dispatch(signInThunk(value));
    },
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
      </S.FieldWrapper>

      <S.Button type="submit">
        <Typography type="button1">{t(`SignIn.SignIn`)}</Typography>{' '}
      </S.Button>
    </S.Form>
  );
};

export { SignInForm };
