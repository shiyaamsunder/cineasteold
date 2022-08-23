import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import {
  ActionContainer,
  Container,
  EmailContainer,
  Wrapper,
} from "@styles/pages/login.styles";
import { Button, Divider, Heading, Input, Link } from "@components";
import { supabase } from "@utils";

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const handleLogin = async (email: string, password: string) => {
    try {
      const { error: signInError } = await supabase.auth.signIn({
        email,
        password,
      });
      if (signInError) throw signInError;
    } catch (error) {
      // eslint-disable-next-line
      console.log(error);
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
        <Heading as="h2">Sign In</Heading>
        <Container>
          <EmailContainer>
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
                  handleLogin(email, password);
                }}
              >
                Login
              </Button>
              {/* <Button
                secondary
                isLoading={isLoading}
                onClick={(e) => {
                  e.preventDefault();
                  handleLogin(email, password, "signUp");
                }}
              >
                Register
              </Button> */}
            </ActionContainer>
          </EmailContainer>
          <Divider>Or</Divider>
          <ActionContainer>
            <Button
              onClick={() => supabase.auth.signIn({ provider: "google" })}
            >
              Sign In with Google
            </Button>
          </ActionContainer>
        </Container>

        <ActionContainer>
          Don&apos;t have an account? Sign up{" "}
          <Link size="lg" href="/auth/register">
            here
          </Link>
        </ActionContainer>
      </Wrapper>
    </>
  );
};

export default LoginPage;
