import React, { Component } from 'react'
import store from '../store'

class Repository extends Component {
constructor() {
    super()   
    this.state = {
      repos: [],
    }
  }
  componentWillMount() {
    store.subscribe(() => {
      const appState = store.getState()
      const repoInfo = appState.repos
      
      this.setState( {
        repos: repoInfo,
      })
    })
  }
    render () {
    return (
        <div className='repositories'>
            <div className='topRow'>
                <ul className='links'>
                    <li id='tabs'>Overview</li>
                    <li id='tabs'>Repositories<div id='numbs'>31</div></li>
                    <li id='tabs'>Stars<div id='nums'>0</div></li>
                    <li id='tabs'>Followers<div id='numbrs'>0</div></li>
                    <li id='tabs'>Following<div id='numbrs'>4</div></li>
                </ul>
                <div id='topLine'></div>
                <input type='text' id='searchBox' placeholder='Search repositories...' />
                  <select className='type'>
                      <option value='all'>Type: All</option>
                      <option value='sources'>Sources</option>
                      <option value='forks'>Forks</option>
                      <option value='mirrors'>Mirrors</option>
                  </select>
                  <select className='language'>
                      <option value='all'>Language: All</option>
                      <option value='c++'>C++</option>
                      <option value='html'>HTML</option>
                      <option value='javascript'>JavaScript</option>
                      <option value='php'>PHP</option>
                  </select>
                  <div id='bottomLine'></div>
            </div>
          <ul>
          {this.state.repos.map((info, i) => {
              return (
                <li id='repository' key={i}>
                  <a href={info.html_url}>
                    <h2>{info.name}</h2>
                  </a>
                    <p>{info.language}</p>
                    <div id='lines'></div>               
                </li>
              )
            })
          }
          </ul> 
        </div>  
    )
  }
}

export default Repository























