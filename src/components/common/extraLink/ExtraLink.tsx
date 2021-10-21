import { S } from './ExtraLink.styles';

const ExtraLink: React.FC = (props) => {
  return <S.A>{props.children}</S.A>;
};

export { ExtraLink };
