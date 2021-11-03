import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const S = {
  FormTitle: styled.h2`
    margin-bottom: 15px;
  `,
  FormDescription: styled.p`
    margin-bottom: 50px;
  `,
  Form: styled.form`
    outline: none;
    border-radius: 2px;
    border: 1px solid ${(props) => props.theme.colors.borderColor.gray};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 70px;
    padding-bottom: 150px;
    padding-left: 250px;
    padding-right: 250px;
    height: 100%;
  `,
  Link: styled(Link)`
    text-decoration: none;
    color: ${(props) => props.theme.colors.textColor.blue};
  `,
};

export { S };
