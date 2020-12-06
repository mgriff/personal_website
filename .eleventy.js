require("dotenv").config();

const dateformat = require('dateformat');

module.exports = (function(eleventyConfig){
	/*
	 * Shortcodes
	 */
	 eleventyConfig.addShortcode('percentChart', function(data) {
		const height = 10;
		const width = 300;
		
		var svgImage = "<svg width='"+width+"' height='"+height+"' rx='20' ry='20'>";
		
		var offset = 0;
		
		for( item of data ) {
			var tempWidth = (item.percentage/100)*width;
			
			svgImage += `<rect x="`+offset+`" y="0" width="`+tempWidth+`" height="`+height+`" style="fill:`+item.color+`;" />`
			
			offset += tempWidth;
		}	
			// 	<rect x="0" y="0" width="150" height="10"
			// 	  style="fill:red;" />	
			// 	<rect x="150" y="0" width="150" height="10"
			// 	  style="fill:blue;" />  
			// 
		 
		 svgImage += "</svg>";
		 
		 return svgImage;
	});
	
	/*
	 * Filters
	 */
	eleventyConfig.addFilter('lowercase', function(textString){
		return textString.toLowerCase();
	});
	
	eleventyConfig.addFilter('prettyPercent', function (percentage) {
		return percentage.toFixed(0) + "%";
	});
	
	eleventyConfig.addFilter('prettyDate', function(date){
		return dateformat(new Date(date));
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