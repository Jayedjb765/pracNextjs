import Link from "next/link";


const Homepage = () => {
  console.log(" Home page rendered");
  return (
    <div className="text-center">
      <h1 className="text-4xl text-center">Welcoome to Nextjs</h1>
      <Link href='/dashboard'><button>Dashboard</button></Link>
    </div>
  );
};

export default Homepage;