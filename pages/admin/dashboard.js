import Head from "../../components/layout/Head";
import Layout from "../../components/layout/Layout";
import Link from "next/link";
import CommentList from "../../components/admin/ContactList";
import styles from "../../styles/modules/Admin.module.scss";
import EnquiriesList from "../../components/admin/EnquiriesList";
import AddPost from "../../components/admin/AddEstablishment";

export default function Dashboard() {
  return (
    <Layout>
      <Head title="Admin" />
      <div className={styles.dashboard}>
        <AddPost />
        <CommentList className={styles.messages} />
        <EnquiriesList className={styles.messages} />
      </div>
    </Layout>
  );
}
