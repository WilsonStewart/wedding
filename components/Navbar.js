import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link href="/">Home |</Link>
      <Link href="/rsvp">RSVP |</Link>
      <Link href="/venue">Venue |</Link>
      <Link href="/registry">Registry</Link>
    </div>
  );
};

export default Navbar;
