import Register from "./register";

const Page = () => {
  return (
    <section className="flex flex-col items-center md:justify-center justify-start lg:px-4 lg:py-0 p-2 w-full h-full max-w-[1400px] gap-4">
      <div className="flex justify-center min-h-max w-full overflow-y-auto no-scrollbar">
        <Register />
      </div>
    </section>
  );
};

export default Page;
