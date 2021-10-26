import { S } from './Logo.styles';
import { Icon } from 'components/common/icon';
import { Typography } from 'components/common/typography';

const Logo: React.FC = () => {
  return (
    <S.Container>
      <S.Logo>
        <Icon type="logo" />
      </S.Logo>
      <S.H1>
        <Typography type="heading1Bold">Media</Typography>
      </S.H1>
    </S.Container>
  );
};

export { Logo };
