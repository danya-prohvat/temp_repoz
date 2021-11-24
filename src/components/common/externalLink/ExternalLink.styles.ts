import styled from '@emotion/styled';

const S = {
  Container: styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.colors.textColor.black};
    text-decoration: none;
  `,
  Span: styled.span`
    margin-left: 10px;
    text-decoration: underline;
    cursor: pointer;
  `,
  Icon: styled.span``,
};

export { S };
