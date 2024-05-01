import Register from "./register";

const Page = () => {
  return (
    <section className="fixed right-0 left-0 lg:top-[81px] top-[65px] lg:bottom-0 bottom-[65px] flex justify-center items-center">
      <div className="flex items-center h-full w-full overflow-y-auto no-scrollbar">
        <div className="flex justify-center w-full my-auto">
          <Register />
        </div>
      </div>
    </section>
  );
};

export default Page;
