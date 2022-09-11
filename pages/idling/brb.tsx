import type { NextPage } from "next";
import Layout from "../../../layouts/idling";

const Brb: NextPage = () => {
  return (
    <Layout pageTitle="BRB Scene">
      <div className="w-full h-full flex flex-col items-center justify-center text-center text-primary-black">
        <h1 className="text-8xl font-bold mb-4 uppercase">Be Right Back</h1>
        <p className="text-4xl capitalize">Stream Title</p>
      </div>
    </Layout>
  );
};

export default Brb;
