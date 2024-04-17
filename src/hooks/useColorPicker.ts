
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
    case  "مسکن":
      classNames = "bg-lightblood";
      break;
    case "جامعه":
      classNames = "bg-grass";
      break;
    case "اقتصاد کلان":
      classNames = "bg-water";
      break;
  }
  return classNames
}

export default useColorPicker