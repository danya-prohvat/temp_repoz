import { useDispatch } from 'react-redux';
import { useSelector } from 'hooks/useTypedSelector';
import { useTheme } from '@emotion/react';
import ReactTooltip from 'react-tooltip';
import { useLocation } from 'react-router-dom';
import { S } from './Sidebar.styles';
import { useTranslation } from 'react-i18next';
import { RouterLink } from 'components/common/routerLink';
import { Icon } from 'components/common/icon';
import { Typography } from 'components/common/typography';
import { toggleSideBar, getVisibilitySideBar } from 'store/UiSlice';
import { getUserInfo } from 'store/UserSlice';
import { links } from './links';

const Sidebar: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const theme = useTheme();
  const { id } = useSelector(getUserInfo);

  const showSideBar = useSelector(getVisibilitySideBar);
  const dispatch = useDispatch();

  const toggleSideBarOnClick = () => {
    dispatch(toggleSideBar());
  };

  return (
    <S.Sidebar>
      {links.map((link) => {
        return (
          <RouterLink
            isactive={location.pathname === link.link.replace(':userId', String(id))}
            to={link.link.replace(':userId', String(id))}
            key={link.text}
          >
            <div data-type="light" data-border={true} data-tip data-for={link.text}>
              <S.IconWrapper>
                <Icon type={link.iconType} />
              </S.IconWrapper>
            </div>
            {showSideBar ? (
              <S.Link>
                <Typography type="body1">{t(`Sidebar.${link.text}`)}</Typography>
              </S.Link>
            ) : (
              <ReactTooltip
                borderColor={theme.colors.backgroundColor.darkGray}
                id={link.text}
                place="right"
                effect="solid"
              >
                {t(`Sidebar.${link.text}`)}
              </ReactTooltip>
            )}
          </RouterLink>
        );
      })}
      <S.SidebarButton onClick={toggleSideBarOnClick}>
        <Icon type={showSideBar ? 'arrow-left' : 'arrow-right'} />
      </S.SidebarButton>
    </S.Sidebar>
  );
};

export { Sidebar };
