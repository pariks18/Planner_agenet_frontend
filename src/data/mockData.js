import api from "../api/api";

/**
 * Calls the backend planning API.
 *
 * @param {string} projectDescription - User's project description
 * @returns {Promise<object>} Planning result from backend
 */
export async function generatePlan(projectDescription, role) {
  try {
    const response = await api.post("/plan", { projectDescription, role });
    return response.data;
  } catch (error) {
    console.error("Plan generation failed:", error);
    return {
      error: "Failed to generate plan. Please try again.",
    };
  }
}

