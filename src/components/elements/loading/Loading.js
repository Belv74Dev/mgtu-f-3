import React from 'react';

import imgSpinner from './../../../assets/imgs/spinner.gif';

import './style.scss';

const Loading = ({ isLoading, clasz='', children }) => {
	return isLoading ?  
		<div className={`student-table__action-img ${clasz}`}>
			<img 
				className="student-table__action-edit"
				src={imgSpinner} 
				alt="Обновление" 
			/>
		</div>
		: children;
};

export default Loading;