import Head from "next/head";
import SiteColumnLayout from "./layout/SiteColumnLayout";
import LibraryIntro from "./welcomeIntro";
export default function Home() {
  return (
    <div>
      <Head>
        <title>EM Component Library</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <LibraryIntro />
    </div>
  );
}
