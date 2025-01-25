import axios from "axios";

const Person_Url = "https://6789fbc8dd587da7ac284cc5.mockapi.io/api/v1/people";
const Position_Url =
  "https://6789fbc8dd587da7ac284cc5.mockapi.io/api/v1/position";

export const deletePerson = async (id) => {
  try {
    const res = await axios.delete(`${Person_Url}/${id}`);
    return res;
  } catch (err) {
    throw new Error(err);
  }
};
export const fetchPerson = async (id) => {
  try {
    const data = await axios.get(`${Person_Url}/${id}`);

    return data;
  } catch (err) {
    throw new Error(err);
  }
};
export const DeletePerson = async (id, selecteduser) => {
  try {
    const data = await axios.put(`${Person_Url}/${id}`, selecteduser);
    return data;
  } catch (err) {
    throw new Error(err);
  }
};
export const fetchpersonandpeople = async () => {
  try {
    const data = Promise.all([
      axios.get(`${Position_Url}`),
      axios.get(`${Person_Url}`),
    ]);
    return data;
  } catch (err) {
    throw new Error(err);
  }
};
export const addperson = async (data, selectedPositionId) => {
  try {
    const response = axios.post(Person_Url, {
      name: data.name,
      description: data.description,
      parentId: selectedPositionId,
    });
    return response;
  } catch (err) {
    throw new Error(err);
  }
};
export const addPostion = async (positionData) => {
  try {
    const response = await axios.post(`${Position_Url}`, positionData);
    return response;
  } catch (err) {
    throw new Error(err);
  }
};
