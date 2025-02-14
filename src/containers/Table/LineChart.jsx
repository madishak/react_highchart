import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

const LineChart = (props) => {
  const { today, yesterday, day3, day4, day5, day6, day7 } = props.options;

  const chartOptions = {
    xAxis: {
      categories: ["A", "B", "C", "D", "E", "F", "G"],
    },
    series: [
      {
        data: [
          Number(today),
          Number(yesterday),
          Number(day3),
          Number(day4),
          Number(day5),
          Number(day6),
          Number(day7),
        ],
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
};

export default LineChart;
