import persian from "@/assets/data";

const ErrorPage = () => {
  return (
    <div className="fixed top-0 left-0 flex items-center justify-center flex-col w-screen h-screen gap-2 bg-moon">
      <span>{persian.networkErrorMessage}</span>
      <span
        onClick={() => location.reload()}
        className="px-5 py-2 mt-2 rounded-[.5rem] text-ship bg-ash hover:brightness-110 cursor-pointer"
      >
        {persian.tryAgain}
      </span>
    </div>
  );
};

export default ErrorPage;
