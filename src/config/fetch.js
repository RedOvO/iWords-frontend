// const BaseUrl = 'https://easydoc.xyz/mock/46635364/36024048';
const BaseUrl = 'http://172.20.10.12:8080';

export function postData(url, data) {
	return fetch(BaseUrl + url, {
		body: JSON.stringify(data),
		cache: 'no-cache',
		credentials: 'omit',
		headers: {
			'content-type': 'application/json'
		},
		method: 'POST',
		mode: 'no-cors',
		redirect: 'follow'
	});
}
