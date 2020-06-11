import axios from 'axios'

export class BaseService {
  protected async getData (url: string) {
    const { data } = await axios(url)
    return data
  }
}
