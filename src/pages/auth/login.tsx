import { signIn } from "next-auth/react";

import {
  ActionContainer,
  Container,
  Wrapper,
} from "@styles/pages/login.styles";
import { Button, Input } from "@components";

const LoginPage = () => (
  <Wrapper>
    <h1>Login</h1>

    <Container>
      <Input label="Username" isFullWidth variant="filled" />
      <Input label="Password" isFullWidth variant="filled" type="password" />

      <ActionContainer>
        <Button onClick={() => signIn("google")}>Sign In with Google</Button>
        <Button>Sign In</Button>
      </ActionContainer>
    </Container>
  </Wrapper>
);

export default LoginPage;
