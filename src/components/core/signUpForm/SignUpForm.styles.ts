import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

interface FormStatusProgressBarProps {
  isFilled: boolean;
}

const S = {
  FormTitle: styled.h2`
    margin-bottom: 15px;
  `,
  FormDescription: styled.p`
    margin-top: 60px;
  `,
  Form: styled.form`
    outline: none;
    border-radius: 2px;
    border: 1px solid ${(props) => props.theme.colors.borderColor.gray};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 80px;
    padding-bottom: 100px;
    padding-left: 120px;
    padding-right: 120px;
    height: 100%;
  `,
  FieldsContainer: styled.div`
    max-width: 600px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  `,
  InputWrapper: styled.div`
    display: flex;
    width: 45%;
    margin-bottom: 30px;
  `,
  Link: styled(Link)`
    text-decoration: none;
    color: ${(props) => props.theme.colors.textColor.blue};
  `,
  FormStatus: styled.div`
    width: 600px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  `,
  FormStatusText: styled.span``,
  FormStatusProgressBar: styled.div<FormStatusProgressBarProps>`
    position: relative;
    width: 100%;
    height: 5px;
    margin-top: 15px;
    margin-bottom: 50px;
    &:before {
      content: '';
      position: absolute;
      width: ${(props) => (props.isFilled ? '100%' : '50%')};
      height: 100%;
      background-color: ${(props) => props.theme.colors.backgroundColor.blue};
    }
  `,
};

export { S };
