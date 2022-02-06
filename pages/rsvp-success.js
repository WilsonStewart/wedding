import Link from "next/link";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function RSVPSuccess() {
  return (
    <div className={styles.main}>
      <main>
        <Navbar />
        <h1>RSVP</h1>
        <Card>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontFamily: "Segoe UI, sans-serif",
              alignItems: "center",
            }}
          >
            <div className="greencheck">✅</div>
            <div>
              <p>Thank you for RSVP-ing for our wedding, firstname!</p>
              <p>Can&apos;t wait to see y&apos;all there! 🙂</p>
              <hr />
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
}
