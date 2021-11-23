import styled from '@emotion/styled';

const S = {
  Container: styled.div`
    width: 80%;
    margin: 0 auto;
  `,
  PageTitle: styled.div`
    position: relative;
    text-align: center;
    margin-bottom: 60px;
  `,
  SubscriptionsWrapper: styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  `,
  Empty: styled.div`
    text-align: center;
    width: 100%;
    margin-top: 100px;
  `,
  Search: styled.div`
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    align-items: center;
  `,
  InputWrapper: styled.div`
    margin-left: 5px;
    align-items: center;
  `,
};

export { S };
