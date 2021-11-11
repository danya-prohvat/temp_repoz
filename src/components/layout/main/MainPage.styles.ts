import styled from '@emotion/styled';

const S = {
  Header: styled.header`
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: ${(props) => props.theme.colors.backgroundColor.lightGray};
    border-bottom: 2px solid ${(props) => props.theme.colors.borderColor.gray};
    padding: 20px 40px;
    z-index: 99;
  `,
  MainContent: styled.main`
    display: flex;
    padding-top: 80px;
    padding-bottom: 60px;
  `,
  ChangeableContent: styled.div`
    width: 100%;
    padding-top: 70px;
    display: flex;
  `,
};

export { S };
