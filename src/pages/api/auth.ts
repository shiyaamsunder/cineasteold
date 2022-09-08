import type { NextApiRequest, NextApiResponse } from "next";

import { supabase } from "@utils";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  supabase.auth.api.setAuthCookie(req, res);
}
