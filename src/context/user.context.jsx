import { createContext, useState } from "react";

const UserContext = createContext();

function UserProviderWrapper(props) {
  const userLog = {
    id: "1234",
    name: "Anthony",
    lastName: "Pacheco",
    log: false,
  };

  const [user, setUser] = useState(userLog);

  const logout = () => {
    setUser({ ...user, log: false });
  };

  return (
    <UserContext.Provider value={{ user, logout, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProviderWrapper };
