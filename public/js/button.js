document.getElementById("aboutUsButton").addEventListener("click", function () {
	var content = document.getElementById("aboutUsContent");
	if (content.style.display === "none" || content.style.display === "") {
		content.style.display = "block";
	} else {
		content.style.display = "none";
	}
});
