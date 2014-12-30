function renderResumeObject(obj,properties,renderProp){
	properties.forEach(function(prop){
		renderProp(prop,obj);
	});
}

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

var renderSkills = function(prop,obj){
	formattedSkill = HTMLskills.replace("%data%",prop);
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
	renderResumeObject(bio,bio.skills,renderSkills);
}

// Render Jobs
if (work.jobs){
	// Render Jobs
	// Ensure that job information is rendered in a specefic order
	// to have consistent formatting
	var workRenderOrder = ["employer","dates","location","description"]
	for (job in work.jobs){
		// Create a new .work-entry div element
		$("#workExperience").append(HTMLworkStart);
		var props = workRenderOrder;
		renderResumeObject(work.jobs[job],props,renderJob);
	}
}