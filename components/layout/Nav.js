import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import styles from "../../styles/modules/Header.module.scss";

export default function Nav() {
  const [auth, setAuth] = useContext(AuthContext);

  const router = useRouter();

  function logout() {
    setAuth(null);
    router.push(`/`);
  }
  return (
    <nav className={styles.nav} id="nav">
      <ul>
        <li>
          <Link href="/">
            <a className={router.pathname == "/" ? "active" : ""}>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/establishments">
            <a className={router.pathname == "/establishments" ? "active" : ""}>
              Establishments
            </a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a className={router.pathname == "/contact" ? "active" : ""}>
              Contact
            </a>
          </Link>
        </li>
        {auth ? (
          <div className={styles.adminNav}>
            <li>
              <Link href="/admin/dashboard">
                <a className={styles.link}>Dashboard</a>
              </Link>{" "}
            </li>
            <li>
              <a className={styles.link} onClick={logout}>
                Log out
              </a>
            </li>
          </div>
        ) : (
          <div></div>
        )}
      </ul>
    </nav>
  );
}
