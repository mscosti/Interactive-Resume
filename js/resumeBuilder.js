// Formatting for Header and Bio information
var name = "Matthew Costi";
var role = "Software Engineer";
var email = "mscosti3@gmail.com";
var skills = ["Python", "Being Awesome"];

var contact = {
	"email" : "mscosti3@gmail.com",
	"mobile" : "(508) 415 0750"
	"github" : "github.com/mscosti"
}
var bio = {
	"name" : name,
	"role" : role,
	"contact" : contact,
	"pictureURL" : "images/me.jpg",
	"skills" : skills,
	"welcome-msg" : "Matt Costi: Software extraordinare"};


// var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
// var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>';
// var HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>';
// var HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
// var HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>';
// var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
// var HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>';

// var HTMLbioPic = '<img src="%data%" class="biopic">';
// var HTMLWelcomeMsg = '<span class="welcome-message">%data%</span>';

// var HTMLskillsStart = '<h3 id="skillsH3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>';
// var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

formattedName = HTMLheaderName.replace("%data%",bio.name);
formattedRole = HTMLheaderRole.replace("%data%",bio.role);
formattedEmail = HTMLemail.replace("%data%",bio.contact.email);
formattedImg = HTMLbioPic.replace("%data%",bio.pictureURL);
formattedSkills = HTMLskills.replace("%data%",bio.skills.join(", "));

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#header").append(formattedEmail);
$("#header").append(formattedImg);
$("#header").append(HTMLskillsStart);
$("#header").append(formattedSkills);
