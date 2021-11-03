import { useTranslation } from 'react-i18next';
import { S } from './Button.styles';
import { Icon } from 'components/common/icon';
import { Typography } from 'components/common/typography';

export interface ButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  text: string;
  icon?: string;
  variant?: 'primary' | 'secondary' | 'outlined';
}

const Button: React.FC<ButtonProps> = ({ text, icon, variant = 'primary', ...rest }) => {
  const { t } = useTranslation();

  const ChangeableComponent: React.FC<Omit<ButtonProps, 'text'>> = S[variant];

  return (
    <ChangeableComponent {...rest}>
      {icon && (
        <S.IconWrapper>
          <Icon type={icon} />
        </S.IconWrapper>
      )}

      <Typography type="button1">{t(text)}</Typography>
    </ChangeableComponent>
  );
};

export { Button };
