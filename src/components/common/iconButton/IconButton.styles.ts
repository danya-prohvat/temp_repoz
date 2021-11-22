import styled from '@emotion/styled';

const S = {
  Button: styled.button`
    padding: 9px;
    cursor: pointer;
    border-radius: 4px;
    font-size: 20px;
    color: ${(props) => props.theme.colors.textColor.gray};
    background-color: ${(props) => props.theme.colors.backgroundColor.beige};
    border: 1px solid ${(props) => props.theme.colors.borderColor.gray};
    display: flex;
  `,
};

export { S };
