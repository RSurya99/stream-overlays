import type { NextPage } from "next"
import Image from "next/image"
import { useState, useEffect } from 'react'
import Layout from "~/layouts/streaming-potrait"
import Dino from '~/assets/img/dino.png'
import { useGosumemory } from "~/lib/gosumemory"
import { getLatestStreams } from '~/lib/notion'

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

const PotraitOsu: NextPage<Props> = (props) => {
  const [ gameplayData, menu ] = useGosumemory()
  const [latestStream, setLatestStream] = useState<any>()

  useEffect(() => {
    const { properties } = props.getLatestStreams[0]
    setLatestStream(properties)
  }, [props.getLatestStreams, latestStream])

  return (
    <Layout pageTitle="Osu! Potrait Scene">
      <div className="w-full h-full  text-primary-white">
        <div className="flex flex-col m-8 gap-y-8">
          <h1 className="text-[72px] text-center">RSURYA99</h1>
          {/* <div className="relative w-full">
            <div className="absolute top-[2px] left-[2px] z-10 w-[1006px] h-[59px] bg-primary-white text-lg text-primary-black rounded-[2rem] border border-primary-black flex items-center justify-center">
              <span>{latestStream?.Title.title[0].plain_text}</span>
            </div>
            <div className="w-[1010px] h-[64px] bg-primary-white text-primary-black rounded-[2rem] border border-primary-black">
            </div>
          </div> */}
          <div className="inline-block w-[1009px] h-[567px] bg-[#00ff00] border-2 border-white rounded-[1.5rem] shadow-xl"></div>
          <div className="inline-block w-[1009px] h-[567px] bg-[#00ff00] border-2 border-white rounded-[1.5rem] shadow-xl"></div>
          <div className="detail space-y-6">
            <div className="relative w-full h-[55px] bg-[#0E0E0E] bg-opacity-75 border-2 border-primary-white rounded-[2rem] flex items-center justify-center text-center shadow-md overflow-hidden">
              {menu ? (
                <span className="whitespace-nowrap text-sm animate-marquee">Now Playing {menu?.bm.metadata.artist} - {menu?.bm.metadata.title} [{menu?.bm.metadata.difficulty}]</span>
              ) : (
                <span className="whitespace-nowrap text-sm text-center">Idling</span>
              )}
            </div>
            <div className="flex justify-between gap-x-8 mt-2">
              <div className="w-full h-[55px] bg-[#0E0E0E] flex justify-center space-x-10 bg-opacity-75 border-2 border-primary-white rounded-[2rem] py-2 text-center shadow-md">
                <div className="text-sm">
                  <h5>100</h5>
                  <span>{gameplayData?.hits['100'] || 0}</span>
                </div>
                <div className="text-sm">
                  <h5>50</h5>
                  <span>{gameplayData?.hits['50'] || 0}</span>
                </div>
                <div className="text-sm">
                  <h5>Miss</h5>
                  <span>{gameplayData?.hits['0'] || 0}</span>
                </div>
              </div>
              <div className="w-full h-[55px] bg-[#0E0E0E] bg-opacity-75 border-2 border-primary-white rounded-[2rem] py-5 flex items-center justify-center shadow-md">
                <span>
                  {gameplayData?.pp.current || 0}pp/
                  {gameplayData?.pp.fc || 0}pp
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[500px] -left-[100px] scale-x-[-1]">
          <Image src={Dino}
            alt="Dino"
            layout="fixed"
            quality={100}
            width={227}
            height={246}
          />
        </div>
        <section className="hidden relative bottom items-center space-x-32 ml-14 mt-3">
          <h1 className="text-[72px]">RSURYA99</h1>
          <div className="detail">
            <div className="relative w-[650px] h-[55px] bg-[#0E0E0E] bg-opacity-75 border-2 border-primary-white rounded-[2rem] flex items-center justify-center text-center shadow-md overflow-hidden">
              {menu ? (
                <span className="whitespace-nowrap text-sm animate-marquee">Now Playing {menu?.bm.metadata.artist} - {menu?.bm.metadata.title} [{menu?.bm.metadata.difficulty}]</span>
              ) : (
                <span className="whitespace-nowrap text-sm text-center">Idling</span>
              )}
            </div>
            <div className="flex justify-between mt-2">
              <div className="w-[330px] h-[55px] bg-[#0E0E0E] flex justify-center space-x-10 bg-opacity-75 border-2 border-primary-white rounded-[2rem] py-2 text-center shadow-md">
                <div className="text-sm">
                  <h5>100</h5>
                  <span>{gameplayData?.hits['100'] || 0}</span>
                </div>
                <div className="text-sm">
                  <h5>50</h5>
                  <span>{gameplayData?.hits['50'] || 0}</span>
                </div>
                <div className="text-sm">
                  <h5>Miss</h5>
                  <span>{gameplayData?.hits['0'] || 0}</span>
                </div>
              </div>
              <div className="w-[310px] h-[55px] bg-[#0E0E0E] bg-opacity-75 border-2 border-primary-white rounded-[2rem] py-5 flex items-center justify-center shadow-md">
                <span>
                  {gameplayData?.pp.current || 0}pp/
                  {gameplayData?.pp.fc || 0}pp
                </span>
              </div>
            </div>
          </div>
          <div className="absolute -top-28 right-8 w-[433px] h-[259px] bg-[#00ff00] border-2 border-white rounded-[1.5rem] shadow-xl">
          </div>
          <div className="absolute -top-[295px] -right-[155px]">
            <Image src={Dino}
              alt="Dino"
              layout="fixed"
              quality={100}
              width={379}
              height={412}
            />
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default PotraitOsu
