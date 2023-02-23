import styled from "styled-components";

export const LoginWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginInner = styled.div`
  padding: 30px;
  border-radius: 7px;
  width: 100%;
  max-width: 600px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.boxShadow.paper};

  h1,
  h2 {
    margin-bottom: 15px;
  }
`;

export const SocialBtn = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.btnSec};
  margin-bottom: 15px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  /* text-align: center;
  justify-content: center; */

  img {
    width: 100;
    max-width: 30px;
    margin-right: 15px !important;
  }
`;

export const Divider = styled.div`
  padding: 15px 0;
  display: flex;
  align-items: center;
  hr {
    display: block;
    width: 100%;
  }

  span {
    padding: 0 15px;
    text-align: center;
  }
`;
