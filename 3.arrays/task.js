function compareArrays(arr1, arr2) {
	return arr1.length === arr2.length && arr1.every((el, index) => el === arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {

	const filtr = users.filter(user => user.gender === gender);

	if (filtr.length === 0) return 0;

	const ageFilter = filtr.reduce((acc, user) => acc + user.age, 0);

	const result = ageFilter / filtr.length;

	return result;
}