import Head from "../components/layout/Head";
import Heading from "../components/layout/Heading";
import Layout from "../components/layout/Layout";
import Paragraph from "../components/layout/Paragraph";
import Link from "next/link";
import Image from "next/image";
import EstablishmentForm from "../components/establishments/EstablishmentsForm";
import styles from "../styles/modules/Home.module.scss";

export default function Home() {
  return (
    <Layout>
      <Head />
      <div className={styles.home}>
        <section className={styles.banner}>
          <div className={styles.searchContainer}>
            <EstablishmentForm placeholder={"Search for a place to stay"} />
          </div>
          <Heading title={"Welcome to Holidaze!"} />
          <Paragraph
            content={"Find the perfect place to stay while visiting in Bergen"}
          />
        </section>

        <section className={styles.establishments}>
          <Heading size="2" title="Work or Pleasure?" />
          <Paragraph
            content={`What ever reason that brings you to Bergen,
                    we have a place for you.`}
          />
          <Link href="/establishments" className={styles.button}>
            <a>Browse our establishments</a>
          </Link>
        </section>

        <section className={styles.contact}>
          <div className={styles.contactText}>
            <Heading size="2" title="Contact" />
            <Paragraph
              content={`Want to contact us? We'd love to hear from you.`}
            />
            <Link href="/contact">
              <a>Take me to the contact page</a>
            </Link>
            <span className={styles.conatctArrow}></span>
          </div>
          <span className={styles.contactImage}></span>
        </section>
      </div>
    </Layout>
  );
}
