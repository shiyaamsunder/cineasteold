import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createRouter } from "@server/createRouter";
import { prisma } from "@server/prisma";

export const users = createRouter().query("byId", {
  input: z.object({
    id: z.string(),
  }),

  async resolve({ input }) {
    const user = await prisma.users.findUniqueOrThrow({ where: input });
    return user;
  },
});
