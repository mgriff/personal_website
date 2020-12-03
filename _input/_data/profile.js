const contentful = require("contentful");
const client = contentful.createClient({
	space: process.env.CTFL_SPACE,
	accessToken: process.env.CTFL_ACCESSTOKEN
});

module.exports = function() {
	return client.getEntries({
		content_type: 'profile'
	})
	.then((response) => {
		return response.items[0].fields;
	})
	.catch(console.error);
};