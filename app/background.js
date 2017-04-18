chrome.tabs.onUpdated.addListener(function(id, info) {
	chrome.tabs.query({'title':'hooooooooooooooooooooooooooooooooooooooooooooooooooooooooorse'},
	   function(tab){
	   		if (tab.length) tab = tab[0]
	   		else return
	      	chrome.tabs.executeScript(tab.id, {code:"document.title = 'horse'"});
	   }
	);
})
