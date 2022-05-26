import axios from "axios";
import { BASE_URL, ESTABLISHMENTS_PATH, READ_KEY } from "../../constants/Api";
import { useState, useEffect } from "react";
import styles from "../../styles/modules/Admin.module.scss";
import useAxios from "../../hooks/useAxios";
import Heading from "../layout/Heading";
import removeTags from "../../hooks/removeTags";

export default function EnquiriesList() {
  const url = BASE_URL + ESTABLISHMENTS_PATH + "reviews" + READ_KEY;
  const http = useAxios();

  const [data, setData] = useState([]);

  useEffect(function () {
    async function getEnquaries() {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getEnquaries();
  }, []);

  return (
    <div className={styles.dashboardList}>
      <Heading size="3" title="Enquaries" />
      {data.map((data) => {
        const date = removeTags(data.review);
        return (
          <div key={data.id} className={styles.comment}>
            <li>{data.reviewer}</li>
            <li>Establishment: {data.product_name}</li>
            <li>Email: {data.reviewer_email}</li>
            <li>Date: {date}</li>
          </div>
        );
      })}
    </div>
  );
}
