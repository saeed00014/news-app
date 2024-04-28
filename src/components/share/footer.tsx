import React, { useState } from "react";
import { useContext } from "react";
import { NewsShareContext } from "@/context/context";
import { useMutation } from "@tanstack/react-query";
import persian from "@/assets/data";
import { baseURL } from "@/axios/axios";
import { UserSqlType } from "@/types/types";
import { useParams } from "next/navigation";
import FooterUsers from "./footerUsers";
import LoadingSpin from "../loadingSpin";
import PopUpTimer from "../popUpTimer";

type useSendNews = {
  setIsShareActive: React.Dispatch<React.SetStateAction<boolean>>;
};

const useSendNews = ({ setIsShareActive }: useSendNews) => {
  const news_id = useParams()?.id;
  const { choosedUsers, setChooseUsers } = useContext(NewsShareContext);
  const [isLoading, setIsLoading] = useState(false);

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
      setIsLoading(false);
      if (response.status == 200) {
        setChooseUsers([]);
        setIsShareActive(false)
        return response;
      }
      return response;
    },
  });

  const handleShare = () => {
    setIsLoading(true);
    choosedUsers[0] && sendNews.mutate(choosedUsers);
  };

  return { handleShare, isLoading };
};

type Props = {
  setIsShareActive: React.Dispatch<React.SetStateAction<boolean>>;
};

const Footer = ({ setIsShareActive }: Props) => {
  const { handleShare, isLoading } = useSendNews({
    setIsShareActive,
  });

  return (
    <>
      <div className="flex justify-between items-center w-full h-[4rem] px-4">
        <button
          onClick={handleShare}
          className="flex px-3 py-2 rounded-[.2rem] bg-grass text-ship hover:brightness-110 gap-1"
        >
          {isLoading && (
            <LoadingSpin classNames="w-[1.4rem] min-w-[1.4rem] h-[1.4rem] border-ship border-l-transparent" />
          )}
          {persian.share}
        </button>
        <FooterUsers />
      </div>
    </>
  );
};

export default Footer;
