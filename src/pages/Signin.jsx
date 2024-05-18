import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import OAuth from "../components/OAuth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { loading, error } = useSelector((state) => state.user);
  const [file, setFile] = useState({ email: "", password: "" });
  const { email, password } = file;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = getAuth(app);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFile({ ...file, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(signInStart());

    if (!email || !password) {
      dispatch(signInFailure("All fields are required"));
      return;
    }

    const res = await fetch("/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();

    if (data.success === false) {
      dispatch(signInFailure(data));
      return;
    }

    await signInWithEmailAndPassword(auth, email, password);

    dispatch(signInSuccess(data));
    setFile({ email: "", password: "" });
    localStorage.setItem("userInfo", JSON.stringify(data));
    navigate("/", { replace: true });
  };

  return (
    <div className="min-h-screen bg-white grid grid-cols-3">
      {/* Left Column */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 col-span-2">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <div className="text-3xl font-bold mb-8 text-pink-600">MediBook</div>
          <h1 className="text-4xl font-bold mb-2 text-center font-roboto">
            Login your account
          </h1>
          <p className="text-center text-gray-500 mb-8">
            To access health features, provide personal details
          </p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700">E-mail *</label>
              <input
                type="email"
                placeholder="email@email.com"
                name="email"
                value={email}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
              />
            </div>
            <div className="relative">
              <label className="block text-gray-700">Password *</label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="************"
                name="password"
                value={password}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
              />
              {showPassword ? (
                <AiFillEyeInvisible
                  className="w-6 h-6 text-gray-700 absolute top-10 right-3 cursor-pointer"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              ) : (
                <AiFillEye
                  className="w-6 h-6 text-gray-700 absolute top-10 right-3 cursor-pointer"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              )}
            </div>
            <div className="text-gray-500 text-sm mt-4">
              By clicking Continue, you agree to our Terms and Conditions,
              confirm you have read our Policy Privacy Notice.
            </div>

            <p className="flex text-center text-pink-600">
              {error ? error.message || "something went wrong!" : ""}
            </p>

            <button
              type="submit"
              className="w-full bg-pink-600 text-white py-2 rounded-lg mt-4 hover:bg-pink-700 transition duration-300"
            >
              {loading ? "Signing in ..." : "Sign in"}
            </button>
            <div className="flex space-x-2 text-center">
              <OAuth />
              <Link
                to="/sign-up"
                type="submit"
                className="w-full bg-pink-600 text-white py-2 rounded-lg mt-4 hover:bg-pink-700 transition duration-300"
              >
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </div>

      {/* Right Column */}
      <div
        className="col-span-1 bg-cover bg-center"
        style={{
          backgroundImage: "url(./image.png)",
        }}
      >
        <img
          src="https://assets.api.uizard.io/api/cdn/stream/087acbaa-6ff7-4bd5-9dd2-5489453dc066.png"
          alt="Image"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Signin;
