import api from "../api/api";

export async function verifyAuth(role, password) {
  try {
    const response = await api.post("/auth/verify", { role, password });
    return response.data; // { authorized: true/false }
  } catch (error) {
    console.error("Auth verification failed:", error);
    return { authorized: false };
  }
}

