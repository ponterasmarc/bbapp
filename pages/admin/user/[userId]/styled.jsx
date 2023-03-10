import styled from "styled-components";

export const FlexDiv = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 15px;
`;
export const Col = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: end;
`;

export const UserImg = styled.img`
  width: 70px;
  height: 70px;
  object-fit: contain;
  border-radius: 7px;
  display: block;
`;

export const UserDetailsWrap = styled.div`
  margin-right: 30px;
  margin-bottom: 30px;
`;
export const UserView = styled.div`
  display: flex;
`;

export const FieldWrap = styled.div`
  margin-bottom: 15px;
`;
export const Label = styled.label`
  min-width: 100px;
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;
`;
export const Data = styled.span``;

export const Form = styled.form`
  width: 600px;
`;

export const UserName = styled.span`
  display: block;
  font-size: 18px;
  font-family: "Title";
  font-weight: 900;
  color: ${({ theme }) => theme.colors.primaryText}; ;
`;
export const UserPosition = styled.span`
  display: block;
`;
