import type { NextPage } from "next";
import Image from "next/image";
import { useState, useEffect } from 'react';
import Layout from "../../../layouts/streaming";
import Dino from '../../../assets/img/dino.png'
import { useGosumemory } from "../../../lib/gosumemory";
import { getLatestStreams } from '../../../lib/notion'
import NumberEasing from 'react-number-easing'

interface Props {
  getLatestStreams: [any]
}

export async function getServerSideProps() {
  // Get the getLatestStreams
  let { results } = await getLatestStreams();
  // Return the result
  return {
    props: {
      getLatestStreams: results
    }
  }
}

const Osu: NextPage<Props> = (props) => {
  const [ gameplayData, menu ] = useGosumemory();
  const [latestStream, setLatestStream] = useState();

  useEffect(() => {
    const { properties } = props.getLatestStreams[0];
    setLatestStream(properties)
  }, [props.getLatestStreams, latestStream])

  return (
    <Layout pageTitle="Osu! Scene">
      <div className="w-full h-full  text-primary-white">
        <div className="flex ml-12 mt-20">
          <div className="inline-block w-[1450px] h-[821px] bg-[#00ff00] border-2 border-white rounded-[1.5rem] shadow-xl">
            <div className="relative">
              <div className="absolute top-[2px] left-[2px] z-10 w-[444.54px] h-[50px] bg-primary-white text-primary-black rounded-[2rem] border border-primary-black -translate-y-8 ml-16 flex items-center justify-center">
                <span>{latestStream?.Title.title[0].plain_text}</span>
              </div>
              <div className="w-[449px] h-[54px] bg-primary-white text-primary-black rounded-[2rem] border border-primary-black -translate-y-8 ml-16 flex items-center justify-center">
              </div>
            </div>
          </div>
          <div className="inline-block w-[359px] h-[509px] ml-8 bg-[#282828] border-2 border-white rounded-[1.5rem] shadow-xl">
            <div className="relative">
              <div className="absolute top-[2px] left-[2px] z-10 w-[101px] h-[50px] bg-primary-white text-primary-black rounded-[2rem] border border-primary-black -translate-y-8 ml-12 flex items-center justify-center">
                <span>Chat</span>
              </div>
              <div className="w-[105px] h-[54px] bg-primary-white text-primary-black rounded-[2rem] border border-primary-black -translate-y-8 ml-12 flex items-center justify-center">
              </div>
            </div>
          </div>
        </div>
        <section className="relative bottom flex items-center space-x-32 ml-14 mt-3">
          <h1 className="text-[72px]">RSURYA99</h1>
          <div className="detail">
            <div className="relative w-[650px] h-[55px] bg-[#0E0E0E] bg-opacity-75 border-2 border-primary-white rounded-[2rem] flex items-center justify-center text-center shadow-md overflow-hidden">
              <span className="whitespace-nowrap text-sm animate-marquee">Now Playing {menu?.bm.metadata.artist} - {menu?.bm.metadata.title} [{menu?.bm.metadata.difficulty}]</span>
            </div>
            <div className="flex justify-between mt-2">
              <div className="w-[330px] h-[55px] bg-[#0E0E0E] flex justify-center space-x-10 bg-opacity-75 border-2 border-primary-white rounded-[2rem] py-2 text-center shadow-md">
                <div className="text-sm">
                  <h5>100</h5>
                  <NumberEasing
                    value={gameplayData?.hits['100']}
                    speed={300}
                    decimals={0}
                    ease='quintInOut' />
                </div>
                <div className="text-sm">
                  <h5>50</h5>
                  <NumberEasing
                    value={gameplayData?.hits['50']}
                    speed={300}
                    decimals={0}
                    ease='quintInOut' />
                </div>
                <div className="text-sm">
                  <h5>Miss</h5>
                  <NumberEasing
                    value={gameplayData?.hits['0']}
                    speed={300}
                    decimals={0}
                    ease='quintInOut' />
                </div>
              </div>
              <div className="w-[310px] h-[55px] bg-[#0E0E0E] bg-opacity-75 border-2 border-primary-white rounded-[2rem] py-5 flex items-center justify-center shadow-md">
                <span>
                  <NumberEasing
                    value={gameplayData?.pp.current}
                    speed={250}
                    decimals={0}
                    ease='quintInOut' />pp/
                  <NumberEasing
                    value={gameplayData?.pp.fc}
                    speed={250}
                    decimals={0}
                    ease='quintInOut' />pp
                  {/* {gameplayData?.pp.current}pp/{gameplayData?.pp.fc}pp */}
                </span>
              </div>
            </div>
          </div>
          <div className="absolute -top-28 right-8 w-[433px] h-[259px] bg-[#00ff00] border-2 border-white rounded-[1.5rem] shadow-xl">
          </div>
          <div className="absolute -top-[295px] -right-[155px]">
            <Image src={Dino}
              alt="Cloud Right"
              layout="fixed"
              quality={100}
              width={379}
              height={412}
            />
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Osu;
