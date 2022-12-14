import React, { useState } from 'react';

import Options from '../../elements/options/Options';
import Loading from '../../elements/loading/Loading';

import imgSave from './../../../assets/imgs/save.svg'; 
import imgDel from './../../../assets/imgs/del.svg';

const StudentsTableRow = (
	{ 
		student, 
		groups, 
		onUpdateStudent, 
		onDelStudent 
	}
) => {
	const [surname, setSurname] = useState(student.surname);
	const [firstname, setFirstname] = useState(student.firstname);
	const [patronymic, setPatronymic] = useState(student.patronymic);
	const [birthday, setBirthday] = useState(student.birthday);
	const [score, setScore] = useState(student.score);
	const [group, setGroup] = useState(student.group);

	const [isUpdating, setIsUpdating] = useState(false);
	const [isDeliting, setDeliting] = useState(false);

	const onStartUpdateStudent = () => {
		if (!isDeliting) {
			setIsUpdating(true);
			onUpdateStudent({
				id: student.id, 
				surname, 
				firstname, 
				patronymic, 
				birthday, 
				score, 
				group 
			}).then(() => setIsUpdating(false));
		}
	};

	const onStartDelStudent = () => {
		if (!isUpdating) {
			setDeliting(true);
			onDelStudent(student.id)
				.then(() => setDeliting(false));
		}
	};

	return (
		<tr className="student-table__row tr-data">
			<td className="student-table__cail">
				<input
					className="student-table__input"
					type="text"
					value={surname}
					onChange={(e) => setSurname(e.target.value)}
				/>
			</td>
			<td className="student-table__cail">
				<input
					className="student-table__input"
					type="text"
					value={firstname}
					onChange={(e) => setFirstname(e.target.value)}
				/>
			</td>
			<td className="student-table__cail">
				<input
					className="student-table__input"
					type="text"
					value={patronymic}
					onChange={(e) => setPatronymic(e.target.value)}
				/>
			</td>
			<td className="student-table__cail">
				<input
					className="student-table__input"
					type="date"
					value={birthday}
					onChange={(e) => setBirthday(e.target.value)}
				/>
			</td>
			<td className="student-table__cail">
				<input
					className="student-table__input"
					type="number"
					value={score}
					onChange={(e) => setScore(e.target.value)}
				/>
			</td>
			<td className="student-table__cail">
				<select
					className="student-table__input"
					value={group}
					onChange={(e) => setGroup(e.target.value)}
				>
					<Options items={groups} />
				</select>
			</td>
			<td className="student-table__cail student-table__action">
				<Loading isLoading={isUpdating}>
					<div 
						className="student-table__action-img ok" 
						onClick={onStartUpdateStudent}
					>
						<img 
							className="student-table__action-edit" 
							src={imgSave} 
							alt="Сохранить" 
						/>
					</div>
				</Loading>
				<Loading isLoading={isDeliting}>
					<div 
						className="student-table__action-img del" 
						onClick={onStartDelStudent}
					>
						<img 
							className="student-table__action-edit" 
							src={imgDel}
							alt="Удалить" 
						/>
					</div>
				</Loading>
				
			</td>
		</tr>
	);
};

export default StudentsTableRow;