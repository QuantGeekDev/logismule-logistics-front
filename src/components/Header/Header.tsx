import Link from "next/link";

const Header = (): React.ReactElement => {
  return (
    <header className="header flex z-10 justify-between w-full absolute inset-0 p-4">
      <span className="header__title text-white text-3xl">
        <Link href="/">🫏LogisMule </Link>
      </span>
      <nav>
        <ul className="flex flex-row space-x-3 text-2xl text-white">
          <li>
            <Link href="/scale">Scale </Link>
          </li>
          <li>
            <Link href="/reliability">Reliability </Link>
          </li>
          <li>
            <Link href="/performance">Performance </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
