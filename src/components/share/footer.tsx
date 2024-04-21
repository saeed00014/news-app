import React from "react";
import { useContext } from "react";
import { NewsShareContext } from "@/context/context";
import { useMutation } from "@tanstack/react-query";
import persian from "@/assets/data";
import { baseURL } from "@/axios/axios";
import { UserSqlType } from "@/types/types";
import { useParams } from "next/navigation";
import FooterUsers from "./footerUsers";

const useSendNews = () => {
  const news_id = useParams()?.id;
  const { choosedUsers } = useContext(NewsShareContext);

  const sendNews = useMutation({
    mutationFn: async (choosedUsers: UserSqlType[]) => {
      const choosedUsers_id: { id: number }[] = [];
      choosedUsers.map((user) => choosedUsers_id.push({ id: user.id }));
      const response = await baseURL.post(
        `/messages/newsShare?news_id=${news_id}`,
        {
          choosedUsers_id,
        }
      );
      return response;
    },
  });

  const handleShare = () => {
    choosedUsers[0] && sendNews.mutate(choosedUsers);
  };

  return { handleShare };
};

const Footer = () => {
  const { handleShare } = useSendNews();

  return (
    <div className="flex justify-between items-center w-full h-[4rem] px-4">
      <button
        onClick={handleShare}
        className="px-4 py-2 rounded-[.2rem] bg-moon hover:brightness-90"
      >
        {persian.share}
      </button>
      <FooterUsers />
    </div>
  );
};

export default Footer;
