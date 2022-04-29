import { useSession, signIn, signOut } from "next-auth/react";

import { Button } from "../ui/button";
import { Heading } from "../ui";

import { Wrapper, Left, Center, Links, Link } from "./navbar";

function AuthComponent() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user?.email} <br />
        <Button onClick={() => signOut()}>Sign out</Button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <Button onClick={() => signIn()}>Sign in</Button>
    </>
  );
}
export const Navbar = () => (
  <Wrapper>
    <Left>
      <Heading textColor="gray.100">Cineaste</Heading>
    </Left>
    <Center>
      <Links>
        <Link href="/">Home</Link>
        <Link href="/trending">Trending</Link>
        <Link href="/">About</Link>
      </Links>
    </Center>
    <AuthComponent />
  </Wrapper>
);
