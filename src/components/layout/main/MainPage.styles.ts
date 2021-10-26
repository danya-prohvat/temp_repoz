import styled from '@emotion/styled';

const S = {
  Header: styled.header`
    top: 0;
    display: flex;
    justify-content: space-between;
    background-color: ${(props) => props.theme.colors.backgroundColor.lightGray};
    border-bottom: 2px solid ${(props) => props.theme.colors.borderColor.gray};
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
