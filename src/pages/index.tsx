import Head from "next/head";

import { trpc } from "@utils";
import { Button, Input } from "@components";

export default function Home() {
  const hello = trpc.useQuery(["hello", { text: "Shiyaam" }]);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <h1>Home</h1>

      <p>{hello.data && hello.data.greeting}</p>

      <div style={{ display: "flex", alignItems: "flex-end" }}>
        <Button>Small</Button>
        <Input />
      </div>
    </>
  );
}
