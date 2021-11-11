import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const S = {
  Comment: styled(Link)`
    background-color: ${(props) => props.theme.colors.backgroundColor.white};
    display: flex;
    padding: 12px 20px;
    margin-bottom: 10px;
    text-decoration: none;
    color: ${(props) => props.theme.colors.textColor.black};
  `,
  CommentImg: styled.img`
    width: 45px;
    height: 45px;
    object-fit: cover;
    border-radius: 50%;
    display: flex;
  `,
  CommentText: styled.div`
    margin-left: 15px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  `,
};

export { S };
