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
    height: 100%;
  `,
  Footer: styled.footer`
    position: sticky;
    width: 100%;
    bottom: 0;
    padding: 18px 0;
    text-align: center;
    background-color: ${(props) => props.theme.colors.backgroundColor.lightPink};
  `,
  HeaderTitle: styled.span`
    position: relative;
    margin-left: 15px;
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: -15px;
      background-color: ${(props) => props.theme.colors.backgroundColor.red};
      width: 6px;
      height: 100%;
    }
  `,
};

export { S };
