const useFilter = (students) => {
	let arr = students;

	const strFilter = (field, target) => {
		arr = arr.filter(item => 
			item[field].toLowerCase().indexOf(target.toLowerCase()) !== -1
		);
	};

	const numFilter = (field, target, type) => {
		if (type === 'more') arr = arr.filter(item => +item[field] >= +target);
		else if (type === 'less') arr = arr.filter(item => +item[field] <= +target);
	};

	const dataFilter = (field, target) => {
		arr = arr.filter(item => item[field] === target);
	};

	const getFilterArr = () => [...arr];

	return { strFilter, numFilter, dataFilter, getFilterArr };
};

export default useFilter;