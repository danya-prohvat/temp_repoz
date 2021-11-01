// import { useMemo } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useSelector } from 'hooks/useTypedSelector';
import { useFormik } from 'formik';
import ReactTooltip from 'react-tooltip';
import { Typography } from 'components/common/typography';
import { Icon } from 'components/common/icon';
import { S } from './SignUpForm.styles';
import { checkNewUserNameThunk, checkNewUserName } from 'store/UserSlice';
// import * as Yup from 'yup';
import { locations } from 'routing/locations';

export interface SingUpFormProps {
  userName: string;
  email?: string;
  password?: string;
  repeatPassword?: string;
}

const SignUpForm: React.FC = () => {
  const { userNameIsExists, errorMessage } = useSelector(checkNewUserName);

  const { t } = useTranslation();
  const dispatch = useDispatch();

  // const validationSchema = useMemo(() => {
  //   return Yup.object({
  // email: Yup.string().email(t(`FormValidErrors.InvalidEmail`)).required(t(`FormValidErrors.Required`)),
  // password: Yup.string().required(t(`FormValidErrors.Required`)),
  //   });
  // }, [t]);

  const initialValues: SingUpFormProps = {
    userName: '',
    email: '',
    password: '',
    repeatPassword: '',
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (value: SingUpFormProps) => {
      dispatch(checkNewUserNameThunk(value.userName));
    },
    // validationSchema,
  });

  return (
    <S.Form onSubmit={formik.handleSubmit}>
      <S.FormTitle>
        <Typography type="heading2">{t(`Sign-in/up.WelcomeToMEDIA`)}</Typography>
      </S.FormTitle>

      <S.FormStatus>
        <S.FormStatusText>
          <Typography type="body2">{t(`Sign-in/up.Nickname`)}</Typography>
        </S.FormStatusText>
        <S.FormStatusText>
          <Typography type="body2">{t(`Sign-in/up.Information`)}</Typography>
        </S.FormStatusText>
        <S.FormStatusProgressBar isFilled={userNameIsExists} />
      </S.FormStatus>

      <S.FieldsContainer>
        <S.FieldWrapper>
          <S.FieldLabel htmlFor="userName">
            <Typography type="label1">{t(`Sign-in/up.userName*`)}</Typography>
          </S.FieldLabel>
          <S.Field
            id="userName"
            name="userName"
            type="text"
            placeholder={t(`Sign-in/up.userName`)}
            onChange={formik.handleChange}
            value={formik.values.userName}
          />
          {errorMessage.length > 0 && errorMessage}
        </S.FieldWrapper>

        {userNameIsExists && (
          <>
            <S.FieldWrapper>
              <S.FieldLabel htmlFor="email">
                <Typography type="label1">{t(`Sign-in/up.Email*`)}</Typography>
              </S.FieldLabel>
              <S.Field
                id="email"
                name="email"
                type="email"
                placeholder={t(`Sign-in/up.Email`)}
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
                <Typography type="label1">{t(`Sign-in/up.Password*`)}</Typography>
              </S.FieldLabel>
              <S.Field
                id="password"
                name="password"
                type="password"
                placeholder={t(`Sign-in/up.Password`)}
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

            <S.FieldWrapper>
              <S.FieldLabel htmlFor="repeatPassword">
                <Typography type="label1">{t(`Sign-in/up.RepeatPassword*`)}</Typography>
              </S.FieldLabel>
              <S.Field
                id="repeatPassword"
                name="repeatPassword"
                type="password"
                placeholder={t(`Sign-in/up.RepeatPassword`)}
                onChange={formik.handleChange}
                value={formik.values.repeatPassword}
              />
              {formik.errors.repeatPassword && (
                <>
                  <S.IconWrapper data-type="light" data-border={true} data-tip data-for="repeatPasswordError">
                    <Icon type="warning" />
                  </S.IconWrapper>
                  <ReactTooltip
                    borderColor="red"
                    textColor="red"
                    id="repeatPasswordError"
                    place="bottom"
                    effect="solid"
                  >
                    {formik.errors.repeatPassword}
                  </ReactTooltip>
                </>
              )}
            </S.FieldWrapper>
          </>
        )}
      </S.FieldsContainer>

      <S.Button type="submit">
        <Typography type="button1">{t(`Sign-in/up.SignUp`)}</Typography>
      </S.Button>
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
