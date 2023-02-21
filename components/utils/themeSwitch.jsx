import styled from "styled-components";

const ThemeButton = styled.div`
  display: flex;

  button {
    background-color: ${({ theme }) => theme.colors.bodyBg};
    border-radius: 0;
    border: 1px solid ${({ theme }) => theme.colors.border};
    color: ${({ theme }) => theme.colors.text};
    display: flex;
    align-items: center;

    svg,
    span {
      display: block;
    }
    :hover {
      cursor: pointer;
    }
  }

  button.active {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.btnText};
  }
`;

const ThemeSwtich = ({ children }) => {
  return <ThemeButton>{children}</ThemeButton>;
};

export default ThemeSwtich;
