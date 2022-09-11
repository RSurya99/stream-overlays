import type { NextPage } from "next";
import Layout from "../../../layouts/idling";

const End: NextPage = () => {
  return (
    <Layout pageTitle="End Scene">
      <div className="w-full h-full flex flex-col items-center justify-center text-center text-primary-black">
        <h1 className="text-8xl font-bold mb-4 uppercase leading-relaxed">
          Thanks <br /> For Watching
        </h1>
        <p className="text-4xl capitalize">See You Next Time</p>
      </div>
    </Layout>
  );
};

export default End;
