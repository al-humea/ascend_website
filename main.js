let rules;
let circles;
document.addEventListener("DOMContentLoaded", function() {
	rules = Array.from(document.getElementsByClassName("rules"));
	circles = Array.from(document.getElementsByClassName("circle"));
	showmeme(0);
});

function showmeme(i){
	rules.forEach(function(rule, j){
		if (i == j)
			rule.style.visibility = "visible";
		else
			rule.style.visibility = "hidden";
	});
	circles.forEach(function(circle, j){
		if (i == j)
			circle.style.background = "#ffffff";
		else
			circle.style.background = "#7c7c7c";
	});
}