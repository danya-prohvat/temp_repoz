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
import { getUserInfo, patchUser, patchUserAvatar } from 'store/UserSlice';
import { S } from './Settings.styles';
import { UpdatePassword } from 'components/core/updatePassword';
import { UpdateProfile } from 'components/core/updateProfile';

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
        dispatch(patchUserAvatar(fd));
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
      <S.PageTittle>
        <Typography type="heading2">{t(`Settings.MySettings`)}</Typography>
      </S.PageTittle>
      <S.AvatarSettings>
        <Avatar iconSize="84px" src={avatar || ''} size="200px" />

        <S.Label htmlFor="file">
          <Typography type="button1">{t('Settings.EditAvatar')}</Typography>
        </S.Label>

        <S.Input id="file" name="file" type="file" onChange={inputOnChange} accept={config.env.acceptImages} />
        <Button text="Settings.RemoveAvatar" variant="secondary" onClick={buttonOnClick} />
      </S.AvatarSettings>
      <S.ProfileToggles>
        <S.SwitchWrapper>
          <Switch label="Settings.PrivateProfile" onChange={privateProfileOnChange} checked={localPrivateProfile} />
        </S.SwitchWrapper>
        <S.SwitchWrapper>
          <Switch label="Settings.AllowComments" onChange={allowCommentsOnChange} checked={localAllowComments} />
        </S.SwitchWrapper>
        <S.SwitchWrapper></S.SwitchWrapper>
        <S.SwitchWrapper></S.SwitchWrapper>
      </S.ProfileToggles>
      <S.ProfileSettings>
        <UpdateProfile />
      </S.ProfileSettings>
      <S.PasswordSettings>
        <UpdatePassword />
      </S.PasswordSettings>
    </S.Container>
  );
};

export { Settings };
