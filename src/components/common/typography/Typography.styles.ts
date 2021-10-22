import styled from '@emotion/styled';
import { Theme } from 'styles/themes';

// interface ComponentProps {
//   fontType: string | undefined;
// }

const S = {
  Span: styled.span`
    font-weight: ${(props) => props.theme.typography.body1.fontSize};
    font-size: ${(props) => props.theme.typography.body1.fontWeight};
    line-height: ${(props) => props.theme.typography.body1.lineHeight};
  `,
};

export { S };
