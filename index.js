const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// POST request
app.post('/test', (req, res) => {
	const body = req.body;
	const string_to_cut = body.string_to_cut;

	// call helper function
	const return_string = cutStrings(string_to_cut);

	res.send(return_string);
});

// Helper function that cuts every third character of input string and adds to
// output array.
cutStrings = (string_to_cut) => {
	// check whether or not input is a string
	if (typeof(string_to_cut) === "string") {
		// add each character from input string to container array.
		const stringContainer = string_to_cut.split('');
		const cutStringContainer = [];

		// iterate over container array, add every third character to output
		// array
		for (let i = 0; i < stringContainer.length; i++) {
			const pointer = i + 1;

			if (pointer % 3 === 0 && i !== 0) {
				cutStringContainer.push(stringContainer[i]);
			}
		}

		// build JSON object
		let return_string = {};
		return_string["return_string"] = cutStringContainer.join('');

		return return_string;
	}

	return "Input is not a string.";
}

app.listen(3000, () => {
	console.log('App listening on port 3000!');
});
