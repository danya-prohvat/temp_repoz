import styled from '@emotion/styled';

export interface PagesSeparatorProps {
  marginTop: string;
  marginBottom: string;
}

const S = {
  Hr: styled.hr<PagesSeparatorProps>`
    width: 100%;
    height: 1px;
    border: none;
    margin-top: ${(props) => props.marginTop};
    margin-bottom: ${(props) => props.marginBottom};
    background-color: ${(props) => props.theme.colors.backgroundColor.whiteGray};
  `,
};

export { S };
