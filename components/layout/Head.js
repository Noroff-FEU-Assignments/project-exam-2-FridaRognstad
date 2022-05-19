import NextHead from "next/head";
import PropTypes from "prop-types";

export default function Head({ title = "" }) {
  return (
    <NextHead>
      <title>
        {title}
        {title ? " | " : ""}Holidaze
      </title>
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
}

Head.propTypes = {
  title: PropTypes.string,
};
