import { useDispatch } from 'react-redux';
import { useSelector } from 'hooks/useTypedSelector';
import ReactTooltip from 'react-tooltip';
import { S } from './Sidebar.styles';
import { useTranslation } from 'react-i18next';
import { RouteLink } from 'components/common/routeLink';
import { Icon } from 'components/common/icon';
import { Typography } from 'components/common/typography';
import { toggleSideBar, getVisibilitySideBar } from 'store/UiSlice';
import { links } from './links';

const Sidebar: React.FC = () => {
  const { t } = useTranslation();

  const showSideBar = useSelector(getVisibilitySideBar);
  const dispatch = useDispatch();

  const toggleSideBarOnClick = () => {
    dispatch(toggleSideBar());
  };

  return (
    <S.Sidebar>
      {links.map((link) => (
        <RouteLink to={`/${link.text}`} key={link.text}>
          <div data-type="light" data-border={true} data-tip data-for={link.text}>
            <Icon type={link.iconType} />
          </div>
          {showSideBar ? (
            <S.Link>
              <Typography type="body1">{t(`Sidebar.${link.text}`)}</Typography>
            </S.Link>
          ) : (
            <ReactTooltip id={link.text} place="right" effect="solid">
              {t(`Sidebar.${link.text}`)}
            </ReactTooltip>
          )}
        </RouteLink>
      ))}
      <S.SidebarButton onClick={toggleSideBarOnClick}>
        <Icon type={showSideBar ? 'arrow-left' : 'arrow-right'} />
      </S.SidebarButton>
    </S.Sidebar>
  );
};

export { Sidebar };
