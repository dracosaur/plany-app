import styled from 'styled-components';

export default {
  Container: styled.div`
    height: 100vh;
    width: 100%;
    max-width: 220px;


    display: flex;
    flex-direction: column;
    background: linear-gradient(to bottom, #f7f7f7, #f7f7f7) padding-box, linear-gradient(to bottom, #FF0000, #FF0080) border-box;
    border-right: 1px solid transparent;
  `,
  UserContainer: styled.div`
    height: 225px;
    display: flex;
    background: linear-gradient(to bottom, #FF0000, #FF0080);
    justify-content: center;
    align-items: center;
  `,
  UserAvatar: styled.div`
    width: 123px;
    height: 123px;

    background: #f7f7f7;
    border-radius: 50%;
  `,
  MenuContent: styled.div`

  `,
  FilterContainer: styled.div`
    width: 100%;
  `,
  SelectButton: styled.select`
    width: 50%;
    background: linear-gradient(to bottom, #f7f7f7, #f7f7f7) padding-box, linear-gradient(to bottom, #FF0000, #FF0080) border-box;
    border: 1px solid transparent;
    border-left: none;

    color: #0f0f0f;

    font-size: 12px;
    font-family: var(--font-poppins);
    font-weight: 500;

    &:last-of-type {
      border-right: none;
    }
  `,
  WelcomeContainer: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 0 0 0;
    gap: 32px;
  `,
  Name: styled.p`
    width: fit-content;
    font-size: 32px;
    line-height: 34px;
    font-family: var(--font-poppins);
    background: linear-gradient(to bottom, #FF0000, #FF0080);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline; 

    small {
      font-weight: 700;
    }
  `,
  Button: styled.div`
    padding: 16px 24px;

    color: #f7f7f7;
    background: linear-gradient(to bottom, #FF0000, #FF0080);
    border-radius: 16px;

    font-family: var(--font-poppins);
    font-size: 16px;
    cursor: pointer;
  `,
  Footer: styled.div`
    width: 100%;

    display: flex;
    justify-content: center;
    position: relative;
    bottom: 0;
  `,
  BubaContainer: styled.div`
    margin-top: 30%;
    width: 90px;
    height: 50px;
    background: #1d1e1c;
  `
};