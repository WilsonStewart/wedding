import Link from "next/link";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function venue() {
  return (
    <div className={styles.main}>
      <main>
        <Navbar />
        <h1>Venue</h1>
        <div>
          <h2>Ceremony</h2>
          <Card>
            <span
              style={{
                display: "flex",
              }}
            >
              <div style={{ margin: "1rem" }}>
                <Image
                  src="/casper_naz.jpg"
                  width={980 / 5}
                  height={735 / 5}
                  alt=""
                />
              </div>

              <div>
                <h3>Casper First Church of the Nazarene</h3>
                <div className="venue-card">
                  <p>
                    <b>Address: </b>
                    <a style={{ fontSize: "1rem" }}>
                      2020 S. Jefferson St, Casper, WY 82601
                    </a>
                  </p>
                </div>
              </div>
            </span>
          </Card>
        </div>
        <div>
          <h2>Reception</h2>
          <Card>
            <span
              style={{
                display: "flex",
              }}
            >
              <div style={{ margin: "1rem" }}>
                <Image
                  src="/hall_of_champions.jpg"
                  width={980 / 5}
                  height={735 / 5}
                  alt=""
                />
              </div>

              <div>
                <h3>Hall of Champions - Central Wyoming Fairgrounds</h3>
                <div className="venue-card">
                  <p>
                    <b>Address: </b>
                    <a style={{ fontSize: "1rem" }}>
                      1700 Fairgrounds Rd, Casper, WY
                    </a>
                  </p>
                </div>
              </div>
            </span>
          </Card>
        </div>
      </main>
    </div>
  );
}
