import axios from "axios";
import { NewsItem } from "../types/news";
import { API_KEY, BASE_URL } from "../utils/newsAPI";



export const fetchNews = async (): Promise<NewsItem[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/news?category=general&token=${API_KEY}`);
 
    return response.data as NewsItem[];
  } catch (error) {
   
    throw error;
  }
};
