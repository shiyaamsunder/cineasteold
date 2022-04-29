import { signIn } from "next-auth/react";

import { Button, Input } from "@components";

const LoginPage = () => <Button onClick={() => signIn("google")}>Sign In with Google</Button>;

export default LoginPage;
