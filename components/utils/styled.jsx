import styled from "styled-components";

export const Paper = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.contentBg};
  border-radius: 7px;
  margin-bottom: 15px;
  margin-right: 15px;
  box-shadow: ${({ theme }) => theme.boxShadow.paper};
`;
export const PanelFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

// -------------- BUTTONS ----------------
export const DeleteBtn = styled.button`
  color: ${({ theme }) => theme.colors.btnText};
  background-color: ${({ theme }) => theme.colors.error};
`;
export const AddBtn = styled.button`
  color: ${({ theme }) => theme.colors.btnText};
  background-color: ${({ theme }) => theme.colors.error};
`;

export const UpdateBtn = styled.button`
  color: ${({ theme }) => theme.colors.btnText};
  background-color: ${({ theme }) => theme.colors.error};
`;

export const SaveBtn = styled.button`
  color: ${({ theme }) => theme.colors.btnText};
  background-color: ${({ theme }) => theme.colors.error};
`;

export const Table = styled.table`
  th {
    font-weight: 600;
    text-transform: uppercase;
    text-align: left;
    padding: 7px;
  }
`;
