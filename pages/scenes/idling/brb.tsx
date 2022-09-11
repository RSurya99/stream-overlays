import type { NextPage } from "next"
import { useEffect, useState } from 'react'
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

const Brb: NextPage<Props> = (props) => {
  const [latestStream, setLatestStream] = useState()

  useEffect(() => {
    const { properties } = props.getLatestStreams[0]
    setLatestStream(properties)
  }, [props.getLatestStreams, latestStream])

  return (
    <Layout pageTitle="BRB Scene">
      <div className="w-full h-full flex flex-col items-center justify-center text-center text-primary-black">
        <h1 className="text-8xl font-bold mb-4 uppercase">Be Right Back</h1>
        <p className="text-4xl capitalize">{latestStream?.Title.title[0].plain_text}</p>
      </div>
    </Layout>
  );
};

export default Brb
