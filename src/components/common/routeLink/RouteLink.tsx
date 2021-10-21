import { S } from './RouteLink.styles';

const RouteLink: React.FC = (props) => {
  return <S.A>{props.children}</S.A>;
};

export { RouteLink };
