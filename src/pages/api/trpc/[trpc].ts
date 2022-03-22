import * as trpcNext from "@trpc/server/adapters/next";

import { appRouter } from "src/server/router";

export type AppRouter = typeof appRouter;

export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => null,
});
