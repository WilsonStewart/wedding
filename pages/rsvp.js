import Link from "next/link";
import Card from "../components/Card";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";

export default function RSVP() {
  return (
    <div className={styles.main}>
      <main>
        <Navbar />
        <h1>RSVP</h1>
        <Card>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
            }}
            action="/api/"
          >
            <label>Name</label>
            <input name="name" />

            <label>Email</label>
            <input name="email" />

            <label>Mailing Address</label>
            <input name="mailing" />

            <label># Attending</label>
            <input name="attending" />

            <label>Send a digital invite?</label>
            <input type="checkbox" name="digital_invite" />

            <label>Send a physical invite?</label>
            <input type="checkbox" name="physical_invite" />

            <button type="submit">RSVP now</button>
          </form>
        </Card>
      </main>
    </div>
  );
}
