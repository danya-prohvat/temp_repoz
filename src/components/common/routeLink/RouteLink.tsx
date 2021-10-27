import { S } from './RouteLink.styles';

export interface RouteLinkProps {
  to: string;
  isActive?: boolean;
}

const RouteLink: React.FC<RouteLinkProps> = ({ children, to, isActive }) => {
  return (
    <S.A isActive={isActive} to={to}>
      {children}
    </S.A>
  );
};

export { RouteLink };
