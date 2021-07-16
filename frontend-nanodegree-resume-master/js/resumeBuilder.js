/*
This is empty on purpose! Your code to build the resume will go here.
 */


var bio = {
   "name" : "Abhishek Nagre",
   "age" : 20,
   "role" : "Web Developer",
   "contacts" : {
   "mobile" : "6267532340",
   "email" : "abhishekpawarnagre@gmail.com",
   "twitter" : "@AbhishekNagre18",
   "location" : "Indore",
},
"welcomeMessage":"Welcome To Hello World",
"skills" : ["HTML","CSS","JS","CP","JAVA"],
"bioPic" : "images/Profile.jpg"
}



var formattedMobile = HTMLmobile.replace('%data%', bio.contacts
.mobile);
var formattedEmail = HTMLemail.replace('%data%', bio.contacts
.email);
var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts
.twitter);
var formattedGithub = HTMLgithub.replace('%data%', bio.contacts
.github);
var formattedLocation = HTMLlocation.replace('%data%', bio.contacts
.location);

$("#header").append(formattedMobile,formattedEmail,formattedTwitter,formattedGithub,formattedLocation);



var formattedbiopic = HTMLbioPic.replace("%data%",bio.bioPic);
$("#header").append(formattedbiopic);





var formattedwelcomeMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
$("#header").append(formattedwelcomeMessage);







if(bio.skills.length > 0){
   $("#header").append(HTMLskillsStart);
   for(var i=0;i<4;i++){
   var formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);
   $("#skills").append(formattedSkill);
/*
   var formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
   $("#skills").append(formattedSkill);

   var formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
   $("#skills").append(formattedSkill);

   var formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);
   $("#skills").append(formattedSkill);  */
}
}







/*
var formattedcontactGeneric = HTMLcontactGeneric.replace("%contact%",bio.contacts.email);
$("#header").prepend(formattedcontactGeneric);

var formattedmobail = HTMLmobail.replace("%data%",contacts.twitter);
$("#header").prepend(formattedmaobail);

var formattedemail = HTMLemail.replace("%data%",bio.email);
$("#header").prepend(formattedemail);

var formattedcontactGeneric = HTMLcontactGeneric.replace("%contact%",bio.contacts.mobail);
$("#header").prepend(formattedcontactGeneric);


*/

/*
var formattedmobail = HTMLheadermobail.replace("%data%",bio.mobail);
$("#header").prepend(formattedmobail);


var formattedemail = HTMLheaderemail.replace("%data%",bio.email);
$("#header").prepend(formattedemail);


var formattedtwitter = HTMLheadertwitter.replace("%data%",bio.twitter);
$("#header").prepend(formattedtwitter);


var formattedlocation = HTMLheaderlocation.replace("%data%",bio.location);
$("#header").prepend(formattedlocation);


var formattedwecomeMessage = HTMLheaderwelcomeMessage.replace("%data%",bio.welcomeMesssage);
$("#header").prepend(formattedwelcomeMessage);


var formattedemail = HTMLheaderemail.replace("%data%",bio.email);
$("#header").prepend(formattedemail);


var formattedemail = HTMLheaderemail.replace("%data%",bio.email);
$("#header").prepend(formattedemail);
*/




var formattedName = HTMLheaderName.replace("%data%", bio.name);

var role ="web Developer";
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


var education ={
 "schools" : [
    {
   "name" : " Govt. Exellance school Bichhua ",
   "degree" : "heigh school",
   "schoolMajor" : "Mathematics+Science",
   "dates" :2016,
   "location" : "Bichhua dis- Chhindwara m.p."
},
{
   "name" : " Govt. Exellance school Bichhua ",
   "degree" : "heigher-Secondary school",
   "schoolMajor" : "Mathematics+Biology",
   "dates" :2018,
   "location" : "Bichhua dis- Chhindwara m.p."
},
{   
   "name" : "IES IPS Academy Indore",
   "degree" : "Under Graduate",
   "schoolMajor" : "Computer Engineering", 
   "dates" : 2022,
   "location" : "Indore m.p."
}
 ],
 "onlineCourses" :[
   {
      "title":"webdevelopment with Java Script",
      "school":"courcera",
      "date":2020
 }
 ]
}


