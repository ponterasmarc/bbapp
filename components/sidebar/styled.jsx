import styled from "styled-components";

export const Ul = styled.ul`
  padding: 0;

  li {
    a {
      padding-top: 7px;
      padding-bottom: 7px;
      padding-left: 7px;
      padding-right: 0;
      border-left: solid transparent 15px;
      text-decoration: none;
      color: ${({ theme }) => theme.colors.text};
      width: 200px;
      display: flex;
      align-items: center;

      :hover {
        background-color: ${({ theme }) => theme.colors.hover};
      }
      .active {
        color: ${({ theme }) => theme.colors.primary};
      }

      span {
        padding-left: 7px;
      }
    }
  }
`;
