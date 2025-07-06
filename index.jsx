import Head from "next/head";
import ExpressServicesLanding from "../components/ExpressServicesLanding";

export default function Home() {
  return (
    <>
      <Head>
        <title>Express Services</title>
      </Head>
      <ExpressServicesLanding />
    </>
  );
}
