

// for server component 

// import Image from "next/image";
// import { callerTRPC } from "@/trpc/server";

// export default async function Home() {
//   const users = await callerTRPC.getAllUsers();
//   console.log('users: ', users);


//   return (
//     <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20  text-red-500">
//       {JSON.stringify(users)}
//       Hello world
//     </div>
//   );
// }





// "use client";
// import { useTRPC } from '../trpc/client';
// import { useQuery } from '@tanstack/react-query';
// import React  from 'react'


// const HomePage = () => {
//   const  trpc  = useTRPC();
//   const { data: users, isLoading } = useQuery(trpc.getAllUsers.queryOptions());
//   return (
//     <div>
//       {JSON.stringify(users)}
//     </div>
//   )
// }

// export default HomePage




import { callerTRPC, getQueryClient, trpc } from '@/trpc/server'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import React, { Suspense } from 'react'
import ClientPage from './_Client';
import { createAuthClient } from 'better-auth/react';
import { authClient } from '@/lib/auth-client';
import { Button } from '@/components/ui/button';
import { requireAuth } from '../lib/auth-utils';
import Logout from '@/_components/Logout';

const ServerPage = async () => {
  await requireAuth();
  const data = await callerTRPC.getAllUsers()
  console.log('data: 59 ', data);

  // const {data} = authClient.useSession()
  // const queryClient = getQueryClient();
  // void queryClient.prefetchQuery(trpc.getAllUsers.queryOptions());
  return (
    <div className='min-h-screen min-w-screen flex items-center justify-center'>
      {/* <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback={<div>Loading...</div>}>
          <ClientPage/>
      </Suspense>
      </HydrationBoundary> */}
      <div>
        <div>
          {JSON.stringify(data)}
        </div>
        <Logout />
        <div>
        </div>

      </div>



    </div>
  )
}

export default ServerPage