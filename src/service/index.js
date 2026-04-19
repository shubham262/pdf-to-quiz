const { default: axios } = require("axios");

const api = axios.create({
	baseURL: "http://localhost:3001",
	headers: {
		"Content-type": "application/json",
	},
	withCredentials: true,
});

export default api;
