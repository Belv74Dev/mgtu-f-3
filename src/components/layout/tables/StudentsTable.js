import React, { useState } from 'react';

import StudentsTableRow from './StudentsTableRow';
import SortUnit from '../../elements/sortUnit/SortUnit';

import './style.scss';

const StudentsTable = ({ students, groups, onUpdateStudent, onDelStudent }) => {
	const [sort, setSort] = useState(['', '']);

	const onSetSort = (field) => {
		setSort(sort => {
			if (field === sort[0]) {
				if (sort[1] === '') return [field, 'sort-down'];
				if (sort[1] === 'sort-down') return [field, 'sort-up'];
				else return [field, ''];
			}
			return [field, 'sort-down'];
		});
	} 

	const studentsRender = (students) => {
		return students.map((student) => 
			<StudentsTableRow 
				key={student.id} 
				student={student} 
				groups={groups}
				onUpdateStudent={onUpdateStudent}
				onDelStudent={onDelStudent}
			/>
		);
	};

	const studentSort = (students) => {
		if (sort[1] === 'sort-up') 
			return students.sort((a, b) => a[sort[0]].localeCompare(b[sort[0]]));
		if (sort[1] === 'sort-down') 
			return students.sort((a, b) => b[sort[0]].localeCompare(a[sort[0]]));
		return students;
	};

	const sortedStudents = studentSort(students);   
	const studentsView = studentsRender(sortedStudents);

	return (
		<table className="student-table">
			<thead>
				<tr className="student-table__row title-cails">
					<td 
						className="student-table__cail w-20"
						onClick={() => onSetSort('surname')}
					>
						<span>Фамилия</span>
						{sort[0] === 'surname' ? <SortUnit type={sort[1]} /> : null}
					</td>
					<td 
						className="student-table__cail w-20"
						onClick={() => onSetSort('firstname')}
					>
						<span>Имя</span>
						{sort[0] === 'firstname' ? <SortUnit type={sort[1]} /> : null}
					</td>
					<td 
						className="student-table__cail w-20"
						onClick={() => onSetSort('patronymic')}
					>
						<span>Отчество</span>
						{sort[0] === 'patronymic' ? <SortUnit type={sort[1]} /> : null}
					</td>
					<td 
						className="student-table__cail w-20"
						onClick={() => onSetSort('birthday')}
					>
						<span>Дата рождения</span>
						{sort[0] === 'birthday' ? <SortUnit type={sort[1]} /> : null}
					</td>
					<td 
						className="student-table__cail w-10"
						onClick={() => onSetSort('score')}
					>
						<span>Средний балл</span>
						{sort[0] === 'score' ? <SortUnit type={sort[1]} /> : null}
					</td>
					<td 
						className="student-table__cail w-10"
						onClick={() => onSetSort('group')}
					>
						<span>Группа</span>
						{sort[0] === 'group' ? <SortUnit type={sort[1]} /> : null}
					</td>
					<td className="student-table__cail action w-10">
						<span>Действия</span>
					</td>
				</tr>
			</thead>
			<tbody>
				{studentsView}
			</tbody>
		</table>
	);
};

export default StudentsTable;