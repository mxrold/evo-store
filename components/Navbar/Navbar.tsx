import Link from "next/link";

export default function Navbar(): JSX.Element {
  return (
    <nav>
      <ul className="flex">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
