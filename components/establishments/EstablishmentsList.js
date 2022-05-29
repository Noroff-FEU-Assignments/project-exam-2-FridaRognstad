import axios from "axios";
import { BASE_URL, ESTABLISHMENTS_PATH, READ_KEY } from "../../constants/Api";
import { useState, useEffect } from "react";
import Heading from "../layout/Heading";
import styles from "../../styles/modules/Establishments.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

export default function EstablishmentList({ placeholder }) {
  const url = BASE_URL + ESTABLISHMENTS_PATH + READ_KEY;
  const router = useRouter();
  const [data, setData] = useState([]);

  useEffect(function () {
    async function getEstablishments() {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getEstablishments();
  }, []);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    const newFilter = data.filter((value) => {
      return value.name.toString().toLowerCase().includes(searchWord);
    });

    if (searchWord !== "") {
      setData(newFilter);
    } else {
      router.reload(window.location.pathname);
    }
  };

  return (
    <div>
      <div className={styles.filter}>
        <input type="text" placeholder={placeholder} onChange={handleFilter} />
      </div>

      <div className={styles.establishments}>
        {data.map((data) => {
          let backgroundImg =
            "https://holidaze.fridarognstad.one/wp-content/uploads/woocommerce-placeholder.png";

          return (
            <div key={data.id} className={styles.estCard}>
              <Link
                href="/establishments/[id]"
                as={`/establishments/${data.id}`}
              >
                <a>
                  <div
                    className={styles.cardImg}
                    style={{ backgroundImage: `url(${backgroundImg})` }}
                  ></div>
                  <div className={styles.cardText}>
                    <Heading size="3" title={data.name} />
                    <Heading size="4" title={`$${data.price} per night`} />
                  </div>
                </a>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

EstablishmentList.propTypes = {
  placeholder: PropTypes.string,
};
