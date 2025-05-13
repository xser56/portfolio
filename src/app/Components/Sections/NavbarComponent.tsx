"use client"

import { useRouter } from "next/navigation";

export default function Navbar() {

  const router = useRouter();
  
  return (
    <nav className="fixed top-0 w-full bg-white shadow z-50 text-black">
      <div className=" mx-10 flex justify-between items-center py-4 px-6">
        <h1 className="font-bold text-1xl">A Web Devoloper's Portfolio</h1>
        {/* Drop down  */}
        <div className="space-x-10 pe-20 text-[14px]">
        <button onClick={() => router.push("about")}>About</button>
          <button onClick={() => router.push("/projects")}>Projects</button>
          <button onClick={() => router.push("contact")}>Contact</button>
        </div>
      </div>
    </nav>
  );
}

