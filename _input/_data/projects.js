var { GraphQLClient } = require('graphql-request');
const client = new GraphQLClient("https://api.github.com/graphql", {
	headers: {
		'Authorization':'Bearer '+process.env.GITHUB_PAT
	}
});

const fm = require('front-matter');


module.exports = async function () {
	
	const query = `
	query {
		viewer {
			login
			repositories(first:50) {
				nodes {	
					id
					name
					description
					viewerHasStarred
					updatedAt
					createdAt
					isPrivate
					pushedAt
					url
					object(expression:"master:README.md") {
						... on Blob {
							text	
						}		
					}
					languages(first:10) {
						totalCount
						totalSize
						edges {
							size
							node {
								id
								name
								color
							}
						}
					}	
				}
			}
		}
	}`;
	
	// object(expression:"master:README.md") {
	// 	  ... on Blob {
	// 	  text
	// 	}
		
	const data = await client.request(query);
			
	var projects = [];
	
	for(project of data.viewer.repositories.nodes) {
		
		/* Only show projects that I have chosen 
		 *  to show on the website i.e starred
		 */
		if( project.viewerHasStarred ) {
			
			/*
			 * Pull out the languages to simplify the data structure
			 */
			var languageArray = [];
						
			for(language of project.languages.edges) {
				var tempLang = language.node;
				tempLang.percentage = (language.size / project.languages.totalSize)*100;
				
				languageArray.push(tempLang);
			}
			
			project.languages =  languageArray;
			project.languageSize = project.languages.languageSize;
			
			// Set the date for sorting
			project.date = project.pushedAt; //.toString().split('T')[0];
			
			/*
			 *  Pull out the Front matter from the README file (if it exists
			 */
			if(project.object != null) {
				const frontMatter = fm(project.object.text);
								
				project.name = frontMatter.attributes.name != null ? frontMatter.attributes.name : project.name;
				project.description = frontMatter.attributes.description != null ? frontMatter.attributes.description : project.description;
				
				//Override the URL if present in the front matter
				if( frontMatter.attributes.url != null ) {
					project.url = frontMatter.attributes.url;
					project.displayUrl = true;
				}
			} 
			
			projects.push(project);
		}
	}
	
	projects.sort((a,b) => {
		console.log("a:"+a.date);
		console.log("b:"+b.date);
		console.log(a.date < b.date ? 1 : -1);

		return a.date < b.date ? 1 : -1;
	});
	
	return projects;

}