import Link from "next/link";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function registry() {
  return (
    <div className={styles.main}>
      <main>
        <Navbar />
        <h1>We are registered at the following locations:</h1>
        <div>
          <Card>
            <span style={{ display: "flex" }}>
              <div style={{ margin: "1rem" }}>
                <Image
                  src="/bed_bath_beyond.jpg"
                  width={150}
                  height={150}
                  alt=""
                />
              </div>

              <h3>Bed Bath & Beyond</h3>
            </span>
          </Card>
        </div>
      </main>
    </div>
  );
}
