import { useEffect, useState } from "react";
import Head from "next/head";
import type { Session } from "@supabase/supabase-js";

import { supabase } from "@utils";
import { Button, Input } from "@components";

export default function Home() {
  const [session, setSession] = useState<Session | null>(null);
  // const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const authState = supabase.auth.onAuthStateChange((e, s) => {
      if (e === "SIGNED_IN") {
        setSession(s);
      }
    });

    return () => authState.data?.unsubscribe();
  }, []);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <h1>Home</h1>

      {session && <p>{session.user?.id}</p>}
      <div style={{ display: "flex", alignItems: "flex-end" }}>
        <Button>Small</Button>
        <Input />
      </div>
    </>
  );
}
