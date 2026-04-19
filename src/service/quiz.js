import api from ".";

export const generateQuiz = async (paload) => {
	try {
		const { data } = await api.post("/api/quiz/generate", paload);
		return data;
	} catch (error) {
		throw error;
	}
};

export const fetchQuizx = async (id) => {
	try {
		const { data } = await api.get(`/api/quiz/fetch-quiz-information/${id}`);
		return data;
	} catch (error) {
		throw error;
	}
};

export const saveQuiz = async (id, payload) => {
	try {
		const { data } = await api.post(
			`/api/quiz/save-quiz-information/${id}`,
			payload
		);
		return data;
	} catch (error) {
		throw error;
	}
};
