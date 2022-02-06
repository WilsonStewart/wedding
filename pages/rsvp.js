import Link from "next/link";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function RSVP() {
  return (
    <div className={styles.main}>
      <main>
        <Navbar />
        <h1>RSVP</h1>
        <Card className="card">
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              fontFamily: "Segoe UI, sans-serif",
              alignItems: "start",
            }}
            action="https://weddingrsvp-2deers.azurewebsites.net/"
          >
            <label className="card-normal-label">Name</label>
            <input className="card-normal-input" name="name" />

            <label className="card-normal-label">Email</label>
            <input className="card-normal-input" name="email" />

            <label className="card-normal-label">Mailing Address</label>
            <input className="card-normal-input" name="mailing" />

            <label className="card-normal-label"># Attending</label>
            <input className="card-normal-input" name="attending" />

            <span className="card-normal-input">
              <label>Send a digital invite?</label>
              <input type="checkbox" name="digital_invite" />
            </span>

            <span className="card-normal-input">
              <label>Send a physical invite?</label>
              <input type="checkbox" name="physical_invite" />
            </span>

            <button className="card-normal-input" type="submit">
              Go!
            </button>
          </form>
        </Card>
      </main>
    </div>
  );
}
