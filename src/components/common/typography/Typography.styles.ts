import styled from '@emotion/styled';
import { TypographyProps } from './Typography';

const S = {
  Span: styled.span<TypographyProps>`
    font-weight: ${(props) => props.theme.typography[props.type].fontWeight};
    font-size: ${(props) => props.theme.typography[props.type].fontSize};
    line-height: ${(props) => props.theme.typography[props.type].lineHeight};
  `,
};

export { S };
