import api from ".";

export const generateQuiz = async (paload) => {
	try {
		const { data } = await api.post("/api/quiz/generate", paload);
		return data;
	} catch (error) {
		throw error;
	}
};
