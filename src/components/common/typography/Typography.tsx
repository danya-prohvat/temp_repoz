import { typography } from 'styles/themes';
import { S } from './Typography.styles';

export interface TypographyProps {
  type: keyof typeof typography;
}

const Typography: React.FC<TypographyProps> = ({ children, type }) => {
  return <S.Span type={type}>{children}</S.Span>;
};

export { Typography };
