import styled from "styled-components";

export const FlexDiv = styled.div`
  display: flex;
  width: 100%;
`;
export const Col = styled.div``;

export const UserImg = styled.img`
  width: 300px;
  height: 300px;
  object-fit: wrap;
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
export const FormWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.bodyBg};
  flex-direction: column;
`;
export const Form = styled.form`
  width: 600px;
`;
