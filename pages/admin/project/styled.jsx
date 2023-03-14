import styled from "styled-components";

export const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 15px;
  border-left: 1px solid ${({ theme }) => theme.colors.defaultBorder};

  button {
    border-radius: 0;
    margin: 0;
    position: relative;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.secondaryText};
    border-top: 1px solid ${({ theme }) => theme.colors.defaultBorder};
    border-bottom: 1px solid ${({ theme }) => theme.colors.defaultBorder};
    border-right: 1px solid ${({ theme }) => theme.colors.defaultBorder};
  }

  button.active {
    background-color: ${({ theme }) => theme.colors.primary};
    color: #fff;
  }
`;

export const StatusWrap = styled.div`
  display: flex;

  svg {
    margin-left: 7px;
    color: ${({ theme }) => theme.colors.secondaryText};
  }
`;
