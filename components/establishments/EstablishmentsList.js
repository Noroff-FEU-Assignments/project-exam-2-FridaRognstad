import axios from "axios";
import { BASE_URL, ESTABLISHMENTS_PATH, READ_KEY } from "../../constants/Api";
import { useState, useEffect } from "react";
import Heading from "../layout/Heading";
import styles from "../../styles/modules/Establishments.module.scss";

export default function EstablishmentList() {
  const url = BASE_URL + ESTABLISHMENTS_PATH + READ_KEY;

  const [data, setData] = useState([]);
  async function getEstablishments() {
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  getEstablishments();

  return (
    <div className={styles.establishments}>
      {data.map((data) => {
        return (
          <div key={data.id} className={styles.estCard}>
            <div
              className={styles.cardImg}
              style={{ backgroundImage: `url(${data.images[0].src})` }}
            ></div>
            <div className={styles.cardText}>
              <Heading size="3" title={data.name} />
              <Heading size="4" title={data.price} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
