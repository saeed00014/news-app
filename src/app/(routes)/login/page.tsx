"use client";

import { Login } from "./login";

const Page = () => {
  return (
    <section className="flex flex-col items-center justify-center lg:px-4 lg:py-0 p-2 w-full h-full max-w-[1400px] gap-4">
      <div className="flex justify-center min-h-max w-full overflow-y-auto no-scrollbar">
        <Login />
      </div>
    </section>
  );
};

export default Page;
