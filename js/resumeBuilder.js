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

var work = {
    "jobs": [
        {
            "employer": "Constant Contact",
            "title": "Software Engineer",
            "dates": "Starting July 2015"
        },
        {
            "employer": "Lincoln Laboratories",
            "title": "Summer Intern / Student Co-Op",
            "dates": "June 2014 - October 2014"
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
console.log("hellooo");
// // Render bio photo 
formattedImg = HTMLbioPic.replace("%data%",bio.pictureURL);
$("#header").append(formattedImg);

if (bio.skills){
	$("#header").append(HTMLskillsStart);
	bio.skills.forEach(function(skill){
		formattedSkill = HTMLskills.replace("%data%",skill);
		$("#skills").append(formattedSkill);
	});
}

// if bio.skills

// // Render education
// $("#education").append(HTMLschoolStart);
// $("#education").append(HTMLschoolName.replace("%data%",education.school));
// $("#education").append(HTMLschoolDates.replace("%data%",education.years));
