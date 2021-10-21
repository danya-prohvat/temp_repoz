import styled from '@emotion/styled';

const S = {
  Sidebar: styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 250px;
    padding: 35px 25px;
    height: 100%;
    background-color: #f3f3f3;
    border-right: 2px solid #dedede;
  `,
  SidebarButton: styled.button`
    position: absolute;
    right: 0;
    transform: translateX(50%);
    bottom: 200px;
    font-size: 40px;
    border: none;
    cursor: pointer;
    background-color: transparent;
  `,
};

export { S };
