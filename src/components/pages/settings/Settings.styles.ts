import styled from '@emotion/styled';

const S = {
  Container: styled.div`
    width: 80%;
    max-width: 1400px;
    margin: 0 auto;
    padding-bottom: 40px;
  `,
  PageTittle: styled.div`
    margin-bottom: 50px;
  `,
  AvatarSettings: styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 50px;
  `,
  Input: styled.input`
    display: none;
  `,
  Label: styled.label`
    color: red;
    margin-left: 50px;
    margin-right: 40px;
    background-color: ${(props) => props.theme.colors.backgroundColor.red};
    color: ${(props) => props.theme.colors.textColor.white};
    border-radius: 4px;
    cursor: pointer;
    padding: 10px 20px;
  `,
  ProfileToggles: styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 70px;
  `,
  SwitchWrapper: styled.div`
    width: 21%;
  `,
  ProfileSettings: styled.div`
    margin-bottom: 100px;
  `,
  PasswordSettings: styled.div``,
};

export { S };
