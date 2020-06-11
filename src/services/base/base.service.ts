import axios from 'axios'

export class BaseService {
  protected getData (url: string) {
    return axios(url)
  }
}
