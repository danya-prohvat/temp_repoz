import { LinkProps } from 'react-router-dom';
import { S } from './RouterLink.styles';

export interface RouterLinkProps extends LinkProps {
  isactive?: boolean;
}

const RouterLink: React.FC<RouterLinkProps> = ({ children, to, isactive, ...rest }) => {
  return (
    <S.A isactive={isactive} to={to} {...rest}>
      {children}
    </S.A>
  );
};

export { RouterLink };
