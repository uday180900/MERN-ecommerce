import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isSellar, setIsSellar] = useState(false);
  const [showUserLogin, setShowUserLogin] = useState(false);

  const value = {
    navigate,
    user,
    setUser,
    setIsSellar,
    isSellar,
    showUserLogin,
    setShowUserLogin,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

//  const useAppContext = () => {
//   return useContext(AppContext);
// };

export { AppContextProvider, AppContext };
