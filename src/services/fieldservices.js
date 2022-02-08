import axios from 'axios'

const apiUrl = process.env.REACT_APP_API_URL

export const getNotesFromApi = async () => {

  const response = await axios.get(`${apiUrl}/notes`)
  return response;
};

export const postNoteToApi = async (note) => {
  const response = await axios.post(`${apiUrl}/notes/note`, note);
  return response;
}

export const getSingleNoteFromApi = async (id) => {
  const response = await axios.get(`${apiUrl}/notes/note/${id}`);
  return response;
}
export const updateNotetoApi = async (note, id) => {
  const response = await axios.put(`${apiUrl}/notes/note/${id}`, note)
  return response;
}

export const deleteNoteFromApi = async (id) => {
  const response = await axios.delete(`${apiUrl}/notes/note/${id}`);
  return response;
}

