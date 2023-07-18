import { createContext } from "react";

const userContext = createContext({
  user: {
    name: "User name",
    email: " dummy@gmail.com",
  },
});
export default userContext;
