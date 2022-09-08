import type { ReactNode} from "react";
import { createContext, useState, useEffect, useMemo } from "react";
import type { Session, SupabaseClient, User } from "@supabase/supabase-js";

import type { supabase } from "./supabaseClient";

type TSupabaseSignOut = typeof supabase.auth.signOut;

interface IAuthContext {
  session: Session | null;
  user: User | null;
  signOut: TSupabaseSignOut;
}
export const AuthContext = createContext<IAuthContext | null>(null);

export const AuthProvider = ({
  supabase,
  children,
}: {
  supabase: SupabaseClient;
  children: ReactNode;
}) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);

  const authValue = useMemo(
    () => ({ session, user, signOut: () => supabase.auth.signOut() }),
    [session, user]
  );
  useEffect(() => {
    const activeSession = supabase.auth.session();
    setSession(activeSession);
    setUser(activeSession?.user ?? null);

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, currentSession) => {
        setSession(currentSession);
        setUser(currentSession?.user ?? null);

        fetch("/api/auth", {
          method: "POST",
          headers: new Headers({ "Content-Type": "application/json" }),
          credentials: "same-origin",
          body: JSON.stringify({ event, session: currentSession }),
        });
      }
    );

    return () => {
      authListener?.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};
