import React, { FunctionComponent, Fragment } from 'react';
import { UserData } from '../../models/UserData';
import Loader from '../Loader';

interface Props {
    userData: UserData | null,
    isLoading: boolean
}

const UserProfile: FunctionComponent<Props> = ({ userData, isLoading}) => {
    if (!userData) {
        return (<Fragment />)
    }
    const overlayClass = isLoading ? 'overlay is-active': 'overlay';
    return (
        <Fragment>
            <hr/>
            <div className="profile-wrapper">
                <div className="image-wrapper">
                    {isLoading && (
                        <div className={overlayClass}>
                            <Loader />
                        </div>
                    )}
                    <img src={userData.profilePictureURL} alt="user profile picture"/>
                </div>
                <div className="data">
                    <h4>Github Profile</h4>
                    <span><b>Username:</b> {userData.userName}</span><br/>
                    <span><b>Email:</b> {userData.email || "User doesn't have a public email"}</span><br/>
                    <a target="_blank" href={userData.profileURL}>Link to profile</a>
                </div>
            </div>
        </Fragment>
    );
};

export default UserProfile;
