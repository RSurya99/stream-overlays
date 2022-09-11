import Head from "next/head";

interface IdlingProp {
  children: React.ReactNode;
  pageTitle: string;
}

const Test = (props: IdlingProp) => {
  const { children, pageTitle } = props;
  return (
    <>
      <Head>
        <title>Dashboard | {pageTitle}</title>
        <meta name="description" content="RSurya99 Stream Assets" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative w-[1920px] h-[1080px] bg-primary-white font-sans antialiased">
        <div className="w-full h-full">{children}</div>
      </div>
    </>
  );
};

export default Test;
