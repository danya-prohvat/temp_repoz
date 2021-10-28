import { Typography } from 'components/common/typography';
import { Avatar } from 'components/common/avatar';
import { S } from './User.styles';

const User: React.FC = () => {
  return (
    <S.Container>
      <Avatar src={'https://reactjs.org/logo-og.png'} />
      <Typography type="body1Bold">@username</Typography>
    </S.Container>
  );
};

export { User };
