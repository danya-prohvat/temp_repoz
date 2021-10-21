import styled from '@emotion/styled';

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
  `,
  Header: styled.header`
    top: 0;
    display: flex;
    justify-content: space-between;
    background-color: #f3f3f3;
    border-bottom: 2px solid #dedede;
    padding: 20px 40px;
    position: sticky;
    top: 0;
    z-index: 99;
    width: 100%;
  `,
  MainContent: styled.main`
    display: flex;
    height: 100%;
  `,
};

export { S };
