import axios, { Method, AxiosRequestConfig } from "axios";

import { store } from "app-redux";
import { HOST } from "config/api";

export type ErrorDescription = Error & {
	errors: { [key: string]: Array<string> };
};

export default function request<T>(method: Method, uri: string, data?: any) {
	const { access_token } = store.getState().identifier;

	const headers = {};

	// if (access_token) headers["X-Access-Token"] = access_token;
	// if (team_id) headers["X-Team-Id"] = team_id;

	const config: AxiosRequestConfig = {
		method,
		headers,
		url: HOST + uri,
	};
	if (method == "GET" || method == "get") config.params = data;
	else config.data = data;

	return axios
		.request(config)
		.then((res) => {
			console.log(res);
			if (res && res.data) return res.data as T;
			throw new Error("Typed Error");
		})
		.catch((err) => {
			let response = err.response;
			if (response) {
				const { message, errors } = response.data;
				const error: ErrorDescription = {
					message,
					errors,
					name: "Error",
				};
				throw error;
			}
			throw err;
		});
}
