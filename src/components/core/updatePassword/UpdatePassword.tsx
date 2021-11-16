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
    onSubmit: (value: updatePasswordProps, { resetForm }) => {
      dispatch(updatePasswordThunk(value));
      resetForm();
    },
    validationSchema,
  });

  return (
    <S.Form onSubmit={formik.handleSubmit}>
      <Input
        label="Settings.CurrentPassword"
        hasLabel={true}
        input="currentPassword"
        type="password"
        handleChange={formik.handleChange}
        errors={formik.errors}
        values={formik.values}
        required={true}
      />
      <Input
        label="Settings.NewPassword"
        hasLabel={true}
        input="password"
        type="password"
        handleChange={formik.handleChange}
        errors={formik.errors}
        values={formik.values}
        required={true}
      />
      <Input
        label="Settings.RepeatNewPassword"
        hasLabel={true}
        input="repeatPassword"
        type="password"
        handleChange={formik.handleChange}
        errors={formik.errors}
        values={formik.values}
        required={true}
      />
      <Button text="Settings.Update" variant="primary" />
    </S.Form>
  );
};

export { UpdatePassword };
