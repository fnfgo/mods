(function() {
var url=window.location!=window.parent.location?document.referrer:document.location;
if(url != 'https://kbhgames.com/'){

	if(Math.random() < 0.5){
	window.document.body.insertAdjacentHTML( 'beforeend','<div id="playmore"><a href="https://kbhgames.com/tag/friday-night-funkin" target="_blank">Play more Friday Night Funkin Games &#187;</a></div>');
		
	}else{
	window.document.body.insertAdjacentHTML( 'afterbegin','<div id="playmore"><a href="https://kbhgames.com/tag/friday-night-funkin" target="_blank">Play more Friday Night Funkin Games &#187;</a></div>');
	}
	
			
document.getElementById("openfl-content").style.height = "calc(100% - 30px)";
}
if(
url == 'https://www.fridaynightfunkin.net/' 
|| url == 'https://www.pgr.gg/'
|| url == 'https://www.mcpe117.com/'

){
document.body.style.background = "white";
			 document.body.innerHTML = '<div id="playmore" style="text-align: center;width: 100%;display: flex; height: 90vh;align-content: center;align-items: center;justify-content: center;flex-wrap: nowrap;color:#000"><h1><a href="https://kbhgames.com/tag/friday-night-funkin" target="_blank">KBH Games</a><h1></div><p style="text-align:center:color:#000">This site Trying repetitively to hide credits link,  not cool. So you lost the privilege to iframe from kbhgames server.</p>';

}
console.log = function() {}

})();