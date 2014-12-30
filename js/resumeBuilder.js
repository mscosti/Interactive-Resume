function renderResumeObject(obj,properties,renderProp){
	properties.forEach(function(prop){
		if(obj.hasOwnProperty(prop)){
			renderProp(prop,obj);
		}
	});
}

var renderJob = function(prop,job){
	/*
	employer and title are 2 different properties but 
	are rendered in the same tag, so we check if both exist and 
	render them together 
	*/
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

// Render Name and Role
formattedName = HTMLheaderName.replace("%data%",bio.name);
formattedRole = HTMLheaderRole.replace("%data%",bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

// // Render Contact Information
if (bio.contact){
	var methods = Object.keys(bio.contact);
	methods.forEach(function(method){
		if(contactMethods.hasOwnProperty(method)){
			var formattedContact = contactMethods[method].replace("%data%",bio.contact[method]);
			$("#topContacts").append(formattedContact);
			console.log("have contact");
		}
		else{
			var formattedContact = contactMethods["generic"].replace("%data%",bio.contact[method])
			formattedContact = formattedContact.replace("%contact%",method);
			$("#topContacts").append(formattedContact);
		}
	});
}

// Render bio photo
if (bio.pictureURL){
	formattedImg = HTMLbioPic.replace("%data%",bio.pictureURL);
	$("#header").append(formattedImg);
}

// Render bio Skills
if (bio.skills){
	$("#header").append(HTMLskillsStart);
	bio.skills.forEach(function(skill){
		formattedSkill = HTMLskills.replace("%data%",skill);
		$("#skills").append(formattedSkill);
	});
}

// Render Jobs
// Ensure that job information is rendered in a specefic order
// to have consistent formatting
var workRenderOrder = ["employer","dates","location","description"]

if (work.jobs){
	for (job in work.jobs){
		// Create a new .work-entry div element
		$("#workExperience").append(HTMLworkStart);
		var props = workRenderOrder;
		renderResumeObject(work.jobs[job],props,renderJob);
	}
}



// if bio.skills

// // Render education
// $("#education").append(HTMLschoolStart);
// $("#education").append(HTMLschoolName.replace("%data%",education.school));
// $("#education").append(HTMLschoolDates.replace("%data%",education.years));
