import styled from '@emotion/styled';

const S = {
  Sidebar: styled.div`
    position: sticky;
    display: flex;
    padding-top: 120px;
    padding-bottom: 30px;
    flex-direction: column;
    background-color: ${(props) => props.theme.colors.backgroundColor.lightGray};
    border-right: 2px solid ${(props) => props.theme.colors.borderColor.gray};
    height: 100vh;
    top: 0;
    bottom: 0;
  `,
  SidebarButton: styled.button`
    position: absolute;
    right: 0;
    transform: translateX(50%);
    bottom: 50px;
    font-size: 20px;
    border: none;
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.backgroundColor.transparent};
    outline: none;
  `,
  Link: styled.span`
    font-size: 12px;
    margin-left: 5px;
    margin-right: 35px;
  `,
  IconWrapper: styled.div`
    font-size: 18px;
    margin-left: 8px;
    margin-right: 10px;
  `,
};

export { S };
