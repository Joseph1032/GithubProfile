import React from 'react';
import Profile from './ProfileView'
import Repo from './Repository'
import 'font-awesome/css/font-awesome.css'
import { getData } from '../api/profile'
import { getRepos } from '../api/profile'
import '../assets/styles.css'


export default React.createClass({
  render () {

    getData()
    getRepos()

    return(
      <div>
        <Profile />
        <Repo />
      </div>
    )
  }
})