import { useEffect, useState } from 'react';
import { useSelector } from 'hooks/useTypedSelector';
import { checkAuthorization } from 'store/UserSlice';
import { Loader } from 'components/common/loader';
import { S } from './GlobalLoader.styles';

const GlobalLoader: React.FC = ({ children }) => {
  const isAuthorized = useSelector(checkAuthorization);

  const [content, setContent] = useState<React.ReactNode>(
    <S.Container>
      <Loader />
    </S.Container>,
  );

  useEffect(() => {
    if (!isAuthorized && localStorage.getItem('token'))
      setContent(
        <S.Container>
          <Loader />
        </S.Container>,
      );
    else setContent(children);
  }, [isAuthorized, children]);

  return <>{content}</>;
};

export { GlobalLoader };
