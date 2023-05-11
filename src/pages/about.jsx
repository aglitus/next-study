import Head from "next/head";
import { useEffect, useState } from "react";

export default function About() {

  const [user, setUser] = useState('');

  useEffect(() =>{
    setUser(localStorage.getItem('user'));
  }, [user]); 
  
  return (
    <>
      <Head>
        <title>Next.js study</title>
        <meta name="description" content="A app demo made with Next.js!" />
      </Head>
      <div>Your usename: { user }</div>
    </>
  );
}


