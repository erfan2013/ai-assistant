"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const {data : session,} = authClient.useSession();


  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async () => {
    authClient.signUp.email({
      email, name, password
    },{
      onError: () => {
        window.alert("Error signing up");
      }
      ,
      onSuccess: () => {
        window.alert("Signed up successfully"); 

    },

    }
  )
  }
  const onLogin = async () => {
    authClient.signIn.email({
      email, password
    },{
      onError: () => {
        window.alert("Error signing in");
      }
      ,
      onSuccess: () => {
        window.alert("Signed up successfully"); 

    },

    }
  )
  }

  if (session) {
    return (
      <div className="flex flex-col gap-y-10">
        <p>logged in as {session.user.email}</p>
        <Button onClick={() => authClient.signOut()}>Sign out</Button>
      </div>
    )
  }
  return (
   <div className="flex flex-col gap-y-4">
    <div className="p-4 flex flex-col gap-y-4">
    <input
      type="text"
      placeholder="Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
    <input
      type="email"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
    <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
    <Button onClick={onSubmit}>Create User</Button>
   </div>
   <div className="p-4 flex flex-col gap-y-4">
    <input
      type="email"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
    <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
    <Button onClick={onLogin}>Login</Button>
   </div>
   </div>
   
  
  );
}
