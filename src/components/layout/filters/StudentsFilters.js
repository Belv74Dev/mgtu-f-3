import React, { useState, useEffect } from 'react';

import useFilter from './../../../servises/filtersServise';

import Options from '../../elements/options/Options';

import './style.scss';

const StudentsFilters = ({ students, groups, setFilterStudents }) => {
	const [surnameFilter, setSurnameFilter] = useState('');
	const [firstnameFilter, setFirstnameFilter] = useState('');
	const [patronymicFilter, setPatronymicFilter] = useState('');
	const [birthdayFilter, setBirthdayFilter] = useState('');
	const [minScoreFilter, setMinScoreFilter] = useState('');
	const [maxScoreFilter, setMaxScoreFilter] = useState('');
	const [groupFilter, setGroupFilter] = useState('null');

	useEffect(() => {
		handlerFilter();
	}, [students]);

	const { 
		strFilter, 
		numFilter, 
		dataFilter, 
		getFilterArr 
	} = useFilter([...students]);

	const handlerFilter = () => {
		if (surnameFilter !== '') strFilter('surname', surnameFilter);
		if (firstnameFilter !== '') strFilter('firstname', firstnameFilter);
		if (patronymicFilter !== '') strFilter('patronymic', patronymicFilter);
		if (birthdayFilter !== '') dataFilter('birthday', birthdayFilter);
		if (minScoreFilter !== '') numFilter('score', minScoreFilter, 'more');
		if (maxScoreFilter !== '') numFilter('score', maxScoreFilter, 'less');
		if (groupFilter !== 'null') strFilter('group', groupFilter);

		const filterStudents = getFilterArr(); 
		setFilterStudents(filterStudents);
	};

	return (
		<form 
			className="filter-form"
			onSubmit={(e) => {
				e.preventDefault();
				handlerFilter();
			}}
		>
			<div className="filter-form__row">
				<div className="filter-form__left">
					<div className="filter-form__block">
						<span className="filter-form__label">Фамилия</span>
						<input 
							className="filter-form__input" 
							type="text" 
							value={surnameFilter}
							onChange={(e) => setSurnameFilter(e.target.value)}
						/>
					</div>
					<div className="filter-form__block">
						<span className="filter-form__label">Имя</span>
						<input 
							className="filter-form__input" 
							type="text" 
							value={firstnameFilter}
							onChange={(e) => setFirstnameFilter(e.target.value)}
						/>
					</div>
					<div className="filter-form__block">
						<span className="filter-form__label">Отчество</span>
						<input 
							className="filter-form__input" 
							type="text" 
							value={patronymicFilter}
							onChange={(e) => setPatronymicFilter(e.target.value)}
						/>
					</div>
				</div>
				<div className="filter-form__right">
					<div className="filter-form__block">
						<span className="filter-form__label">Дата рождения</span>
						<input 
							className="filter-form__input" 
							type="date" 
							value={birthdayFilter}
							onChange={(e) => setBirthdayFilter(e.target.value)}
						/>
					</div>
					<div className="filter-form__block filter-form__row-min">
						<span className="filter-form__text">Средний балл</span>
						<div className="filter-form__average-score">
							<div className="filter-form__block-min">
								<span className="filter-form__label m">От</span>
								<input 
									className="filter-form__input" 
									type="number" 
									value={minScoreFilter}
									onChange={(e) => setMinScoreFilter(e.target.value)}
								/>
							</div>
							<div className="filter-form__block-min">
								<span className="filter-form__label m">До</span>
								<input 
									className="filter-form__input" 
									type="number" 
									value={maxScoreFilter}
									onChange={(e) => setMaxScoreFilter(e.target.value)}
								/>
							</div>
						</div>
					</div>
					<div className="filter-form__block">
						<span className="filter-form__label">Группа</span>
						<select 
							className="filter-form__input"
							value={groupFilter}
							onChange={(e) => setGroupFilter(e.target.value)}
						>
							<option value="null">-</option>
							<Options items={groups} />
						</select>
					</div>
				</div>
			</div>
			<button className="filter-form__btn">Искать</button>
		</form>
	);
};

export default StudentsFilters;