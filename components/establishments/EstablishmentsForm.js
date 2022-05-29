import Link from "next/link";
import axios from "axios";
import { BASE_URL, ESTABLISHMENTS_PATH, READ_KEY } from "../../constants/Api";
import { useState, useEffect } from "react";
import styles from "../../styles/modules/Home.module.scss";
import PropTypes from "prop-types";

export default function EstablishmentForm({ placeholder }) {
  const url = BASE_URL + ESTABLISHMENTS_PATH + READ_KEY;

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  async function getEstablishments() {
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  getEstablishments();

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    const newFilter = data.filter((value) => {
      return value.name.toString().toLowerCase().includes(searchWord);
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  return (
    <div className={styles.searchBar}>
      <input type="text" placeholder={placeholder} onChange={handleFilter} />

      {filteredData.length != 0 && (
        <div className={styles.searchResults}>
          {filteredData.map((value) => {
            return (
              <li key={value.id}>
                <Link
                  href="/establishments/[id]"
                  as={`/establishments/${value.id}`}
                >
                  <a>
                    <div
                      className={styles.searchBarImg}
                      style={{ backgroundImage: `url(${value.images[0].src})` }}
                    ></div>
                    {value.name}
                  </a>
                </Link>
              </li>
            );
          })}
        </div>
      )}
    </div>
  );
}

EstablishmentForm.propTypes = {
  placeholder: PropTypes.string,
};
