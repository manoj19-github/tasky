import Image from "next/image";
import prismaConfig from "../lib/dbConfig";

export default async function Home() {
  const users = await prismaConfig.user.findMany();
  console.log("users 6 >>>>>>>>>>>>> ",users);
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20  text-red-500">
      {JSON.stringify(users)}
      Hello world
    </div>
  );
}
