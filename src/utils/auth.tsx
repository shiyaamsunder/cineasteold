import { createContext, useState, useEffect, ReactNode } from "react";
import type { Session, SupabaseClient, User } from "@supabase/supabase-js";

import { supabase } from "./supabaseClient";

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

  useEffect(() => {
    const activeSession = supabase.auth.session();
    setSession(activeSession);
    setUser(activeSession?.user ?? null);

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_, currentSession) => {
        setSession(currentSession);
        setUser(currentSession?.user ?? null);
      }
    );

    return () => {
      authListener?.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{ session, user, signOut: () => supabase.auth.signOut() }}
    >
      {children}
    </AuthContext.Provider>
  );
};
