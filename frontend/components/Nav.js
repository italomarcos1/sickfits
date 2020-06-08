import Link from "next/link";
import NavStyles from "./styles/NavStyles";

export default function Nav() {
  return (
    <NavStyles>
      <Link href="/">
        <a>Go hard or go Home</a>
      </Link>
      <Link href="items">
        <a>items</a>
      </Link>
      <Link href="sell">
        <a>sell</a>
      </Link>
      <Link href="signup">
        <a>signup</a>
      </Link>
      <Link href="orders">
        <a>orders</a>
      </Link>
      <Link href="me">
        <a>me</a>
      </Link>
    </NavStyles>
  );
}
