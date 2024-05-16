"use client";
import * as React from "react";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import persian from "@/assets/data";

const PieChart2 = () => {
  const data = [
    { value: 4.2, label: "کمتر از 40m" },
    { value: 26.9, label: "40m-60m" },
    { value: 26.6, label: "60m-80m" },
    { value: 19.1, label: "80m-100m" },
    { value: 9.4, label: "100m-120m" },
    { value: 6.1, label: "120m-140m" },
    { value: 9.5, label: "بیشتر از 140m" },
  ];

  return (
    <div className="relative flex flex-col w-full h-[21rem] py-2 pl-2 bg-ship md:border overflow-hidden">
      <div className="flex justify-between pr-5 pb-4">
        <div className="flex items-center justify-center min-w-max">
          <span>{persian.volumeHomeMetter} فروردین-1403</span>
        </div>
      </div>
      <PieChart
        series={[
          {
            arcLabel: (item) => `${item.value}%`,
            arcLabelMinAngle: 25,
            innerRadius: 55,
            paddingAngle: 2,
            startAngle: 0,
            endAngle: 360,
            data,
          },
        ]}
        sx={{
          [`& .${pieArcLabelClasses.root}`]: {
            fill: "white",
            fontWeight: "bold",
          },
        }}
        slotProps={{
          legend: {
            direction: 'column',
            position: { vertical: 'top', horizontal: 'right' },
            markGap: -23,
            itemGap: 10,
            padding: {right: -60},
            labelStyle: {
              fontSize: 14,
              fontWeight: "bold",
              fill: 'black',
            },
          },
        }}
      />
    </div>
  );
};

export default PieChart2;
