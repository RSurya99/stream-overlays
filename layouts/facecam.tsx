import Head from "next/head"
import Image from "next/image"
import Cloud from "../assets/img/cloud.png"
import Textures from "../assets/img/textures.png"

interface IdlingProp {
  children: React.ReactNode
  pageTitle: string
}

const Facecam = (props: IdlingProp) => {
  const { children, pageTitle } = props
  return (
    <>
      <Head>
        <title>RSurya99 Stream Overlay | {pageTitle}</title>
        <meta name="description" content="RSurya99 Stream Assets" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative w-[1920px] h-[1080px] bg-primary-black font-sans antialiased overflow-hidden">
        <div className="relative w-full h-full z-10">{children}</div>
        <div className="absolute top-[28px] left-[28px] animate-cloudMove">
          <Image
            src={Cloud}
            alt="Cloud Left"
            layout="fixed"
            quality={100}
            width={175}
            height={75}
          />
        </div>
        <div className="absolute top-24 left-16">
          <Image
            src={Textures}
            alt="Textures"
            layout="fixed"
            quality={100}
          />
        </div>
      </div>
    </>
  )
}

export default Facecam
