import PropTypes from "prop-types";

export default function FormError({ message }) {
  return <p>{message}</p>;
}

FormError.propTypes = {
  message: PropTypes.string,
};
