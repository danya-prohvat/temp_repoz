import { LinkProps } from 'react-router-dom';
import { S } from './RouterLink.styles';

export interface RouterLinkProps extends LinkProps {
  isActive?: boolean;
}

const RouterLink: React.FC<RouterLinkProps> = ({ children, to, isActive }) => {
  return (
    <S.A isActive={isActive} to={to}>
      {children}
    </S.A>
  );
};

export { RouterLink };
