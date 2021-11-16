import { default as DefaultSwitch } from 'react-switch';
import { ReactSwitchProps } from 'react-switch';
import { useTheme } from '@emotion/react';
import { useTranslation } from 'react-i18next';
import { Typography } from 'components/common/typography';
import { S } from './Switch.styles';

interface SwitchProps extends ReactSwitchProps {
  label?: string;
}

const Switch: React.FC<SwitchProps> = ({ onChange, checked, label, ...props }) => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <S.Container>
      <DefaultSwitch
        uncheckedIcon={false}
        checkedIcon={false}
        offColor={theme.colors.backgroundColor.darkGray}
        onColor={theme.colors.backgroundColor.blue}
        onChange={onChange}
        checked={checked}
        {...props}
      />
      {label && (
        <S.Span>
          <Typography type="label1">{t(label)}</Typography>
        </S.Span>
      )}
    </S.Container>
  );
};

export { Switch };
