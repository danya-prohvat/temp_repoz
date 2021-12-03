import { useMemo } from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { useSelector } from 'hooks/useTypedSelector';
import { useTranslation } from 'react-i18next';
import { Input } from 'components/common/input';
import { Textarea } from 'components/common/textarea';
import { Button } from 'components/common/button';
import { checkNewUserName, patchUser, getUserInfo } from 'store/UserSlice';
import { S } from './UpdateProfile.styles';

export interface UpdateProfileProps {
  userName: string;
  email: string;
  firstName: string;
  lastName: string;
  profileDescription: string;
}

const UpdateProfile: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { errorMessage } = useSelector(checkNewUserName);
  const { userName, email, profileDescription, firstName, lastName } = useSelector(getUserInfo);

  const validationSchema = useMemo(() => {
    return Yup.object({
      userName: Yup.string().required(t(`Settings.Required`)),
      email: Yup.string().email(t(`Settings.InvalidEmail`)).required(t(`Settings.Required`)),
    });
  }, [t]);

  const initialValues: UpdateProfileProps = {
    userName: userName,
    email: email,
    firstName: firstName,
    lastName: lastName,
    profileDescription: profileDescription,
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: async (value: UpdateProfileProps) => {
      await dispatch(patchUser(value));
    },
    validationSchema,
  });

  return (
    <S.Form onSubmit={formik.handleSubmit}>
      <S.Column>
        <S.TopInput>
          <Input
            label="Settings.Username"
            hasLabel={true}
            inputName="userName"
            type="text"
            handleChange={formik.handleChange}
            errors={formik.errors}
            values={formik.values}
            errorMessage={errorMessage}
          />
        </S.TopInput>
        <Input
          label="Settings.FirstName"
          hasLabel={true}
          inputName="firstName"
          type="text"
          handleChange={formik.handleChange}
          errors={formik.errors}
          values={formik.values}
        />
      </S.Column>
      <S.Column>
        <S.TopInput>
          <Input
            label="Settings.Email"
            hasLabel={true}
            inputName="email"
            type="email"
            handleChange={formik.handleChange}
            errors={formik.errors}
            values={formik.values}
          />
        </S.TopInput>
        <Input
          label="Settings.LastName"
          hasLabel={true}
          inputName="lastName"
          type="text"
          handleChange={formik.handleChange}
          errors={formik.errors}
          values={formik.values}
        />
      </S.Column>
      <S.Column>
        <Textarea
          label="Settings.Description"
          hasLabel={true}
          textareaName="profileDescription"
          handleChange={formik.handleChange}
          errors={formik.errors}
          values={formik.values}
        />
      </S.Column>

      <S.ButtonWrapper>
        <Button text="Settings.Update" loading={formik.isSubmitting} variant="primary" />
      </S.ButtonWrapper>
    </S.Form>
  );
};

export { UpdateProfile };
