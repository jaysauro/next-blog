import Link from "next/link";
import { navbarLinks } from "@/mocks/link";
import styles from "./index.module.scss";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <ul className={styles.ulNavbar}>
        {navbarLinks.map((link) => (
          <li key={link.id}>
            <Link href={link.link}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;