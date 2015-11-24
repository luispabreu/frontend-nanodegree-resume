$("#main").append("Luis Abreu")

/*
This is empty on purpose! Your code to build the resume will go here.
 */

 var name ="Luis Perez Abreu";
 var role ="FrontPage Developer";

 var awesomeThoughts = "I am luis and I am awesome";
 console.log(awesomeThoughts);
 
 var funThoughts = awesomeThoughts.replace("awesome","Fun");
 console.log(funThoughts);

 $("#main").append(funThoughts);

 var formattedName = HTMLheaderName.replace("%data%",name);
 var formattedRole = HTMLheaderRole.replace("%data%",role);

 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);
