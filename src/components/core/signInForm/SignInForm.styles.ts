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
  Button: styled.button`
    color: ${(props) => props.theme.colors.textColor.white};
    background-color: ${(props) => props.theme.colors.backgroundColor.red};
    border: none;
    border-radius: 4px;
    cursor: pointer;
    padding: 10px 20px;
    margin-top: 50px;
  `,
  FieldWrapper: styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
  `,
  Field: styled.input`
    outline: none;
    border-radius: 2px;
    height: 40px;
    width: 280px;
    padding-left: 15px;
    border: 1px solid ${(props) => props.theme.colors.borderColor.gray};
  `,
  FieldLabel: styled.label`
    margin-bottom: 6px;
  `,
  IconWrapper: styled.div`
    position: absolute;
    right: 10px;
    top: 40px;
    cursor: pointer;
  `,
};

export { S };
