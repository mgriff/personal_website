var { GraphQLClient } = require('graphql-request');
const client = new GraphQLClient("https://api.github.com/graphql", {
	headers: {
		'Authorization':'Bearer '+process.env.GITHUB_PAT
	}
});


module.exports = async function () {
	
	const query = `
	query {
		viewer {
			login
			repositories(first:50) {
				edges {
					node {
						id
						name
						description
						viewerHasStarred
						updatedAt
						createdAt
						isPrivate
						pushedAt
						url
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
		}
	}`;
	
	// object(expression:"master:README.md") {
	// 	  ... on Blob {
	// 	  text
	// 	}
		
	const data = await client.request(query);
		
	var projects = [];
	
	for(project of data.viewer.repositories.edges) {
		if( project.node.viewerHasStarred ) {
			
			var languageArray = [];
						
			for(language of project.node.languages.edges) {
				var tempLang = language.node;
				tempLang.percentage = (language.size / project.node.languages.totalSize)*100;
				
				languageArray.push(tempLang);
			}
			
			project.node.languages =  languageArray;
			project.node.languageSize = project.node.languages.languageSize;
			
			project.node.date = project.node.pushedAt.toString().split('T')[0];
			
		//	project.node.projectDescription = project.node.object.text;
			
			projects.push(project.node);
			
		}
	}
	
	projects.sort((a,b) => {
		return a.date < b.date;
	});
	
	return projects;

}