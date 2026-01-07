import newsApi from "../axios";

const API_KEY = import.meta.env.VITE_API_KEY

export const getArticles = async () => {
  const { data } = await newsApi.get("/latest", {
    params: {
      apikey: API_KEY,
      q: "react",
      language: "en",
    },
  });

  return data.results || [];
};