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
  box-shadow: ${({ theme }) => theme.boxShadow.paper};
  background-color: ${({ theme }) => theme.colors.primaryBg};

  h1,
  h2 {
    margin-bottom: 15px;
  }
`;

export const SocialBtn = styled.button`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.secondaryText};
  background-color: ${({ theme }) => theme.colors.secondaryBg};
  margin-bottom: 15px;
  width: 100%;

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
