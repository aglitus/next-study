import { useRouter } from "next/router";
import React, { useEffect } from "react";

export default function Login(props) {

    const router = useRouter();

    useEffect(() => {
        localStorage.setItem("token", "AAaaBBBcc65ah.jhgAssbvnss.7shgdb");
        localStorage.setItem("user", props.name);
        router.push('/about'); 
    });

    return (
        <div>Auth...</div>
    );
}

export async function getServerSideProps() {
  
    const data = await fetch("https://randomuser.me/api").then((res) => res.json());

    return {
      props: { name: data.results[0].name.first },
    };
  
  }