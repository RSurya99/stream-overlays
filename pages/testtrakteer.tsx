import type { NextPage } from "next"
import Head from "next/head"
import { useEffect } from 'react'
import { useTrakteerWebsocket } from "../lib/trakteer"

interface Props {
  getLatestStreams: [any]
}

// export async function getStaticProps() {
//   const result = await getTrakteerWebsocket()
//   return {
//     props: {
//       result: result
//     }, // will be passed to the page component as props
//   }
// }

const Test: NextPage = async (props) => {
  const { donation, leaderboard, goal, supporter } = await useTrakteerWebsocket()

  useEffect(() => {
    console.log('called')
    console.log('result', result)
  }, [])
  return (
    <div>
      <Head>
        <title>RSurya99 Stream Overlay | Test Trakteer</title>
        <meta name="description" content="RSurya99 Stream Assets" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-2xl font-bold text-primary-black">
        Test Trakteer
      </h1>
    </div>
  )
}

export default Test
