import { useState } from 'react';
import { S } from './Sidebar.styles';
import { useTranslation } from 'react-i18next';
import { RouteLink } from 'components/common/routeLink';
import { Icon } from 'components/common/icon';

const Sidebar: React.FC = () => {
  const { t } = useTranslation();
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <S.Sidebar width={showSidebar ? '300px' : '60px'}>
      <RouteLink>
        <Icon type="I" />
        {showSidebar && t('Main')}
      </RouteLink>
      <RouteLink>
        <Icon type="I" />
        {showSidebar && t('Explore')}
      </RouteLink>
      <RouteLink>
        <Icon type="I" />
        {showSidebar && t('Subscribers')}
      </RouteLink>
      <RouteLink>
        <Icon type="I" />
        {showSidebar && t('Subscriptions')}
      </RouteLink>
      <RouteLink>
        <Icon type="I" />
        {showSidebar && t('Messages')}
      </RouteLink>
      <RouteLink>
        <Icon type="I" />
        {showSidebar && t('Saved')}
      </RouteLink>
      <RouteLink>
        <Icon type="I" />
        {showSidebar && t('Settings')}
      </RouteLink>
      <S.SidebarButton onClick={toggleSidebar}>
        <Icon type={showSidebar ? '<' : '>'} />
      </S.SidebarButton>
    </S.Sidebar>
  );
};

export { Sidebar };
