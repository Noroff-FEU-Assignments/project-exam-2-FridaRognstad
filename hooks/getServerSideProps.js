import { BASE_URL, ESTABLISHMENTS_PATH, READ_KEY } from "../constants/Api";

const url = BASE_URL + ESTABLISHMENTS_PATH;

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
