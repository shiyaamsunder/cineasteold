import { users } from "./user";
import { buckets } from "./bucket";

import { createRouter } from "@server/createRouter";

export const appRouter = createRouter()
  .merge("user.", users)
  .merge("bucket.", buckets);
