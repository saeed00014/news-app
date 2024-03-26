import persian from "@/assets/data";
import ReadMore from "@/components/ui/readMore";
import Image from "next/image";
import React from "react";
import testImage from "@/assets/testNews.webp";
import { AddBar } from "@/components/ui/adds";

const News = () => {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="lg:text-[1.3rem] text-[1.1rem]">{persian.newsH2Tag}</h2>
      <p className="lg:text-2xl md:text-[1.3rem] text-[1.1rem] font-semibold">
        {persian.newsPTag}
      </p>
      <div className="flex justify-center w-full">
        <Image alt="dfjskl" width={700} src={testImage} />
      </div>
      <div className="flex justify-start items-center w-full">
        <p>
          بازار طلا در معاملات روز دوشنبه ضرباهنگی ناموزون را تجربه کرد و به شدت
          نوسانی بود. قیمت طلای 18 عیار هم با وجود رشد قیمت طلای جهانی، کاهش
          یافت. سکه بهار آزادی روز دوشنبه وارد کانال 36 میلیونی شد.
        </p>
      </div>
      <AddBar />
      <p className="md:text-[1rem] text-[.9rem]">
        به گزارش قیمت دلار در معاملات پشت خطی روز دوشنبه در همان محدوده روز
        یکشنبه قرار گرفت. باید توجه داشت که همین محدوده نیز مطلوب بازارساز نیست
        و با شروع معاملات نقدی احتمال آن می‌رود که بانک مرکزی با دست پر وارد
        میدان شده و قیمت دلار را مدیریت کند.
      </p>
      <ReadMore />
      <h2 className="lg:text-2xl md:text-[1.3rem] text-[1.1rem] font-semibold">
        قیمت دلار 6 فروردین 1403
      </h2>
      <p className="md:text-[1rem] text-[.9rem]">
        قیمت اسکناس دلار روز دوشنبه 6 فروردین 1403 در مرکز مبادله طلا و ارز 43
        هزار و 472 تومان و قیمت حواله دلار 40 هزار و 552 تومان ثبت شد. قیمت
        حواله درهم امارات هم 11 هزار و 42 تومان و قیمت اسکناس درهم 11 هزار و 837
        تومان شد. قیمت درهم در بازار آزاد 16 هزار و 320 تومان ثبت شد.
      </p>
      <p className="md:text-[1rem] text-[.9rem]">
        قیمت یورو در بازار آزاد روز دوشنبه 6 فروردین 1403، بالغ بر 66 هزار و 400
        تومان شد. قیمت اسکناس یورو در مرکز مبادله هم با کاهش نسبت به روز یکشنبه،
        46 هزار و 980 تومان و قیمت حواله یورو نیز با کاهش نسبت به روز قبل، در
        این مرکز 43 هزار و 825 تومان ثبت شد. قیمت پوند انگلیس هم در بازار آزاد
        روز دوشنبه 77 هزار و 450 تومان شد.
      </p>
    </div>
  );
};

export default News;
