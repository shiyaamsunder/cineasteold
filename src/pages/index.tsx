import Head from "next/head";
import { useQuery } from "react-query";

import { trpc } from "@utils";
import { Button, Input } from "@components";

export default function Home() {
  const getSession = async () => {
    const res = await fetch("/api/auth/session");
    const data = await res.json();
    return data;
  };
  const session = useQuery("session", getSession);
  console.log(session.data);
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <h1>Home</h1>

      <div style={{ display: "flex", alignItems: "flex-end" }}>
        <Button>Small</Button>
        <Input />
      </div>
    </>
  );
}
