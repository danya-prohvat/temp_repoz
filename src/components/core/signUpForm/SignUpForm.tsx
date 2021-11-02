import { useMemo } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useSelector } from 'hooks/useTypedSelector';
import { useFormik } from 'formik';
import { Typography } from 'components/common/typography';
import { S } from './SignUpForm.styles';
import { Input } from 'components/common/input';
import { Button } from 'components/common/button';
import { checkNewUserNameThunk, signUpThunk, checkNewUserName } from 'store/UserSlice';
import * as Yup from 'yup';
import { locations } from 'routing/locations';

export interface SingUpFormProps {
  userName: string;
  email: string;
  password: string;
  repeatPassword: string;
}

const SignUpForm: React.FC = () => {
  const { userNameIsExists, errorMessage } = useSelector(checkNewUserName);

  const { t } = useTranslation();
  const dispatch = useDispatch();

  const validationSchema = useMemo(() => {
    return userNameIsExists
      ? Yup.object({
          userName: Yup.string().required(t(`FormValidErrors.Required`)),
          email: Yup.string().email(t(`FormValidErrors.InvalidEmail`)).required(t(`FormValidErrors.Required`)),
          password: Yup.string().required(t(`FormValidErrors.Required`)),
          repeatPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], t(`FormValidErrors.PasswordsMustMatch`))
            .required(t(`FormValidErrors.Required`)),
        })
      : Yup.object({
          userName: Yup.string().required(t(`FormValidErrors.Required`)),
        });
  }, [userNameIsExists, t]);

  const initialValues: SingUpFormProps = {
    userName: '',
    email: '',
    password: '',
    repeatPassword: '',
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (value: SingUpFormProps) => {
      dispatch(userNameIsExists ? signUpThunk(value) : checkNewUserNameThunk(value.userName));
    },
    validationSchema,
  });

  return (
    <S.Form onSubmit={formik.handleSubmit}>
      <S.FormTitle>
        <Typography type="heading2">{t(`Sign-in/up.WelcomeToMEDIA`)}</Typography>
      </S.FormTitle>

      <S.FormStatus>
        <S.FormStatusText>
          <Typography type={userNameIsExists ? 'body2' : 'body2Bold'}>{t(`Sign-in/up.Nickname`)}</Typography>
        </S.FormStatusText>
        <S.FormStatusText>
          <Typography type={!userNameIsExists ? 'body2' : 'body2Bold'}>{t(`Sign-in/up.Information`)}</Typography>
        </S.FormStatusText>
        <S.FormStatusProgressBar isFilled={userNameIsExists} />
      </S.FormStatus>

      <S.FieldsContainer>
        <Input
          label="UserName"
          input="userName"
          type="text"
          handleChange={formik.handleChange}
          errors={formik.errors}
          values={formik.values}
          errorMessage={errorMessage}
          disabled={userNameIsExists}
        />

        {userNameIsExists && (
          <>
            <Input
              label="Email"
              input="email"
              type="email"
              handleChange={formik.handleChange}
              errors={formik.errors}
              values={formik.values}
            />
            <Input
              label="Password"
              input="password"
              type="password"
              handleChange={formik.handleChange}
              errors={formik.errors}
              values={formik.values}
            />
            <Input
              label="RepeatPassword"
              input="repeatPassword"
              type="password"
              handleChange={formik.handleChange}
              errors={formik.errors}
              values={formik.values}
            />
          </>
        )}
      </S.FieldsContainer>

      <Button text="Sign-in/up.SignUp" color="primary" />

      {!userNameIsExists && (
        <S.FormDescription>
          <Typography type="body2">
            <Trans
              defaults={t(`Sign-in/up.IfYouAlreadyHaveAProfileYouCan`)}
              values={{ link: t(`Sign-in/up.SignInHere`) }}
              components={[<S.Link to={locations.signIn} key="link"></S.Link>]}
            />
          </Typography>
        </S.FormDescription>
      )}
    </S.Form>
  );
};

export { SignUpForm };
