import { checkAuthorization } from './../../../store/UserSlice';
import styled from '@emotion/styled';

const S = {
  Container: styled.div`
    padding-top: 50px;
    width: 60%;
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
  Button: styled.button`
    background-color: ${(props) => props.theme.colors.backgroundColor.white};
    border: 1px solid ${(props) => props.theme.colors.backgroundColor.lightGray};
    border-radius: 4px;
    cursor: pointer;
    padding: 6px 12px;
    margin-left: 15px;
  `,
  ButtonText: styled.span`
    margin-left: 10px;
  `,
  SubscribeBlock: styled.div`
    display: flex;
    justify-content: space-between;
  `,
  SubscribeElement: styled.span``,
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
  Post: styled.div`
    padding: 10px;
    width: 33%;
    min-height: 360px;
    display: flex;
    align-items: center;
    justify-content: content;
    position: relative;
    cursor: pointer;
  `,
  PostOverlay: styled.div`
    position: absolute;
    height: calc(100% - 20px);
    width: calc(100% - 20px);
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      background-color: rgba(0, 0, 0, 0.6);
    }
    &:hover div {
      display: flex;
    }
  `,
  PostOverlayElement: styled.div`
    display: none;
    flex-direction: column;
    align-items: center;
    margin-left: 20px;
    margin-right: 20px;
    font-size: 32px;
    color: ${(props) => props.theme.colors.backgroundColor.white};
  `,
  IconWrapper: styled.div`
    margin-bottom: 10px;
  `,
  PostImg: styled.img`
    max-width: 100%;
  `,
};

export { S };
