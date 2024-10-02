export default function getFullResponseFromAPI(success) {
	return new Promise((resolve, reject) => {
		success == true
		if (success) {
			resolve( { status: 200, body: 'Success'})
		} else {
			reject("The fake Api is not working currently")
		}
	});
}
