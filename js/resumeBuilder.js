function renderResumeObject(obj,properties,renderProp){
	if (properties){
		properties.forEach(function(prop){
			renderProp(prop,obj);
		});
	}
};

var renderJob = function(prop,job){
	/*
	employer and title are 2 different properties but 
	are rendered in the same tag, so we check if both exist and 
	render them together 
	*/
	if(job.hasOwnProperty(prop)){
		if (prop === "employer" && job.hasOwnProperty("title")){
			var formattedJob = workProperties[prop].replace("%data%",job[prop]);
			formattedJob = formattedJob + workProperties["title"].replace("%data%",job["title"]);
			$(".work-entry:last").append(formattedJob);
		}
		else{
			var formattedJob = workProperties[prop].replace("%data%",job[prop]);
			$(".work-entry:last").append(formattedJob);
		}
	}
}

var renderImage = function(image,obj){
	var formattedImage = projectProperties[prop].replace("%data%",image);
	$(".project-entry:last").append(formattedImage);
}

var renderProject = function(prop,project){
	if(project.hasOwnProperty(prop)){
		if (prop === "images"){
			renderResumeObject(project,project[prop],renderImage);
		}
		else{
			var formattedProject = projectProperties[prop].replace("%data%",project[prop]);
			$(".project-entry:last").append(formattedProject);
		}
	}
}

var renderSkill = function(prop,obj){
	var formattedSkill = HTMLskills.replace("%data%",prop);
	$("#skills").append(formattedSkill);
}

var renderContactInfo = function(prop,contact){
	if(contact.hasOwnProperty(prop)){
		var formattedContact = contactMethods[prop].replace("%data%",contact[prop]);
		$("#topContacts").append(formattedContact);
		console.log("have contact");
	}
	else{
		var formattedContact = contactMethods["generic"].replace("%data%",contact[prop])
		formattedContact = formattedContact.replace("%contact%",prop);
		$("#topContacts").append(formattedContact);
	}
}

// projects.display = function(){
// 	projects.projects.forEach(function(project){
// 		$("#projects").append(HTMLprojectStart);
// 		var props = Object.keys(project);
// 		renderResumeObject(project,props,renderProject);
// 	});
// }

// Render Name and Role
formattedName = HTMLheaderName.replace("%data%",bio.name);
formattedRole = HTMLheaderRole.replace("%data%",bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

// // Render Contact Information
if (bio.contact){
	var methods = Object.keys(bio.contact);
	renderResumeObject(bio.contact,methods,renderContactInfo);
}

// Render bio photo
if (bio.pictureURL){
	formattedImg = HTMLbioPic.replace("%data%",bio.pictureURL);
	$("#header").append(formattedImg);
}

// Render bio Skills
if (bio.skills){
	$("#header").append(HTMLskillsStart);
	renderResumeObject(bio,bio.skills,renderSkill);
}

// // Render the internationalize button
// $("#header").append(internationalizeButton);

// // Render Jobs
// if (work.jobs){
// 	// Render Jobs
// 	// Ensure that job information is rendered in a specefic order
// 	// to have consistent formatting
// 	var workRenderOrder = ["employer","dates","location","description"]
// 	for (job in work.jobs){
// 		// Create a new .work-entry div element
// 		$("#workExperience").append(HTMLworkStart);
// 		var props = workRenderOrder;
// 		renderResumeObject(work.jobs[job],props,renderJob);
// 	}
// }

// // Render projects
// if (projects.projects){
// 	projects.display();
// }

var object = {
	"methods" 	: {
		"email" 	: "mscosti3@gmail.com",
		"mobile" 	: "(508) 415 0750",
		"github" 	: "github.com/mscosti"
	},
	"html"	: {"email" : "duuuur%data%"},
	"startTag" 	:  "#start",
	"entryTag"	: 	".entry:last"
};


var renderObject = function(resumeObject, objectToRender){
	console.log("entered renderer");
	console.log(objectToRender);
	$(resumeObject.startTag).append(resumeObject.html.newEntry);
	for (key in objectToRender){
		if (typeof objectToRender[key] === 'object'){
			console.log("object!");
			console.log(objectToRender);
			renderObject(resumeObject, objectToRender[key]);
		}
		else{
			console.log("content!")
			console.log(objectToRender[key]);
			renderContent(resumeObject,key,objectToRender[key]);
		}
	}
}

var renderContent = function(resumeObject,htmlKey, content){
	// console.log("yay");
	console.log(htmlKey)
	var formattedContent = resumeObject.html[htmlKey].replace("%data%",content);
	console.log(formattedContent);
	console.log(resumeObject.entryTag);
	$(resumeObject.entryTag).append(formattedContent);
}

work.display = function(){
	console.log(work.jobs);
	renderObject(work,work.jobs);
}

projects.display = function(){
	renderObject(projects,projects.projects);
}

work.display();
projects.display();
