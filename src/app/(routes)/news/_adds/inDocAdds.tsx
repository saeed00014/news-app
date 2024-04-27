import InDocAdd from "./inDocAdd";

const InDocAdds = ({ adds }: { adds: string }) => {
  try {
    const parsedAdds = JSON.parse(adds);
    return (
      <div className="flex w-full gap-1">
        {parsedAdds.map((add_id: string) => {
          return (
            <div className="flex w-full" key={add_id}>
              <InDocAdd add_id={add_id} />
            </div>
          );
        })}
      </div>
    );
  } catch (err) {
    return;
  }
};

export default InDocAdds;
