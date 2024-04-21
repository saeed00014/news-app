import EditButton from "../_buttons/editButton";
import LogOut from "../_buttons/logOut";

const ProfileOptions = () => {
  return (
    <div className="flex gap-3">
      <EditButton />
      <LogOut />
    </div>
  );
};

export default ProfileOptions;
