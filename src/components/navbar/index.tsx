import { useState } from "react";
import { useRouter } from "next/router";

import {
  Wrapper,
  Left,
  Container,
  Links,
  Link,
  SideNavbarWrapper,
  SideBarHeader,
  Right,
} from "./navbar";

import { supabase } from "@utils";
import { BurgerIcon, CloseIcon, IconButton } from "@components/icons";
import { Button, Heading } from "@components/ui";
import { useAuth } from "@hooks";

const AuthComponent = () => {
  const auth = useAuth();
  const router = useRouter();
  const signOut = async () => {
    await supabase.auth.signOut();
    await router.push("/auth/login");
  };

  if (auth?.session) {
    return <Button onClick={signOut}>Sign out</Button>;
  }
  return <Button onClick={() => router.push("/auth/login")}>Sign in</Button>;
};

const LinksComponent = () => (
  <Links>
    <Link href="/">Home</Link>
    <Link href="/trending">Trending</Link>
    <Link href="/">About</Link>
  </Links>
);

export const Navbar = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const { route } = useRouter();

  return (
    <Wrapper>
      <Container>
        <Left>
          <IconButton
            aria-label="Menu"
            onClick={() => setShowSideBar(!showSideBar)}
          >
            <BurgerIcon />
          </IconButton>

          <Heading textColor="gray.100">Cineaste</Heading>
          <LinksComponent />
        </Left>

        <Right>
          {route === "/auth/register" || route === "/auth/login" ? null : (
            <AuthComponent />
          )}
        </Right>
      </Container>

      <SideNavbarWrapper show={showSideBar}>
        <SideBarHeader>
          <Heading textColor="gray.100">Cineaste</Heading>
          <IconButton
            aria-label="Close"
            onClick={() => setShowSideBar(!showSideBar)}
          >
            <CloseIcon />
          </IconButton>
        </SideBarHeader>
        <LinksComponent />
      </SideNavbarWrapper>
    </Wrapper>
  );
};
