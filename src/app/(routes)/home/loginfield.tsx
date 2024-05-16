"use client";
import persian from "@/assets/data";
import { baseURL } from "@/axios/axios";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React from "react";

const Loginfield = () => {
  const userResult = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const response = await baseURL.get("/users/userInfo");
      return response.data?.result[0];
    },
    retry: 0,
  });

  const s1 = "لطفا جهت استفاده از همه خدمات سایت و پیام رسان وارد شوید";

  if (userResult.isPending) {
    return <></>;
  }

  if (!userResult?.data?.id) {
    return (
      <div className="flex md:flex-row flex-col justify-between items-center pr-5 pl-2 py-4 w-full md:border gap-1">
        <span> {s1}</span>
        <Link
          href={`/login`}
          className="flex px-16 py-[.5rem] rounded-[.4rem] text-ship bg-grass hover:brightness-110"
        >
          {persian.submit}
        </Link>
      </div>
    );
  }

  return <></>;
};

export default Loginfield;
