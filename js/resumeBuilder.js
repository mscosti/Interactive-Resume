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


// // Render Name and Role
// formattedName = HTMLheaderName.replace("%data%",bio.name);
// formattedRole = HTMLheaderRole.replace("%data%",bio.role);
// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName);

// // Render Contact Information
// formattedEmail = HTMLemail.replace("%data%",bio.contact.email);
// $("#header").append(formattedEmail);

// // Render bio photo 
// formattedImg = HTMLbioPic.replace("%data%",bio.pictureURL);
// $("#header").append(formattedImg);

// // Render skills
// formattedSkills = HTMLskills.replace("%data%",bio.skills.join(", "));
// $("#header").append(HTMLskillsStart);
// $("#header").append(formattedSkills);

// // Render education
// $("#education").append(HTMLschoolStart);
// $("#education").append(HTMLschoolName.replace("%data%",education.school));
// $("#education").append(HTMLschoolDates.replace("%data%",education.years));
