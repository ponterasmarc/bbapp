import styled from "styled-components";

export const Paper = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.contentBg};
  border-radius: 7px;
  margin-bottom: 15px;
  margin-right: 15px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.bgSecond};
`;
export const PanelFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const SectionTitle = styled.span`
  display: block;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 15px;
  text-transform: uppercase;
  font-weight: 900;
`;

// -------------- ALERTS ----------------
export const AlertSuccess = styled.div`
  color: ${({ theme }) => theme.colors.success};
  padding: 15px;
  border-radius: 7px;
  border: 1px solid ${({ theme }) => theme.colors.success};
  margin-bottom: 15px;
`;

export const AlertError = styled.div`
  color: ${({ theme }) => theme.colors.danger};
  padding: 15px;
  border-radius: 7px;
  border: 1px solid ${({ theme }) => theme.colors.danger};
  margin-bottom: 15px;
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
  background-color: ${({ theme }) => theme.colors.warning};

  :disabled,
  [disabled] {
    background-color: ${({ theme }) => theme.colors.warningDisable};
    color: ${({ theme }) => theme.colors.btnTextDisable};
  }
`;

export const SaveBtn = styled.button`
  color: ${({ theme }) => theme.colors.btnText};
  background-color: ${({ theme }) => theme.colors.success};
`;

export const LinkAsBtn = styled.a`
  color: ${({ theme }) => theme.colors.btnText};
  background-color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-family: "Body", sans-serif;
  text-transform: uppercase;
  border-radius: 7px;
  padding: 3px 15px;
  border: none;
  display: inline-block;
  font-size: 12px;
  margin-right: 7px;
  font-family: "Title";
  font-weight: 900;
`;

export const Table = styled.table`
  th {
    font-weight: 600;
    text-transform: uppercase;
    text-align: left;
    padding: 7px;
  }
  td {
    vertical-align: middle;
  }
`;

export const Avatar = styled.img`
  max-width: 50px;
  display: block;
  margin: auto;
`;
export const AvatarSmall = styled.img`
  max-width: 25px;
  display: block;
  margin: auto;
`;

export const Empha = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;
