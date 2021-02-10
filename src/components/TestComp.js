import React, { useState, useEffect, useRef } from "react";
import Calendar from "react-calendar";
import DateTimePicker from "react-datetime-picker";
import Chartjs from "chart.js";

import "react-calendar/dist/Calendar.css";

export default function TestComp() {
  // const [value, onChange] = useState(new Date())

  // const onChangeHandler = (e) => {
  //     // onChange()
  //     console.log(e.toISOString())
  //     onChange(e)
  // }
  const s2 = [
    { x: "2017-01-07 08:30:00", y: "90" },
    { x: "2017-01-07 17:00:00", y: "105" },
    { x: "2017-01-08 09:00:00", y: "115" },
    { x: "2017-01-08 12:00:00", y: "75" },
    { x: "2017-01-08 17:00:00", y: "135" },
  ];

  const chartConfig = {
    type: "line",
    data: {
      datasets: [
        {
          label: "Series 2",
          data: s2,
          borderColor: "blue",
          backgroundColor: "transparent",
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      responsive: false,
      scales: {
        xAxes: [
          {
            type: "time",
            distribution: "series",
          },
        ],
      },
    },
  };

  const chartContainer = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const newChartInstance = new Chartjs(chartContainer.current, chartConfig);
      setChartInstance(newChartInstance);
    }
  }, [chartContainer]);

  return (
    <div>
      <h1>Test Comp is live</h1>
      {/* <Calendar
                onChange={onChangeHandler}
                value={value}
            /> */}

      {/* <DateTimePicker
                onChange={onChangeHandler}
                value={value}
            
            /> */}
      <div
        className="chart-container"
        style={{ position: "relative", height: "600px", width: "600px" }}
      >
        <canvas id="myChart" ref={chartContainer}></canvas>
      </div>
    </div>
  );
}
