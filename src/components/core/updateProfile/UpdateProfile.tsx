import { useMemo } from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { useSelector } from 'hooks/useTypedSelector';
import { useTranslation } from 'react-i18next';
import { Input } from 'components/common/input';
import { Textarea } from 'components/common/textarea';
import { Button } from 'components/common/button';
import { checkNewUserName, patchUser } from 'store/UserSlice';
import { S } from './UpdateProfile.styles';

export interface UpdateProfileProps {
  userName: string;
  email: string;
  firstName: string;
  lastName: string;
  description: string;
}

const UpdateProfile: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { errorMessage } = useSelector(checkNewUserName);

  const validationSchema = useMemo(() => {
    return Yup.object({
      userName: Yup.string().required(t(`Settings.Required`)),
      email: Yup.string().email(t(`Settings.InvalidEmail`)).required(t(`Settings.Required`)),
    });
  }, [t]);

  const initialValues: UpdateProfileProps = {
    userName: '',
    email: '',
    firstName: '',
    lastName: '',
    description: '',
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (value: UpdateProfileProps) => {
      dispatch(patchUser(value));
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
            input="userName"
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
          input="firstName"
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
            input="email"
            type="email"
            handleChange={formik.handleChange}
            errors={formik.errors}
            values={formik.values}
          />
        </S.TopInput>
        <Input
          label="Settings.LastName"
          hasLabel={true}
          input="lastName"
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
          textarea="description"
          handleChange={formik.handleChange}
          errors={formik.errors}
          values={formik.values}
        />
      </S.Column>

      <S.ButtonWrapper>
        <Button text="Settings.Update" variant="primary" />
      </S.ButtonWrapper>
    </S.Form>
  );
};

export { UpdateProfile };
