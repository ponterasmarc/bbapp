import styled from "styled-components";

export const FlexDiv = styled.div`
  display: flex;
  width: 100%;
`;
export const Col = styled.div`
  width: 100%;
  padding: 15px;
`;

export const UserImg = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
  border: 1px solid ${({ theme }) => theme.colors.border};
  margin: 0 0 15px 0;
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
  font-size: 22px;
  font-family: "Title";
  font-weight: 900;
  margin-bottom: 15px;
  color: ${({ theme }) => theme.colors.primary}; ;
`;
export const UserPosition = styled.span`
  display: block;
`;
