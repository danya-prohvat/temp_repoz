import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const S = {
  Container: styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.colors.textColor.black};
    text-decoration: none;
  `,
  H1: styled.h1`
    text-transform: uppercase;
  `,
  Logo: styled.span`
    display: flex;
    margin-right: 16px;
    font-size: 50px;
  `,
};

export { S };
