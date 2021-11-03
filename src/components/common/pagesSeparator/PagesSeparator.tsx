import { S } from './PagesSeparator.styles';

export interface PagesSeparatorProps {
  marginTop?: string;
  marginBottom?: string;
}

const PagesSeparator: React.FC<PagesSeparatorProps> = ({ marginBottom, marginTop }) => {
  return <S.Hr marginBottom={marginBottom} marginTop={marginTop}></S.Hr>;
};

export { PagesSeparator };
