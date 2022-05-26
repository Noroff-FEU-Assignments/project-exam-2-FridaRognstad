import EstablishmentList from "../components/establishments/EstablishmentsList";
import Head from "../components/layout/Head";
import Heading from "../components/layout/Heading";
import Layout from "../components/layout/Layout";
import styles from "../styles/modules/Establishments.module.scss";

export default function Establishments() {
  return (
    <Layout className={styles.establishments}>
      <Head title="Establishments" />
      <EstablishmentList placeholder={"Filter"} />
    </Layout>
  );
}
