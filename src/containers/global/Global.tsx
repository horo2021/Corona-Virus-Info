import React, { useState, useEffect, useCallback } from "react";
import Card from "../../components/card/Card";
import styles from "./global.module.scss";
import covid from "../../assets/images/covid-19.png";
import { getGlobal } from "../../services/api";

const Global = () => {
  const [cases, setCases] = useState<number>(0);
  const [deaths, setDeaths] = useState<number>(0);
  const [recovered, setRecovered] = useState<number>(0);
 
  //fetches the data global stats an api and sets the state accordinglly
  const fetch = useCallback(async () => {
    const data = await getGlobal();
    setCases(data.TotalConfirmed);
    setDeaths(data.TotalDeaths);
    setRecovered(data.TotalRecovered);
  }, []);


  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <div className={styles["title-container"]}>
        <h1>Corona Virus Dashboard</h1>
        <img src={covid} alt="covid"></img>
      </div>
      <div className={styles["cards-container"]}>
        <Card title="Cases" color="deepPink" count={cases} />
        <Card title="Recovered" color="green" count={recovered} />
        <Card title="Deaths" color="red" count={deaths} />
      </div>
    </>
  );
};

export default Global;
