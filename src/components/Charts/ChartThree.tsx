import React from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const ChartThree: React.FC = () => {
  const series = [10, 15, 20, 25, 30]; // Persentase data
  const labels = ["KEB Hana Bank", "Mandiri", "BTN", "Artha Graha", "BRI"]; // Label bank

  const options: ApexOptions = {
    chart: {
      fontFamily: "Satoshi, sans-serif",
      type: "donut",
      dropShadow: {
        enabled: true,
        color: "#111",
        top: -1,
        left: 1,
        blur: 1,
        opacity: 0.1,
      },
    },
    stroke: {
      width: 10,
    },
    colors: ["#6150c1", "#146c94", "#51c4e9", "#1fffe1", "#4a3764"], // Warna untuk setiap slice
    labels: labels,
    legend: {
      show: false,
    },
    plotOptions: {
      pie: {
        donut: {
          size: "60%",
          labels: {
            show: false,
          },
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      enabled: true,
      custom: function ({ seriesIndex, series, w }) {
        const bank = labels[seriesIndex]; // Label bank
        const value = series[seriesIndex]; // Persentase nilai
        const color = w.globals.colors[seriesIndex];
        return `
          <div style="
            background: white;
            padding: 5px;
            color: black;
            position: relative;
            width: 150px;
            z-index: 10;
          ">
            <p style="font-size: 16px; font-weight: bold; color: ${color}; margin-top: 5px;">
              ${value}%
            </p>
            <p style="font-size: 14px; font-weight: bold; margin-bottom: 5px;">
              ${bank}
            </p>
          </div>
        `;
      },
    },
    responsive: [
      {
        breakpoint: 768,
        options: {
          chart: {
            width: 340,
          },
        },
      },
    ],
  };

  return (
    <div className="bg-white dark:bg-dark-2 my-6 rounded-lg shadow-md">
      <h3 className="text-lg text-black dark:text-white font-bold text-center py-4">
        Top 5 Bank Approval Tertinggi
      </h3>
      <ReactApexChart
        options={options}
        series={series}
        type="donut"
        height={400}
      />
    </div>
  );
};

export default ChartThree;


