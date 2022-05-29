import { AuthProvider } from "../../context/AuthContext";
import Footer from "./Footer";
import Header from "./Header";
import PropTypes from "prop-types";

export default function Layout({ children }) {
  return (
    <AuthProvider>
      <Header />
      <div className="container">{children}</div>
      <Footer />
    </AuthProvider>
  );
}

Layout.propTypes = {
  title: PropTypes.object,
};
