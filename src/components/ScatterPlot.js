import React from "react";
import ReactEcharts from "echarts-for-react";
import sampleData from "../data.json";

export default function ScatterPlot() {
  const getData = sampleData.map((el) => {
    return [el["Color intensity"], el["Hue"]];
  });

  const getOption = () => {
    return {
      xAxis: {
        name: "Hue",
        type: "value",
      },
      yAxis: {
        name: "Color intensity",
        type: "value",
      },
      series: [
        {
          type: "scatter",
          data: getData,
        },
      ],
    };
  };
  return (
    <div>
      <ReactEcharts option={getOption()} />
    </div>
  );
}
