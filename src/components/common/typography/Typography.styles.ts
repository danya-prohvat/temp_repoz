import styled from '@emotion/styled';
import { Theme } from 'styles/themes';

const S = {
  Span: styled.span`
    font-weight: ${(props) => props.theme.typography.body1.fontWeight};
    font-size: ${(props) => props.theme.typography.body1.fontWeight};
    line-height: ${(props) => props.theme.typography.body1.lineHeight};
  `,
};

export { S };
