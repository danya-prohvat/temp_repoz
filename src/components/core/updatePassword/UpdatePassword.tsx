import { useMemo } from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import { Input } from 'components/common/input';
import { Button } from 'components/common/button';
import { updatePasswordThunk } from 'store/UserSlice';
import { S } from './UpdatePassword.styles';

export interface updatePasswordProps {
  currentPassword: string;
  password: string;
  repeatPassword: string;
}

const UpdatePassword: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const validationSchema = useMemo(() => {
    return Yup.object({
      currentPassword: Yup.string().required(t(`Settings.Required`)),
      password: Yup.string()
        .notOneOf([Yup.ref('currentPassword'), null], t(`Settings.PasswordMustNotMatchWithCurrentPassword`))
        .required(t(`Settings.Required`)),
      repeatPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], t(`Settings.PasswordsMustMatch`))
        .required(t(`Settings.Required`)),
    });
  }, [t]);

  const initialValues: updatePasswordProps = {
    currentPassword: '',
    password: '',
    repeatPassword: '',
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: async (value: updatePasswordProps, { resetForm }) => {
      await dispatch(updatePasswordThunk(value));
      resetForm();
    },
    validationSchema,
  });

  return (
    <S.Form onSubmit={formik.handleSubmit}>
      <S.InputWrapper>
        <Input
          label="Settings.CurrentPassword"
          hasLabel={true}
          inputName="currentPassword"
          type="password"
          handleChange={formik.handleChange}
          errors={formik.errors}
          values={formik.values}
          required={true}
        />
      </S.InputWrapper>
      <S.InputWrapper>
        <Input
          label="Settings.NewPassword"
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
          label="Settings.RepeatNewPassword"
          hasLabel={true}
          inputName="repeatPassword"
          type="password"
          handleChange={formik.handleChange}
          errors={formik.errors}
          values={formik.values}
          required={true}
        />
      </S.InputWrapper>

      <S.ButtonWrapper>
        <Button text="Settings.Update" loading={formik.isSubmitting} variant="primary" />
      </S.ButtonWrapper>
    </S.Form>
  );
};

export { UpdatePassword };
