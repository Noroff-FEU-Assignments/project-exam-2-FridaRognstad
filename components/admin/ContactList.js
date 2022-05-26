import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import useAxios from "../../hooks/useAxios";
import Heading from "../layout/Heading";
import styles from "../../styles/modules/Admin.module.scss";
import { COMMENTS_PATH } from "../../constants/Api";
import removeTags from "../../hooks/removeTags";

export default function CommentList({ register }) {
  const [media, setMedia] = useState([]);

  const http = useAxios();
  const contactUrl = COMMENTS_PATH;

  useEffect(function () {
    async function getComments() {
      try {
        const response = await http.get(contactUrl);
        setMedia(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    getComments();
  }, []);

  return (
    <div className={styles.dashboardList}>
      <Heading size="3" title="Messages" />
      {media.map((media) => {
        const message = removeTags(media.content.rendered);
        const date = new Date(media.date).toLocaleString();
        return (
          <div key={media.id} value={media.id} className={styles.comment}>
            <li>From: {media.author_name}</li>
            <li>{date}</li>
            <li>{message}</li>
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
