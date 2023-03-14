import styled from "styled-components";

const ThemeButton = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 99;
  border: 1px solid ${({ theme }) => theme.colors.defaultBorder};

  button {
    background-color: transparent;
    border-radius: 0;
    border: 1px solid ${({ theme }) => theme.colors.defaultBorder};
    display: flex;
    align-items: center;
    font-size: 12px;
    padding: 5px 15px;
    margin: 0;

    svg,
    span {
      display: block;
      color: ${({ theme }) => theme.colors.secondaryText};
    }
    svg {
      font-size: 20px;
      margin-left: 5px;
      color: ${({ theme }) => theme.colors.secondaryText};
    }
    :hover {
      cursor: pointer;
    }
  }

  button.active {
    background-color: ${({ theme }) => theme.colors.primary};
    svg {
      color: #fff;
    }
  }
`;

const ThemeSwtich = ({ children }) => {
  return <ThemeButton>{children}</ThemeButton>;
};

export default ThemeSwtich;
