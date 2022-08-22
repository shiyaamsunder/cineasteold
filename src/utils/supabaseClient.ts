import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// TODO: make an error boundary to check for undefined keys
export const supabase = createClient(supabaseUrl || "", supabaseAnonKey || "");
