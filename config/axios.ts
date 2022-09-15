export default {
  proxy: process.env.PROXY || 'true',
  baseURL:
    (process.env.PROXY || 'true') === 'true' ? '/api' : process.env.API_URL,
  debug: process.env.NODE_ENV !== 'production',
}
