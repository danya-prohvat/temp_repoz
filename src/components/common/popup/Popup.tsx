import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Typography } from 'components/common/typography';
import { useSelector } from 'hooks/useTypedSelector';
import { getLikesThunk, getLikes } from 'store/PostSlice';
import { S } from './Popup.styles';
import { Icon } from 'components/common/icon';
import { PopupItem } from 'components/common/popupItem';

interface PopupProps {
  open: boolean;
  closePopupOnClick: () => void;
}

const Popup: React.FC<PopupProps> = ({ open, closePopupOnClick }) => {
  const [modalIsOpen, setModalIsOpen] = React.useState(open);
  const { postId, userId } = useParams();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const likes = useSelector(getLikes);

  useEffect(() => {
    dispatch(getLikesThunk({ postId: Number(postId), userId: Number(userId) }));
  }, [dispatch, postId, userId]);

  const closeModal = () => {
    closePopupOnClick();
    setModalIsOpen(false);
  };

  return (
    <S.Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
      <S.Content>
        <S.Button onClick={closeModal}>
          <Icon type="x" />
        </S.Button>
        {likes.length > 0 ? (
          likes.map((like) => <PopupItem key={like.id} id={like.id} avatar={like.avatar} userName={like.userName} />)
        ) : (
          <Typography type="body1">{t('Popup.NoLikesYet')}</Typography>
        )}
      </S.Content>
    </S.Modal>
  );
};

export { Popup };
