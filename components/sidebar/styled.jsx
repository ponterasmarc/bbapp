import styled from "styled-components";

export const SidebarWrap = styled.div`
  min-height: 100vh;
  padding: 30px;
  background: ${({ theme }) => theme.colors.contentBg};
  border-radius: 0 7px 7px 0;
  box-shadow: ${({ theme }) => theme.boxShadow.paper};
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

  li {
    a {
      padding: 15px 25px;
      text-decoration: none;
      color: ${({ theme }) => theme.colors.text};
      display: flex;
      align-items: bottom;
      border-radius: 7px;

      :hover {
        background-color: ${({ theme }) => theme.colors.hover};
      }
      span {
        padding-left: 7px;
      }
    }
    .theme {
      padding: 15px 25px;
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
      color: #fff;
      border-radius: 7px 7px 0 0;
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const SubMenu = styled.ul`
  transition: all 0.5s linear;
  background-color: ${({ theme }) => theme.colors.subMenu};
  border-radius: 0 0 7px 7px;
  li {
    a {
      padding: 7px 45px 7px 25px;
      font-size: 14px;
      text-align: right;
    }
  }
`;
