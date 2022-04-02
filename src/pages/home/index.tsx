import Head from "next/head";

import { trpc } from "@utils";
import { Button } from "@components";

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
        <Button size="lg" disabled>
          Large
        </Button>
        <Button isFullWidth size="sm">
          Full width
        </Button>
      </div>

      <Button primary size="sm">
        Primary
      </Button>
      <Button primary size="md" disabled>
        Primary
      </Button>
      <Button disabled secondary size="lg">
        Primary
      </Button>
    </>
  );
}
