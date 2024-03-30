import persian from "@/assets/data";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center flex-col w-screen h-screen gap-2 ">
      <span>{persian.networkErrorMessage}</span>
      <span
        onClick={() => location.reload()}
        className="px-5 py-2 mt-2 rounded-[.5rem] bg-white dark:bg-gray-800 hover:bg-gray-400 dark:hover:bg-gray-700 cursor-pointer"
      >
        {persian.tryAgain}
      </span>
    </div>
  );
};

export default ErrorPage;
