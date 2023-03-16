import axios from "axios";

const BASE_URL = "http://localhost:8000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZmE0NjNiYTBiODM4MjFlNTAxMjU4MyIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2Nzc0MTQzMDAsImV4cCI6MTY3NzY3MzUwMH0.0c76qIDjqxBZGAKKrHx_cZ6tf67D2yOCq3Ayih7fAno";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { Token: `Bearer ${TOKEN}` },
});
