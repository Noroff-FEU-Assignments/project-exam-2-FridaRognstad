import MediaDropdown from "../../components/admin/Media";
import Head from "../../components/layout/Head";
import Layout from "../../components/layout/Layout";
import Link from "next/link";
import CommentList from "../../components/admin/ContactList";
import styles from "../../styles/modules/Admin.module.scss";

export default function Dashboard() {
  return (
    <Layout>
      <Head title="Admin" />
      <div className={styles.dashboard}>
        <nav>
          <Link href="/admin/add" exact>
            <a>Add Establishment</a>
          </Link>
          <CommentList className={styles.messages} />
        </nav>
      </div>
    </Layout>
  );
}
