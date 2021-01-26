//JSON
ActiveCourses= {
  "Courses": [
	{
	  "semester": "Spring 2021",
	  "name": "115-D01",
	  "course_id": 4163,
	  "content_id": 509737
	},
	{
	  "semester": "Spring 2021",
	  "name": "150-D01",
	  "course_id": 4169,
	  "content_id": 509743
	},
	{
	  "semester": "Spring 2021",
	  "name": "248-D01",
	  "course_id": 4175,
	  "content_id": 509749
	},
	{
	  "semester": "Spring 2021",
	  "name": "260-D01",
	  "course_id": 4179,
	  "content_id": 509753
	}	
  	
  ]
};
HistoricalCourses= {
  "Courses": [  	
	{
	  "semester": "Fall 2020",
	  "name": "108-D01",
	  "course_id": 3640,
	  "content_id": 417385
	},
	{
	  "semester": "Fall 2020",
	  "name": "115-D01",
	  "course_id": 3641,
	  "content_id": 417386
	},
	{
	  "semester": "Fall 2020",		
	  "name": "115-D02",
	  "course_id": 3642,
	  "content_id": 417387
	},
	{
	  "semester": "Fall 2020",
	  "name": "245-D01",
	  "course_id": 3653,
	  "content_id": 417398
	},
	{
	  "semester": "Fall 2020",
	  "name": "255-D01",
	  "course_id": 3654,
	  "content_id": 417399
	},
	{
	  "semester": "Spring 2020",
	  "name": "150-D01",
	  "course_id": 3059,
	  "content_id": 374362
	}
  ]
 };
