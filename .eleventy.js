require("dotenv").config();

module.exports = (function(eleventyConfig){
	eleventyConfig.addShortcode('lowercase', function(textString){
		return textString.toLowerCase();
	});
	
	return {
		dir: {
			input: "_input",
			templateFormats: ["liquid"]
		}
	};
});