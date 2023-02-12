import React from "react";
import ReactEcharts from "echarts-for-react";

const data = [
  { name: "Jan", value: 132 },
  { name: "Feb", value: 98 },
  { name: "Mar", value: 104 },
  { name: "Apr", value: 123 },
  { name: "May", value: 87 },
  { name: "Jun", value: 76 },
];

export default function BarCharts() {
  const getOption = () => {
    return {
      xAxis: {
        type: "category",
        data: data.map((d) => d.name),
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          type: "bar",
          data: data.map((d) => d.value),
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
