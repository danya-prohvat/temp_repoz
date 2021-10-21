import styled from '@emotion/styled';

const S = {
  Sidebar: styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: ${(props: { width: string }) => props.width};
    padding: 35px 25px;
    height: 100%;
    background-color: ${(props) => props.theme.colors.backgroundColor.lightGray};
    border-right: 2px solid ${(props) => props.theme.colors.borderColor.gray};
  `,
  SidebarButton: styled.button`
    position: absolute;
    right: 0;
    transform: translateX(50%);
    bottom: 150px;
    font-size: 40px;
    border: none;
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.backgroundColor.transparent};
    outline: none;
  `,
};

export { S };
