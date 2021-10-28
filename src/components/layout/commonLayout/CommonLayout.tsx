import { S } from './CommonLayout.styles';

const CommonLayout: React.FC = ({ children }) => {
  return <S.Container>{children}</S.Container>;
};

export { CommonLayout };
