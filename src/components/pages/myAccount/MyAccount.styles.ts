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
};

export { S };
