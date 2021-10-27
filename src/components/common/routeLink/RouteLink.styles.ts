import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const S = {
  A: styled(NavLink)`
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 22px;
    margin-bottom: 20px;
    text-decoration: none;
    color: ${(props) => props.theme.colors.textColor.black};
  `,
};

export { S };
