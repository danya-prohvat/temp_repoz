import { default as DefaultLoader } from 'react-loader-spinner';
import { S } from './Loader.styles';
interface LoaderProps {
  height?: number;
  width?: number;
}

const Loader: React.FC<LoaderProps> = ({ height = 200, width = 200 }) => {
  return (
    <S.LoaderWrapper>
      <DefaultLoader type="Puff" color="#00BFFF" height={height} width={width} />
    </S.LoaderWrapper>
  );
};

export { Loader };
