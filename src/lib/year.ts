module.exports.getYearString = function getYearString(year: number): string {
	if (year === 1) {
		return `rok`;
	}

	if ([2, 3, 4].includes(+(year.toString().slice(-1)))) {
		return `${year} lata`;
	}

	return `${year} lat`;
}