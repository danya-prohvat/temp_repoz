import { useMemo } from 'react';
import { useTheme } from '@emotion/react';
import SelectProps, { default as SelectDefault } from 'react-select';

export interface SelectP extends SelectProps {}

const Select: SelectP = ({ ...props }) => {
  const theme = useTheme();
  console.log(theme);

  const customStyles = useMemo(() => {
    return {
      control: (provided: any) => ({
        ...provided,
        border: 'none',
        boxShadow: '0px 4px 14px rgba(0, 0, 0, 0.1)',
        borderRadius: '2px',
      }),
      menu: (provided: any) => ({
        ...provided,
        border: 'none',
        boxShadow: '0px 4px 14px rgba(0, 0, 0, 0.1)',
      }),
    };
  }, []);

  return <SelectDefault styles={customStyles} {...props} />;
};

export { Select };
