const useRequest = () => {
	const _baseUrl = 'http://localhost:3010';

	const send = async (url, method, body) => {
		return await fetch(_baseUrl + url, {
			method,
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(body),
		})
			.then((res) => res.json())
			.then((res) => {
				// ! Задержка 2с
				return new Promise(resolve => {
					setTimeout(() => {
						resolve(res);
					}, 2000)
				})
				// return res;
			})
			.catch((error) => {
				console.log('error get data: ', error);
				return [];
			});
	};

	const getStudents = async () => {
		return await send('/students', 'GET');
	};

	const updateStudent = async (student) => {
		return await send(`/students/${student.id}`, 'PUT', student); 
	};

	const delStudent = async (id) => {
		return await send(`/students/${id}`, 'DELETE');
	};

	return { 
		getStudents, 
		updateStudent,
		delStudent, 
	};
};

export default useRequest;