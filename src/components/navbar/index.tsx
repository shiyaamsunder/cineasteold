import { Button } from "../ui/button";
import { Heading } from "../ui";

import { Wrapper, Left, Center, Links, Link } from "./navbar";

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
    <Button>Login</Button>
  </Wrapper>
);
