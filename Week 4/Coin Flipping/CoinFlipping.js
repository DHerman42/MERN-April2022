const tossCoin = () => {
	return Math.random() > 0.5 ? "heads" : "tails";
};

const fiveHeadsSync = () => {
	let headsCount = 0;
	let attempts = 0;
	while (headsCount < 5) {
		attempts++;
		let result = tossCoin();
		console.log(`${result} was flipped`);
		if (result === "heads") {
			headsCount++;
		} else {
			headsCount = 0;
		}
	}
	return `It took ${attempts} tries to flip five "heads"`;
};

const fiveHeads = () => {
	return new Promise((resolve, reject) => {
		let headsCount = 0;
		let attempts = 0;
		let maxAttempts = 100;

		while (headsCount < 5 && attempts <= maxAttempts) {
			attempts++;
			let result = tossCoin();
			console.log(`${result} was flipped`);
			if (result === "heads") {
				headsCount++;
			} else {
				headsCount = 0;
			}
		}
		if (attempts <= maxAttempts) {
			resolve(`It took ${attempts} tries to flip five "heads"`);
		} else {
			reject(`Attempts have exceded ${maxAttempts} flips.`);
		}
	});
};

fiveHeads()
	.then((res) => console.log(res))
	.catch((err) => console.log(err));
