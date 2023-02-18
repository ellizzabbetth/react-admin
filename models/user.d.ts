//import {Role} from "./role";

// export class User {
//     constructor(
//         public id = 0,
//         public first_name = '',
//         public last_name = '',
//         public email = '',
//         //public role = new Role()
//     ) {
//     }

//     // get name() {
//     //     return this.first_name + ' ' + this.last_name;
//     // }
// }

export interface IUser {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
}

export type UserContextType ={
    users: IUser[];
  //  name: () => string;
};