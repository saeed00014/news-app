const getNewsContentType = (type: string) => {
  let classNames;
  switch (type) {
    case "discription":
      classNames = "flex justify-start items-center w-full";
      break;
    case "title":
      classNames = "lg:text-2xl md:text-[1.3rem] text-[1rem] font-semibold";
      break;
  }
  return classNames;
};

export default getNewsContentType;
