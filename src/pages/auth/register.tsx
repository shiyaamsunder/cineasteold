import { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import type { ApiError } from "@supabase/supabase-js";

import {
  ActionContainer,
  Container,
  EmailContainer,
  Wrapper,
} from "@styles/pages/login.styles";
import { Button, Divider, Heading, Input, Link, Modal } from "@components";
import { supabase } from "@utils";
import { useInput } from "@hooks";

const RegisterPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function validateEmail(email: string): boolean {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  const validatePassword = (password: string) => {
    // TODO: make this to check for stronger password
    return password.length >= 6;
  };

  const {
    value: email,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlur,
    hasError: emailError,
    isValid: emailValid,
  } = useInput(validateEmail);
  const {
    value: password,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlur,
    hasError: passwordError,
    isValid: passwordValid,
  } = useInput(validatePassword);

  useEffect(() => {
    if (!emailValid || !passwordValid) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [emailValid, passwordValid]);

  const router = useRouter();
  const handleRegister = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      setErrorMessage("");
      const { error: signUpError } = await supabase.auth.signUp({
        email,
        password,
      });
      if (signUpError) throw signUpError;
      else router.push("/");
    } catch (error) {
      setShowModal(true);

      const { message } = error as ApiError;
      // let status = (error as ApiError).status;

      // console.log(message);
      setErrorMessage(message);
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
              onChange={emailChangeHandler}
              onBlur={emailBlur}
              label="Email"
              isFullWidth
              variant="filled"
              type="email"
              invalid={emailError}
            />
            <Input
              value={password}
              onChange={passwordChangeHandler}
              onBlur={passwordBlur}
              label="Password"
              isFullWidth
              variant="filled"
              type="password"
              invalid={passwordError}
            />
            <ActionContainer>
              <Button
                primary
                isLoading={isLoading}
                disabled={disabled}
                onClick={(e) => {
                  e.preventDefault();
                  handleRegister(email, password);
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

        <div>
          Already have an account? Sign up{" "}
          <Link size="lg" href="/auth/login">
            here
          </Link>
        </div>
        <Modal
          width="400px"
          height="200px"
          show={showModal}
          onClose={() => setShowModal((p) => !p)}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: "100%",
              padding: "20px",
            }}
          >
            {errorMessage}
          </div>
        </Modal>
      </Wrapper>
    </>
  );
};

export default RegisterPage;
