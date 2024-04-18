"use client"
import { baseURL } from "@/axios/axios";
import { AddBar } from "@/components/ui/adds";
import { MongoAddType } from "@/types/types";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const DoubleAdd = () => {
  const addResult = useQuery({
    queryKey: [""],
    queryFn: async () => {
      const response = await baseURL.get(
        "/adds?place=home&type=double&limit=2"
      );
      return response.data.result;
    },
  });

  if (addResult.isPending) {
    return <></>;
  }

  const adds = addResult.data
  return (
    <div className="flex md:[&>*:nth-child(2)]:flex [&>*:nth-child(2)]:hidden gap-2">
      {adds.map((add: MongoAddType) => {
        return (
          <div className="w-full" key={add.link}>
            <AddBar link={add.link} image={add.image} />
          </div>
        )
      })}
    </div>
  );
};

export default DoubleAdd;
