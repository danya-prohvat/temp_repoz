import { useMemo } from 'react';
import { useFormik } from 'formik';
import { pick } from 'lodash';
import { useDispatch } from 'react-redux';
import { useSelector } from 'hooks/useTypedSelector';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import { Input } from 'components/common/input';
import { Button } from 'components/common/button';
import { checkPassword, checkPasswordThunk, patchUser } from 'store/UserSlice';
import { S } from './UpdatePassword.styles';

export interface updatePasswordProps {
  currentPassword: string;
  password: string;
  repeatPassword: string;
}

const UpdatePassword: React.FC = () => {
  const { changePasswordIsExists, errorMessage } = useSelector(checkPassword);

  const { t } = useTranslation();
  const dispatch = useDispatch();

  const validationSchema = useMemo(() => {
    return !changePasswordIsExists
      ? Yup.object({
          currentPassword: Yup.string().required(t(`Settings.Required`)),
        })
      : Yup.object({
          password: Yup.string()
            .notOneOf([Yup.ref('currentPassword'), null], t(`Settings.PasswordMustNotMatchWithCurrentPassword`))
            .required(t(`Settings.Required`)),
          repeatPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], t(`Settings.PasswordsMustMatch`))
            .required(t(`Settings.Required`)),
        });
  }, [changePasswordIsExists, t]);

  const initialValues: updatePasswordProps = {
    currentPassword: '',
    password: '',
    repeatPassword: '',
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (value: updatePasswordProps, { resetForm }) => {
      if (!changePasswordIsExists) {
        dispatch(checkPasswordThunk(pick(value, ['currentPassword'])));
      } else {
        dispatch(patchUser(pick(value, ['password'])));
        resetForm();
      }
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
        errorMessage={errorMessage}
        disabled={changePasswordIsExists}
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
        disabled={!changePasswordIsExists}
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
        disabled={!changePasswordIsExists}
      />
      <Button text="Settings.Update" variant="primary" />
    </S.Form>
  );
};

export { UpdatePassword };
