import { useState } from 'react';
import { S } from './Sidebar.styles';
import { useTranslation } from 'react-i18next';
import { RouteLink } from 'components/common/routeLink';
import { Icon } from 'components/common/icon';
import { Typography } from 'components/common/typography';

const Sidebar: React.FC = () => {
  const { t } = useTranslation();
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <S.Sidebar width={showSidebar ? '300px' : '60px'}>
      <RouteLink>
        <Icon type="I" />
        {showSidebar && <Typography fontType="heading1Bold"> {t('Main')}</Typography>}
      </RouteLink>
      <RouteLink>
        <Icon type="I" />
        {showSidebar && <Typography> {t('Explore')}</Typography>}
      </RouteLink>
      <RouteLink>
        <Icon type="I" />
        {showSidebar && <Typography> {t('Subscribers')}</Typography>}
      </RouteLink>
      <RouteLink>
        <Icon type="I" />
        {showSidebar && <Typography> {t('Subscriptions')}</Typography>}
      </RouteLink>
      <RouteLink>
        <Icon type="I" />
        {showSidebar && <Typography> {t('Messages')}</Typography>}
      </RouteLink>
      <RouteLink>
        <Icon type="I" />
        {showSidebar && <Typography> {t('Saved')}</Typography>}
      </RouteLink>
      <RouteLink>
        <Icon type="I" />
        {showSidebar && <Typography> {t('Settings')}</Typography>}
      </RouteLink>
      <S.SidebarButton onClick={toggleSidebar}>
        <Icon type={showSidebar ? '<' : '>'} />
      </S.SidebarButton>
    </S.Sidebar>
  );
};

export { Sidebar };
