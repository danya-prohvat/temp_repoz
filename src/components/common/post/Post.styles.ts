import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const S = {
  Post: styled(Link)`
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
      background-color: ${(props) => props.theme.colors.backgroundColor.transparentGray};
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
