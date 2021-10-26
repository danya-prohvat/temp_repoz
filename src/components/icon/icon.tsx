import { FC, AnchorHTMLAttributes } from 'react';

interface IconProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  name: string;
}

const Icon: FC<IconProps> = (props) => {
  return <i className={`icon-${props.name}`} {...props} />;
};

export { Icon };
