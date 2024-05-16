"use client";
import persian from "@/assets/data";
import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const BarCharts = () => {
  return (
    <div className="relative flex flex-col w-full h-[21rem] py-2 pl-2 bg-ship md:border overflow-hidden">
      <div className="flex justify-between pr-5 pb-4">
        <div className="flex items-center justify-center min-w-max">
          <span className="md:text-[1rem] text-[.9rem]">{persian.volumeHomePrice} فروردین-1403</span>
        </div>
      </div>
      <span className="absolute left-[.4rem] md:top-[1rem] top-[1.5rem] md:text-[1rem] text-[.9rem]">(درصد)</span>
      <ResponsiveContainer width="100%">
        <BarChart
          data={data}
          height={320}
          margin={{ top: 0, right: 20, left: 30, bottom: 25 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            tickMargin={20}
            angle={-30}
            className="md:text-[.9rem] text-[.7rem]"
          />
          <YAxis
            tickMargin={-15}
            mirror={true}
            className="md:text-[1rem] text-[.8rem]"
          />
          <Tooltip />
          <Bar dataKey="precent" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
      <span className="flex justify-center items-center w-full md:text-[1rem] text-[.9rem]">
        (میلیون تومان)
      </span>
    </div>
  );
};

export default BarCharts;

var data = [
  {
    name: "کمتر از 2000",
    precent: 4.5,
  },
  {
    name: "2000-4000",
    precent: 33.7,
  },
  {
    name: "4000-6000",
    precent: 18.1,
  },
  {
    name: "6000-8000",
    precent: 12.8,
  },
  {
    name: "8000-10000",
    precent: 9,
  },
  {
    name: "10000-12000",
    precent: 6.9,
  },
  {
    name: "12000-14000",
    precent: 4.4,
  },
  {
    name: "بیش از 14000",
    precent: 10.9,
  },
];
