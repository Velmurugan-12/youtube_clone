import axios from "axios";

const BASE_URL = "https://www.googleapis.com/youtube/v3";
const API_KEY = "AIzaSyAIvUqxwjq194bHnxHz1Omzzr20YlGPxGA"; 

export const fetchApiForYoutubeData = async (endpoint, params = {}) => {
  try {
    const response = await axios.get(`${BASE_URL}/${endpoint}`, {
      params: {
        ...params,
        key: API_KEY,
      },
    });
    console.log("YouTube API Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching YouTube data:", error);
    return null;
  }
};
