import { default as DefaultLoader } from 'react-loader-spinner';
import { S } from './Loader.styles';

const Loader: React.FC = () => {
  return (
    <S.LoaderWrapper>
      <DefaultLoader type="Puff" color="#00BFFF" height={200} width={200} />
    </S.LoaderWrapper>
  );
};

export { Loader };
