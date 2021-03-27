import Head from "next/head";
import SiteColumnLayout from "./layout/SiteColumnLayout";

export default function Home() {
  return (
    <div>
      <Head>
        <title>EM Component Library</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <SiteColumnLayout />
    </div>
  );
}
