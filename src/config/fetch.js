const BaseUrl = 'https://easydoc.xyz/mock/46635364/36024048';
// const BaseUrl = 'http://222.205.56.212:8080';

export function postData(url, data) {
	return fetch(BaseUrl + url, {
		body: JSON.stringify(data),
		cache: 'no-cache',
		credentials: 'omit',
		headers: {
			'content-type': 'application/x-www-form-urlencoded'
		},
		method: 'POST',
		mode: 'cors',
		redirect: 'follow'
	}).then(response => response.json());
}
