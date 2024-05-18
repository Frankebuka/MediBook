import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../redux/user/userSlice";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = async () => {
    await fetch("/api/user/logout");
    localStorage.removeItem("userInfo");
    dispatch(signOut());
    navigate("/sign-in", { replace: true });
    console.log("Sign out successful");
  };

  return (
    <header className="flex flex-col items-center bg-gray-200 text-center py-8 mb-8">
      <Link to="/" className="text-3xl font-bold mb-4 text-pink-600">
        MediBook
      </Link>
      <p>Your trusted medical appointment platform</p>
      <div className="flex space-x-12 mt-2">
        {currentUser ? (
          <p onClick={logout} className="cursor-pointer hover:underline">
            Sign out
          </p>
        ) : (
          <Link to="/sign-up" className="cursor-pointer hover:underline">
            Sign up
          </Link>
        )}

        {currentUser ? (
          <Link
            to="/personal-information"
            className="cursor-pointer hover:underline"
          >
            Settings
          </Link>
        ) : (
          <Link to="/sign-in" className="cursor-pointer hover:underline">
            Sign in
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
