import axios from 'axios';

// export const BaseUrl = 'https://easydoc.xyz/mock/46635364/36024048';
// export const BaseUrl = 'http://10.180.46.55:8080';
// export const BaseUrl = 'http://172.20.10.12:8080';
// export const BaseUrl = 'http://localhost:5007';
export const BaseUrl = 'http://222.205.56.212:8080';

export function postData(url, content) {
	return axios({
		method: 'post',
		url: BaseUrl.concat(url),
		dataType: 'json',
		data: content,
		withCredentials: true,
		headers: {
			'Content-Type': 'application/json;charset=UTF-8'
		}
	}).then(response => response);
}
