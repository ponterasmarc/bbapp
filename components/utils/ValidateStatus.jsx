import styled from "styled-components";

export const NewIndorsed = styled.span`
  color: ${({ theme }) => theme.colors.newIndorsed};
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
`;
export const Ongoing = styled.span`
  color: ${({ theme }) => theme.colors.ongoing};
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
`;
export const Complete = styled.span`
  color: ${({ theme }) => theme.colors.complete};
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
`;

const ValidateStatus = ({ status }) => {
  return (
    <div>
      {status == "newIndorsed" ? (
        <NewIndorsed>New Indorsed</NewIndorsed>
      ) : status == "ongoing" ? (
        <Ongoing>Ongoing</Ongoing>
      ) : status == "complete" ? (
        <Complete>Complete</Complete>
      ) : (
        ""
      )}
    </div>
  );
};

export default ValidateStatus;
