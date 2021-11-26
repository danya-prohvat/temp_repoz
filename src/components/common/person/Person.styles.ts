import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const S = {
  Container: styled(Link)`
    width: 45%;
    background-color: red;
    text-decoration: none;
    color: ${(props) => props.theme.colors.textColor.black};
    background-color: ${(props) => props.theme.colors.backgroundColor.lightGray};
    margin-bottom: 70px;
    padding: 30px;
    display: flex;
    justify-content: space-between;
  `,
  Img: styled.div`
    display: flex;
  `,
  Avatar: styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
  `,
  Text: styled.div`
    margin-left: 35px;
    flex: 1 1 auto;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  `,
};

export { S };
