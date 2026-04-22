import {betterAuth} from "better-auth";
import {prismaAdapter} from "better-auth/adapters/prisma";
import prismaConfig from "./dbConfig";
const auth = betterAuth({
    database:prismaAdapter(prismaConfig,{
        provider:"mongodb"
    }),
    emailAndPassword:{
        enabled:true,
        autoSignIn:true,

    }
});

export default auth;