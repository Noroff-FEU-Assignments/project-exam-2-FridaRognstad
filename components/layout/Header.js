import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import styles from "../../styles/modules/Header.module.scss";

export default function Header() {
  const [auth, setAuth] = useContext(AuthContext);

  const router = useRouter();

  function logout() {
    setAuth(null);
    router.push(`/`);
  }

  return (
    <header
      className={
        router.pathname == "/"
          ? `${styles.dark}`
          : router.pathname == "/establishments"
          ? `${styles.noUnderline}`
          : `${styles.light}`
      }
    >
      <nav className={styles.nav}>
        <Link href="/">
          <a className={router.pathname == "/" ? "active" : ""}>Home</a>
        </Link>
        <Link href="/establishments">
          <a className={router.pathname == "/establishments" ? "active" : ""}>
            Establishments
          </a>
        </Link>
        <Link href="/contact">
          <a className={router.pathname == "/contact" ? "active" : ""}>
            Contact
          </a>
        </Link>
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
          <div></div>
        )}
      </nav>
    </header>
  );
}
