import { useQuery } from "@tanstack/react-query";
import ShareBtn from "./shareBtn";
import { baseURL } from "@/axios/axios";
import { useParams } from "next/navigation";
import PlsLoginBtn from "./plsLoginBtn";

const NewsOptions = () => {
  const id = useParams()?.id;
  const isUserLogin = useQuery({
    queryKey: [`newslogin${id}`],
    queryFn: async () => {
      const response = await baseURL.get("/auth");
      return response.data?.login;
    },
    
  });

  if (isUserLogin?.data) {
    return (
      <div className="absolute top-0 left-0 flex">
        <ShareBtn />
      </div>
    );
  }

  return (
    <div className="absolute top-0 left-0 flex">
      <PlsLoginBtn />
    </div>
  );
};

export default NewsOptions;
