import ContactForm from "../components/contact/ContactForm";
import Head from "../components/layout/Head";
import Layout from "../components/layout/Layout";
import styles from "../styles/modules/Contact.module.scss";

export default function Contact() {
  return (
    <Layout>
      <Head title="Contact" />
      <section className={styles.contact}>
        <ContactForm />
      </section>
    </Layout>
  );
}
