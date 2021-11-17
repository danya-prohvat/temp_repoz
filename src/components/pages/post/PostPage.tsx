import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import { useSelector } from 'hooks/useTypedSelector';
import { useTranslation } from 'react-i18next';
import { locations } from 'routing/locations';
import { Typography } from 'components/common/typography';
import { getPost } from 'store/PostSlice';
import { getPosts, getAuthorInfo, getComments } from 'store/PostSlice';
import { getUserInfo } from 'store/UserSlice';
import { Icon } from 'components/common/icon';
import { Button } from 'components/common/button';
import { S } from './PostPage.styles';
import { Input } from 'components/common/input';
import { Comment } from 'components/common/comment';
import { Modal } from 'components/common/modal';
import { LikesModal } from 'components/pages/likesModal';

const PostPage: React.FC = () => {
  const { t } = useTranslation();
  const { postId, userId } = useParams();
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const { likesCount, commentsCount, src } = useSelector(getPosts);
  const { authorId, userName, avatar, subscribers } = useSelector(getAuthorInfo);
  const { id } = useSelector(getUserInfo);
  const comments = useSelector(getComments);

  useEffect(() => {
    dispatch(getPost({ postId: Number(postId), userId: Number(userId) }));
  }, [dispatch, postId, userId]);

  const formik = useFormik({
    initialValues: { comment: '' },
    onSubmit: (value: { comment: string }) => {
      console.log(value);
    },
  });

  const openPopupOnClick = () => {
    setOpenModal(true);
  };

  const onClose = () => {
    setOpenModal(false);
  };

  return (
    <S.Container>
      <Modal open={openModal} onClose={onClose}>
        <LikesModal />
      </Modal>
      <S.ImgWrapper>
        <S.PostImg src={src} alt="post img" />
      </S.ImgWrapper>
      <S.Info>
        <S.AuthorBlock>
          <S.AvatarImg src={avatar} alt="user's photo" />
          <S.Username to={locations.user.replace(':userId', String(authorId))}>
            <Typography type="heading3">{userName}</Typography>
          </S.Username>
          {subscribers.length > 0 && subscribers.includes(Number(id)) ? (
            <Button text="PostPage.Subscription" variant="secondary" />
          ) : (
            <Button text="PostPage.Subscribe" variant="primary" />
          )}
        </S.AuthorBlock>
        <S.PostInfoBlock>
          <S.LikesButton onClick={openPopupOnClick}>
            <S.PostInfoElement>
              <S.IconWrapper>
                <Icon type="heart" />
              </S.IconWrapper>
              <Typography type="body3Bold">{likesCount}</Typography>
            </S.PostInfoElement>
          </S.LikesButton>
          <S.PostInfoElement>
            <S.IconWrapper>
              <Icon type="comment" />
            </S.IconWrapper>
            <Typography type="body3Bold">{commentsCount}</Typography>
          </S.PostInfoElement>
          <S.SaveMark onClick={() => console.log('Save was clicked')}>
            <S.SaveMarkText>
              <Typography type="body3Bold">{t('PostPage.Save')}</Typography>
            </S.SaveMarkText>
            <Icon type="saved" />
          </S.SaveMark>
        </S.PostInfoBlock>
        <S.CommentsBlock>
          <S.CommentsWrapper>
            {comments.length > 0 ? (
              comments.map((comment) => (
                <Comment
                  key={comment.authorId}
                  authorId={comment.authorId}
                  avatar={comment.avatar}
                  userName={comment.userName}
                  comment={comment.comment}
                />
              ))
            ) : (
              <Typography type="body1">{t('PostPage.NoCommentsYet')}</Typography>
            )}
          </S.CommentsWrapper>

          <S.InputBlock onSubmit={formik.handleSubmit}>
            <Input
              label="PostPage.InputPlaceholder"
              inputName="comment"
              paddingLeft="35px"
              handleChange={formik.handleChange}
              errors={formik.errors}
              values={formik.values}
            />
            <Button icon="pencil" variant="primary" />
            <S.InputIcon>
              <Icon type="comment" />
            </S.InputIcon>
          </S.InputBlock>
        </S.CommentsBlock>
      </S.Info>
    </S.Container>
  );
};

export { PostPage };
