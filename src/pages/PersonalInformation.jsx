import { useDispatch, useSelector } from "react-redux";
import {
  AddFamilyMemberIcon,
  BellIcon,
  BillingIcon,
  NotificationIcon,
  ProfileIcon,
  SettingsIcon,
} from "../components/Icons";
import { useEffect, useRef, useState } from "react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
} from "../redux/user/userSlice";

const PersonalInformation = () => {
  const dispatch = useDispatch();
  const fileRef = useRef(null);
  const [image, setImage] = useState(undefined);
  const [imagePercent, setImagePercent] = useState(0);
  const [imageError, setImageError] = useState(false);
  const [formData, setFormData] = useState({});
  const [updateSuccess, setUpdateSuccess] = useState(false);

  const { currentUser, error } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (image) {
      handleFileUpload(image);
    }
  }, [image]);

  const handleFileUpload = async (image) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + image.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImagePercent(Math.round(progress));
      },
      (error) => {
        setImageError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setFormData({ ...formData, profilePicture: downloadURL })
        );
      }
    );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        dispatch(updateUserFailure(data));
        return;
      }
      dispatch(updateUserSuccess(data));
      setUpdateSuccess(true);
    } catch (error) {
      dispatch(updateUserFailure(error));
    }
  };

  const handleDeleteAccount = async () => {
    try {
      const confirm = window.confirm(
        "Are you sure you want to delete your account?"
      );
      if (confirm) {
        dispatch(deleteUserStart());
        const res = await fetch(`/api/user/delete/${currentUser._id}`, {
          method: "DELETE",
        });
        const data = await res.json();
        if (data.success === false) {
          dispatch(deleteUserFailure(data));
          return;
        }
        dispatch(deleteUserSuccess(data));
        localStorage.removeItem("userInfo");
        navigate("/", { replace: true });
      }
    } catch (error) {
      dispatch(deleteUserFailure(error));
    }
  };

  return (
    <div className="min-h-screen bg-white grid grid-cols-4 space-x-1">
      {/* Left Column */}
      <div className="flex p-8 flex-col bg-gray-100 col-span-1">
        <h2 className="text-black mb-6 text-lg font-semibold leading-5">
          Account Settings
        </h2>
        <div className="flex space-x-2">
          <ProfileIcon />
          <p className="text-black text-base font-roboto leading-6 mb-6">
            Personal Information
          </p>
        </div>
        <div className="flex space-x-2">
          <BillingIcon />
          <p className="text-black text-base font-roboto font-light leading-6 mb-6">
            Billing Details
          </p>
        </div>
        <div className="flex space-x-2">
          <BellIcon />
          <Link
            to="/appointment-reminders"
            className="text-black cursor-pointer text-base font-roboto font-light leading-6 mb-6"
          >
            Reminders
          </Link>
        </div>
        <div className="flex space-x-2">
          <SettingsIcon />
          <p className="text-black text-base font-roboto font-light leading-6 mb-6">
            Preferences
          </p>
        </div>
        <div className="flex space-x-2">
          <NotificationIcon />
          <Link
            to="/medical-history"
            className="text-black cursor-pointer text-base font-roboto font-light leading-6 mb-6"
          >
            History
          </Link>
        </div>
        <div className="flex space-x-2">
          <AddFamilyMemberIcon />
          <p className="text-black text-base font-roboto font-light leading-6 mb-6">
            Add Family Member
          </p>
        </div>
        <p
          onClick={handleDeleteAccount}
          className="text-red-600 mt-16 cursor-pointer text-base font-roboto font-light leading-6 mb-6"
        >
          Delete Account
        </p>
      </div>
      {/* Right Column */}
      <div className="flex flex-col bg-gray-100 col-span-3">
        <div className="p-8">
          <div className="flex flex-col">
            <p className="text-black text-2xl font-roboto font-semibold leading-9">
              Personal Information
            </p>
            <p className="text-gray-600 text-sm font-roboto leading-[22px]">
              Update Personal Details
            </p>
          </div>
          <input
            type="file"
            ref={fileRef}
            hidden
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <img
            src={formData.profilePicture || currentUser.picture}
            alt="profile"
            className="top-[220px] left-[409px] w-20 h-20 rounded-full bg-cover bg-center bg-no-repeat my-8"
            onClick={() => fileRef.current.click()}
          />
          <p className="text-sm self-center">
            {imageError ? (
              <span className="text-red-700">
                Error uploading image (file size must be less than 2 MB)
              </span>
            ) : imagePercent > 0 && imagePercent < 100 ? (
              <span className="text-slate-700">{`Uploading: ${imagePercent} %`}</span>
            ) : imagePercent === 100 ? (
              <span className="text-green-700">
                Image uploaded successfully
              </span>
            ) : (
              ""
            )}
          </p>
          <p className="text-green-700 mt-5">
            {updateSuccess && "User is updated successfully!"}
          </p>
          <p className="text-red-700 mt-5">
            {error && "Something went wrong!"}
          </p>
          <div className="flex flex-col space-y-10">
            <div className="flex justify-between">
              <p className="text-black text-base font-roboto font-medium leading-[22px]">
                Full Name
              </p>
              <input
                type="text"
                id="name"
                defaultValue={currentUser.name ?? ""}
                onChange={handleChange}
                placeholder="John Doe"
                className="text-black bg-gray-100 focus:outline-none text-base font-roboto font-light leading-[22px]"
              />

              <span
                onClick={handleSubmit}
                className="text-gray-500 cursor-pointer text-sm font-roboto leading-[22px]"
              >
                Update
              </span>
            </div>

            <div className="flex justify-between">
              <p className="text-black text-base font-roboto font-medium leading-[22px]">
                Address
              </p>
              <input
                type="text"
                id="address"
                defaultValue={currentUser.address ?? ""}
                onChange={handleChange}
                placeholder="123 Medical Street, City, Country"
                className="text-black bg-gray-100 focus:outline-none text-base font-roboto font-light leading-[22px]"
              />
              <span
                onClick={handleSubmit}
                className="text-gray-500 cursor-pointer text-sm font-roboto leading-[22px]"
              >
                Update
              </span>
            </div>

            <div className="flex justify-between">
              <p className="text-black text-base font-roboto font-medium leading-[22px]">
                Email
              </p>
              <input
                type="email"
                id="email"
                defaultValue={currentUser.email ?? ""}
                onChange={handleChange}
                placeholder="johndoe@email.com"
                className="text-black bg-gray-100 focus:outline-none text-base font-roboto font-light leading-[22px]"
              />
              <span
                onClick={handleSubmit}
                className="text-gray-500 cursor-pointer text-sm font-roboto leading-[22px]"
              >
                Update
              </span>
            </div>

            <div className="flex justify-between">
              <p className="text-black text-base font-roboto font-medium leading-[22px]">
                Password
              </p>
              <input
                placeholder="***************"
                type="password"
                id="password"
                onChange={handleChange}
                className="text-black bg-gray-100 focus:outline-none text-base font-roboto font-light leading-[22px]"
              />
              <span
                onClick={handleSubmit}
                className="text-gray-500 cursor-pointer text-sm font-roboto leading-[22px]"
              >
                Update
              </span>
            </div>

            <div className="flex justify-between">
              <p className="text-black text-base font-roboto font-medium leading-[22px]">
                Phone Number
              </p>
              <input
                type="number"
                id="phone"
                defaultValue={currentUser.phone ?? ""}
                onChange={handleChange}
                placeholder="123-456-7890"
                className="text-black bg-gray-100 focus:outline-none text-base font-roboto font-light leading-[22px]"
              />
              <span
                onClick={handleSubmit}
                className="text-gray-500 cursor-pointer text-sm font-roboto leading-[22px]"
              >
                Update
              </span>
            </div>

            <div className="flex justify-between">
              <p className="text-black text-base font-roboto font-medium leading-[22px]">
                Date of Birth
              </p>
              <input
                type="date"
                id="dob"
                defaultValue={currentUser.dob ?? ""}
                onChange={handleChange}
                placeholder="01/01/1980"
                className="text-black bg-gray-100 focus:outline-none text-base font-roboto font-light leading-[22px]"
              />
              <span
                onClick={handleSubmit}
                className="text-gray-500 cursor-pointer text-sm font-roboto leading-[22px]"
              >
                Update
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
