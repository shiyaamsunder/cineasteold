import Head from "next/head";

import { trpc } from "@utils";
import { Button, Input } from "@components";

export default function Home() {
  const hello = trpc.useQuery(["hello", { text: "Shiyaam" }]);

  if (!hello.data) {
    return <div>Loading</div>;
  }
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <h1>Home</h1>

      <p>{hello.data.greeting}</p>

      <div style={{ display: "flex", alignItems: "flex-end" }}>
        <Button size="sm" type="submit">
          Small
        </Button>
        <Button size="md">Medium</Button>
        <Button size="lg" width={400} disabled>
          Large
        </Button>
        <Button size="sm">Full width</Button>
      </div>

      <Input inputSize="sm" />
      <Input />
      <input />
    </>
  );
}
