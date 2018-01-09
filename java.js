var words = ["appel","aldus","afwas","aftel","aarde","armen","actie","apart","adres","avond","aders","alarm","boten","balen","beter","bomen","boren","boven","boxen","brood","broek","brand","breed","benen","beeld","brief","beten","basis","blauw","beren","buren","banen","bloed","broer","blond","boter","beleg","breng","baken","beker","blind","bezig","baden","bedel","bazen","bazin","baren","beden","beken","bezem","baard","bidet","breuk","conus","cello","creme","cloud","cacao","cadet","cavia","ceder","combi","china","clown","draai","deden","dalen","derde","delen","dwaas","daden","dader","dames","diner","datum","dozen","dreun","duits","dagen","deren","dwerg","dwaal","dwing","druil","droog","draad","dweil","drank","duren","dwars","drugs","daten","daler","doorn","disco","degen","droom","dient","drone","dadel","duwen","druif","deken","deler","elven","eigen","enger","engel","elder","enkel","effen","email","egaal","fiets","friet","files","forel","films","feest","fruit","falen","flora","fauna","feeen","freak","forum","fusie","geven","gaven","groen","graai","getal","grens","grond","groef","graal","gewei","games","grote","groet","garen","gebak","graag","genre","glans","geluk","geeuw","horen","heren","halen","hagel","haren","helen","harde","hemel","hoofd","huren","hamer","haken","heden","hotel","hobby","heler","hoger","ieder","index","immer","icoon","inlog","inzet","innig","jovel","jaren","jicht","jabot","jacht","jaden","jagen","jager","japon","jarig","jawel","jeans","jemig","jeugd","joint","jonas","joule","koken","kreet","koker","kerst","kegel","koude","kader","krent","kamer","kaars","kaart","kraan","krant","keren","kruid","kerel","kubus","kraal","kleur","kroon","klein","korst","klopt","kabel","kunst","kopje","krans","klimt","kater","klink","kudde","kruis","lopen","laten","lepel","links","laden","leven","lezen","lucht","lenen","laser","lente","licht","lader","leder","lunch","lijst","leger","leden","legen","lagen","lezer","lever","lingo","loper","luier","lager","leeuw","maand","malen","maken","media","meter","motor","maten","markt","mazen","molen","meest","meren","model","meden","maden","macht","meeuw","mager","magen","maren","manen","noord","nieuw","negen","namen","neven","nodig","naden","neder","nemen","onder","optel","ovaal","ovale","onwel","optie","orden","oppas","ouder","ophef","oases","palen","plein","pegel","paars","prijs","piano","pixel","paden","pasta","pizza","poten","paard","puber","pauze","preek","polis","pater","proef","panda","penis","prins","pluto","polen","plint","quota","quant","quark","queue","quilt","quote","robot","reken","raden","regen","radio","rente","regio","rugby","reden","roken","ruzie","ruist","regel","racen","races","riool","ramen","radar","roman","rokje","razen","roede","staan","staal","speel","steeg","stoel","stook","steek","schep","spijs","stoep","shirt","samen","sites","sport","spalk","sjaal","storm","staat","steun","strak","serie","shows","schat","snoep","sfeer","smeer","speer","scene","speld","smeed","smaak","super","stand","steer","smelt","sedan","skier","sluis","sneer","steel","truck","terug","typen","talen","taboe","tegel","taart","tafel","trouw","teken","teren","taken","treur","tenen","titel","thuis","tiara","teder","toets","tabak","trein","tarwe","telen","teler","uiten","uilig","uitje","uiver","ultra","uniek","uppie","uraan","uiers","velen","vloer","video","varen","vegen","veren","vader","vaten","vuren","vrouw","vlees","vogel","vroeg","vezel","veins","vorst","veder","vanaf","vieze","veger","villa","veler","vrede","vries","woord","wagen","wonen","waren","warme","weten","water","weren","wazig","wegen","weven","wezen","weken","wraak","wilde","wreed","wrede","wenst","woest","xenon","yacht","yucca","zwaar","zware","zesde","zagen","zalig","zomer","zeden","zwart","zeven","zicht","zadel","zweet","zenuw","zweer","zweef","zaden","zaken","zeker","zever","zeeen"];
var random = words[Math.floor(Math.random() * words.length)];
var checkk = document.getElementById('check');
var letter1 = random.substring(0, 1);
var letter2 = random.substring(1, 2);
var letter3 = random.substring(2, 3);
var letter4 = random.substring(3, 4);
var letter5 = random.substring(4, 5);
var tries = 0;

