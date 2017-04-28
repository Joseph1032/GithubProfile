import React, { Component } from 'react'
import store from '../store'

class Profile extends Component {

constructor() {
    super()
    this.state = {
      data: ''
    }
  }

  componentWillMount() {
    store.subscribe(() => {
      const appState = store.getState()
      const userData = appState.userdata

      this.setState( {
        data: userData      
      })
    })
  }
  render () {
    return (
      <div id='avatarContainer'>
        <div className='topBox'>
          <div id='gitIcon'>
            <i className="fa fa-github fa-3x" aria-hidden="true"></i>
          </div>
          <input type='text' id='gitBox' placeholder='Search GitHub'/>
          <ul id='gitLinks'>
            <li>Pull requests</li>
            <li>Issues</li>
            <li>Gist</li>
          </ul>
          
        </div>
        <div id='avatar'>
            <img alt='' src={this.state.data.avatar_url} />
            <h2>{this.state.data.name}</h2> 
            <p className='userName'>{this.state.data.login}</p> 
            <button>Follow</button>
        </div>
      </div>
    )
  }
}

export default Profile;































