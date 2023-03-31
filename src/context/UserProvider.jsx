import { useState } from "react"
import { UserContext } from "./UserContext"


export const UserProvider = ({children}) => {

  const [user, setuser] = useState(null);
  return (
    <UserContext.Provider value={{user,setuser}}>
        {children}
    </UserContext.Provider>
  )
}
