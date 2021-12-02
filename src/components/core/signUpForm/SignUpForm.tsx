import { useMemo } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { useSelector } from 'hooks/useTypedSelector';
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
  const { exist, errorMessage } = useSelector(checkNewUserName);

  const { t } = useTranslation();
  const dispatch = useDispatch();

  const validationSchema = useMemo(() => {
    return exist
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
  }, [exist, t]);

  const initialValues: SingUpFormProps = {
    userName: '',
    email: '',
    password: '',
    repeatPassword: '',
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: async (value: SingUpFormProps) => {
      await dispatch(exist ? signUpThunk(value) : checkNewUserNameThunk(value.userName));
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
          <Typography type={exist ? 'body2' : 'body2Bold'}>{t(`Sign-in/up.Nickname`)}</Typography>
        </S.FormStatusText>
        <S.FormStatusText>
          <Typography type={!exist ? 'body2' : 'body2Bold'}>{t(`Sign-in/up.Information`)}</Typography>
        </S.FormStatusText>
        <S.FormStatusProgressBar isFilled={exist} />
      </S.FormStatus>

      <S.FieldsContainer>
        <S.InputWrapper>
          <Input
            label="Sign-in/up.UserName"
            hasLabel={true}
            inputName="userName"
            type="text"
            handleChange={formik.handleChange}
            errors={formik.errors}
            values={formik.values}
            errorMessage={errorMessage}
            disabled={exist}
            minWidth={exist ? '' : '300px'}
            containerWidth={exist ? '' : '300px'}
            required={true}
          />
        </S.InputWrapper>

        {exist && (
          <>
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
              />
            </S.InputWrapper>
            <S.InputWrapper>
              <Input
                label="Sign-in/up.RepeatPassword"
                hasLabel={true}
                inputName="repeatPassword"
                type="password"
                handleChange={formik.handleChange}
                errors={formik.errors}
                values={formik.values}
                required={true}
              />
            </S.InputWrapper>
          </>
        )}
      </S.FieldsContainer>

      <Button text="Sign-in/up.SignUp" loading={formik.isSubmitting} variant="primary" />

      {!exist && (
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
