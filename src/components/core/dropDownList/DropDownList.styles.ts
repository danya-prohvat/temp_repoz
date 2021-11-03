import styled from '@emotion/styled';
import { Link, LinkProps } from 'react-router-dom';

const S = {
  Container: styled.div`
    padding: 15px 5px;
    display: flex;
    flex-direction: column;
  `,
  Link: styled(Link)<LinkProps>`
    text-decoration: none;
    color: ${(props) => props.theme.colors.textColor.black};
    margin-top: 8px;
    margin-bottom: 8px;
  `,
  IconWrapper: styled.div`
    margin-right: 10px;
    display: inline;
  `,
};

export { S };
