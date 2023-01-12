import styles from "./countryItem.module.scss";
import { CountryProps } from "../../services/types";

const CountryItem = ({
  cases,
  countryCode,
  deaths,
  recovered,
  countryName,
}: CountryProps) => {
  return (
    <div className={styles["country-item-container"]}>
      <img
        src={`https://flagcdn.com/48x36/${countryCode.toLowerCase()}.png`}
        alt={"flag"}
      ></img>
      <h3>{countryName}</h3>
      <div className={styles["country-info"]}>
        <p>{`Active : ${cases}`}</p>
        <p>{`Code : ${countryCode}`}</p>
        <p>{`Deaths : ${deaths}`}</p>
        <p>{`Recovered : ${recovered}`}</p>
      </div>
    </div>
  );
};

export default CountryItem;
