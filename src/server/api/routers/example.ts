import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),
  getAllMembers: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.members.findMany();
  }),
  getAllProjects: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.projects.findMany();
  }),
  getAllDivisions: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.divisions.findMany();
  }),
  getAllTechs: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.techs.findMany();
  }),
});
