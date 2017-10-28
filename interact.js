var taglines = 
[
"Pseudovegan",
"Pug x German Shepherd mix owner",
"Nomadic Torontonian",
"Board game enthusiast",
"Aspiring film buff",
"Logophile",
"Murakami fan",
"Minimalist in training",
"Generalist",
"Lover of lavender",
"Adrenaline junkie",
"Avid advocate of alliteration",
"Amateur photographer",
"Design enthusiast",
"3rd year Cognitive Systems student at UBC"
];

function getNewTagLine(){
	debugger;
	var newLine = taglines[Math.floor(Math.random() * taglines.length)]; // get random tagline from the array
	console.log(newLine);
	if ($("#tagline").text() == newLine){
		console.log("repeat - need another one");
		getNewTagLine();
	}
	console.log("this is indeed a new tagline :"+newLine);
	return newLine;
}

$("#more").hover(function(){
	$(this).toggleClass("hovered");
});

$("#more").click(function(){
	console.log("clicked tagline");
	$("#tagline").fadeOut(500, function(){
		var newTag = getNewTagLine();
		console.log("displaying: "+newTag);
		$("#tagline").text(newTag);
	}).fadeIn();

});