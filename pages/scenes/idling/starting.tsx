import type { NextPage } from "next"
import { useEffect, useState } from "react"
import Layout from "../../../layouts/idling"
import { getLatestStreams } from '../../../lib/notion'

interface Props {
  getLatestStreams: [any]
}

export async function getServerSideProps() {
  // Get the getLatestStreams
  let { results } = await getLatestStreams()
  // Return the result
  return {
    props: {
      getLatestStreams: results
    }
  }
}

const Starting: NextPage<Props> = (props) => {
  const [countDown, setCountDown] = useState<number>(0)
  const [runTimer, setRunTimer] = useState<boolean | Function>((t: string) => !t)
  const [latestStream, setLatestStream] = useState<any>()

  useEffect(() => {
    const { properties } = props.getLatestStreams[0]
    setLatestStream(properties)
  }, [props.getLatestStreams, latestStream])

  useEffect(() => {
    console.log('called this 1')
    let timerId: ReturnType<typeof setInterval> | any

    if (runTimer) {
      setCountDown(60 * 5)
      timerId = setInterval(() => {
        setCountDown((countDown) => countDown - 1)
      }, 1000)
    } else {
      clearInterval(timerId)
    }

    return () => clearInterval(timerId)
  }, [runTimer])

  useEffect(() => {
    if (countDown < 0 && runTimer) {
      console.log('called this')
      console.log("expired")
      setRunTimer(false)
      setCountDown(0)
    }
  }, [countDown, runTimer])

  const seconds = String(countDown % 60).padStart(2, '0')
  const minutes = String(Math.floor(countDown / 60)).padStart(2, '0')
  
  return (
    <Layout pageTitle="End Scene">
      <div className="w-full h-full flex flex-col items-center justify-center text-center text-primary-black">
        <h1 className="text-8xl font-bold mb-4 uppercase">
          {minutes}:{seconds}
        </h1>
        <h1 className="text-8xl font-bold mb-4 uppercase">
          Starting Soon
        </h1>
        <p className="text-4xl capitalize">{latestStream?.Title.title[0].plain_text}</p>
      </div>
    </Layout>
  )
}

export default Starting
