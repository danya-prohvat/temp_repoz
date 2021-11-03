import { S } from './PagesSeparator.styles';
import { PagesSeparatorProps } from './PagesSeparator.styles';

const PagesSeparator: React.FC<PagesSeparatorProps> = ({ marginBottom, marginTop }) => {
  return <S.Hr marginBottom={marginBottom} marginTop={marginTop}></S.Hr>;
};

export { PagesSeparator };
