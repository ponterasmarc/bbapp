import { signedInUser } from "@/store/actions/userActions";
import { getSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { LoginWrapper, LoginInner, SocialBtn, Divider } from "./styled";

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const securePage = async () => {
      const session = await getSession();
      if (session) {
        dispatch(signedInUser(session.user.email));
        router.push("/admin/dashboard");
      }
    };
    securePage();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    console.log(res);
  };

  return (
    <LoginWrapper>
      <LoginInner>
        <h2>Login</h2>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
            onChange={(e) => setEmail(e.target.value)}
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
            placeholder="*************"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleSubmit}>Login</button>
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
