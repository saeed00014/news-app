import ReadMore from "@/components/ui/readMore";

const InDocReadMore = ({ readMore }: { readMore: string }) => {
  console.log(readMore)
  const parsedReadMore = JSON.parse(readMore)
  console.log(parsedReadMore)
  return (
    <ReadMore readMore={parsedReadMore} />
  )
};

export default InDocReadMore;
