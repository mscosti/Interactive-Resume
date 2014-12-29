// var awesomeThoughts = "My name is Matt, and I am AWESOME"
// var funThoughts = awesomeThoughts.replace("AWESOME","FUN")

// $("#main").append(funThoughts)

// var HTMLheaderName = '<h1 id="name">%data%</h1>';
// var HTMLheaderRole = '<span>%data%</span><hr/>'
var name = "Matthew Costi";
var role = "Software Engineer"

formattedName = HTMLheaderName.replace("%data%",name);
formattedRole = HTMLheaderRole.replace("%data%",role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
