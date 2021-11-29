import { S } from './Select.styles';
import SelectProps from 'react-select';

export interface SelectP extends SelectProps {}

//TS
const Select: React.FC<any> = ({ ...props }) => {
  return <S.Select {...props} />;
};

export { Select };
