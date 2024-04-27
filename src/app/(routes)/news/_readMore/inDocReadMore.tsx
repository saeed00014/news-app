import ReadMore from "@/components/ui/readMore";

const InDocReadMore = ({ readMore }: { readMore: string }) => {
  try {
    const parsedReadMore = JSON.parse(readMore);
    return <ReadMore readMore={parsedReadMore} />;
  } catch (err) {
    return;
  }
};

export default InDocReadMore;
