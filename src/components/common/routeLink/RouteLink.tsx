import { S } from './RouteLink.styles';

interface RouteLinkProps {
  to: string;
}

const RouteLink: React.FC<RouteLinkProps> = ({ children, to }) => {
  return <S.A to={to}>{children}</S.A>;
};

export { RouteLink };
