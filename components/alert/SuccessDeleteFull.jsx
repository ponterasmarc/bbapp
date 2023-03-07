import { useRouter } from "next/router";
import styled from "styled-components";
import { LinkAsBtn } from "../utils/styled";

const Wrapper = styled.div`
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  background: #0000007a;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    margin-bottom: 15px;
  }
`;
const AlertWrapper = styled.div`
  padding: 15px;
  border: 1px solid ${({ theme }) => theme.colors.success};
  margin-bottom: 15px;
  border-radius: 7px;
  background-color: ${({ theme }) => theme.colors.bodyBg};
  color: ${({ theme }) => theme.colors.success};
`;

const SuccessDeleteFull = ({ message, fallbackUrl }) => {
  return (
    <Wrapper>
      <AlertWrapper>
        <div>{message}</div>
        <LinkAsBtn href={fallbackUrl}>Go back</LinkAsBtn>
      </AlertWrapper>
    </Wrapper>
  );
};

export default SuccessDeleteFull;
