import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const S = {
  Container: styled.div`
    width: 80%;
    margin: 0 auto;
  `,
  UserInfo: styled.div`
    display: flex;
  `,
  UserImg: styled.img`
    width: 250px;
    height: 250px;
    border-radius: 50%;
    object-fit: cover;
  `,
  ProfileInfo: styled.div`
    margin-left: 150px;
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  `,
  UserNameBlock: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  UserName: styled.span`
    flex: 1 1 auto;
  `,
  ButtonWrapper: styled(Link)`
    margin-left: 15px;
    text-decoration: none;
    color: ${(props) => props.theme.colors.textColor.black};
  `,
  SubscribeBlock: styled.div`
    display: flex;
    justify-content: space-between;
  `,
  SubscribeElement: styled.span``,
  SubscribeSubElement: styled.span`
    margin-right: 6px;
  `,
  FullName: styled.div`
    display: flex;
    flex-direction: column;
  `,
  Name: styled.span`
    margin-bottom: 10px;
  `,
  ProfileDescription: styled.span``,
  Posts: styled.div`
    display: flex;
    flex-wrap: wrap;
  `,
  MessageWrapper: styled.div`
    width: 100%;
    text-align: center;
  `,
};

export { S };
