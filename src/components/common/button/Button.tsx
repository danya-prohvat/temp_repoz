import { useTranslation } from 'react-i18next';
import { S } from './Button.styles';
import { Typography } from 'components/common/typography';
import { StyledButtonProps } from './Button.styles';

interface ButtonProps extends StyledButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text, color }) => {
  const { t } = useTranslation();

  return (
    <S.Button color={color} type="submit">
      <Typography type="button1">{t(text)}</Typography>
    </S.Button>
  );
};

export { Button };
