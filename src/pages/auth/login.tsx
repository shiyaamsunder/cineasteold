import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import {
  ActionContainer,
  Container,
  Divider,
  EmailContainer,
  Wrapper,
} from "@styles/pages/login.styles";
import { Button, Heading, Input } from "@components";
import { supabase } from "@utils";

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const handleLogin = async (
    email: string,
    password: string,
    type: "signIn" | "signUp"
  ) => {
    try {
      setIsLoading(true);

      switch (type) {
        case "signIn":
          let { error: signInError } = await supabase.auth.signIn({
            email,
            password,
          });
          if (signInError) throw signInError;
          break;

        case "signUp":
          let { error: signUpError } = await supabase.auth.signUp({
            email,
            password,
          });
          if (signUpError) throw signUpError;
          break;
        default:
          break;
      }
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
      router.push("/");
    }
  };
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Wrapper>
        <h1>Login</h1>

        <Container>
          <EmailContainer>
            <Heading as="h4">Sign up/in with Email</Heading>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
              isFullWidth
              variant="filled"
              type="email"
            />
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label="Password"
              isFullWidth
              variant="filled"
              type="password"
            />

            <ActionContainer>
              <Button
                primary
                isLoading={isLoading}
                onClick={(e) => {
                  e.preventDefault();
                  handleLogin(email, password, "signIn");
                }}
              >
                Login
              </Button>
              <span>Or</span>
              <Button
                secondary
                isLoading={isLoading}
                onClick={(e) => {
                  e.preventDefault();
                  handleLogin(email, password, "signUp");
                }}
              >
                Register
              </Button>
            </ActionContainer>
          </EmailContainer>
          <Divider />
          <p style={{ margin: "10px 0px" }}>Or</p>
          <Button onClick={() => supabase.auth.signIn({ provider: "google" })}>
            Sign In with Google
          </Button>
        </Container>
      </Wrapper>
    </>
  );
};

export default LoginPage;
