import { useState } from 'react';

const useFetch = (typePost) => {
	const [responseData, setResponseData] = useState({});

	const fetchData = (dataForm) => {
		console.log(dataForm, typePost);
		fetch(`http://localhost:8080/api/auth/${typePost}`, {
			method: 'POST',
			body: JSON.stringify(dataForm),
			headers: {
				'Content-Type': 'application/json; charset=UTF-8',
			},
		})
			.then((response) => response.json())
			.then((post) => {
				setResponseData({ ...post });
			})
			.catch((error) => console.log(error));
	};
	return { responseData, fetchData };
};

export default useFetch;
