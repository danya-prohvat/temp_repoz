import { useMemo } from 'react';
import { useTheme } from '@emotion/react';
import { CSSObjectWithLabel, default as SelectDefault, SingleValue } from 'react-select';

export interface SelectProps {
  onChange: (event: SingleValue<{ label: string; value: any }>) => void;
  options: { label: string; value: any }[];
  defaultValue?: any;
}

const Select: React.FC<SelectProps> = ({ ...props }) => {
  const theme = useTheme();

  const customStyles = useMemo(() => {
    return {
      control: (provided: CSSObjectWithLabel) => ({
        ...provided,
        border: 'none',
        boxShadow: theme.shadows.boxShadows.selectShadow,
        borderRadius: '2px',
      }),
      menu: (provided: CSSObjectWithLabel) => ({
        ...provided,
        border: 'none',
        boxShadow: theme.shadows.boxShadows.selectShadow,
      }),
    };
  }, [theme]);

  return <SelectDefault styles={customStyles} {...props} />;
};

export { Select };
