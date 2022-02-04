import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="2deers" />
      </Head>

      <main className={styles.main}>
        <Navbar />
        <div
          style={{
            display: "block",
            padding: "0",
            margin: "4rem",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              zIndex: 10,
              top: -30,
              left: -30,
            }}
          >
            <Image src="/swirl.png" width={576 / 3} height={597 / 3} alt="" />
          </div>

          <div
            style={{
              position: "absolute",
              zIndex: 10,
              bottom: -30,
              right: -30,
              transform: "rotate(180deg)",
            }}
          >
            <Image src="/swirl.png" width={576 / 3} height={597 / 3} alt="" />
          </div>
          <Image
            src="/static/images/cuteOne.jpg"
            width={500}
            height={562}
            alt=""
          />
        </div>
        <h2>Please join us for the wedding of </h2>
        <h1>Kylee Anderson & Wilson Stewart</h1>
      </main>
    </div>
  );
}
