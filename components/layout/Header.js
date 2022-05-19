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
    <nav className={styles.nav}>
      <Link href="/">
        <a className={styles.link}>Home</a>
      </Link>
      <Link href="/establishments">
        <a className={styles.link}>Establishments</a>
      </Link>
      <Link href="/contact">
        <a className={styles.link}>Contact</a>
      </Link>
      {auth ? (
        <>
          <Link href="/admin/dashboard">Dashboard</Link>{" "}
          <button onClick={logout}>Log out</button>
        </>
      ) : (
        <Link href="/admin/login">Login</Link>
      )}
    </nav>
  );
}
