import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import styles from "../../styles/modules/Header.module.scss";
import logo from "../../public/holidaze-logo.png";
import Image from "next/image";
import Nav from "./Nav";
import showMenu from "../../hooks/showMenu";

export default function Header() {
  const router = useRouter();

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
      <span className={styles.logo}>
        <Image src={logo} alt="Holidaze logo" width="100px" height="20px" />
      </span>
      <div className={styles.burger} onClick={showMenu}>
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
      </div>
      <Nav />
    </header>
  );
}
