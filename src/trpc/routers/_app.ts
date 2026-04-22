import { z } from "zod";
import { createTRPCRouter, baseProcedure, protectedProcedure } from "../init";
import prismaConfig from "@/lib/dbConfig";

export const appRouter = createTRPCRouter({
    getAllUsers: protectedProcedure.query( ({ctx}) => {
        console.log("context >>>> ",{userId:ctx.auth.user});

        return prismaConfig.user.findMany({
            where:{
                id:ctx.auth.user.id
            }
        })

    })
});




export type AppRouter = typeof appRouter;
