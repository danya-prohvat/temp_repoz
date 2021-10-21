import { S } from './Sidebar.styles';
import { ExtraLink } from 'components/common/extraLink';

const Sidebar: React.FC = () => {
  return (
    <S.Sidebar>
      <ExtraLink>dasddas</ExtraLink>
      <ExtraLink>dasddas</ExtraLink>
      <ExtraLink>dasddas</ExtraLink>
      <ExtraLink>dasddas</ExtraLink>
      <ExtraLink>dasddas</ExtraLink>
      <ExtraLink>dasddas</ExtraLink>
      <S.SidebarButton>{'>'}</S.SidebarButton>
    </S.Sidebar>
  );
};

export { Sidebar };
