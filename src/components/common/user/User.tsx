import { Typography } from 'components/common/typography';
import { S } from './User.styles';

const User: React.FC = () => {
  return (
    <S.Container>
      <Typography type="body1Bold">@username</Typography>
    </S.Container>
  );
};

export { User };
