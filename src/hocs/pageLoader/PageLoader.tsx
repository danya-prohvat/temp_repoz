import { useEffect, useState } from 'react';
import { useSelector } from 'hooks/useTypedSelector';
import { getLoading } from 'store/UiSlice';
import { Loader } from 'components/common/loader';
import { S } from './PageLoader.styles';

const PageLoader: React.FC = ({ children }) => {
  const loading = useSelector(getLoading);

  const [content, setContent] = useState<React.ReactNode>(
    <S.Container>
      <Loader />
    </S.Container>,
  );

  useEffect((): any => {
    if (loading) {
      setContent(
        <S.Container>
          <Loader />
        </S.Container>,
      );
    } else {
      setContent(children);
    }
  }, [loading, children]);

  return <>{content}</>;
};

export { PageLoader };
