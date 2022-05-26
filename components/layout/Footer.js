import Link from "next/link";
import styles from "../../styles/modules/Footer.module.scss";
import Heading from "./Heading";
import { useRouter } from "next/router";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import Paragraph from "./Paragraph";

export default function Footer() {
  const [auth, setAuth] = useContext(AuthContext);

  const router = useRouter();

  function logout() {
    setAuth(null);
    router.push(`/`);
  }

  return (
    <footer className={styles.footer}>
      <div>
        <Heading size="4" title="Admin" />
        {auth ? (
          <div className={styles.adminNav}>
            <Link href="/admin/dashboard">
              <a className={styles.link}>Dashboard</a>
            </Link>{" "}
            <a className={styles.link} onClick={logout}>
              Log out
            </a>
          </div>
        ) : (
          <Link href="/admin/login">
            <a className={styles.link}>Login</a>
          </Link>
        )}
      </div>

      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link href="/">
            <a className={styles.link}>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/establishments">
            <a className={styles.link}>Establishments</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a className={styles.link}>Contact</a>
          </Link>
        </li>
      </ul>
      <span className={styles.copy}>
        <Paragraph content="©2022 Frida Rognstad" />
      </span>
    </footer>
  );
}
