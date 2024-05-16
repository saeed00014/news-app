"use client";
import persian from "@/assets/data";
import React, { useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const LineChart1 = () => {
  const [year, setYear] = useState(1402);
  const [chartData, setChartData] = useState(volume1402);

  const handleYear = (e: any) => {
    const index = e.target.options.selectedIndex;
    const year = e.target.options[index].value;
    if (year === "1403") {
      setChartData(volume1403);
    }
    if (year === "1402") {
      setChartData(volume1402);
    }
    if (year === "1401") {
      setChartData(volume1401);
    }
    setYear(e.target.options[index].value);
  };

  return (
    <div className="relative flex flex-col w-full h-[21rem] pt-2 pb-4 md:pl-2 gap-3 bg-ship md:border overflow-hidden">
      <div className="flex md:flex-row flex-col md:justify-between justify-center items-center pr-5 pl-[3.1rem] md:gap-0 gap-2">
        <div className="flex items-center justify-center min-w-max">
          <span className="md:text-[1rem] text-[.9rem]">
            {persian.volumeHomeMounth}-{year}
          </span>
        </div>
        <div className="flex gap-1">
          <label htmlFor="yearselect" className="md:text-[1rem] text-[.9rem]">
            {persian.chooseYear}
          </label>
          <select
            id="yearselect"
            onChange={(e) => handleYear(e)}
            className="bg-ship outline outline-[1px] w-[4.5rem] md:text-[1rem] text-[.9rem] "
          >
            <option value="1403">1403</option>
            <option value="1402" selected>
              1402
            </option>
            <option value="1401">1401</option>
          </select>
        </div>
      </div>
      <span className="absolute left-[.4rem] md:top-[1rem] top-[3.2rem] md:text-[1rem] text-[.9rem]">
        (واحد)
      </span>
      <ResponsiveContainer className="relative" height="100%" width="100%">
        <AreaChart
          data={chartData}
          margin={{ top: 0, right: 25, left: 50, bottom: 15 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorvolume" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0.3} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            tickMargin={15}
            className="md:text-[1rem] text-[.8rem]"
          />
          <YAxis
            tickMargin={-15}
            mirror={true}
            className="md:text-[1rem] text-[.8rem]"
          />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="volume"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorvolume)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChart1;

var volume1403 = [
  {
    name: "فروردین",
    volume: 1508,
  },
  {
    name: "اردیبهشت",
    volume: 0,
  },
  {
    name: "خرداد",
    volume: 0,
  },
  {
    name: "تیر",
    volume: 0,
  },
  {
    name: "مرداد",
    volume: 0,
  },
  {
    name: "شهریور",
    volume: 0,
  },
  {
    name: "مهر",
    volume: 0,
  },
  {
    name: "آبان",
    volume: 0,
  },
  {
    name: "آذر",
    volume: 0,
  },
  {
    name: "دی",
    volume: 0,
  },
  {
    name: "بهمن",
    volume: 0,
  },
  {
    name: "اسفند",
    volume: 0,
  },
];

var volume1402 = [
  {
    name: "فروردین",
    volume: 1757,
  },
  {
    name: "اردیبهشت",
    volume: 4359,
  },
  {
    name: "خرداد",
    volume: 3394,
  },
  {
    name: "تیر",
    volume: 2800,
  },
  {
    name: "مرداد",
    volume: 2904,
  },
  {
    name: "شهریور",
    volume: 2610,
  },
  {
    name: "مهر",
    volume: 3133,
  },
  {
    name: "آبان",
    volume: 3593,
  },
  {
    name: "آذر",
    volume: 3550,
  },
  {
    name: "دی",
    volume: 5048,
  },
  {
    name: "بهمن",
    volume: 6183,
  },
  {
    name: "اسفند",
    volume: 6179,
  },
];

var volume1401 = [
  {
    name: "فروردین",
    volume: 3427,
  },
  {
    name: "اردیبهشت",
    volume: 10490,
  },
  {
    name: "خرداد",
    volume: 13874,
  },
  {
    name: "تیر",
    volume: 10294,
  },
  {
    name: "مرداد",
    volume: 7825,
  },
  {
    name: "شهریور",
    volume: 6033,
  },
  {
    name: "مهر",
    volume: 5416,
  },
  {
    name: "آبان",
    volume: 8005,
  },
  {
    name: "آذر",
    volume: 10184,
  },
  {
    name: "دی",
    volume: 10736,
  },
  {
    name: "بهمن",
    volume: 9729,
  },
  {
    name: "اسفند",
    volume: 6605,
  },
];