console.log('het woord is: ' + random);

function check() {
	var history = 1;

	tries++;

	var raad2 = document.getElementById('input2').value;
	var raad3 = document.getElementById('input3').value;
	var raad4 = document.getElementById('input4').value;
	var raad5 = document.getElementById('input5').value;

	document.getElementById('eerste').style.background = "green";

	if (letter2 == raad2) {
		document.getElementById('input2').style.background = "green";
	} else if (letter3 == raad2) {
		document.getElementById('input2').style.background = "yellow";
	} else if (letter4 == raad2) {
		document.getElementById('input2').style.background = "yellow";
	} else if (letter5 == raad2) {
		document.getElementById('input2').style.background = "yellow";
	} else {
		document.getElementById('input2').style.background = "red";
	}	

	if (letter3 == raad3) {
		document.getElementById('input3').style.background = "green";
	} else if (letter2 == raad3) {
		document.getElementById('input3').style.background = "yellow";
	} else if (letter4 == raad3) {
		document.getElementById('input3').style.background = "yellow";
	} else if (letter5 == raad3) {
		document.getElementById('input3').style.background = "yellow";
	} else {
		document.getElementById('input3').style.background = "red";
	}

	if (letter4 == raad4) {
		document.getElementById('input4').style.background = "green";
	} else if (letter3 == raad4) {
		document.getElementById('input4').style.background = "yellow";
	} else if (letter2 == raad4) {
		document.getElementById('input4').style.background = "yellow";
	} else if (letter5 == raad4) {
		document.getElementById('input4').style.background = "yellow";
	} else {
		document.getElementById('input4').style.background = "red";
	}

	if (letter5 == raad5) {
		document.getElementById('input5').style.background = "green";
	} else if (letter3 == raad5) {
		document.getElementById('input5').style.background = "yellow";
	} else if (letter4 == raad5) {
		document.getElementById('input5').style.background = "yellow";
	} else if (letter2 == raad5) {
		document.getElementById('input5').style.background = "yellow";
	} else {
		document.getElementById('input5').style.background = "red";
	}

	if (history === 1) {
		$('#woordraad').text(letter1 + 
			document.getElementById('input2').value + 
			document.getElementById('input3').value + 
			document.getElementById('input4').value + 
			document.getElementById('input5').value);
		history++;
	} else if (history === 2) {
		$('#woordraad2').text(letter1 + 
			document.getElementById('input2').value + 
			document.getElementById('input3').value + 
			document.getElementById('input4').value + 
			document.getElementById('input5').value);
		history++;
	} else if (history === 3) {
		$('#woordraad3').text(letter1 + 
			document.getElementById('input2').value + 
			document.getElementById('input3').value + 
			document.getElementById('input4').value + 
			document.getElementById('input5').value);
		history++;
	} else if (history === 4) {
		$('#woordraad4').text(letter1 + 
			document.getElementById('input2').value + 
			document.getElementById('input3').value + 
			document.getElementById('input4').value + 
			document.getElementById('input5').value);
		history++;
	} else if (history === 5) {
		$('#woordraad5').text(letter1 + 
			document.getElementById('input2').value + 
			document.getElementById('input3').value + 
			document.getElementById('input4').value + 
			document.getElementById('input5').value);
		history++;
	} else {
		console.log("hoi")
	}

	if (tries === 5) {
		document.getElementById('raad').innerText = "Jammer! je hebt het niet geraden. het woord was: " + random;
		document.getElementById('raad').style.display = "block";
		document.getElementById('input2').readOnly = true;
		document.getElementById('input3').readOnly = true;
		document.getElementById('input4').readOnly = true;
		document.getElementById('input5').readOnly = true;
		document.getElementById('restart').style.display = "block";
	}


	if (letter2 == raad2 && letter3 == raad3 && letter4 == raad4 && letter5 == raad5) {
		document.getElementById('raad').innerText = "Je hebt het woord geraden!";
		document.getElementById('raad').style.display = "block";
		document.getElementById('restart').style.display = "block";
	}
}

function restart() {
	location.reload();
}

$('.alles').fadeIn(400);

$('#eerste').text(letter1);