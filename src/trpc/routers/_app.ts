import { z } from "zod";
import { createTRPCRouter, baseProcedure } from "../init";

export const appRouter = createTRPCRouter({
    getAllUsers: baseProcedure.input(z.object({
        text: z.string()
    }),
    ).query(async (opts) => {
        return {
            users: [
                { id: 1, name: "santra", email: opts.ctx.userId },
                { id: 2, name: "santra", email: "santra@gmail.com" },
                { id: 3, name: "santra", email: "santra@gmail.com" },
            ]
        }
    })
});


export  type  AppRouter = typeof appRouter;
