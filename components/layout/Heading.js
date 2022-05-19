import PropTypes from "prop-types";

export default function Heading({ size = "1", title }) {
  const VariableHeading = `h${size}`;

  return <VariableHeading>{title}</VariableHeading>;
}

Heading.propTypes = {
  title: PropTypes.string.isRequired,
  size: PropTypes.string,
  color: PropTypes.string,
};
