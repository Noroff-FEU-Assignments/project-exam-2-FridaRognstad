import EstablishmentList from "../components/establishments/EstablishmentsList";
import Head from "../components/layout/Head";
import Layout from "../components/layout/Layout";

export default function Establishments() {
  return (
    <Layout>
      <Head title="Hotels" />
      <EstablishmentList />
    </Layout>
  );
}
