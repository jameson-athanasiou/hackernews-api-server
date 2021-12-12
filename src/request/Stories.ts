import ApiRequest from './ApiRequest'

const TOP_STORIES = 'topstories.json?print=pretty'

class Stories extends ApiRequest {
  getStories() {
    this.url = `${this.url}/${TOP_STORIES}`
    return this
  }
}

export default Stories
