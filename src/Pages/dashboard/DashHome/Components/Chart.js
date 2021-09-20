import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
  chart: {
    type: "spline",
  },
  title: {
    text: "",
  },
  xAxis: {
    categories: [
      "فروردین",
      "اردیبهشت",
      "خرداد",
      "تیر",
      "مرداد",
      "شهریور",
      "مهر",
      "آبان",
      "آذر",
      "دی",
      "بهمن",
      "اسفند",
    ],
  },
  yAxis: {
    title: "",
  },
  series: [
    {
      name: "درآمد",
      data: [1, 2, 3, 4, 5, 6, 7, 2, 1, 0.5, 1, 15],
      color: "#DE306F",
    },
  ],
};

function Chart() {
  return (
    <div className="LineChart">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}

export default Chart;
