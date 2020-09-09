import { UserData } from '../../models/UserData';

export interface State {
    errMessage: string;
    selectedUser: UserData,
    usersData: {
        [key: string]: UserData
    }
}
