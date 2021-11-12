import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const S = {
  PopupItem: styled(Link)`
    text-decoration: none;
    color: ${(props) => props.theme.colors.textColor.black};
    background-color: ${(props) => props.theme.colors.backgroundColor.lightGray};
    width: 100%;
    margin-bottom: 10px;
    padding: 10px 30px;
    z-index: 99;
    display: flex;
    align-items: center;
    &:hover {
      background-color: ${(props) => props.theme.colors.backgroundColor.darkGray};
    }
  `,
  UserName: styled.span``,
  Avatar: styled.img`
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 30px;
  `,
};

export { S };
