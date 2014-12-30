// Formatting for Header and Bio information
var skills = ["Python", "Being Awesome"];


var contact = {
	"email" 	: "mscosti3@gmail.com",
	"mobile" 	: "(508) 415 0750",
	"github" 	: "github.com/mscosti"
};

var bio = {
	"name" 		: "Matthew Costi",
	"role" 		: "Software Engineer",
	"contact" 	: contact,
	"pictureURL": "images/me.jpg",
	"skills" 	: skills,
	"welcomeMsg": "Matt Costi: Software extraordinare"
};

var education = {
    "schools": [
        {
            "schoolName": "Worcester Polytechnic Institute",
            "degree": "BS",
            "majors": [
                "Computer Science",
                "Robotics Engineering"
            ],
            "years": "2011 - 2015"
        }
    ]
};

// All properties are neccessary for formatting. If you don't want to 
// give a value for a property, use empty string
var work = {
    "jobs": [
        {
            "employer": "Constant Contact",
            "title": "Software Engineer",
            "dates": "Starting July 2015",
            "location" : "Waltham, MA",
            "description" : ""
        },
        {
            "employer": "Lincoln Laboratories",
            "title": "Summer Intern  Student Co-Op",
            "dates": "June 2014  October 2014",
            "location" : "Lexington, MA",
            "description" : ""
        }
    ]
};

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
		console.log(work.jobs[job]);
		$("#workExperience").append(HTMLworkStart);
		var props = workRenderOrder;
		props.forEach(function(prop){
			if(work.jobs[job].hasOwnProperty(prop)){
				/*
				employer and title are 2 different properties but 
				are rendered in the same tag, so we check if both exist and 
				render them together 
				*/
				console.log(prop);
				if (prop === "employer" && work.jobs[job].hasOwnProperty("title")){
					var formattedJob = workProperties[prop].replace("%data%",work.jobs[job][prop]);
					formattedJob = formattedJob + workProperties["title"].replace("%data%",work.jobs[job]["title"]);
					console.log(formattedJob);
					$(".work-entry:last").append(formattedJob);
				}
				else{
					var formattedJob = workProperties[prop].replace("%data%",work.jobs[job][prop]);
					console.log(formattedJob);
					$(".work-entry:last").append(formattedJob);
				}
			}
		});
	}
}



// if bio.skills

// // Render education
// $("#education").append(HTMLschoolStart);
// $("#education").append(HTMLschoolName.replace("%data%",education.school));
// $("#education").append(HTMLschoolDates.replace("%data%",education.years));
