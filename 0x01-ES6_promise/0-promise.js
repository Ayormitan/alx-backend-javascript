export default function getResponseFromAPI() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const success = true;
			if (success) {
				resolve("Data from API");
			} else {
				reject("Error while fetching data");
			}
		}, 1000);
	});
}
