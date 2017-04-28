import store from '../store'
import axios from 'axios'

export function getData() {
	axios.get('https://api.github.com/users/Joseph1032').then(function (data){
		
		store.dispatch({
			type: 'GET_DATA',
			action: data.data
		})
	})
}


export function getRepos() {
  axios.get('https://api.github.com/users/Joseph1032/repos').then(function (data) {
    store.dispatch({
      type: 'GET_REPOS',
      action: data.data
      
    })

  })
    
}











