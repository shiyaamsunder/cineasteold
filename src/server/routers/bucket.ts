import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createRouter } from "@server/createRouter";
import { prisma } from "@server/prisma";

export const buckets = createRouter()
  // by bucket ID
  .query("byId", {
    input: z.object({ id: z.string() }),
    async resolve({ input }) {
      const { id } = input;

      const bucket = await prisma.bucket.findUnique({ where: { id } });

      if (!bucket) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: `No bucket with id ${id}`,
        });
      }
      return bucket;
    },
  })
  .query("byUserId", {
    input: z.object({ userId: z.string() }),
    async resolve({ input }) {
      const { userId } = input;

      const bucket = await prisma.bucket.findUnique({ where: { userId } });

      if (!bucket) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: `No bucket with id ${userId}`,
        });
      }

      return bucket;
    },
  })
  .query("all", {
    async resolve() {
      const allBuckets = await prisma.bucket.findMany();
      return allBuckets;
    },
  });
