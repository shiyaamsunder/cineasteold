import { signIn } from "next-auth/react";

import { Container, Wrapper } from "../../styles/pages/login.styles";

import { Button, Input } from "@components";

const LoginPage = () => (
  <Wrapper>
    <h1>Login</h1>

    <Container>
      <Input label="Username" isFullWidth variant="filled" />
      <Input label="Password" isFullWidth variant="filled" />
      <Button style={{ marginTop: "1rem" }} onClick={() => signIn("google")}>
        Sign In with Google
      </Button>
    </Container>
  </Wrapper>
);

export default LoginPage;
