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
        {showSidebar && <Typography type="body1"> {t('Main')}</Typography>}
      </RouteLink>
      <RouteLink>
        <Icon type="I" />
        {showSidebar && <Typography type="body1"> {t('Explore')}</Typography>}
      </RouteLink>
      <RouteLink>
        <Icon type="I" />
        {showSidebar && <Typography type="body1"> {t('Subscribers')}</Typography>}
      </RouteLink>
      <RouteLink>
        <Icon type="I" />
        {showSidebar && <Typography type="body1"> {t('Subscriptions')}</Typography>}
      </RouteLink>
      <RouteLink>
        <Icon type="I" />
        {showSidebar && <Typography type="body1"> {t('Messages')}</Typography>}
      </RouteLink>
      <RouteLink>
        <Icon type="I" />
        {showSidebar && <Typography type="body1"> {t('Saved')}</Typography>}
      </RouteLink>
      <RouteLink>
        <Icon type="I" />
        {showSidebar && <Typography type="body1"> {t('Settings')}</Typography>}
      </RouteLink>
      <S.SidebarButton onClick={toggleSidebar}>
        <Icon type={showSidebar ? '<' : '>'} />
      </S.SidebarButton>
    </S.Sidebar>
  );
};

export { Sidebar };
