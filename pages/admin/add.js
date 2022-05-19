import AddPost from "../../components/admin/AddEstablishment";
import Head from "../../components/layout/Head";
import Layout from "../../components/layout/Layout";

export default function Dashboard() {
  return (
    <Layout>
      <Head title="Admin" />
      <AddPost />
    </Layout>
  );
}
