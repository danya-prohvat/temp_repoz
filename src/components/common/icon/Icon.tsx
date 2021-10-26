import { S } from './Icon.styles';

interface Icon {
  type: string;
}

const Icon: React.FC<Icon> = ({ type }) => {
  return <S.StyledIcon className={`icon-${type}`}></S.StyledIcon>;
};

export { Icon };