for(school in education.schools){
   $("#education").append(HTMLschoolStart);
   var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
   var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
   
   
   var formattedNameDegree = formattedName+formattedDegree;
   $(".education-entry:last").append(formattedNameDegree);
   
   
   var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
   $(".education-entry:last").append(formattedDates);
   
   
   var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
   $(".education-entry:last").append(formattedLocation);
   

   var formattedschoolMajor = HTMLschoolMajor.replace("%data%",education.schools[school].schoolMajor);
   $(".education-entry:last").append(formattedschoolMajor);
   
}






$(document).click(function(loc) {
   var x= loc.pageX;
   var y= loc.pageY;
   logClicks(x,y);
});





var work={
    "jobs":[
       {
          "employer":"Suruchi Treders Bichhua",
          "title" : "shopKeeper",
          "date" : "April to july 2018",
          "description" : "   Inspecting, labeling and placing cement begs and steel rodes and manege coustmers.",
          "location" : "Bichhua Chhindwara m.p. 480111"
       },
       {
         "employer":"Suruchi Treders Bichhua",
         "title" : "shopKeeper",
         "date" : "march 2020 to march 2021",
         "description" : "    My job is to understand coustmers requarnment and full fill them with give them right and good quality products and maneging cash and bank related work.",
         "location" : "Bichhua Chhindwara m.p. 480111"
       }
    ]
}
   


for(job in work.jobs){
   $("#workExperience").append(HTMLworkStart);
   var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
   var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
   
   
   var formattedEmployerTitle = formattedEmployer+formattedTitle;
   $(".work-entry:last").append(formattedEmployerTitle);
   
   
   var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].date);
   $(".work-entry:last").append(formattedDates);
   
   
   var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
   $(".work-entry:last").append(formattedDescription);

   var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
   $(".work-entry:last").prepend(formattedLocation);
}






var project ={
   "projects":[
      {
         "title": "wedding blog",
         "date" : "march 2020",
         "description" : "Indian Wedding culture : the vlog is describing about indian wedding and custom through web site or vlog.Purpose of this vlog to use differnt templates and view perts in vlog.It is simple HTML and CSS website through that i use many elements of HTML and more understand about HTML and CSS.I use most of HTML and CSS elements and uderstand and use it in depth.i comploted this project in 2 weeks and use VS Code to write code for it.",
         "images" : "images/Screenshot (197).jpg"
      },
      {
         "title": "Pertional resume",
         "date": "march 2021",
         "description" : "This is a website about me using HTML,CSS,JS and jQuary. I used different elements and selecters to make this project.",
         "images" : "images/Screenshot (199).png"
      }
   ]
}



for(pro in project.projects){
   $("#projects").append(HTMLprojectStart);
   var formattedprojectTitle = HTMLprojectTitle.replace("%data%",project.projects[pro].title);
   $(".project-entry:last").append(formattedprojectTitle);
 
   
   var formattedDates = HTMLschoolDates.replace("%data%",project.projects[pro].date);
   $(".project-entry:last").append(formattedDates);
   
   
   var formattedDescription = HTMLprojectDescription.replace("%data%",project.projects[pro].description);
   $(".project-entry:last").append(formattedDescription);
   

   var formattedprojectImage = HTMLprojectImage.replace("%data%",project.projects[pro].images);
   $(".project-entry:last").append(formattedprojectImage);
   
}


$("#mapDiv").append(googleMap);

//$("#name").append("ldfjaljfljaljfofjoisjfld");
//$("#main").append("Abhishek Nagre");
