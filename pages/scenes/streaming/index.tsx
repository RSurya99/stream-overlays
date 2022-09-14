import type { NextPage } from "next"
import Link from 'next/link'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

interface Scene {
  id: string
  name: string
  path: string
}


const Streaming: NextPage = () => {
  const [streamingScenes, setStreamingScenes] = useState<Scene[]>([
    {
      id: uuidv4(),
      name: 'Facecam',
      path: '/scenes/streaming/facecam'
    },
    {
      id: uuidv4(),
      name: 'General',
      path: '/scenes/streaming/general'
    },
    {
      id: uuidv4(),
      name: 'Osu!',
      path: '/scenes/streaming/osu'
    }
  ])

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center text-center bg-primary-black text-primary-white">
      <Link href="/">
        <a className="absolute top-4 left-4 flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-12 h-12">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
          </svg>
          <span className="text-lg">Go Back Home</span>
        </a>
      </Link>
      <h1 className="text-8xl font-bold mb-4 uppercase leading-relaxed">
        Streaming Scenes
      </h1>
      <div className="flex items-center flex-wrap justify-center space-x-8">
        {streamingScenes.map((scene) => (
          <Link key={scene.id} href={scene.path}>
            <a className="px-5 py-3 bg-primary-white rounded-sm text-primary-black text-2xl capitalize">{scene.name} Scene</a>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Streaming
