import Head from "next/head";

import { trpc } from "@utils";
import { Button, Input } from "@components";

export default function Home() {
  const hello = trpc.useQuery([
    "user.byId",
    {
      id: "626df4601fd2a226ca58e915",
    },
  ]);
  const bucket = trpc.useQuery([
    "bucket.byUserId",
    { userId: "626df4601fd2a226ca58e915" },
  ]);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <h1>Home</h1>

      <p>{hello.data?.username ?? "User"}</p>

      <div style={{ display: "flex", alignItems: "flex-end" }}>
        <Button>Small</Button>
        <Input />
      </div>
    </>
  );
}
