import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import styled from "styled-components";

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

const SuccessDeleteFull = ({ message, fallbackUrl, reset }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <AlertWrapper>
        <div>{message}</div>
        <button
          onClick={() => {
            router.push(fallbackUrl);
            if (reset) {
              dipatch({
                type: reset,
              });
            }
          }}
        >
          Go back
        </button>
      </AlertWrapper>
    </Wrapper>
  );
};

export default SuccessDeleteFull;
