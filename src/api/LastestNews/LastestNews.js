import newsApi from "../axios";

const API_KEY = import.meta.env.VITE_API_KEY

export const getLatestNews = async () => {
    try {
        const { data } = await newsApi.get("/latest", {
        params: {
            apikey: API_KEY,
            language: "es",
        },
        });

        return data.results || [];
    } catch (error) {
        console.error(error);
        return [];
    }
};
