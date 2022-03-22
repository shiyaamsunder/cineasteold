import Head from "next/head";

import { trpc } from "@utils";

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
    </>
  );
}
