import React, { useEffect, useState } from 'react';

import useRequest from './../../servises/requestServise';

import Loading from './../elements/loading/Loading';
import StudentsFilters from '../layout/filters/StudentsFilters';
import StudentsTable from '../layout/tables/StudentsTable';

const App = () => {
	const [isLoading, setIsLoding] = useState(true);
	const [students, setStudents] = useState([]);
	const [groups, setGroups] = useState([]);
	
	const [filterStudents, setFilterStudents] = useState([]);

	const { getStudents, updateStudent, delStudent } = useRequest();

	useEffect(() => {
		getStudents()
			.then((res) => {
				setGroups([...new Set(res.map((student) => student.group))].sort());
				setStudents([...res]);
				setIsLoding(false);
			})
	}, []);

	const onUpdateStudent = async (student) => {
		await updateStudent(student);
	};

	const onDelStudent = async (id) => {
		await delStudent(id)
			.then(() => 
				setStudents(students => students.filter(item => item.id !== id))
			);
	};

	return (
		<div>
			<h1>Таблица студентов</h1>
			<Loading isLoading={isLoading} clasz={'students'}>
				<StudentsFilters 
					students={students} 
					groups={groups} 
					setFilterStudents={setFilterStudents}
				/>
				<StudentsTable 
					students={filterStudents} 
					groups={groups}
					onUpdateStudent={onUpdateStudent}
					onDelStudent={onDelStudent}
				/>
			</Loading>
		</div>
	);
};

export default App;