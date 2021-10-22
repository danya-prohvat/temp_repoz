import { S } from './Logo.styles';
import { Icon } from 'components/common/icon';
import { Typography } from 'components/common/typography';

const Logo: React.FC = () => {
  return (
    <S.Container>
      <S.Logo>
        <Icon type="M" />
      </S.Logo>
      <S.H1>
        <Typography> Media</Typography>
      </S.H1>
    </S.Container>
  );
};

export { Logo };
