import { S } from './ExternalLink.styles';

interface ExternalLinkProps {
  src: string;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ src, children }) => {
  return <S.Container href={src}>{children}</S.Container>;
};

export { ExternalLink };
