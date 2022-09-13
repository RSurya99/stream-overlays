import Head from "next/head";
import Image from "next/image";
import BottomRoadMask from "../assets/img/bottom-road-mask-long-with-cactus.png";
import CactusLeft from "../assets/img/cactus-left.png";
import CactusRight from "../assets/img/cactus-right.png";
import Bird from "../assets/img/bird.png";
import Cloud from "../assets/img/cloud.png";

interface IdlingProp {
  children: React.ReactNode;
  pageTitle: string;
}

const Idling = (props: IdlingProp) => {
  const { children, pageTitle } = props;
  return (
    <>
      <Head>
        <title>RSurya99 Stream Overlay | {pageTitle}</title>
        <meta name="description" content="RSurya99 Stream Assets" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative w-[1920px] h-[1080px] bg-primary-white font-sans antialiased overflow-hidden">
        <div className="w-full h-full">{children}</div>
        <div className="absolute top-36 right-48 animate-[cloudMove_3s_ease_infinite]">
          <Image
            src={Cloud}
            alt="Cloud Right"
            layout="fixed"
            quality={100}
            width={184}
            height={79}
          />
        </div>
        <div className="absolute top-56 left-24 animate-[cloudMove_3s_ease_infinite]">
          <Image
            src={Cloud}
            alt="Cloud Left"
            layout="fixed"
            quality={100}
            width={184}
            height={79}
          />
        </div>
        <div className="absolute top-32 w-[165px] h-[174px] animate-burst-marquee" style={{backgroundImage: 'url(/bird.png)'}}>
        </div>
        {/* <div className="absolute bottom-10 right-16">
          <Image
            src={CactusRight}
            alt="Cactus Right"
            layout="fixed"
            quality={100}
            width={254}
            height={256}
          />
        </div> */}
        <div className="absolute bottom-6 left-0 w-[3193px] h-[234px] animate-marqueeLine">
          <Image src={BottomRoadMask} alt="Bottom Road" quality={100} />
        </div>
      </div>
    </>
  );
};

export default Idling;
