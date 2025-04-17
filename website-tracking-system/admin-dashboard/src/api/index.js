import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // adjust if needed
});

// Auth
export const loginUser = (credentials) => API.post("/auth/login", credentials);

// Admin
export const fetchLogs = () => API.get("/admin/logs");
export const fetchBlockedSites = () => API.get("/admin/blocked-sites");

