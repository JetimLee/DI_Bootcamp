import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import { Line, Bar } from "react-chartjs-2";
import styles from "./Chart.module.css";

const Chart = () => {
  const [dailyData, setDailyData] = useState({});
  useEffect(() => {
    const fetchApi = async () => {
      setDailyData(await fetchDailyData());
    };
    fetchApi();
  }, []);

  const lineChart = dailyData ? (
    <Line data={{ labels: "", datasets: [{}, {}] }} />
  ) : null;
  return (
    <div>
      <h1>chart</h1>
    </div>
  );
};

export default Chart;
