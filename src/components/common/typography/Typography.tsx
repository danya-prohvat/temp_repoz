import { S } from './Typography.styles';
import { Theme } from 'styles/themes';

const Typography: React.FC<{ fontType?: string }> = ({ children, fontType }) => {
  console.log(fontType);

  return <S.Span>{children}</S.Span>;
};

export { Typography };
