import type { NextPage } from "next"
import Image from "next/image"
import { useState, useEffect } from "react"
import Layout from "../../../layouts/facecam"
import Dino from "../../../assets/img/dino.png"
import { getLatestStreams } from "../../../lib/notion"

interface Props {
  getLatestStreams: [any]
}

export async function getServerSideProps() {
  // Get the getLatestStreams
  let { results } = await getLatestStreams()
  // Return the result
  return {
    props: {
      getLatestStreams: results,
    },
  }
}

const Facecam: NextPage<Props> = (props) => {
  const [latestStream, setLatestStream] = useState()

  useEffect(() => {
    const { properties } = props.getLatestStreams[0]
    setLatestStream(properties)
  }, [props.getLatestStreams, latestStream])

  return (
    <Layout pageTitle="Osu! Scene">
      <div className="relative w-full h-full  text-primary-white">
        <div className="flex ml-40 mt-14">
          <div className="inline-block w-[1690px] h-[956.89px] bg-[#00ff00] border-2 border-white rounded-[1.5rem] shadow-xl">
            <div className="relative">
              <div className="absolute top-[2px] left-[2px] z-10 w-[444.54px] h-[50px] bg-primary-white text-primary-black rounded-[2rem] border border-primary-black -translate-y-8 ml-16 flex items-center justify-center">
                <span>
                  {latestStream?.Title?.title[0]?.plain_text || "No Titles"}
                </span>
              </div>
              <div className="w-[449px] h-[54px] bg-primary-white text-primary-black rounded-[2rem] border border-primary-black -translate-y-8 ml-16 flex items-center justify-center"></div>
            </div>
          </div>
          <div className="absolute bottom-20 left-8 inline-block w-[400px] h-[400px] bg-[#00ff00] border-2 border-white rounded-full shadow-xl">
          </div>
        </div>
        <div className="absolute bottom-16 -right-[155px]">
          <Image
            src={Dino}
            alt="Cloud Right"
            layout="fixed"
            quality={100}
            width={379}
            height={412}
          />
        </div>
      </div>
    </Layout>
  )
}

export default Facecam
