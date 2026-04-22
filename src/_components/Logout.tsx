"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const Logout = () => {
    const router = useRouter();
    return (
        <div>
            <Button className="!cursor-pointer" onClick={()=>{
                authClient.signOut({
                   fetchOptions:{
                    onSuccess:()=>{
                        router.push('/login')
                    }
                   }
                });
            }}>Log Out</Button>
        </div>
    )
}

export default Logout