import type * as trpc from "@trpc/server";
import type * as trpcNext from "@trpc/server/adapters/next";

export async function createContext(opts?: trpcNext.CreateNextContextOptions) {
  async function getUserFromHeader() {
    if (opts?.req.headers.authorization) {
      // TO BE IMPLEMENTED
    }

    return null;
  }

  return {
    user: "shiyaam",
  };
}

export type Context = trpc.inferAsyncReturnType<typeof createContext>;
