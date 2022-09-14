import type { NextPage } from "next"
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center text-center bg-primary-black text-primary-white">
      <h1 className="text-8xl font-bold mb-4 uppercase leading-relaxed">
        RSurya99 Stream Overlay
      </h1>
      <div className="flex space-x-8">
        <Link href="/scenes/idling">
          <a className="px-5 py-3 bg-primary-white rounded-sm text-primary-black text-2xl capitalize">Idling Scenes</a>
        </Link>
        <Link href="/scenes/streaming">
          <a className="px-5 py-3 bg-primary-white rounded-sm text-primary-black text-2xl capitalize">Streaming Scenes</a>
        </Link>
      </div>
    </div>
  )
}

export default Home
