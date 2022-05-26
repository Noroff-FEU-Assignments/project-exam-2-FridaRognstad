import Head from "../../components/layout/Head";
import Heading from "../../components/layout/Heading";
import Layout from "../../components/layout/Layout";
import Paragraph from "../../components/layout/Paragraph";
import { BASE_URL, ESTABLISHMENTS_PATH, READ_KEY } from "../../constants/Api";
import styles from "../../styles/modules/EstDetails.module.scss";
import removeTags from "../../hooks/removeTags";
import Link from "next/link";
import { useRouter } from "next/router";

const url = BASE_URL + ESTABLISHMENTS_PATH;

export default function Details({ est }) {
  const router = useRouter();

  const description = removeTags(est.description);
  const estID = est.id;

  return (
    <Layout>
      <Head title={est.name} />
      <div className={styles.grid}>
        <section className={styles.description}>
          <Heading title={est.name} />
          <Paragraph content={description} />
          <Link href={`./book/${estID}`}>
            <a className={styles.btn}>Book</a>
          </Link>
        </section>
        <section className={styles.imageContainer}>
          {est.images.map((image) => {
            return (
              <div key={image.id}>
                <div
                  className={styles.image}
                  style={{ backgroundImage: `url(${image.src})` }}
                ></div>
              </div>
            );
          })}
        </section>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  const res = await fetch(`${url}${id}${READ_KEY}`);
  const data = await res.json();

  return {
    props: {
      est: data,
    },
  };
}
