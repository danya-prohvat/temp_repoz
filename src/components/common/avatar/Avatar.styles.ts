import styled from '@emotion/styled';

export interface AvatarImgProps {
  size: string;
  iconSize?: string;
}

const S = {
  Container: styled.div<AvatarImgProps>`
    width: ${(props) => props.size};
    height: ${(props) => props.size};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 15px;
    font-size: ${(props) => props.iconSize || '32px'};
  `,
  Img: styled.img<AvatarImgProps>`
    width: ${(props) => props.size};
    height: ${(props) => props.size};
    border-radius: 50%;
  `,
};

export { S };
