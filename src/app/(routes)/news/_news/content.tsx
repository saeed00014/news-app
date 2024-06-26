import getNewsContentType from "@/hooks/getNewsContentType";

const Content = ({ content }: { content: string }) => {
  try {
    const parsedContent = JSON.parse(content);
    return parsedContent.map((cont: any, e: any) => {
      const classNames = getNewsContentType(cont.type);
      return (
        <span key={e} className={classNames}>
          {cont.text}
        </span>
      );
    });
  } catch (e) {
    return;
  }
};

export default Content;
