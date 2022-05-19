import axios from "axios";
import { BASE_URL, ESTABLISHMENTS_PATH, READ_KEY } from "../../constants/Api";
import Heading from "../layout/Heading";

const url = BASE_URL + ESTABLISHMENTS_PATH + READ_KEY;

const PageDetails = () => {
  async function getStaticPaths() {
    const response = await axios.get(url);
    const data = await response.json();

    const paths = data.map((est) => {
      return {
        params: { id: est.id.toString() },
      };
    });

    return {
      paths,
      fallback: false,
    };
  }

  getStaticPaths();

  async function getStaticProps(context) {
    const id = context.params.id;
    const res = fetch(BASE_URL + ESTABLISHMENTS_PATH + id + "/" + READ_KEY);
    const data = await res.json();

    return {
      props: { est: data },
    };
  }
  getStaticProps();

  const Details = ({ est }) => {
    return (
      <div>
        <Heading title={est.id} />
      </div>
    );
  };
};
export default PageDetails;
