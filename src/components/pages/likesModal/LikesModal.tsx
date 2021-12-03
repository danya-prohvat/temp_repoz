import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Typography } from 'components/common/typography';
import { useSelector } from 'hooks/useTypedSelector';
import { getLikesThunk, getLikes, getModalLoading } from 'store/PostSlice';
import { ModalLikesItem } from './modalLikesItem';
import { S } from './LikesModal.styles';
import { Loader } from 'components/common/loader';

const LikesModal: React.FC = () => {
  const { postId, userId } = useParams();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const likes = useSelector(getLikes);
  const modalLoading = useSelector(getModalLoading);

  useEffect(() => {
    dispatch(getLikesThunk({ postId: Number(postId), userId: Number(userId) }));
  }, [dispatch, postId, userId]);

  return (
    <S.Content>
      {modalLoading ? (
        <Loader height={70} width={70} />
      ) : likes.length > 0 ? (
        likes.map((like) => <ModalLikesItem key={like.id} id={like.id} avatar={like.avatar} userName={like.userName} />)
      ) : (
        <Typography type="body1">{t('Popup.NoLikesYet')}</Typography>
      )}
    </S.Content>
  );
};

export { LikesModal };
