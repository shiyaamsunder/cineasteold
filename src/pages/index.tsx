import { useEffect, useState } from "react";
import Head from "next/head";
import type { Session } from "@supabase/supabase-js";

import { supabase } from "@utils";
import { Button, Input } from "@components";
import { useAuth } from "@hooks";

export default function Home() {
  const [session, setSession] = useState<Session | null>(null);
  // const [loading, setLoading] = useState<boolean>(false);
  const auth = useAuth();

  console.log(auth);
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <h1>Home</h1>

      {session && <p>{session.user?.id}</p>}
      {auth?.session && <p>{auth.session.user?.id}</p>}
      <div style={{ display: "flex", alignItems: "flex-end" }}>
        <Button>Small</Button>
        <Input />
      </div>
    </>
  );
}
