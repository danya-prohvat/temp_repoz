import { S } from './Icon.styles';

interface Icon {
  type: string;
}

const Icon: React.FC<Icon> = (props) => {
  return (
    <>
      <S.StyledIcon className={`icon-${'fill'}`}>{props.type}</S.StyledIcon>
      <span className="icon-checkMark"></span>
    </>
  );
};

export { Icon };
