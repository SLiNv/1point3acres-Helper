let getAppInfo = function() {
	let manifestData = chrome.runtime.getManifest();
	console.log(manifestData.name);
	console.log(manifestData.version);

	let appname = document.getElementById('appname');
	let version = document.getElementById('version');

	appname.innerText = manifestData.name;
	version.innerText = manifestData.version;
}

getAppInfo();