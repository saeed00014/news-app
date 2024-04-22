import Context from "../_context/context";
import ProfileOptions from "../_user/profileOptions";
import ProfileUser from "../_user/profileUser";

const page = () => {
  return (
    <section className="flex w-full max-w-[1400px] h-full ">
      <div className="flex flex-col items-center w-full h-full">
        <Context>
          <div className="flex flex-col md:p-3 p-2 w-full max-w-[400px] bg-ship gap-4">
            <ProfileUser />
            <ProfileOptions />
          </div>
        </Context>
      </div>
    </section>
  );
};

export default page;
