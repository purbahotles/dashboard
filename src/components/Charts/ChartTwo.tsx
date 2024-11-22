import React from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const ChartTwo = () => {
  const approvedOptions: ApexOptions = {
    chart: {
      type: "donut",
    },
    labels: ["Disetujui", "Belum Disetujui"],
    colors: ["#1DA1F2", "#d6d6d6"],
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            show: false
          },
          value: {
            offsetY: 0
          }
        }
      },
      pie: {
        donut: {
          size: "80%",
          labels: {
            show: true,
            total: {
              show: true,
              showAlways: true,
              label: "",
              fontSize: "28px",
              fontWeight: "bold",
              color: "#000000",
              formatter: function () {
                return `${approvedSeries[0]}%`;
              },
            },
            value: {
              show: true,
              fontSize: "28px",
              fontWeight: "bold",
              offsetY: -5
            },
          },
        },
      },
    },
    dataLabels: {
      enabled: false,
      style: {
        colors: ["000000"],
        fontSize: "16px",
      },
    },
    legend: {
      show: false,
    },
  };

  const approvedSeries = [40, 60];

  // Konfigurasi data dan opsi untuk Donut 2 (Target)
  const options: ApexOptions = {
    chart: {
      type: "donut",
    },
    labels: ["Tercapai", "Sisa Target"],
    colors: ["#1DA1F2", "#d6d6d6"],
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            show: false
          },
          value: {
            offsetY: 0
          }
        }
      },
      pie: {
        donut: {
          size: "80%",
          labels: {
            show: true,
            total: {
              show: true,
              showAlways: true,
              label: "",
              formatter: function () {
                return `${targetSeries[0]}%`;
              },
            },

            value: {
              show: true,
              fontSize: "28px",
              fontWeight: "bold",
              offsetY: -5
            },
          },
        },
      },
    },
    theme: {
      monochrome: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
  };

  const targetSeries = [280, 0];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-6 bg-gray-100 dark:bg-dark-2 rounded-lg shadow-lg">
      {/* Donut 1 */}
      <div className="flex flex-col items-center bg-white dark:bg-dark-2 p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-bold text-gray-800 mb-4">
          PINJAMAN DISETUJUI
        </h3>
        <ReactApexChart
          options={approvedOptions}
          series={approvedSeries}
          type="donut"
          height={200}
        />
        <p className="text-sm dark:text-white text-black mt-4">2/5 Pinjaman telah disetujui</p>
      </div>

      {/* Donut 2 */}
      <div className="flex flex-col items-center bg-white dark:bg-dark-2 p-6 rounded-lg shadow-md">
        <div className="flex justify-between w-full items-center mb-4">
          <h3 className="text-lg text-center font-bold text-gray-800">TARGET</h3>
          <button className="p-2 rounded-md bg-blue">
            <svg width="30" height="30" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1.25" y="1.25" width="47.5" height="47.5" rx="3.75" fill="white" stroke="#37B5E7" stroke-width="2.5"/>
              <path d="M23.5 13H13C12.2044 13 11.4413 13.3161 10.8787 13.8787C10.3161 14.4413 10 15.2044 10 16V37C10 37.7956 10.3161 38.5587 10.8787 39.1213C11.4413 39.6839 12.2044 40 13 40H34C34.7956 40 35.5587 39.6839 36.1213 39.1213C36.6839 38.5587 37 37.7956 37 37V26.5" stroke="#37B5E7" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M34.75 10.75C35.3467 10.1533 36.1561 9.81802 37 9.81802C37.8439 9.81802 38.6533 10.1533 39.25 10.75C39.8467 11.3467 40.182 12.1561 40.182 13C40.182 13.8439 39.8467 14.6533 39.25 15.25L25 29.5L19 31L20.5 25L34.75 10.75Z" stroke="#37B5E7" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
        <ReactApexChart
          options={options}
          series={targetSeries}
          type="donut"
          height={200}
        />
        <p className="text-sm dark:text-white text-black mt-4">
          Rp14.000.000.000,00 / Rp5.000.000.000,00
        </p>
      </div>
    </div>
  );
};

export default ChartTwo;
