"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";


const Homepage = () => {

  const router = useRouter()
  const handelNavigation = () => {
    router.push('/dashboard')
  }
  return (
    <div className="text-center">
      <h1 className="text-4xl text-center">Welcoome to Nextjs</h1>
      <button onClick={handelNavigation}>Dashboard</button>
    </div>
  );
};

export default Homepage;