import Head from "next/head";

import { Button, Input } from "@components";
import { useAuth } from "@hooks";

export default function Home() {
  // const [loading, setLoading] = useState<boolean>(false);
  const auth = useAuth();

  console.log(auth);
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <h1>Home</h1>

      {auth?.session && <p>{auth.session.user?.id}</p>}
      <div style={{ display: "flex", alignItems: "flex-end" }}>
        <Button>Small</Button>
        <Input />
      </div>
    </>
  );
}
