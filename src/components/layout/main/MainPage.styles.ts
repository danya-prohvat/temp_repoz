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
    z-index: 1;
  `,
  MainContent: styled.main`
    display: flex;
  `,
  ChangeableContent: styled.div`
    width: 100%;
    padding-top: 130px;
    display: flex;
    padding-bottom: 100px;
  `,
};

export { S };
