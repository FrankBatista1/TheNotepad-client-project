import axios from 'axios'

const apiUrl = process.env.REACT_APP_API_URL

export const checkLogin = async (email, password, config) => {
  const response = await axios.post(`${apiUrl}/auth/login`,
  { email, password },
  config);
}


