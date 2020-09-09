import React, { FunctionComponent, Fragment } from 'react';
import { UserData } from '../../models/UserData';

interface Props {
    userData: UserData | null
}

const UserProfile: FunctionComponent<Props> = ({ userData }) => {
    if (!userData) {
        return (<Fragment />)
    }
    return (
        <Fragment>
            <hr/>
            <div className="profile-wrapper">
                <img className="column" src={userData.profilePictureURL} alt="user profile picture"/>
                <div className="column data">
                    <h2>Github Profile</h2>
                    <span><b>Username:</b> {userData.userName}</span><br/>
                    <span><b>Email:</b> {userData.email}</span><br/>
                    <a target="_blank" href={userData.profileURL}>Link to profile</a>
                </div>
            </div>
        </Fragment>
    );
};

export default UserProfile;
