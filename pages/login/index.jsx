import { getSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { LoginWrapper, LoginInner, SocialBtn, Divider } from "./styled";

const Login = () => {
  const router = useRouter();
  useEffect(() => {
    const securePage = async () => {
      const session = await getSession();
      if (session) {
        router.push("/admin/dashboard");
      }
    };
    securePage();
  }, []);

  return (
    <LoginWrapper>
      <LoginInner>
        <h2>Login</h2>
        <form action="">
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="passowrd" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
            />
          </div>
          <button>Login</button>
        </form>
        <Divider>
          <hr />
          <span>or</span>
          <hr />
        </Divider>
        <SocialBtn onClick={() => signIn("google")}>
          <img src="/assets/images/google.png" alt="" />
          Login with Google
        </SocialBtn>
        <SocialBtn onClick={() => signIn("github")}>
          <img src="/assets/images/github.png" alt="" />
          Login with Github
        </SocialBtn>
      </LoginInner>
    </LoginWrapper>
  );
};

export default Login;
