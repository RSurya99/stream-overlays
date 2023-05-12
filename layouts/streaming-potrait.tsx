import Head from "next/head"
import Image from "next/image"
import Cloud from "../assets/img/cloud.png"
import Textures from "../assets/img/textures-long.png"
import BottomRoadMaskDark from "../assets/img/bottom-road-mask-long-with-cactus-dark.png"

interface IdlingProp {
  children: React.ReactNode
  pageTitle: string
}

const Streaming = (props: IdlingProp) => {
  const { children, pageTitle } = props
  return (
    <>
      <Head>
        <title>RSurya99 Stream Overlay | {pageTitle}</title>
        <meta name="description" content="RSurya99 Stream Assets" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative w-[1080px] h-[1920px] bg-primary-black font-sans antialiased overflow-hidden">
        <div className="relative w-full h-full z-10">{children}</div>
        {/* <div className="absolute top-0 right-[370px] animate-[cloudMove_3s_ease_infinite]">
          <Image
            src={Cloud}
            alt="Cloud Right"
            layout="fixed"
            quality={100}
            width={302}
            height={129}
          />
        </div>
        <div className="absolute top-[28px] left-[470px] animate-cloudMove">
          <Image
            src={Cloud}
            alt="Cloud Left"
            layout="fixed"
            quality={100}
            width={175}
            height={75}
          />
        </div> */}
        <div className="absolute top-28 left-0 animate-marqueeTexture">
          <Image
            src={Textures}
            alt="Textures"
            layout="fixed"
            quality={100}
          />
        </div>
        <div className="absolute bottom-6 left-0 w-[3193px] h-[234px] animate-marqueeLine">
          <Image src={BottomRoadMaskDark} alt="Bottom Road" quality={100} />
        </div>
      </div>
    </>
  )
}

export default Streaming
