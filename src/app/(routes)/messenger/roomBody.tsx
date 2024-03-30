import Message from "@/components/message";

const RoomBody = () => {
  const selfMessage =
    "justify-end [&>div>span]:bg-darkgrass [&>div]:flex-row-reverse";
  return (
    <div className="flex flex-col-reverse w-full h-full md:pb-4 pb-2 lg:px-4 px-2 overflow-y-auto">
      <ul className="flex flex-col gap-1 w-full min-h-max">
        <Message />
        <Message />
        <Message classNames={selfMessage} />
        <Message />
        <Message classNames={selfMessage} />
        <Message classNames={selfMessage} />
        <Message classNames={selfMessage} />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message classNames={selfMessage} />
      </ul>
    </div>
  );
};

export default RoomBody;
