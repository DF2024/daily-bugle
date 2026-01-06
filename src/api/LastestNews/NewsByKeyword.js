import newsApi from "./newsdata";

export const getNewsByKeyword = async (keyword) => {
  const { data } = await newsApi.get("/latest", {
    params: {
      apikey: API_KEY,
      q: keyword,
      language: "es",
      category: "technology",
    },
  });

  return data.results;
};
