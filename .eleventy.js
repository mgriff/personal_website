require("dotenv").config();

module.exports = (function(eleventyConfig){
	/*
	 * Shortcodes
	 */
	
	
	/*
	 * Filters
	 */
	eleventyConfig.addFilter('lowercase', function(textString){
		return textString.toLowerCase();
	});
	
	/*
	 * Configuration settings  
	 */	
	eleventyConfig.setTemplateFormats(["liquid","css"]);
	
	return {
		dir: {
			input: "_input"
		}
	};
});