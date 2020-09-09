import React, { Component } from "react";
import SearchBar from "../../components/SearchBar";
import { getUserInfo } from "../../api";
import { State, UsersData } from './types';
import { UserData } from '../../models/UserData';
import UserProfile from '../UserProfile';

class App extends Component<{}, State> {
  state = {
    usersData: {} as UsersData,
    errMessage: '',
    selectedUser: null
  };

  searchUser = (user: string) => {
    const { usersData } = this.state;
    if (usersData[user]) {
      return this.setState({
        selectedUser: usersData[user],
        errMessage: ''
      })
    }
    getUserInfo(user)
      .then(data => {
        this.setState(({ usersData }) => {
          return {
            usersData: {...usersData, [user]: data},
            errMessage: '',
            selectedUser: data
          }
        })
      })
      .catch(err => {
        let errMessage = err.message;
        if (err.message === "Not Found") {
          errMessage = 'User not found'
        }
        this.setState({ errMessage: errMessage });
      });
  };

  render() {
    const { errMessage, selectedUser } = this.state;
    return (
      <div className="container">
        <SearchBar onSearch={this.searchUser} />
        {!!errMessage && (
          <span>{errMessage}</span>
        )}
        <UserProfile userData={selectedUser}/>
      </div>
    )
  }
}

export default App;
