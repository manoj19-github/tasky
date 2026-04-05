import { PrismaClient } from "../generated/prisma/client";
//                          ^^-- go up one more level

const globalPrisma = global as unknown as { prisma: PrismaClient };

const prismaConfig = globalPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV === "development") globalPrisma.prisma = prismaConfig;

export default prismaConfig;