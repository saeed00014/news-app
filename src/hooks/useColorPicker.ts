
function useColorPicker(text: string) {
  let classNames = "";
  switch (text) {
    case "اقتصاد":
      classNames = "bg-sun";
      break;
    case "بورس":
      classNames = "bg-darkwater";
      break;
    case "دلار و طلا":
      classNames = "bg-darkgrass";
      break;
    case "ارز دیجیتال":
      classNames = "bg-";
      break;
    case "جامعه":
      classNames = "bg-lightblood";
      break;
    case "اقتصاد کلان":
      classNames = "bg-water";
      break;
  }
  return classNames
}

export default useColorPicker