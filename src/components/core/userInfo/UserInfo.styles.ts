import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const S = {
  Container: styled.div`
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
  ButtonWrapper: styled.div`
    margin-left: 15px;
  `,
  SubscribeBlock: styled.div`
    display: flex;
    justify-content: space-between;
  `,
  SubscribeElement: styled(Link)`
    text-decoration: none;
    color: ${(props) => props.theme.colors.textColor.black};
  `,
  SubscribeSubElement: styled.span`
    margin-right: 6px;
  `,
  PostElement: styled.span``,
  PostSubElement: styled.span`
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
};

export { S };
