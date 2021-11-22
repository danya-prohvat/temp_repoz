import { Pearson as PersonProps } from 'types/types';
import { Typography } from 'components/common/typography';
import { locations } from 'routing/locations';
import { S } from './Pearson.styles';

const Pearson: React.FC<PersonProps> = ({ id, userName, description, avatar }) => {
  return (
    <S.Container to={locations.user.replace(':userId', String(id))}>
      <S.Img>
        <S.Avatar src={avatar} />
      </S.Img>
      <S.Text>
        <Typography type="heading3">{userName}</Typography>
        <Typography type="body2">{description}</Typography>
      </S.Text>
    </S.Container>
  );
};

export { Pearson };
