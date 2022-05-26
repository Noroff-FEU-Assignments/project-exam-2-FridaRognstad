import { useRouter } from "next/router";
import Head from "../../../components/layout/Head";
import Layout from "../../../components/layout/Layout";
import EnquaryForm from "../../../components/modals/Enquiry";
import Link from "next/link";

export default function EnquiryPage({ id }) {
  const router = useRouter();
  const { enquiryId } = router.query;

  return (
    <Layout>
      <Head title={enquiryId} />
      <Link href={`../${enquiryId}`}>
        <a>Back</a>
      </Link>
      <EnquaryForm enquiryId={enquiryId} />;
    </Layout>
  );
}
