import axios from 'axios'

export class BaseService {
  protected static async getData (url: string) {
    const { data } = await axios(url)
    return data
  }
}
