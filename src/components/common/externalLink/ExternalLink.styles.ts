import styled from '@emotion/styled';

const S = {
  Container: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  A: styled.a`
    margin-left: 10px;
    text-decoration: underline;
    cursor: pointer;
    color: ${(props) => props.theme.colors.textColor.black};
  `,
  Icon: styled.span``,
};

export { S };
