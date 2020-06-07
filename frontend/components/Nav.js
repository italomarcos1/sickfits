import Link from "next/link";

export default function Nav() {
  return (
    <div>
      <Link href="/">
        <a>Go hard or go Home</a>
      </Link>
      <p />
      <Link href="about">
        <a>About us</a>
      </Link>
    </div>
  );
}
