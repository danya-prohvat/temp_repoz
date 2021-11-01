import { useSelector } from 'hooks/useTypedSelector';
import { Typography } from 'components/common/typography';
import { Avatar } from 'components/common/avatar';
import { S } from './User.styles';
import { getUserName } from 'store/UserSlice';

const User: React.FC = () => {
  const userName = useSelector(getUserName);

  return (
    <S.Container>
      <Avatar src={'https://reactjs.org/logo-og.png'} />
      <Typography type="body1Bold">{userName}</Typography>
    </S.Container>
  );
};

export { User };
