import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbarLogo">
        <div className="navbarItem">
            <Link href="/">Nomi</Link>
        </div>
      </div>
      <div className="navbarItems">
        <div className="navbarItem" >
            <Link href="/">Home</Link>
        </div>
        <div className="navbarItem">
            <Link href="/about">About</Link>
        </div>
        <div className="navbarItem">
            <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;