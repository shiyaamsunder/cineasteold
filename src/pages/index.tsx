import Head from "next/head";

import { useAuth } from "@hooks";

export default function Home() {
  // const [loading, setLoading] = useState<boolean>(false);
  const auth = useAuth();

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <h1>Home</h1>

      {auth?.session && (
        <p>Hello random user. Your email id is {auth.session.user?.email}</p>
      )}
    </>
  );
}
