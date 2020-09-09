import { UserData } from '../../models/UserData';

export interface UsersData {
    [key: string]: UserData
}

export interface State {
    errMessage: string;
    selectedUser: UserData | null,
    usersData: UsersData
}
