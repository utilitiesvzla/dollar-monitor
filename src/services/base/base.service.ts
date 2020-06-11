import axios from 'axios'

export class BaseService {
  protected static async getData (url: string, params?) {
    // Prevent cache
    params = params || {}
    params.unix = new Date().getTime()
    // Send request
    const { data } = await axios({
      url,
      params
    })
    return data
  }
}
