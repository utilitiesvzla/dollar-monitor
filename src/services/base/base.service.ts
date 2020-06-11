import axios from 'axios'

export class BaseService {
  protected getDate (url: string) {
    return axios(url)
  }
}
