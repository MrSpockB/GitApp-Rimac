import React, { Component } from "react";
import SearchBar from "../../components/SearchBar";
import { getUserInfo } from "../../api";
import { State, UsersData } from './types';
import UserProfile from '../UserProfile';
import RepoList from '../RepoList';

class App extends Component<{}, State> {
  state = {
    usersData: {} as UsersData,
    errMessage: '',
    selectedUser: null,
    isLoading: false
  };

  searchUser = (user: string) => {
    const { usersData } = this.state;
    if (usersData[user]) {
      return this.setState({
        selectedUser: usersData[user],
        errMessage: ''
      })
    }
    this.setState({ isLoading: true });
    getUserInfo(user)
      .then(data => {
        this.setState(({ usersData }) => {
          return {
            usersData: {...usersData, [user]: data},
            errMessage: '',
            selectedUser: data,
            isLoading: false
          }
        })
      })
      .catch(err => {
        let errMessage = err.message;
        if (err.message === "Not Found") {
          errMessage = 'User not found'
        }
        this.setState({
          errMessage: errMessage,
          isLoading: false,
          selectedUser: null
        });
      });
  };

  render() {
    const { errMessage, selectedUser, isLoading } = this.state;
    return (
      <div className="container">
        <SearchBar onSearch={this.searchUser} isLoading={isLoading} errMessage={errMessage} />
        <div className="row">
          <div className="column">
            <UserProfile userData={selectedUser} isLoading={isLoading}/>
          </div>
          <div className="column">
            {selectedUser && (
                <RepoList repos={selectedUser.repos}/>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
