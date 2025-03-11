import { baseUrl } from "../constants/constant";

export const fetchServerData = async (
  url: string
): Promise<{ data: any | null; error?: string }> => {
  try {
    const response = await fetch(baseUrl + url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return { data };
  } catch (e) {
    console.error("Fetch error:", e);
    return { data: null, error: (e as Error).message };
  }
};
