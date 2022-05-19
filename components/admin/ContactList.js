import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import useAxios from "../../hooks/useAxios";
import Heading from "../layout/Heading";
import styles from "../../styles/modules/Admin.module.scss";
import { COMMENTS_PATH } from "../../constants/Api";

export default function CommentList({ register }) {
  const [media, setMedia] = useState([]);

  const http = useAxios();
  const contactUrl = COMMENTS_PATH;

  useEffect(function () {
    async function getComments() {
      try {
        const response = await http.get(contactUrl);
        console.log("response", response);
        setMedia(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    getComments();
  }, []);

  return (
    <div className={styles.contactList}>
      <Heading size="3" title="Messages:" />
      {media.map((media) => {
        return (
          <div key={media.id} value={media.id} className={styles.comment}>
            <li>Author: {media.author_name}</li>
            <li>Date: {media.date}</li>
            <li>Email: {media.author_url}</li>
            <li>Message:{media.content.rendered}</li>
          </div>
        );
      })}
    </div>
  );
}

CommentList.propTypes = {
  register: PropTypes.func,
};

CommentList.defaultProps = {
  register: () => {},
};
