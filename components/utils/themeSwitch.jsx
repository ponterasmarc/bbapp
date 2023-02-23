import styled from "styled-components";

const ThemeButton = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  right: 0;

  button {
    background-color: ${({ theme }) => theme.colors.bodyBg};
    border-radius: 0;
    border: 1px solid ${({ theme }) => theme.colors.border};
    color: ${({ theme }) => theme.colors.text};
    display: flex;
    align-items: center;
    font-size: 12px;
    padding: 5px 15px;

    svg,
    span {
      display: block;
    }
    svg {
      font-size: 20px;
      margin-left: 5px;
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
