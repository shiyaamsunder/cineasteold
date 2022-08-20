import { signIn } from "next-auth/react";

import {
  ActionContainer,
  Container,
  Wrapper,
} from "@styles/pages/login.styles";
import { Button, Input, Link } from "@components";

const LoginPage = () => (
  <Wrapper>
    <h1>Login</h1>

    <Container>
      {/* <Input label="Username" isFullWidth variant="filled" />
      <Input label="Password" isFullWidth variant="filled" type="password" />

      <ActionContainer>
        <Button onClick={() => signIn("google")}>Sign In with Google</Button>
        <Button>Sign In</Button>
      </ActionContainer> */}
      <Button
        onClick={() =>
          signIn("google", { callbackUrl: "http://localhost:3000/" })
        }
      >
        Sign In with Google
      </Button>
    </Container>

    {/* <div>
      <span style={{ marginRight: "5px" }}>
        Don't have an account? Register
      </span>
      <Link size="md" href="/auth/register">
        here
      </Link>
    </div> */}
  </Wrapper>
);

export default LoginPage;
