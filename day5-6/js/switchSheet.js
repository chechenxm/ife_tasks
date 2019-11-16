let btnList = document.getElementById("btnList");

btnList.addEventListener("click", function(event) {
	let target = event.target;
	let fileName = null;
	switch (target.id) {
		case "sheet-1":
			fileName = "css/style1.css";
			break;
		case "sheet-2":
			fileName = "css/style2.css";
			break;
		case "sheet-3":
			fileName = "css/style3.css";
			break;
		default:
			fileName = null;
	}
	let linkNodes = document.getElementsByTagName("link");
	for (let i in linkNodes) {
		if (
			linkNodes[i].getAttribute("rel") === "stylesheet" &&
			linkNodes[i].getAttribute("href").indexOf("style") > -1
		) {
			linkNodes[i].setAttribute("href", fileName);
		}
	}
});
