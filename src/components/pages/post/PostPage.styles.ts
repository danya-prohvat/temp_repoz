import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const S = {
  Container: styled.div`
    padding-top: 25px;
    padding-bottom: 25px;
    width: 70%;
    margin: 0 auto;
    background-color: ${(props) => props.theme.colors.backgroundColor.beige};
    display: flex;
  `,
  ImgWrapper: styled.div`
    width: 50%;
    padding: 15px;
    display: flex;
    min-height: 600px;
  `,
  PostImg: styled.img`
    object-fit: contain;
    width: 100%;
  `,
  Info: styled.div`
    width: 50%;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,
  AuthorBlock: styled.div`
    background-color: ${(props) => props.theme.colors.backgroundColor.lightBeige};
    display: flex;
    align-items: center;
    padding: 10px 25px;
    margin-bottom: 15px;
  `,
  AvatarImg: styled.img`
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 15px;
  `,
  Username: styled(Link)`
    margin-right: 40px;
    color: ${(props) => props.theme.colors.textColor.black};
    text-decoration: none;
  `,
  PostInfoBlock: styled.div`
    width: 100%;
    background-color: ${(props) => props.theme.colors.backgroundColor.lightBeige};
    display: flex;
    justify-content: space-between;
    padding: 10px 25px;
    margin-bottom: 15px;
  `,
  PostInfoElement: styled.div`
    margin-right: 80px;
    display: flex;
    align-items: center;
    font-size: 26px;
  `,
  SaveMark: styled.div`
    text-align: right;
    flex: 1 1 auto;
    cursor: pointer;
  `,
  SaveMarkText: styled.span`
    margin-right: 10px;
  `,
  IconWrapper: styled.div`
    margin-right: 10px;
  `,
  CommentsBlock: styled.div`
    background-color: ${(props) => props.theme.colors.backgroundColor.lightBeige};
    flex: 1 1 auto;
    padding: 15px 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,
  CommentsWrapper: styled.div`
    overflow: auto;
    height: 100%;
    max-height: 300px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    text-align: center;
  `,
  InputBlock: styled.form`
    display: flex;
    position: relative;
  `,
  InputButton: styled.button`
    outline: none;
  `,
  InputIcon: styled.div`
    color: ${(props) => props.theme.colors.backgroundColor.darkGray};
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 10px;
    display: flex;
    z-index: 99;
  `,
};

export { S };
