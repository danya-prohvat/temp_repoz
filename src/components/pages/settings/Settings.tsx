import { useTranslation } from 'react-i18next';
import bytes from 'bytes';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';

import { config } from 'config';
import { useSelector } from 'hooks/useTypedSelector';
import { Typography } from 'components/common/typography';
import { Button } from 'components/common/button';
import { Avatar } from 'components/common/avatar';
import { Checkbox } from 'components/common/checkobox';
import { Input } from 'components/common/input';
import { getUserInfo, patchUser } from 'store/UserSlice';
import { S } from './Settings.styles';

export interface updatePasswordProps {
  currentPassword: string;
  newPassword: string;
  repeatPassword: string;
}

const Settings: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { avatar, privateProfile, allowComments } = useSelector(getUserInfo);

  const inputOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.files)
      if (event.currentTarget.files[0].size > bytes(config.env.maxImageSize)) toast.error('Image is too large');
      else {
        const fd: FormData = new FormData();
        fd.append('avatar', event.currentTarget.files[0]);
        dispatch(patchUser(fd));
      }
  };

  const buttonOnClick = () => {
    dispatch(patchUser({ avatar: null }));
  };

  const privateProfileOnChange = () => {
    dispatch(patchUser({ privateProfile: !privateProfile }));
  };

  const allowCommentsOnChange = () => {
    dispatch(patchUser({ allowComments: !allowComments }));
  };

  const initialValues: updatePasswordProps = {
    currentPassword: '',
    newPassword: '',
    repeatPassword: '',
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (value: updatePasswordProps) => {
      console.log(value);
    },
  });

  return (
    <S.Container>
      <S.H2>
        <Typography type="heading2">{t(`Settings.MySettings`)}</Typography>
      </S.H2>
      <S.AvatarSettings>
        <Avatar src={avatar} size="200px" />

        <S.Label htmlFor="file">
          <Button text="Settings.EditAvatar" variant="primary" />
          button
        </S.Label>

        {/* <button>
          <S.Label htmlFor="file1">button</S.Label>
        </button> */}

        <S.Input
          id="file"
          name="file"
          type="file"
          onChange={inputOnChange}
          accept="image/png, image/jpeg, image/svg, image/gif"
        />
        <Button text="Settings.RemoveAvatar" variant="secondary" onClick={buttonOnClick} />
      </S.AvatarSettings>
      <S.ProfileToggles>
        <Checkbox label="Settings.PrivateProfile" onChange={privateProfileOnChange} checked={privateProfile} />
        <Checkbox label="Settings.AllowComments" onChange={allowCommentsOnChange} checked={allowComments} />
      </S.ProfileToggles>
      <S.ProfileSettings></S.ProfileSettings>
      <S.PasswordSettings>
        {/* <S.InputWrapper> */}
        <form onSubmit={formik.handleSubmit}>
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
            input="newPassword"
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
          {/* </S.InputWrapper> */}
          <Button text="Settings.Update" variant="primary" />
        </form>
      </S.PasswordSettings>
    </S.Container>
  );
};

export { Settings };
