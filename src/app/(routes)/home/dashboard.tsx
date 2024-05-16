import React from "react";
import LineChart from "./lineChart";
import BarCharts from "./barChart";
import Loginfield from "./loginfield";
import PieChart2 from "./pieChart2";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-4 bg-ship py-2 md:px-2">
      <div className="flex flex-col md:text-[1.5rem] text-[1.2rem] px-2">
        <span> جدید ترین اطلاعات بازار مسکن را اینجا دنبال کنید </span>
      </div>
      <LineChart />
      <Loginfield />
      <div className="flex lg:flex-row flex-col gap-4">
        <BarCharts />
        <PieChart2 />
      </div>
    </div>
  );
};

export default Dashboard;
