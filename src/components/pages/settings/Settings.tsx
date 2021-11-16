import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import bytes from 'bytes';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { config } from 'config';
import { useSelector } from 'hooks/useTypedSelector';
import { Typography } from 'components/common/typography';
import { Button } from 'components/common/button';
import { Avatar } from 'components/common/avatar';
import { Switch } from 'components/common/switch';
import { getUserInfo, patchUser } from 'store/UserSlice';
import { S } from './Settings.styles';
import { UpdatePassword } from 'components/core/updatePassword';

const Settings: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { avatar, privateProfile, allowComments } = useSelector(getUserInfo);
  const [localPrivateProfile, setLocalPrivateProfile] = useState(privateProfile);
  const [localAllowComments, setLocalAllowComments] = useState(allowComments);

  const inputOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.files)
      if (event.currentTarget.files[0].size > bytes(config.env.maxAvatarSize)) toast.error('Image is too large');
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
    setLocalPrivateProfile(!privateProfile);
    try {
      dispatch(patchUser({ privateProfile: !privateProfile }));
    } catch (e) {
      setLocalPrivateProfile(privateProfile);
      console.log(e);
    }
  };

  const allowCommentsOnChange = () => {
    setLocalAllowComments(!allowComments);
    try {
      dispatch(patchUser({ allowComments: !allowComments }));
    } catch (e) {
      setLocalAllowComments(allowComments);
      console.log(e);
    }
  };

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

        <S.Input id="file" name="file" type="file" onChange={inputOnChange} accept={config.env.acceptImages} />
        <Button text="Settings.RemoveAvatar" variant="secondary" onClick={buttonOnClick} />
      </S.AvatarSettings>
      <S.ProfileToggles>
        <Switch label="Settings.PrivateProfile" onChange={privateProfileOnChange} checked={localPrivateProfile} />
        <Switch label="Settings.AllowComments" onChange={allowCommentsOnChange} checked={localAllowComments} />
      </S.ProfileToggles>
      <S.ProfileSettings></S.ProfileSettings>
      <S.PasswordSettings>
        <UpdatePassword />
      </S.PasswordSettings>
    </S.Container>
  );
};

export { Settings };
