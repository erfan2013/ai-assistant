"use client"

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import LoadingSpinner from "@/components/shared/loading-spinner";

export const HomeView = () => {
    const router = useRouter();
  const {data : session} = authClient.useSession();
  const handleSignOut = async () => {
    try {
      await authClient.signOut();   // اگر نیاز به گزینه بود، اینجا پاس بده
      router.push("/sign-in");
    } catch (e) {
      console.error(e);
    }
  };

  if(!session){
    return (
      <LoadingSpinner  />
    )
  }
  return (
    <div className="flex flex-col p-4 gap-y-4">
      <p>Logged in as {session.user.name}</p>
      <Button onClick={handleSignOut}>
        Sign Out
      </Button>
    </div>
  )
}
