import ReadMore from "@/components/ui/readMore";

const InDocReadMore = ({ readMore }: { readMore: string }) => {
  const parsedReadMore = JSON.parse(readMore)
  return (
    <ReadMore readMore={parsedReadMore} />
  )
};

export default InDocReadMore;
