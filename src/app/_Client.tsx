"use client";

import { useTRPC } from '@/trpc/client'
import { useSuspenseQuery } from '@tanstack/react-query';
import React from 'react'

const ClientPage = () => {
    const trpc = useTRPC();
    const {data: users, isLoading} = useSuspenseQuery(trpc.getAllUsers.queryOptions());
  return (
    <div>
        {JSON.stringify(users)}
    </div>
  )
}

export default ClientPage