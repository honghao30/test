import client from './client'
const { req, apiClient } = client

export default {
  sayHello() {
    return req(apiClient.get('test/hello'))
  },
  SEND_EMAIL(payload) {
    return req(apiClient.post('/main/email', payload))
  },
  SUBSCRIBE(payload) {
    return req(apiClient.post('/subscribe', payload))
  },
  GET_NEWS_LIST() {
    return req(apiClient.get('/news'))
  },
  GET_SINGLE_NEWS(id) {
    return req(apiClient.get(`/news/${id}`))
  },
  CREATE_NEWS(payload) {
    return req(apiClient.post('/news', payload))
  },
  MODIFY_NEWS(id, payload) {
    return req(apiClient.put(`/news/${id}`, payload))
  },
  DELETE_NEWS(id) {
    return req(apiClient.delete(`/news/${id}`))
  },
  GET_RSS_FEED() {
    return req(apiClient.get('/blog'))
  },
  XSLX_TEST(sheetName, payload) {
    return req(apiClient.post(`/xlsx/${sheetName}`, payload))
  },
  ACTIVE_CAMPAIGN(payload) {
    return req(apiClient.post(`/active-campaign`, payload))
  },
}
