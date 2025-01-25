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
      axios.get("https://6789fbc8dd587da7ac284cc5.mockapi.io/api/v1/position"),
      axios.get("https://6789fbc8dd587da7ac284cc5.mockapi.io/api/v1/people"),
    ]);
    return data;
  } catch (err) {
    throw new Error(err);
  }
};
