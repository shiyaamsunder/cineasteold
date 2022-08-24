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

const RegisterPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleLogin = async (email: string, password: string) => {
    try {
      const { error: signUpError } = await supabase.auth.signUp({
        email,
        password,
      });
      if (signUpError) throw signUpError;
      else router.push("/");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Register</title>
      </Head>

      <Wrapper>
        <Heading as="h2">Sign Up</Heading>
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
                Register
              </Button>
            </ActionContainer>
          </EmailContainer>
          <Divider>Or</Divider>
          <ActionContainer>
            <Button
              onClick={() => supabase.auth.signIn({ provider: "google" })}
            >
              Sign Up with Google
            </Button>
          </ActionContainer>
        </Container>

        <ActionContainer>
          Already have an account? Sign up{" "}
          <Link size="lg" href="/auth/login">
            here
          </Link>
        </ActionContainer>
      </Wrapper>
    </>
  );
};

export default RegisterPage;
