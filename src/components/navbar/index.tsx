import type { Dispatch, SetStateAction} from "react";
import { useEffect , useState } from "react";
import { useRouter } from "next/router";
import type { Session } from "@supabase/supabase-js";

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

const AuthComponent = () => {
  const [session, setSession] = useState<Session | null>(null);
  const router = useRouter();
  useEffect(() => {
    const authState = supabase.auth.onAuthStateChange((e, s) => {
      if (e === "SIGNED_IN") {
        setSession(s);
      }
    });

    return () => authState.data?.unsubscribe();
  }, []);
  const signOut = async () => {
    await supabase.auth.signOut();
    await router.push("/auth/login");
  };

  if (session) {
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

const SideNavbar = ({
  show,
  setShowSideBar,
}: {
  show: boolean;
  setShowSideBar: Dispatch<SetStateAction<boolean>>;
}) => (
  <SideNavbarWrapper show={show}>
    <SideBarHeader>
      <Heading textColor="gray.100">Cineaste</Heading>
      <IconButton onClick={() => setShowSideBar(!show)}>
        <CloseIcon />
      </IconButton>
    </SideBarHeader>
    <LinksComponent />
  </SideNavbarWrapper>
);
export const Navbar = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const router = useRouter();

  return (
    <Wrapper>
      <Container>
        <Left>
          <IconButton onClick={() => setShowSideBar(!showSideBar)}>
            <BurgerIcon />
          </IconButton>

          <Heading textColor="gray.100">Cineaste</Heading>
          <LinksComponent />
        </Left>

        <Right>{router.route !== "/auth/login" && <AuthComponent />}</Right>
      </Container>
      {showSideBar && (
        <SideNavbar show={showSideBar} setShowSideBar={setShowSideBar} />
      )}
    </Wrapper>
  );
};
