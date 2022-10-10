import Axios from 'axios'
const Services = Axios.create({
  baseURL: 'http://laravel-nuxt-app.test/' || process.env.API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})
export default Services
