import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogOutButton = () => {
  const {logout} = useLogout();

  return (
    <div className="mt-auto">
      <button className="btn btn-sm bg-sky-500" onClick={logout}>
        <span className="text-white">Logout</span>
        <BiLogOut className="w-6 h-6 text-white cursor-pointer"></BiLogOut>
      </button>
    </div>
  );
};

export default LogOutButton;
