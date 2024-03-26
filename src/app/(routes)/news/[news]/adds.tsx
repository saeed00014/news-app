import { AddCard, AddScroller } from "@/components/ui/adds";
import React from "react";

const Adds = () => {
  return (
    <div className="flex flex-col gap-4 w-full bg-ship py-4">
      <AddScroller>
        <AddCard />
        <AddCard />
        <AddCard />
        <AddCard classNames="lg:flex hidden" />
      </AddScroller>
      <AddScroller>
        <AddCard />
        <AddCard />
        <AddCard />
        <AddCard classNames="lg:flex hidden" />
      </AddScroller>
    </div>
  );
};

export default Adds;
