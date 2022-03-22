import * as trpc from "@trpc/server";
import { z } from "zod";

export const appRouter = trpc.router().query("hello", {
  input: z.object({ text: z.string().nullish() }).nullish(),
  resolve({ input }) {
    return {
      greeting: `Hello there, ${input?.text ?? "world"}`,
    };
  },
});