//start of menu bar
NewCode='<div class="dropdown" id="MDropDown"><span>Quick Links &nabla;</span><div class="dropdown-content"><div class="divTable bbDTable"><div class="divTableBody">';
//reset
NewCode += '<div class="divTableRow"><div class="divTableCellWide"><a href="https://worwic.blackboard.com/ultra/stream">Home</a></div><div class="divTableCell">&nbsp;</div><div class="divTableCell">&nbsp;</div><div class="divTableCell">&nbsp;</div><div class="divTableCell">&nbsp;</div><div class="divTableCell"><a href="javascript:DisableReloadDropdown();"><img src="https://resources.matice.com/images/power.png"/></a></div></div>';
//Begin Semester Active
NewCode += '<div class="divTableRow"><div class="divTableCellWide">' + ActiveCourses['Courses'][0]['semester']+ '</div></div>';
//Courses
acslim = ActiveCourses['Courses'];
for (i = 0; i < ActiveCourses['Courses'].length; i++) {
	NewCode += '<div class="divTableRow">    <div class="divTableCell dTC1">' + acslim[i]["name"] + '</div> <div class="divTableCell dTC1"><a href="https://worwic.blackboard.com/ultra/courses/_' + acslim[i]["course_id"] + '_1/cl/outline/"><img src="https://resources.matice.com/images/planner.png"/></a></div><div class="divTableCell"><a href="https://worwic.blackboard.com/webapps/blackboard/content/listContentEditable.jsp?content_id=_' + acslim[i]["content_id"] + '_1&course_id=_' + acslim[i]["course_id"] + '_1&mode=reset"><img src="https://resources.matice.com/images/content.png"/></a></div><div class="divTableCell"><a href="https://worwic.blackboard.com/webapps/blackboard/content/launchLink.jsp?course_id=_' + acslim[i]["course_id"] + '_1&tool_id=_1219_1&tool_type=TOOL&mode=cpview&mode=reset"><img src="https://resources.matice.com/images/announce.png"/></a></div><div class="divTableCell"><a href="https://worwic.blackboard.com/webapps/gradebook/do/instructor/enterGradeCenter?course_id=_' + acslim[i]["course_id"] + '_1&cvid=fullGC"><img src="https://resources.matice.com/images/gradebook.png"/></a></div><div class="divTableCell"><a href="https://worwic.blackboard.com/webapps/gradebook/do/instructor/viewNeedsGrading?course_id=_' + acslim[i]["course_id"] + '_1"><img src="https://resources.matice.com/images/newgrade.png"/></a></div></div>';
}
NewCode += '<div class="divTableRow"><div class="divTableCellWide">Historical</div></div>';
PriorSemester = 'Historical';
//Begin Semester Hiistorical
acslim=HistoricalCourses['Courses'];
for (i = 0; i < HistoricalCourses['Courses'].length; i++) {
	if (PriorSemester != acslim[i]['semester']) {
		NewCode += '<div class="divTableRow"><div class="divTableCellWide">' + acslim[i]['semester'] + '</div></div>';
		PriorSemester = acslim[i]['semester'];
	}
	NewCode += '<div class="divTableRow">    <div class="divTableCell dTC1">' + acslim[i]["name"] + '</div> <div class="divTableCell dTC1"><a href="https://worwic.blackboard.com/ultra/courses/_' + acslim[i]["course_id"] + '_1/cl/outline/"><img src="https://resources.matice.com/images/planner.png"/></a></div><div class="divTableCell"><a href="https://worwic.blackboard.com/webapps/blackboard/content/listContentEditable.jsp?content_id=_' + acslim[i]["content_id"] + '_1&course_id=_' + acslim[i]["course_id"] + '_1&mode=reset"><img src="https://resources.matice.com/images/content.png"/></a></div><div class="divTableCell"><a href="https://worwic.blackboard.com/webapps/blackboard/content/launchLink.jsp?course_id=_' + acslim[i]["course_id"] + '_1&tool_id=_1219_1&tool_type=TOOL&mode=cpview&mode=reset"><img src="https://resources.matice.com/images/announce.png"/></a></div><div class="divTableCell"><a href="https://worwic.blackboard.com/webapps/gradebook/do/instructor/enterGradeCenter?course_id=_' + acslim[i]["course_id"] + '_1&cvid=fullGC"><img src="https://resources.matice.com/images/gradebook.png"/></a></div><div class="divTableCell"><a href="https://worwic.blackboard.com/webapps/gradebook/do/instructor/viewNeedsGrading?course_id=_' + acslim[i]["course_id"] + '_1"><img src="https://resources.matice.com/images/newgrade.png"/></a></div></div>';
}
NewCode += '</div></div>';
const params = new URLSearchParams(window.location.search)
if (params.has('block')) {
	window.onkeypress = function(event) {
	   if (event.keyCode == 96) {
	   		document.getElementById("main-content").innerHTML += NewCode;
	   }
	}
} else {
	document.addEventListener('readystatechange', event => { 
	    if (event.target.readyState === "complete") {
	    	var myEle1 = document.getElementById("main-content");
		    if(myEle1){
		        document.getElementById("main-content").innerHTML += NewCode;
		    }
		    var myEle2 = document.getElementById("breadcrumbs");
		    if(myEle2){
		        document.getElementById("breadcrumbs").innerHTML += NewCode;
		    }
		    window.setTimeout(FixRows, 2000);
		    document.getElementById("pushNotify_true").value=true;
			document.getElementById("pushNotify_true").checked=true;
	    }
	});
	window.onkeypress = function(event) {
	   if (event.keyCode == 96) {
	      document.getElementById("main-content").innerHTML += NewCode;
	   }
	   if (event.keyCode == 126) {
	      FixRows();
	   }
	}
}
function DisableReloadDropdown() {
	var url = window.location.href;    
	if (url.indexOf('?') > -1){
	   url += '&block=1'
	}else{
	   url += '?block=1'
	}
	window.location.href = url;
}
function FixRows() {
	var myEle = document.getElementById("openRowEditing");
	    if(myEle){
			document.getElementById("openRowEditing").click();
			document.getElementById("numRows").value=50;
			document.getElementById("submitRowEditing").click();
	    }
}
function giveA(){
	var pp = document.getElementById('currentAttempt_pointsPossible').innerHTML.split("/").pop();
	document.getElementById('currentAttempt_grade').value=pp;
	document.getElementById('currentAttempt_submitButton').click();
}
function giveZero(){
	document.getElementById('currentAttempt_grade').value=0;
	document.getElementById('currentAttempt_submitButton').click();
}
document.addEventListener("DOMContentLoaded", function(){
	document.getElementById("currentAttempt_label").innerHTML='<div style="float:right;margin-right:10px;"><a style="color:#fff;background-color:green;padding:0px 2px;" href="javascript:giveA();">Give A</a><br><a style="margin-top:3px;background-color:red;padding:0px 2px;float:right;" href="javascript:giveZero();">Give 0</a></div>' + document.getElementById("currentAttempt_label").innerHTML ;
	setTimeout(shrinkGradeScreen, 1000)
	
});
function shrinkGradeScreen(){
	document.getElementById("helpPageTitle").style.display = "none";
	document.getElementById("pageTitleDiv").style.padding = "0px";
	document.getElementById("panelbutton2").style.display = "none";
	document.getElementById("actionbar").style.height = "40px";
	document.getElementsByClassName('user-navigator')[0].style.height = "45px";
	document.getElementById('anonymous_element_19').style.margin= "0";
	document.getElementById('anonymous_element_18').parentNode.appendChild(document.getElementsByClassName('user-navigator')[0]);
	document.getElementById('anonymous_element_18').parentNode.appendChild(document.getElementById('navStatusPanelButtons'));
	document.getElementById("pageTitleDiv").style.display = "none";
}