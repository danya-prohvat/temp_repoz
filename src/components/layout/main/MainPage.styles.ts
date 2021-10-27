import styled from '@emotion/styled';

const S = {
  Header: styled.header`
    display: flex;
    justify-content: space-between;
    background-color: ${(props) => props.theme.colors.backgroundColor.lightGray};
    border-bottom: 2px solid ${(props) => props.theme.colors.borderColor.gray};
    padding: 20px 40px;
  `,
  MainContent: styled.main`
    display: flex;
    height: 100%;
  `,
};

export { S };
