import { useTranslation } from 'react-i18next';
import { S } from './Button.styles';
import { Icon } from 'components/common/icon';
import { Typography } from 'components/common/typography';
import { Loader } from '../loader';

export interface ButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  text?: string;
  icon?: string;
  loading?: boolean;
  variant?: 'primary' | 'secondary' | 'outlined';
}

const Button: React.FC<ButtonProps> = ({ text, icon, variant = 'primary', loading, ...rest }) => {
  const { t } = useTranslation();

  const ChangeableComponent: React.FC<Omit<ButtonProps, 'text'>> = S[variant];

  return (
    <ChangeableComponent loading={loading} disabled={loading} {...rest}>
      {icon && (
        <S.IconWrapper>
          <Icon type={icon} />
        </S.IconWrapper>
      )}

      {text && (
        <S.TextWrapper opacity={loading}>
          <Typography type="button1">{t(text)}</Typography>
        </S.TextWrapper>
      )}
      {loading && (
        <S.LoaderWrapper>
          <Loader height={30} width={30} />
        </S.LoaderWrapper>
      )}
    </ChangeableComponent>
  );
};

export { Button };
