import  { useCallback, useState, useEffect, ChangeEvent } from "react";
import CountryItem from "../../components/countryItem/CountryItem";
import styles from "./countries.module.scss";
import arraySort from "array-sort";
import { getCountry } from "../../services/api";
import { SingleCountryProps } from "../../services/types";
const Countries = () => {
  const [countriesList, setCountriesList] = useState([]);
  const [tunedList, setTunedList] = useState([]);
  // fetches the stats for a single country
  const fetch = useCallback(async () => {
    const data = await getCountry();
    setCountriesList(data);
    setTunedList(data);
  }, []);

  useEffect(() => {
    fetch();
  }, []);
  // handles the user's input ,removes the white spaces ,handles simple validation.
  const inputFilterHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.trim().toLowerCase();

    const filteredList = countriesList.filter((item: SingleCountryProps) => {
      return item.Country?.toLowerCase().includes(inputValue);
    });
    setTunedList(filteredList);
  };
  //sorts the country list from higher to lower
  const sortByHighHandler = () => {
    const highList = arraySort([...tunedList], "TotalConfirmed", {
      reverse: true,
    });

    setTunedList(highList);
  };
  //sorts the country list from lower to higher
  const sortByLowHandler = () => {
    const highList = arraySort([...tunedList], "TotalConfirmed", {
      reverse: false,
    });

    setTunedList(highList);
  };

  return (
    <>
      <div className={styles["search-country-container"]}>
        <input
          onChange={inputFilterHandler}
          type="text"
          placeholder="Search for Country..."
        />
        <button onClick={sortByHighHandler}>Highest </button>
        <button onClick={sortByLowHandler}>Lowest </button>
      </div>
      <div className={styles["countries-container"]}>
        {!tunedList ? (
          <h1>Please Test Later The Api Is Cashing.... </h1>
        ) : (
          tunedList.map((singleCountry: SingleCountryProps) => {
            return (
              <CountryItem
                cases={singleCountry.TotalConfirmed}
                countryCode={singleCountry.CountryCode}
                deaths={singleCountry.TotalDeaths}
                recovered={singleCountry.TotalRecovered}
                key={singleCountry.ID}
                countryName={singleCountry.Country}
              />
            );
          })
        )}
      </div>
    </>
  );
};

export default Countries;
