import { Repo } from './Repo';

export interface UserData {
    userName: string
    profilePictureURL: string
    email: string
    profileURL: string,
    repos: Repo[]
}
