import styled from '@emotion/styled';
import ReactModal from 'react-modal';

const S = {
  Modal: styled(ReactModal)`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.colors.backgroundColor.modalTransparent};
  `,
  Content: styled.div`
    position: absolute;
    padding-top: 60px;
    width: 400px;
    text-align: center;
    border-radius: 4px;
    padding-bottom: 30px;
    background-color: ${(props) => props.theme.colors.backgroundColor.white};
  `,
  Button: styled.button`
    position: absolute;
    right: 20px;
    top: 20px;
    outline: none;
    border: none;
    background-color: ${(props) => props.theme.colors.backgroundColor.transparent};
    font-size: 18px;
    cursor: pointer;
  `,
};

export { S };
