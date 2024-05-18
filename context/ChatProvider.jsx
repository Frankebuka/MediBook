import { createContext, useContext, useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [fetchAgain, setFetchAgain] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);
    setLoading(false);
  }, [navigate, fetchAgain]);

  return (
    <ChatContext.Provider
      value={{
        user,
        setUser,
        fetchAgain,
        setFetchAgain,
      }}
    >
      {loading ? <p>Loading...</p> : children}
    </ChatContext.Provider>
  );
};

export const ChatState = () => useContext(ChatContext);

export const ProtectedRoute = () => {
  // const { user } = ChatState();
  const { currentUser } = useSelector((state) => state.user);
  return currentUser ? <Outlet /> : <Navigate to="/sign-in" replace={true} />;
};
