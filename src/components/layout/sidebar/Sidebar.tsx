import { useDispatch } from 'react-redux';
import { useSelector } from 'hooks/useTypedSelector';
import { S } from './Sidebar.styles';
import { useTranslation } from 'react-i18next';
import { RouteLink } from 'components/common/routeLink';
import { Icon } from 'components/common/icon';
import { Typography } from 'components/common/typography';
import { toggleSideBar, getVisibilitySideBar } from 'store/UiSlice';

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
          <S.Link>
            <Typography type="body1">{t('Main')}</Typography>
          </S.Link>
        )}
      </RouteLink>
      <RouteLink>
        <Icon type="compass" />
        {showSideBar && (
          <S.Link>
            <Typography type="body1"> {t('Explore')}</Typography>
          </S.Link>
        )}
      </RouteLink>
      <RouteLink>
        <Icon type="user" />
        {showSideBar && (
          <S.Link>
            <Typography type="body1"> {t('Subscribers')}</Typography>
          </S.Link>
        )}
      </RouteLink>
      <RouteLink>
        <Icon type="user" />
        {showSideBar && (
          <S.Link>
            <Typography type="body1"> {t('Subscriptions')}</Typography>
          </S.Link>
        )}
      </RouteLink>
      <RouteLink>
        <Icon type="message" />
        {showSideBar && (
          <S.Link>
            <Typography type="body1"> {t('Messages')}</Typography>
          </S.Link>
        )}
      </RouteLink>
      <RouteLink>
        <Icon type="saved" />
        {showSideBar && (
          <S.Link>
            <Typography type="body1"> {t('Saved')}</Typography>
          </S.Link>
        )}
      </RouteLink>
      <RouteLink>
        <Icon type="settings" />
        {showSideBar && (
          <S.Link>
            <Typography type="body1"> {t('Settings')}</Typography>
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
