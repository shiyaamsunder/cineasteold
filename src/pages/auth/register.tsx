import { useEffect, useMemo, useState } from "react";
import Head from "next/head";
import type { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import type { ApiError } from "@supabase/supabase-js";

import {
  ActionContainer,
  Container,
  EmailContainer,
  PasswordMessageContainer,
  PMessageListItem,
  Wrapper,
} from "@styles/pages/login.styles";
import { Button, Divider, Heading, Input, Link, Modal } from "@components";
import {
  supabase,
  validateEmail,
  validatePassword,
  validatePasswordParts,
} from "@utils";
import { useInput } from "@hooks";

const RegisterPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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
      setErrorMessage(message);
    } finally {
      setIsLoading(false);
    }
  };

  // TODO: refactor this out into a custom hook
  const {
    hasOneDigit,
    hasValidLength,
    hasOneLowerCase,
    hasOneUpperCase,
    hasOneSpecialChar,
  } = useMemo(() => validatePasswordParts(password), [password]);

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
              errorMessage="Enter a valid email (it should contain @)"
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
              errorMessage="Enter a valid password"
            />

            <PasswordMessageContainer>
              <PMessageListItem isValid={hasValidLength}>
                Must contain 8-24 characters
              </PMessageListItem>
              <PMessageListItem isValid={hasOneDigit}>
                Must contain atleast one digit
              </PMessageListItem>
              <PMessageListItem isValid={hasOneLowerCase}>
                Must contain atleast one lowercase character
              </PMessageListItem>
              <PMessageListItem isValid={hasOneUpperCase}>
                Must contain atleast one uppercase character
              </PMessageListItem>
              <PMessageListItem isValid={hasOneSpecialChar}>
                Must contain atleast one special character
              </PMessageListItem>{" "}
            </PasswordMessageContainer>
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
          Already have an account? Sign in{" "}
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

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { user } = await supabase.auth.api.getUserByCookie(req);
  if (user) {
    return {
      props: {},
      redirect: {
        destination: "/",
      },
    };
  }
  return {
    props: {},
  };
};
export default RegisterPage;
