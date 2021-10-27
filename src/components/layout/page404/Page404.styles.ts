import styled from '@emotion/styled';

const S = {
  Header: styled.header`
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${(props) => props.theme.colors.backgroundColor.lightGray};
    border-bottom: 2px solid ${(props) => props.theme.colors.borderColor.gray};
    padding: 20px 40px;
    width: 100%;
  `,
  Main: styled.main`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
  `,
};

export { S };
