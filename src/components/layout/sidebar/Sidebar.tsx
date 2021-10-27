import { useDispatch } from 'react-redux';
import { useSelector } from 'hooks/useTypedSelector';
import { S } from './Sidebar.styles';
import { useTranslation } from 'react-i18next';
import { RouteLink } from 'components/common/routeLink';
import { Icon } from 'components/common/icon';
import { Typography } from 'components/common/typography';
import { toggleSideBar, getVisibilitySideBar } from 'store/UiSlice';
import ReactTooltip from 'react-tooltip';

const Sidebar: React.FC = () => {
  const { t } = useTranslation();

  const showSideBar = useSelector(getVisibilitySideBar);
  const dispatch = useDispatch();

  const toggleSideBarOnClick = () => {
    dispatch(toggleSideBar());
  };

  return (
    <S.Sidebar>
      <RouteLink>
        <Icon type="home" />
        {showSideBar && (
          <S.Link data-type="light" data-border={true} data-tip data-for="Main">
            <Typography type="body1">{t('Main')}</Typography>
            <ReactTooltip id="Main" place="right" effect="solid">
              {t('Main')}
            </ReactTooltip>
          </S.Link>
        )}
      </RouteLink>
      <RouteLink>
        <Icon type="compass" />
        {showSideBar && (
          <S.Link data-type="light" data-border={true} data-tip data-for="Explore">
            <Typography type="body1"> {t('Explore')}</Typography>
            <ReactTooltip id="Explore" place="right" effect="solid">
              {t('Explore')}
            </ReactTooltip>
          </S.Link>
        )}
      </RouteLink>
      <RouteLink>
        <Icon type="user" />
        {showSideBar && (
          <S.Link data-type="light" data-border={true} data-tip data-for="Subscribers">
            <Typography type="body1"> {t('Subscribers')}</Typography>
            <ReactTooltip id="Subscribers" place="right" effect="solid">
              {t('Subscribers')}
            </ReactTooltip>
          </S.Link>
        )}
      </RouteLink>
      <RouteLink>
        <Icon type="user" />
        {showSideBar && (
          <S.Link data-type="light" data-border={true} data-tip data-for="Subscriptions">
            <Typography type="body1"> {t('Subscriptions')}</Typography>
            <ReactTooltip id="Subscriptions" place="right" effect="solid">
              {t('Subscriptions')}
            </ReactTooltip>
          </S.Link>
        )}
      </RouteLink>
      <RouteLink>
        <Icon type="message" />
        {showSideBar && (
          <S.Link data-type="light" data-border={true} data-tip data-for="Messages">
            <Typography type="body1"> {t('Messages')}</Typography>
            <ReactTooltip id="Messages" place="right" effect="solid">
              {t('Messages')}
            </ReactTooltip>
          </S.Link>
        )}
      </RouteLink>
      <RouteLink>
        <Icon type="saved" />
        {showSideBar && (
          <S.Link data-type="light" data-border={true} data-tip data-for="Saved">
            <Typography type="body1"> {t('Saved')}</Typography>
            <ReactTooltip id="Saved" place="right" effect="solid">
              {t('Saved')}
            </ReactTooltip>
          </S.Link>
        )}
      </RouteLink>
      <RouteLink>
        <Icon type="settings" />
        {showSideBar && (
          <S.Link data-type="light" data-border={true} data-tip data-for="Settings">
            <Typography type="body1"> {t('Settings')}</Typography>
            <ReactTooltip id="Settings" place="right" effect="solid">
              {t('Settings')}
            </ReactTooltip>
          </S.Link>
        )}
      </RouteLink>
      <S.SidebarButton onClick={toggleSideBarOnClick}>
        <Icon type={showSideBar ? 'arrow-left' : 'arrow-right'} />
      </S.SidebarButton>
    </S.Sidebar>
  );
};

export { Sidebar };
