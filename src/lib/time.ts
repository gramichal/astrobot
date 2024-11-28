module.exports.getTimeString = function getTimeString(seconds: number): string {
	seconds = Math.round(seconds);
	let minutes: number = 0;
	let resultString: string = `${seconds} ${getTimeName('sekund', seconds)}`;
	
	if (seconds >= 60) {
		minutes = Math.floor(seconds / 60);
		seconds = Math.round(seconds % 60);
		resultString = `${minutes} ${getTimeName('minut', minutes)} i ${seconds} ${getTimeName('sekund', seconds)}`;
	}
	return resultString;
}

function getTimeName(word: string, time: number) {
	if (time === 1) {
		return `${word}a`;
	}

	if (time < 10 || time > 20) {
		if ([2, 3, 4].includes(+(time.toString().slice(-1)))) {
			return `${word}y`;
		}
	}

	return word;
}