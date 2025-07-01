// 📁 src/utils/api.js
import axios from "axios";

const api = axios.create({
  baseURL: process.env.APP_URL || "https://portfolio-backend-5tot.onrender.com/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getData = async (url, config = {}) => {
  try {
    const res = await api.get(url, config);
    return res.data;
  } catch (err) {
    throw err.response?.data || err;
  }
};

export const postData = async (url, data, config = {}) => {
  try {
    const res = await api.post(url, data, config);
    return res.data;
  } catch (err) {
    throw err.response?.data || err;
  }
};

export const putData = async (url, data, config = {}) => {
  try {
    const res = await api.put(url, data, config);
    return res.data;
  } catch (err) {
    throw err.response?.data || err;
  }
};

export const patchData = async (url, data, config = {}) => {
  try {
    const res = await api.patch(url, data, config);
    return res.data;
  } catch (err) {
    throw err.response?.data || err;
  }
};

export const deleteData = async (url, config = {}) => {
  try {
    const res = await api.delete(url, config);
    return res.data;
  } catch (err) {
    throw err.response?.data || err;
  }
};
