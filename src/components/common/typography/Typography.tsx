import { S } from './Typography.styles';
import { Theme } from 'styles/themes';

const Typography: React.FC = ({ children }) => {
  return <S.Span>{children}</S.Span>;
};

export { Typography };
