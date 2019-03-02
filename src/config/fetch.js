const BaseUrl = 'https://easydoc.xyz/mock/46635364/36024048';
// const BaseUrl = 'http://172.20.10.12:8080';
// const BaseUrl = 'http://localhost:5007';

export function postData(url, data) {
	return fetch(BaseUrl + url, {
		body: JSON.stringify(data),
		cache: 'no-cache',
		credentials: 'include',
		headers: {
			'content-type': 'application/json'
		},
		method: 'POST',
		mode: 'cors',
		redirect: 'follow'
	}).then(response => response.json());
}

// export function postData(url, data) {
// 	return fetch(BaseUrl + url, {
// 		body: JSON.stringify(data),
// 		cache: 'no-cache',
// 		credentials: 'omit',
// 		headers: {
// 			'content-type': 'application/x-www-form-urlencoded'
// 		},
// 		method: 'POST',
// 		mode: 'cors',
// 		redirect: 'follow'
// 	}).then(response => response.json());
// }
