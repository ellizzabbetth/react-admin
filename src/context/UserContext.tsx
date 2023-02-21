import { createContext, useState, ReactNode } from "react";
import { IUser, UserContextType } from "../models/user";
import React from 'react';

//import { UserContextType } from '../@types/user';

interface Props {
    children: React.ReactNode;
}

export const UserContext = createContext<UserContextType | null>(null);

const UserContextProvider:  React.FC<Props>  = ({ children }) => {

    const [users, setUsers] = useState<IUser[]>([
        {
            id: 1,
            first_name: 'a',
            last_name: 'a',
            email: 'a@a.com',
          },
          {
            id: 2,
            first_name: 'b',
            last_name: 'b',
            email: 'b@b.com',
          },
    ]);

    return (
        <UserContext.Provider value={{users}}>{children}</UserContext.Provider>
    );
};
// https://blog.logrocket.com/how-to-use-react-context-typescript/
export default UserContextProvider;