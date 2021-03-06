import { useMemo } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { Typography } from 'components/common/typography';
import { S } from './SignInForm.styles';
import { Input } from 'components/common/input';
import { Button } from 'components/common/button';
import { signInThunk } from 'store/UserSlice';
import * as Yup from 'yup';
import { locations } from 'routing/locations';

export interface SingInFormProps {
  email: string;
  password: string;
}

const SignInForm: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const validationSchema = useMemo(() => {
    return Yup.object({
      email: Yup.string().email(t(`FormValidErrors.InvalidEmail`)).required(t(`FormValidErrors.Required`)),
      password: Yup.string().required(t(`FormValidErrors.Required`)),
    });
  }, [t]);

  const initialValues: SingInFormProps = {
    email: '',
    password: '',
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: async (value: SingInFormProps) => {
      await dispatch(signInThunk(value));
    },
    validationSchema,
  });

  return (
    <S.Form onSubmit={formik.handleSubmit}>
      <S.FormTitle>
        <Typography type="heading2">{t(`Sign-in/up.SignIn`)}</Typography>
      </S.FormTitle>
      <S.FormDescription>
        <Typography type="body2">
          <Trans
            defaults={t(`Sign-in/up.YouCan`)}
            values={{ link: t(`Sign-in/up.SignUpHere`) }}
            components={[<S.Link to={locations.signUp} key="link"></S.Link>]}
          />
        </Typography>
      </S.FormDescription>
      <S.InputWrapper>
        <Input
          label="Sign-in/up.Email"
          hasLabel={true}
          inputName="email"
          type="email"
          handleChange={formik.handleChange}
          errors={formik.errors}
          values={formik.values}
          required={true}
          minWidth="300px"
        />
      </S.InputWrapper>
      <S.InputWrapper>
        <Input
          label="Sign-in/up.Password"
          hasLabel={true}
          inputName="password"
          type="password"
          handleChange={formik.handleChange}
          errors={formik.errors}
          values={formik.values}
          required={true}
          minWidth="300px"
        />
      </S.InputWrapper>
      <Button text="Sign-in/up.SignIn" loading={formik.isSubmitting} variant="primary" />
    </S.Form>
  );
};

export { SignInForm };
