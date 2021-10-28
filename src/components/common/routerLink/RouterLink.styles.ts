import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { RouterLinkProps } from './RouterLink';

const S = {
  A: styled(Link)<RouterLinkProps>`
    display: flex;
    align-items: center;
    cursor: ${(props) => (props.isactive ? 'default' : 'cursor')};
    position: relative;
    font-size: 22px;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 20px;
    padding-right: 15px;
    margin-bottom: 20px;
    text-decoration: none;
    color: ${(props) => props.theme.colors.textColor.black};
    background-color: ${(props) => (props.isactive ? props.theme.colors.backgroundColor.whiteGray : '')};
    &:after {
      content: '';
      position: absolute;
      height: 100%;
      width: ${(props) => (props.isactive ? '6px' : '')};
      background-color: ${(props) => props.theme.colors.backgroundColor.red};
      top: 0;
      left: 0;
    }
  `,
};

export { S };
