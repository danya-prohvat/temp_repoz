import Switch, { ReactSwitchProps } from 'react-switch';
import { useTranslation } from 'react-i18next';
import { Typography } from 'components/common/typography';
import { S } from './Checkbox.styles';

interface Checkbox extends ReactSwitchProps {
  label?: string;
}

const Checkbox: React.FC<Checkbox> = ({ onChange, checked, label }) => {
  const { t } = useTranslation();

  return (
    <S.Container>
      <Switch
        uncheckedIcon={false}
        checkedIcon={false}
        offColor="#D0D0D0"
        onColor="#7BB9FA"
        onChange={onChange}
        checked={checked}
      />
      {label && (
        <S.Span>
          <Typography type="label1">{t(label)}</Typography>
        </S.Span>
      )}
    </S.Container>
  );
};

export { Checkbox };
