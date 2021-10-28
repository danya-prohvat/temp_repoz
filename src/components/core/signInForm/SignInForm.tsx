import { Form, Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { Typography } from 'components/common/typography';
import { S } from './SignInForm.styles';

interface SingInFormProps {
  email: string;
  password: string;
}

const SignInForm: React.FC = () => {
  const { t } = useTranslation();

  const initialValues: SingInFormProps = {
    email: '',
    password: '',
  };

  const formSubmit = (value: SingInFormProps): void => {
    console.log(value);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={formSubmit}>
      <S.Form>
        <S.FormTitle>
          <Typography type="heading2">{t(`SignIn`)}</Typography>
        </S.FormTitle>
        <S.FormDescription>
          <Typography type="body2">{t(`YouCanSignUpHere`)}</Typography>
        </S.FormDescription>

        <S.FieldWrapper>
          <S.FieldLabel htmlFor="email">
            <Typography type="label1">{t(`Email`)}</Typography>
          </S.FieldLabel>
          <S.Field id="email" name="email" type="email" placeholder="Email" />
        </S.FieldWrapper>

        <S.FieldWrapper>
          <S.FieldLabel htmlFor="password">
            <Typography type="label1">{t(`Password`)}</Typography>
          </S.FieldLabel>
          <S.Field id="password" name="password" type="password" placeholder="Password" />
        </S.FieldWrapper>

        <S.Button type="submit">
          <Typography type="button1">{t(`SignIn`)}</Typography>
        </S.Button>
      </S.Form>
    </Formik>
  );
};

export { SignInForm };
