import styled from '@emotion/styled';

export interface AvatarImgProps {
  size: string;
}

const S = {
  Container: styled.div`
    display: flex;
    margin-right: 15px;
  `,
  Img: styled.img<AvatarImgProps>`
    width: ${(props) => props.size};
    height: ${(props) => props.size};
    border-radius: 50%;
  `,
};

export { S };
