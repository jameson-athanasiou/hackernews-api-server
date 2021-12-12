import axios from 'axios'

const BASE_URL = 'https://hacker-news.firebaseio.com/v0'

class ApiRequest {
  url: string

  constructor() {
    this.url = BASE_URL
  }

  makeGet() {
    return axios.get(this.url)
  }
}

export default ApiRequest
