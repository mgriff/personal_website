require("dotenv").config();

module.exports = (function(eleventyConfig){
	
	
	return {
		dir: {
			input: "_input",
			templateFormats: ["liquid"]
		}
	};
});