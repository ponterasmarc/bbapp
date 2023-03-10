import styled from "styled-components";

export const SidebarWrap = styled.div`
  min-height: 100vh;
  padding: 30px;
  background: ${({ theme }) => theme.colors.primaryBg};
  /* border-right: 1px solid ${({ theme }) => theme.colors.border}; */
`;

export const Logo = styled.div`
  margin-bottom: 30px;
  img {
    margin: auto;
    display: block;
    margin-bottom: 15px;
    max-width: 75px;
  }
  span {
    font-family: "Title";
    text-align: center;
    font-weight: 700;
    display: block;
    font-size: 22px;
    color: ${({ theme }) => theme.colors.headingText};
  }
`;

export const Ul = styled.ul`
  padding: 0;
  min-width: 200px;
  margin-bottom: 60px;

  li {
    a {
      padding: 10px;
      text-decoration: none;
      color: ${({ theme }) => theme.colors.secondaryText};
      display: flex;
      align-items: bottom;

      :hover {
        /* background-color: ${({ theme }) => theme.colors.hover}; */
      }
      span {
        padding-left: 7px;
      }
    }
    .theme {
      padding: 15px 0;
      /* border-left: solid transparent 15px; */
      text-decoration: none;
      color: ${({ theme }) => theme.colors.text};
      display: flex;
      align-items: center;
      text-transform: uppercase;
      font-weight: 500;
      span {
        padding-right: 7px;
      }
    }

    a.active {
      color: ${({ theme }) => theme.colors.activeSideMenuText};
      background-color: ${({ theme }) => theme.colors.activeSideMenuBg};
      font-weight: 700;

      /* svg {
        color: ${({ theme }) => theme.colors.primary};
      } */
    }
  }
`;

export const SubMenu = styled.ul`
  transition: all 0.5s linear;
  background-color: ${({ theme }) => theme.colors.subMenu};
  li {
    a {
      padding: 7px 45px 7px 25px;
      font-size: 14px;
      text-align: right;
    }
  }
`;

export const UserWrap = styled.div`
  margin-bottom: 30px;
`;
export const UserImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  /* border: 2px solid ${({ theme }) => theme.colors.defaultBorder}; */
  margin: auto auto 7px auto;
  display: block;
`;
export const UserName = styled.div`
  display: block;
  text-align: center;
  font-family: "Title";
  font-size: 22px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.primaryTitle};
  margin-bottom: 5px;
`;
export const UserPosition = styled.label`
  display: block;
  text-align: center;
`;

// export const SignOutWrap = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;
export const SignOut = styled.button`
  padding: 7px;
  background-color: ${({ theme }) => theme.colors.primaryBg};
  color: ${({ theme }) => theme.colors.secondaryText};
  text-align: center;
  width: 100%;
  border-radius: 7px;
  border: solid 1px ${({ theme }) => theme.colors.defaultBorder};
`;
