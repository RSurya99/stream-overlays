import type { NextPage } from "next";
import Link from 'next/link'

const End: NextPage = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center text-center bg-primary-black text-primary-white">
      <h1 className="text-8xl font-bold mb-4 uppercase leading-relaxed">
        404 Page Not Found
      </h1>
      <Link href="/">
        <a className="px-5 py-3 bg-primary-white rounded-sm text-primary-black text-2xl capitalize">Go Back Home</a>
      </Link>
    </div>
  );
};

export default End;
