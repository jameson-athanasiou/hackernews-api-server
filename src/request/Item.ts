import ApiRequest from './ApiRequest'

const ITEM = 'item'

class Item extends ApiRequest {
  getItem(id: string) {
    this.url = `${this.url}/${ITEM}/${id}.json?print=pretty`
    return this
  }
}

export default Item
