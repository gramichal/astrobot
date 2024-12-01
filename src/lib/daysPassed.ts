module.exports.daysPassed = function daysPassed(dt: Date): number {
	// Create a copy of the provided date using getTime() method to avoid modifying the original date
	const current: Date = new Date(dt.getTime());
	// Create a new Date object representing January 1st of the same year as the provided date
	const previous: Date = new Date(dt.getFullYear(), 0, 1);
  
	// Calculate the difference in milliseconds between the provided date and January 1st
	// Add 1 to consider the current date itself
	// Divide by the number of milliseconds in a day (86400000) to convert milliseconds to days
	// Round up to the nearest whole number using Math.ceil()
	return Math.ceil((current.getTime() - previous.getTime() + 1) / 86400000);
  }