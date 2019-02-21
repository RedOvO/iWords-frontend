const BaseUrl = 'https://easydoc.xyz/mock/28277352/36024048';

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
