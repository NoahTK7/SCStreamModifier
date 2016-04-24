chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("[SCStreamModifier] Script successfully injected.");
		// ----------------------------------------------------------

		createButtons();

		var removeButtons = document.getElementsByClassName("removeButton");
		removeButtons.onclick = removeEntry;

	}
	}, 10);
});

chrome.runtime.onMessage.addListener(
	function (request, sender, sendResponse) {
		
		if (request.event == "showall") {

			console.log("[SCStreamModifier] Show All event");
			sendResponse({callback: "success"});

			return;

		}

		sendResponse({callback:"failure"});

	}

);

function createButtons() {

	var streamEntries = document.getElementsByClassName("soundContext");
	console.log(streamEntries);

	for(var i = 0; i<streamEntries.length;i++){

		var buttonNode = document.createElement("button");
		buttonNode.appendChild(document.createTextNode("Remove"));
		buttonNode.setAttribute("class", "removeButton")

		streamEntries[i].appendChild(buttonNode);
	}

}

function removeEntry() {

	console.log("remove");

}