import Head from "next/head";
import Image from "next/image";
import BottomRoadMask from "../assets/img/idling/bottom-road-mask.png";
import CactusLeft from "../assets/img/idling/cactus-left.png";
import CactusRight from "../assets/img/idling/cactus-right.png";
import Cloud from "../assets/img/idling/cloud.png";

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

      <div className="relative w-[1920px] h-[1080px] bg-primary-white font-sans antialiased">
        <div className="w-full h-full">{children}</div>
        <div className="absolute top-36 right-48">
          <Image
            src={Cloud}
            alt="Cloud Right"
            layout="fixed"
            quality={100}
            width={184}
            height={79}
          />
        </div>
        <div className="absolute top-56 left-24">
          <Image
            src={Cloud}
            alt="Cloud Left"
            layout="fixed"
            quality={100}
            width={184}
            height={79}
          />
        </div>
        <div className="absolute bottom-10 left-16">
          <Image
            src={CactusLeft}
            alt="Cactus Left"
            layout="fixed"
            quality={100}
            width={255}
            height={256}
          />
        </div>
        <div className="absolute bottom-10 right-16">
          <Image
            src={CactusRight}
            alt="Cactus Right"
            layout="fixed"
            quality={100}
            width={254}
            height={256}
          />
        </div>
        <div className="absolute bottom-6 left-0">
          <Image src={BottomRoadMask} alt="Bottom Road" quality={100} />
        </div>
      </div>
    </>
  );
};

export default Idling;
