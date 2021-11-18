import ReactTooltip from 'react-tooltip';
import { useTheme } from '@emotion/react';
import { useSelector } from 'hooks/useTypedSelector';
import { Typography } from 'components/common/typography';
import { Avatar } from 'components/common/avatar';
import { S } from './User.styles';
import { Icon } from 'components/common/icon';
import { getUserInfo } from 'store/UserSlice';
import { DropDownList } from 'components/core/dropDownList';

const User: React.FC = () => {
  const { userName, avatar } = useSelector(getUserInfo);
  const theme = useTheme();

  return (
    <S.Container
      data-type="light"
      data-iscapture={true}
      data-event={'click'}
      data-border={true}
      data-tip
      data-for="tooltip"
    >
      <S.QuestionIconWrapper>
        <Icon type="question-mark" />
      </S.QuestionIconWrapper>
      <Avatar size="50px" src={avatar || ''} />
      <Typography type="body1Bold">{userName}</Typography>
      <S.ArrowIconWrapper>
        <Icon type={'arrow-down'} />
      </S.ArrowIconWrapper>

      <ReactTooltip
        borderColor={theme.colors.backgroundColor.darkGray}
        id="tooltip"
        clickable={true}
        place="bottom"
        effect="solid"
      >
        <DropDownList />
      </ReactTooltip>
    </S.Container>
  );
};

export { User };
