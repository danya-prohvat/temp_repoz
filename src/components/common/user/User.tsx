import ReactTooltip from 'react-tooltip';
import { useSelector } from 'hooks/useTypedSelector';
import { Typography } from 'components/common/typography';
import { Avatar } from 'components/common/avatar';
import { S } from './User.styles';
import { getUserInfo } from 'store/UserSlice';
import { DropDownList } from 'components/core/dropDownList';

const User: React.FC = () => {
  const { userName } = useSelector(getUserInfo);

  return (
    <S.Container data-type="light" data-border={true} data-tip data-for="tooltip">
      <Avatar src={'https://reactjs.org/logo-og.png'} />
      <Typography type="body1Bold">{userName}</Typography>

      <ReactTooltip id="tooltip" clickable={true} place="bottom" effect="solid">
        <DropDownList />
      </ReactTooltip>
    </S.Container>
  );
};

export { User };
