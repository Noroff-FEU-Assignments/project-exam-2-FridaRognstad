import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import useAxios from "../../hooks/useAxios";
import Heading from "../layout/Heading";
import styles from "../../styles/modules/Admin.module.scss";
import { COMMENTS_PATH } from "../../constants/Api";
import removeTags from "../../hooks/removeTags";

export default function CommentList({ register }) {
  const [data, setData] = useState([]);
  const http = useAxios();

  const contactUrl = COMMENTS_PATH;

  async function getComments() {
    try {
      const response = await http.get(contactUrl);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  getComments();

  return (
    <div className={styles.dashboardList}>
      <Heading size="3" title="Messages" />
      {data.map((data) => {
        const message = removeTags(data.content.rendered);
        const date = new Date(data.date).toLocaleString();
        return (
          <div key={data.id} value={data.id} className={styles.comment}>
            <li>From: {data.author_name}</li>
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
