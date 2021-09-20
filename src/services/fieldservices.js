import axios from 'axios'

const apiUrl = 'http://localhost:5000/api'
//
export const getFieldsFromApi = async () => {

  const response = await axios.get(`${apiUrl}/fields`)
  return response;
};
//
export const postFieldToApi = async (field) => {
  const response = await axios.post(`${apiUrl}/fields/field`, field);
  return response;
}
//
export const getSingleFieldFromApi = async (id) => {
  const response = await axios.get(`${apiUrl}/fields/field/${id}`);
  return response;
}
export const updateFieldtoApi = async (field, id) => {
  const response = await axios.put(`${apiUrl}/fields/field/${id}`, field)
  return response;
}
//
export const deleteFieldFromApi = async (id) => {
  const response = await axios.delete(`${apiUrl}/fields/field/${id}`);
  return response;
}

