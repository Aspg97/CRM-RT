import { createContext, use, useState } from "react";

const UserContext = createContext();

function UserProviderWrapper(props) {
  const userLog = {
    id: "1234567890",
    name: "Anthony",
    lastName: "Pacheco",
    admin: true,
  };

  const [user, setUser] = useState(userLog);

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, logout }}>
      {props.children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProviderWrapper };
