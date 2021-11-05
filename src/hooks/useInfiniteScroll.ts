import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { config } from 'config';

export interface UseInfiniteScrollProps {
  loader: boolean;
  isAuthorized: boolean;
  callBack: () => void;
}

const useInfiniteScroll = ({ loader, isAuthorized, callBack }: UseInfiniteScrollProps): void => {
  const dispatch = useDispatch();

  useEffect(() => {
    const detectBottomScroll = () => {
      if (
        !loader &&
        document.body.scrollHeight - config.constants.scrollDetectDistance <=
          document.documentElement.scrollTop + document.documentElement.clientHeight
      )
        dispatch(callBack());
    };
    isAuthorized && document.addEventListener('scroll', detectBottomScroll);
    return () => document.removeEventListener('scroll', detectBottomScroll);
  }, [dispatch, isAuthorized, loader, callBack]);
  return;
};

export { useInfiniteScroll };
