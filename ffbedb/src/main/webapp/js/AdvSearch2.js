let lshieldIcon = document.querySelector("img[id=lshieldicon]");
lshieldIcon.addEventListener('click', function() {
	let brightImg = "../../resources/lshield.png";
	let darkImg = "../../resources/darklshield.png";
	
	// Include light shields in search
	if(document.getElementById("lshieldicon").getAttribute('src') == darkImg) {
		document.getElementById("lshieldicon").src = brightImg;
		document.getElementById("CBlshield").checked = true;
		
		let x, i = 0;
		let lshieldTable = document.getElementById("lshield");
		let lshieldRows = lshieldTable.rows;
		
		for(i = 1; i < (lshieldRows.length); i++) {
			x = lshieldRows[i].getElementsByTagName("td")[7];
			// Light shield with fire resistance exists in the database
			if(document.getElementById("CBfire").checked == true && 
					(x.innerHTML.indexOf("Resistance: Fire (+") != -1 || x.innerHTML.indexOf(", Fire (+") != -1 ||
							x.innerHTML.indexOf("Resistance: All elements (+") != -1)) {
				lshieldRows[i].style.display = "";
			}
			// Light shield with ice resistance exists in the database
			if(document.getElementById("CBice").checked == true && 
					(x.innerHTML.indexOf("Resistance: Ice (+") != -1 || x.innerHTML.indexOf(", Ice (+") != -1 ||
							x.innerHTML.indexOf("Resistance: All elements (+") != -1)) {
				lshieldRows[i].style.display = "";
			}
			// Light shield with lightning resistance exists in the database
			if(document.getElementById("CBlightning").checked == true && 
					(x.innerHTML.indexOf("Resistance: Lightning (+") != -1 || x.innerHTML.indexOf(", Lightning (+") != -1 ||
							x.innerHTML.indexOf("Resistance: All elements (+") != -1)) {
				lshieldRows[i].style.display = "";
			}
			// Light shield with water resistance exists in the database
			if(document.getElementById("CBwater").checked == true && 
					(x.innerHTML.indexOf("Resistance: Water (+") != -1 || x.innerHTML.indexOf(", Water (+") != -1 ||
							x.innerHTML.indexOf("Resistance: All elements (+") != -1)) {
				lshieldRows[i].style.display = "";
			}
			// Light shield with wind resistance exists in the database
			if(document.getElementById("CBwind").checked == true && 
					(x.innerHTML.indexOf("Resistance: Wind (+") != -1 || x.innerHTML.indexOf(", Wind (+") != -1 ||
							x.innerHTML.indexOf("Resistance: All elements (+") != -1)) {
				lshieldRows[i].style.display = "";
			}
			// Light shield with earth resistance exists in the database
			if(document.getElementById("CBearth").checked == true && 
					(x.innerHTML.indexOf("Resistance: Earth (+") != -1 || x.innerHTML.indexOf(", Earth (+") != -1 ||
							x.innerHTML.indexOf("Resistance: All elements (+") != -1)) {
				lshieldRows[i].style.display = "";
			}
			// Light shield with light resistance exists in the database
			if(document.getElementById("CBlight").checked == true && 
					(x.innerHTML.indexOf("Resistance: Light (+") != -1 || x.innerHTML.indexOf(", Light (+") != -1 ||
							x.innerHTML.indexOf("Resistance: All elements (+") != -1)) {
				lshieldRows[i].style.display = "";
			}
			// Light shield with dark resistance exists in the database
			if(document.getElementById("CBdark").checked == true && 
					(x.innerHTML.indexOf("Resistance: Dark (+") != -1 || x.innerHTML.indexOf(", Dark (+") != -1 ||
							x.innerHTML.indexOf("Resistance: All elements (+") != -1)) {
				lshieldRows[i].style.display = "";
			}
		}
	}
	// Ignore light shields in search
	else {
		document.getElementById("lshieldicon").src = darkImg;	
		document.getElementById("CBlshield").checked = false;
		
		let x, i = 0;
		let lshieldTable = document.getElementById("lshield");
		let lshieldRows = lshieldTable.rows;
		
		for(i = 1; i < (lshieldRows.length - 1); i++) {
			lshieldRows[i].style.display = "none";
		}		
	}
});

let hshieldIcon = document.querySelector("img[id=hshieldicon]");
hshieldIcon.addEventListener('click', function() {
	let brightImg = "../../resources/hshield.png";
	let darkImg = "../../resources/darkhshield.png";
	if(document.getElementById("hshieldicon").getAttribute('src') == darkImg) {
		document.getElementById("hshieldicon").src = brightImg;
		document.getElementById("CBhshield").checked = true;
		
		let x, i = 0;
		let hshieldTable = document.getElementById("hshield");
		let hshieldRows = hshieldTable.rows;
		
		for(i = 1; i < (hshieldRows.length); i++) {
			x = hshieldRows[i].getElementsByTagName("td")[7];
			// Heavy shield with fire resistance exists in the database
			if(document.getElementById("CBfire").checked == true && 
					(x.innerHTML.indexOf("Resistance: Fire (+") != -1 || x.innerHTML.indexOf(", Fire (+") != -1 ||
							x.innerHTML.indexOf("Resistance: All elements (+") != -1)) {
				hshieldRows[i].style.display = "";
			}
			// Heavy shield with ice resistance exists in the database
			if(document.getElementById("CBice").checked == true && 
					(x.innerHTML.indexOf("Resistance: Ice (+") != -1 || x.innerHTML.indexOf(", Ice (+") != -1 ||
							x.innerHTML.indexOf("Resistance: All elements (+") != -1)) {
				hshieldRows[i].style.display = "";
			}
			// Heavy shield with lightning resistance exists in the database
			if(document.getElementById("CBlightning").checked == true && 
					(x.innerHTML.indexOf("Resistance: Lightning (+") != -1 || x.innerHTML.indexOf(", Lightning (+") != -1 ||
							x.innerHTML.indexOf("Resistance: All elements (+") != -1)) {
				hshieldRows[i].style.display = "";
			}
			// Heavy shield with water resistance exists in the database
			if(document.getElementById("CBwater").checked == true && 
					(x.innerHTML.indexOf("Resistance: Water (+") != -1 || x.innerHTML.indexOf(", Water (+") != -1 ||
							x.innerHTML.indexOf("Resistance: All elements (+") != -1)) {
				hshieldRows[i].style.display = "";
			}
			// Heavy shield with wind resistance exists in the database
			if(document.getElementById("CBwind").checked == true && 
					(x.innerHTML.indexOf("Resistance: Wind (+") != -1 || x.innerHTML.indexOf(", Wind (+") != -1 ||
							x.innerHTML.indexOf("Resistance: All elements (+") != -1)) {
				hshieldRows[i].style.display = "";
			}
			// Heavy shield with earth resistance exists in the database
			if(document.getElementById("CBearth").checked == true && 
					(x.innerHTML.indexOf("Resistance: Earth (+") != -1 || x.innerHTML.indexOf(", Earth (+") != -1 ||
							x.innerHTML.indexOf("Resistance: All elements(+") != -1)) {
				hshieldRows[i].style.display = "";
			}
			// Heavy shield with light resistance exists in the database
			if(document.getElementById("CBlight").checked == true && 
					(x.innerHTML.indexOf("Resistance: Light (+") != -1 || x.innerHTML.indexOf(", Light (+") != -1 ||
							x.innerHTML.indexOf("Resistance: All elements(+") != -1)) {
				hshieldRows[i].style.display = "";
			}
			// Heavy shield with dark resistance exists in the database
			if(document.getElementById("CBdark").checked == true && 
					(x.innerHTML.indexOf("Resistance: Dark (+") != -1 || x.innerHTML.indexOf(", Dark (+") != -1 ||
							x.innerHTML.indexOf("Resistance: All elements(+") != -1)) {
				hshieldRows[i].style.display = "";
			}
		}
	}
	else {
		document.getElementById("hshieldicon").src = darkImg;	
		document.getElementById("CBhshield").checked = false;
		
		let x, i = 0;
		let hshieldTable = document.getElementById("hshield");
		let hshieldRows = hshieldTable.rows;
		
		for(i = 1; i < (hshieldRows.length); i++) {
			hshieldRows[i].style.display = "none";
		}	
	}
});

let hatIcon = document.querySelector("img[id=haticon]");
hatIcon.addEventListener('click', function() {
	let brightImg = "../../resources/hat.png";
	let darkImg = "../../resources/darkhat.png";
	if(document.getElementById("haticon").getAttribute('src') == darkImg) {
		document.getElementById("haticon").src = brightImg;
		document.getElementById("CBhat").checked = true;
		
		let x, i = 0;
		let hatTable = document.getElementById("hat");
		let hatRows = hatTable.rows;
		
		for(i = 1; i < (hatRows.length); i++) {
			x = hatRows[i].getElementsByTagName("td")[7];
			// Hat with fire resistance exists in the database
			if(document.getElementById("CBfire").checked == true && 
					(x.innerHTML.indexOf("Resistance: Fire (+") != -1 || x.innerHTML.indexOf(", Fire (+") != -1 ||
							x.innerHTML.indexOf("Resistance: All elements (+") != -1)) {
				hatRows[i].style.display = "";
			}
			// Hat with ice resistance exists in the database
			if(document.getElementById("CBice").checked == true && 
					(x.innerHTML.indexOf("Resistance: Ice (+") != -1 || x.innerHTML.indexOf(", Ice (+") != -1 ||
							x.innerHTML.indexOf("Resistance: All elements (+") != -1)) {
				hatRows[i].style.display = "";
			}
			// Hat with lightning resistance exists in the database
			if(document.getElementById("CBlightning").checked == true && 
					(x.innerHTML.indexOf("Resistance: Lightning (+") != -1 || x.innerHTML.indexOf(", Lightning (+") != -1 ||
							x.innerHTML.indexOf("Resistance: All elements (+") != -1)) {
				hatRows[i].style.display = "";
			}
			// Hat with water resistance exists in the database
			if(document.getElementById("CBwater").checked == true && 
					(x.innerHTML.indexOf("Resistance: Water (+") != -1 || x.innerHTML.indexOf(", Water (+") != -1 ||
							x.innerHTML.indexOf("Resistance: All elements (+") != -1)) {
				hatRows[i].style.display = "";
			}
			// Hat with wind resistance exists in the database
			if(document.getElementById("CBwind").checked == true && 
					(x.innerHTML.indexOf("Resistance: Wind (+") != -1 || x.innerHTML.indexOf(", Wind (+") != -1 ||
							x.innerHTML.indexOf("Resistance: All elements (+") != -1)) {
				hatRows[i].style.display = "";
			}
			// Hat with earth resistance exists in the database
			if(document.getElementById("CBearth").checked == true && 
					(x.innerHTML.indexOf("Resistance: Earth (+") != -1 || x.innerHTML.indexOf(", Earth (+") != -1 ||
							x.innerHTML.indexOf("Resistance: All elements (+") != -1)) {
				hatRows[i].style.display = "";
			}
			// Hat with light resistance exists in the database
			if(document.getElementById("CBlight").checked == true && 
					(x.innerHTML.indexOf("Resistance: Light (+") != -1 || x.innerHTML.indexOf(", Light (+") != -1 ||
							x.innerHTML.indexOf("Resistance: All elements (+") != -1)) {
				hatRows[i].style.display = "";
			}
			// Hat with dark resistance exists in the database
			if(document.getElementById("CBdark").checked == true && 
					(x.innerHTML.indexOf("Resistance: Dark (+") != -1 || x.innerHTML.indexOf(", Dark (+") != -1 ||
							x.innerHTML.indexOf("Resistance: All elements (+") != -1)) {
				hatRows[i].style.display = "";
			}
		}
	}
	else {
		document.getElementById("haticon").src = darkImg;	
		document.getElementById("CBhat").checked = false;
		
		let x, i = 0;
		let hatTable = document.getElementById("hat");
		let hatRows = hatTable.rows;
		
		for(i = 1; i < (hatRows.length); i++) {
			hatRows[i].style.display = "none";
		}	
	}
});
	
let helmIcon = document.querySelector("img[id=helmicon]");
helmIcon.addEventListener('click', function() {
	let brightImg = "../../resources/helm.png";
	let darkImg = "../../resources/darkhelm.png";
	if(document.getElementById("helmicon").getAttribute('src') == darkImg) {
		document.getElementById("helmicon").src = brightImg;
		document.getElementById("CBhelm").checked = true;
		
		let x, i = 0;
		let helmTable = document.getElementById("helm");
		let helmRows = helmTable.rows;
		
		for(i = 1; i < (helmRows.length); i++) {
			x = helmRows[i].getElementsByTagName("td")[7];
			// Helm with fire resistance exists in the database
			if(document.getElementById("CBfire").checked == true && 
					(x.innerHTML.indexOf("Resistance: Fire (+") != -1 || x.innerHTML.indexOf(", Fire (+") != -1 ||
							x.innerHTML.indexOf("Resistance: All elements (+") != -1)) {
				helmRows[i].style.display = "";
			}
			// Helm with lightning resistance exists in the database
			if(document.getElementById("CBice").checked == true && 
					(x.innerHTML.indexOf("Resistance: Ice (+") != -1 || x.innerHTML.indexOf(", Ice (+") != -1 ||
							x.innerHTML.indexOf("Resistance: All elements (+") != -1)) {
				helmRows[i].style.display = "";
			}
			// Helm with lightning resistance exists in the database
			if(document.getElementById("CBice").checked == true && 
					(x.innerHTML.indexOf("Resistance: Lightning (+") != -1 || x.innerHTML.indexOf(", Lightning (+") != -1 ||
							x.innerHTML.indexOf("Resistance: All elements (+") != -1)) {
				helmRows[i].style.display = "";
			}
			// Helm with water resistance exists in the database
			if(document.getElementById("CBwater").checked == true && 
					(x.innerHTML.indexOf("Resistance: Water (+") != -1 || x.innerHTML.indexOf(", Water (+") != -1 ||
							x.innerHTML.indexOf("Resistance: All elements (+") != -1)) {
				helmRows[i].style.display = "";
			}
			// Helm with wind resistance exists in the database
			if(document.getElementById("CBwind").checked == true && 
					(x.innerHTML.indexOf("Resistance: Wind (+") != -1 || x.innerHTML.indexOf(", Wind (+") != -1 ||
							x.innerHTML.indexOf("Resistance: All elements (+") != -1)) {
				helmRows[i].style.display = "";
			}
			// Helm with earth resistance exists in the database
			if(document.getElementById("CBearth").checked == true && 
					(x.innerHTML.indexOf("Resistance: Earth (+") != -1 || x.innerHTML.indexOf(", Earth (+") != -1 ||
							x.innerHTML.indexOf("Resistance: All elements (+") != -1)) {
				helmRows[i].style.display = "";
			}
			// Helm with light resistance exists in the database
			if(document.getElementById("CBlight").checked == true && 
					(x.innerHTML.indexOf("Resistance: Light (+") != -1 || x.innerHTML.indexOf(", Light (+") != -1 ||
							x.innerHTML.indexOf("Resistance: All elements (+") != -1)) {
				helmRows[i].style.display = "";
			}
			// Helm with dark resistance exists in the database
			if(document.getElementById("CBdark").checked == true && 
					(x.innerHTML.indexOf("Resistance: Dark (+") != -1 || x.innerHTML.indexOf(", Dark (+") != -1 ||
							x.innerHTML.indexOf("Resistance: All elements (+") != -1)) {
				helmRows[i].style.display = "";
			}
		}
	}
	else {
		document.getElementById("helmicon").src = darkImg;	
		document.getElementById("CBhelm").checked = false;
		
		let x, i = 0;
		let helmTable = document.getElementById("helm");
		let helmRows = helmTable.rows;
		
		for(i = 1; i < (helmRows.length); i++) {
			helmRows[i].style.display = "none";
		}	
	}
});

let clothesIcon = document.querySelector("img[id=clothesicon]");
clothesIcon.addEventListener('click', function() {
	let brightImg = "../../resources/clothes.png";
	let darkImg = "../../resources/darkclothes.png";
	if(document.getElementById("clothesicon").getAttribute('src') == darkImg) {
		document.getElementById("clothesicon").src = brightImg;
		document.getElementById("CBclothes").checked = true;
		
		let x, i = 0;
		let clothesTable = document.getElementById("clothes");
		let clothesRows = clothesTable.rows;
		
		for(i = 1; i < (clothesRows.length); i++) {
			x = clothesRows[i].getElementsByTagName("td")[7];
			// Clothes with fire resistance exists in the database
			if(document.getElementById("CBfire").checked == true && 
					(x.innerHTML.indexOf("Resistance: Fire (+") != -1 || x.innerHTML.indexOf(", Fire (+") != -1 ||
							x.innerHTML.indexOf("Resistance: All elements (+") != -1)) {
				clothesRows[i].style.display = "";
			}
			// Clothes with ice resistance exists in the database
			if(document.getElementById("CBice").checked == true && 
					(x.innerHTML.indexOf("Resistance: Ice (+") != -1 || x.innerHTML.indexOf(", Ice (+") != -1 ||
							x.innerHTML.indexOf("Resistance: All elements (+") != -1)) {
				clothesRows[i].style.display = "";
			}
			// Clothes with lightning resistance exists in the database
			if(document.getElementById("CBlightning").checked == true && 
					(x.innerHTML.indexOf("Resistance: Lightning (+") != -1 || x.innerHTML.indexOf(", Lightning (+") != -1 ||
							x.innerHTML.indexOf("Resistance: All elements (+") != -1)) {
				clothesRows[i].style.display = "";
			}
			// Clothes with water resistance exists in the database
			if(document.getElementById("CBwater").checked == true && 
					(x.innerHTML.indexOf("Resistance: Water (+") != -1 || x.innerHTML.indexOf(", Water (+") != -1 ||
							x.innerHTML.indexOf("Resistance: All elements (+") != -1)) {
				clothesRows[i].style.display = "";
			}
			// Clothes with wind resistance exists in the database
			if(document.getElementById("CBwind").checked == true && 
					(x.innerHTML.indexOf("Resistance: Wind (+") != -1 || x.innerHTML.indexOf(", Wind (+") != -1 ||
							x.innerHTML.indexOf("Resistance: All elements (+") != -1)) {
				clothesRows[i].style.display = "";
			}
			// Clothes with earth resistance exists in the database
			if(document.getElementById("CBearth").checked == true && 
					(x.innerHTML.indexOf("Resistance: Earth (+") != -1 || x.innerHTML.indexOf(", Earth (+") != -1 ||
							x.innerHTML.indexOf("Resistance: All elements (+") != -1)) {
				clothesRows[i].style.display = "";
			}
			// Clothes with light resistance exists in the database
			if(document.getElementById("CBlight").checked == true && 
					(x.innerHTML.indexOf("Resistance: Light (+") != -1 || x.innerHTML.indexOf(", Light (+") != -1 ||
							x.innerHTML.indexOf("Resistance: All elements (+") != -1)) {
				clothesRows[i].style.display = "";
			}
			// Clothes with dark resistance exists in the database
			if(document.getElementById("CBdark").checked == true && 
					(x.innerHTML.indexOf("Resistance: Dark (+") != -1 || x.innerHTML.indexOf(", Dark (+") != -1 ||
							x.innerHTML.indexOf("Resistance: All elements (+") != -1)) {
				clothesRows[i].style.display = "";
			}
		}
	}
	else {
		document.getElementById("clothesicon").src = darkImg;	
		document.getElementById("CBclothes").checked = false;
		
		let x, i = 0;
		let clothesTable = document.getElementById("clothes");
		let clothesRows = clothesTable.rows;
		
		for(i = 1; i < (clothesRows.length); i++) {
			clothesRows[i].style.display = "none";
		}	
	}
});

let larmorIcon = document.querySelector("img[id=larmoricon]");
larmorIcon.addEventListener('click', function() {
	let brightImg = "../../resources/larmor.png";
	let darkImg = "../../resources/darklarmor.png";
	if(document.getElementById("larmoricon").getAttribute('src') == darkImg) {
		document.getElementById("larmoricon").src = brightImg;
		document.getElementById("CBlarmor").checked = true;
		
		let x, i = 0;
		let larmorTable = document.getElementById("larmor");
		let larmorRows = larmorTable.rows;
		
		for(i = 1; i < (larmorRows.length); i++) {
			x = larmorRows[i].getElementsByTagName("td")[7];
			// Light armor with fire resistance exists in the database
			if(document.getElementById("CBfire").checked == true && 
					(x.innerHTML.indexOf("Resistance: Fire (+") != -1 || x.innerHTML.indexOf(", Fire (+") != -1 ||
							x.innerHTML.indexOf("Resistance: All elements (+") != -1)) {
				larmorRows[i].style.display = "";
			}
			// Light armor with ice resistance exists in the database
			if(document.getElementById("CBice").checked == true && 
					(x.innerHTML.indexOf("Resistance: Ice (+") != -1 || x.innerHTML.indexOf(", Ice (+") != -1 ||
							x.innerHTML.indexOf("Resistance: All elements (+") != -1)) {
				larmorRows[i].style.display = "";
			}
			// Light armor with lightning resistance exists in the database
			if(document.getElementById("CBlightning").checked == true && 
					(x.innerHTML.indexOf("Resistance: Lightning (+") != -1 || x.innerHTML.indexOf(", Lightning (+") != -1 ||
							x.innerHTML.indexOf("Resistance: All elements (+") != -1)) {
				larmorRows[i].style.display = "";
			}
			// Light armor with water resistance exists in the database
			if(document.getElementById("CBwater").checked == true && 
					(x.innerHTML.indexOf("Resistance: Water (+") != -1 || x.innerHTML.indexOf(", Water (+") != -1 ||
							x.innerHTML.indexOf("Resistance: All elements (+") != -1)) {
				larmorRows[i].style.display = "";
			}
			// Light armor with wind resistance exists in the database
			if(document.getElementById("CBwind").checked == true && 
					(x.innerHTML.indexOf("Resistance: Wind (+") != -1 || x.innerHTML.indexOf(", Wind (+") != -1 ||
							x.innerHTML.indexOf("Resistance: All elements (+") != -1)) {
				larmorRows[i].style.display = "";
			}
			// Light armor with earth resistance exists in the database
			if(document.getElementById("CBearth").checked == true && 
					(x.innerHTML.indexOf("Resistance: Earth (+") != -1 || x.innerHTML.indexOf(", Earth (+") != -1 ||
							x.innerHTML.indexOf("Resistance: All elements (+") != -1)) {
				larmorRows[i].style.display = "";
			}
			// Light armor with light resistance exists in the database
			if(document.getElementById("CBlight").checked == true && 
					(x.innerHTML.indexOf("Resistance: Light (+") != -1 || x.innerHTML.indexOf(", Light (+") != -1 ||
							x.innerHTML.indexOf("Resistance: All elements (+") != -1)) {
				larmorRows[i].style.display = "";
			}
			// Light armor with dark resistance exists in the database
			if(document.getElementById("CBdark").checked == true && 
					(x.innerHTML.indexOf("Resistance: Dark (+") != -1 || x.innerHTML.indexOf(", Dark (+") != -1 ||
							x.innerHTML.indexOf("Resistance: All elements (+") != -1)) {
				larmorRows[i].style.display = "";
			}
		}
	}
	else {
		document.getElementById("larmoricon").src = darkImg;	
		document.getElementById("CBlarmor").checked = false;
		
		let x, i = 0;
		let larmorTable = document.getElementById("larmor");
		let larmorRows = larmorTable.rows;
		
		for(i = 1; i < (larmorRows.length); i++) {
			larmorRows[i].style.display = "none";
		}	
	}
});

let harmorIcon = document.querySelector("img[id=harmoricon]");
harmorIcon.addEventListener('click', function() {
	let brightImg = "../../resources/harmor.png";
	let darkImg = "../../resources/darkharmor.png";
	if(document.getElementById("harmoricon").getAttribute('src') == darkImg) {
		document.getElementById("harmoricon").src = brightImg;
		document.getElementById("CBharmor").checked = true;
		
		let x, i = 0;
		let harmorTable = document.getElementById("harmor");
		let harmorRows = harmorTable.rows;
		
		for(i = 1; i < (harmorRows.length); i++) {
			x = harmorRows[i].getElementsByTagName("td")[7];
			// Heavy armor with fire resistance exists in the database
			if(document.getElementById("CBfire").checked == true && 
					(x.innerHTML.indexOf("Resistance: Fire (+") != -1 || x.innerHTML.indexOf(", Fire (+") != -1 ||
							x.innerHTML.indexOf("Resistance: All elements (+") != -1)) {
				harmorRows[i].style.display = "";
			}
			// Heavy armor with ice resistance exists in the database
			if(document.getElementById("CBice").checked == true && 
					(x.innerHTML.indexOf("Resistance: Ice (+") != -1 || x.innerHTML.indexOf(", Ice (+") != -1 ||
							x.innerHTML.indexOf("Resistance: All elements (+") != -1)) {
				harmorRows[i].style.display = "";
			}
			// Heavy armor with lightning resistance exists in the database
			if(document.getElementById("CBlightning").checked == true && 
					(x.innerHTML.indexOf("Resistance: Lightning (+") != -1 || x.innerHTML.indexOf(", Lightning (+") != -1 ||
							x.innerHTML.indexOf("Resistance: All elements (+") != -1)) {
				harmorRows[i].style.display = "";
			}
			// Heavy armor with water resistance exists in the database
			if(document.getElementById("CBwater").checked == true && 
					(x.innerHTML.indexOf("Resistance: Water (+") != -1 || x.innerHTML.indexOf(", Water (+") != -1 ||
							x.innerHTML.indexOf("Resistance: All elements (+") != -1)) {
				harmorRows[i].style.display = "";
			}
			// Heavy armor with wind resistance exists in the database
			if(document.getElementById("CBwind").checked == true && 
					(x.innerHTML.indexOf("Resistance: Wind (+") != -1 || x.innerHTML.indexOf(", Wind (+") != -1 ||
							x.innerHTML.indexOf("Resistance: All elements (+") != -1)) {
				harmorRows[i].style.display = "";
			}
			// Heavy armor with earth resistance exists in the database
			if(document.getElementById("CBearth").checked == true && 
					(x.innerHTML.indexOf("Resistance: Earth (+") != -1 || x.innerHTML.indexOf(", Earth (+") != -1 ||
							x.innerHTML.indexOf("Resistance: All elements (+") != -1)) {
				harmorRows[i].style.display = "";
			}
			// Heavy armor with light resistance exists in the database
			if(document.getElementById("CBlight").checked == true && 
					(x.innerHTML.indexOf("Resistance: Light (+") != -1 || x.innerHTML.indexOf(", Light (+") != -1 ||
							x.innerHTML.indexOf("Resistance: All elements (+") != -1)) {
				harmorRows[i].style.display = "";
			}
			// Heavy armor with dark resistance exists in the database
			if(document.getElementById("CBdark").checked == true && 
					(x.innerHTML.indexOf("Resistance: Dark (+") != -1 || x.innerHTML.indexOf(", Dark (+") != -1 ||
							x.innerHTML.indexOf("Resistance: All elements (+") != -1)) {
				harmorRows[i].style.display = "";
			}
		}
	}
	else {
		document.getElementById("harmoricon").src = darkImg;	
		document.getElementById("CBharmor").checked = false;
		
		let x, i = 0;
		let harmorTable = document.getElementById("harmor");
		let harmorRows = harmorTable.rows;
		
		for(i = 1; i < (harmorRows.length); i++) {
			harmorRows[i].style.display = "none";
		}	
	}
});

let robeIcon = document.querySelector("img[id=robeicon]");
robeIcon.addEventListener('click', function() {
	let brightImg = "../../resources/robe.png";
	let darkImg = "../../resources/darkrobe.png";
	if(document.getElementById("robeicon").getAttribute('src') == darkImg) {
		document.getElementById("robeicon").src = brightImg;
		document.getElementById("CBrobe").checked = true;
		
		let x, i = 0;
		let robeTable = document.getElementById("robe");
		let robeRows = robeTable.rows;
		
		for(i = 1; i < (robeRows.length); i++) {
			x = robeRows[i].getElementsByTagName("td")[7];
			// Robe with fire resistance exists in the database
			if(document.getElementById("CBfire").checked == true && 
					(x.innerHTML.indexOf("Resistance: Fire (+") != -1 || x.innerHTML.indexOf(", Fire (+") != -1 ||
							x.innerHTML.indexOf("Resistance: All elements (+") != -1)) {
				robeRows[i].style.display = "";
			}
			// Robe with ice resistance exists in the database
			if(document.getElementById("CBice").checked == true && 
					(x.innerHTML.indexOf("Resistance: Ice (+") != -1 || x.innerHTML.indexOf(", Ice (+") != -1 ||
							x.innerHTML.indexOf("Resistance: All elements (+") != -1)) {
				robeRows[i].style.display = "";
			}
			// Robe with lightning resistance exists in the database
			if(document.getElementById("CBlightning").checked == true && 
					(x.innerHTML.indexOf("Resistance: Lightning (+") != -1 || x.innerHTML.indexOf(", Lightning (+") != -1 ||
							x.innerHTML.indexOf("Resistance: All elements (+") != -1)) {
				robeRows[i].style.display = "";
			}
			// Robe with water resistance exists in the database
			if(document.getElementById("CBwater").checked == true && 
					(x.innerHTML.indexOf("Resistance: Water (+") != -1 || x.innerHTML.indexOf(", Water (+") != -1 ||
							x.innerHTML.indexOf("Resistance: All elements (+") != -1)) {
				robeRows[i].style.display = "";
			}
			// Robe with wind resistance exists in the database
			if(document.getElementById("CBwind").checked == true && 
					(x.innerHTML.indexOf("Resistance: Wind (+") != -1 || x.innerHTML.indexOf(", Wind (+") != -1 ||
							x.innerHTML.indexOf("Resistance: All elements (+") != -1)) {
				robeRows[i].style.display = "";
			}
			// Robe with earth resistance exists in the database
			if(document.getElementById("CBearth").checked == true && 
					(x.innerHTML.indexOf("Resistance: Earth (+") != -1 || x.innerHTML.indexOf(", Earth (+") != -1 ||
							x.innerHTML.indexOf("Resistance: All elements (+") != -1)) {
				robeRows[i].style.display = "";
			}
			// Robe with light resistance exists in the database
			if(document.getElementById("CBlight").checked == true && 
					(x.innerHTML.indexOf("Resistance: Light (+") != -1 || x.innerHTML.indexOf(", Light (+") != -1 ||
							x.innerHTML.indexOf("Resistance: All elements (+") != -1)) {
				robeRows[i].style.display = "";
			}
			// Robe with dark resistance exists in the database
			if(document.getElementById("CBdark").checked == true && 
					(x.innerHTML.indexOf("Resistance: Dark (+") != -1 || x.innerHTML.indexOf(", Dark (+") != -1 ||
							x.innerHTML.indexOf("Resistance: All elements (+") != -1)) {
				robeRows[i].style.display = "";
			}
		}
	}
	else {
		document.getElementById("robeicon").src = darkImg;	
		document.getElementById("CBrobe").checked = false;
		
		let x, i = 0;
		let robeTable = document.getElementById("robe");
		let robeRows = robeTable.rows;
		
		for(i = 1; i < (robeRows.length); i++) {
			robeRows[i].style.display = "none";
		}	
	}
});


let fireIcon = document.querySelector("img[id=fireicon]");
fireIcon.addEventListener('click', function() {
	let brightImg = "../../resources/fire.png";
	let darkImg = "../../resources/darkfire.png";
	// Include any equipment with fire element
	if(document.getElementById("fireicon").getAttribute('src') == darkImg) {
		document.getElementById("fireicon").src = brightImg;
		document.getElementById("CBfire").checked = true;
		
		// Include any light shields with fire resistance in search
		if(document.getElementById("CBlshield").checked == true) {
			let x, i = 0;
			let lshieldTable = document.getElementById("lshield");
			let lshieldRows = lshieldTable.rows;
			
			for(i = 1; i < (lshieldRows.length); i++) {
				x = lshieldRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Fire (+") != -1 || x.innerHTML.indexOf(", Fire (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					lshieldRows[i].style.display = "";
				}
			}
		}
		// Include any heavy shields with fire resistance in search
		if(document.getElementById("CBhshield").checked == true) {
			let x, i = 0;
			let hshieldTable = document.getElementById("hshield");
			let hshieldRows = hshieldTable.rows;
			
			for(i = 1; i < (hshieldRows.length); i++) {
				x = hshieldRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Fire (+") != -1 || x.innerHTML.indexOf(", Fire (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					hshieldRows[i].style.display = "";
				}
			}
		}
		// Include any hats with fire resistance in search
		if(document.getElementById("CBhat").checked == true) {
			let x, i = 0;
			let hatTable = document.getElementById("hat");
			let hatRows = hatTable.rows;
			
			for(i = 1; i < (hatRows.length); i++) {
				x = hatRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Fire (+") != -1 || x.innerHTML.indexOf(", Fire (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					hatRows[i].style.display = "";
				}
			}
		}
		// Include any helms with fire resistance in search
		if(document.getElementById("CBhelm").checked == true) {
			let x, i = 0;
			let helmTable = document.getElementById("helm");
			let helmRows = helmTable.rows;
			
			for(i = 1; i < (helmRows.length); i++) {
				x = helmRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Fire (+") != -1 || x.innerHTML.indexOf(", Fire (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					helmRows[i].style.display = "";
				}
			}
		}
		// Include any clothes with fire resistance in search
		if(document.getElementById("CBclothes").checked == true) {
			let x, i = 0;
			let clothesTable = document.getElementById("clothes");
			let clothesRows = clothesTable.rows;
			
			for(i = 1; i < (clothesRows.length); i++) {
				x = clothesRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Fire (+") != -1 || x.innerHTML.indexOf(", Fire (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					clothesRows[i].style.display = "";
				}
			}
		}
		// Include any light armor with fire resistance in search
		if(document.getElementById("CBlarmor").checked == true) {
			let x, i = 0;
			let larmorTable = document.getElementById("larmor");
			let larmorRows = larmorTable.rows;
			
			for(i = 1; i < (larmorRows.length); i++) {
				x = larmorRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Fire (+") != -1 || x.innerHTML.indexOf(", Fire (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					larmorRows[i].style.display = "";
				}
			}
		}
		// Include any heavy armor with fire resistance in search
		if(document.getElementById("CBharmor").checked == true) {
			let x, i = 0;
			let harmorTable = document.getElementById("harmor");
			let harmorRows = harmorTable.rows;
			
			for(i = 1; i < (harmorRows.length); i++) {
				x = harmorRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Fire (+") != -1 || x.innerHTML.indexOf(", Fire (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					harmorRows[i].style.display = "";
				}
			}
		}
		// Include any robes with fire resistance in search
		if(document.getElementById("CBrobe").checked == true) {
			let x, i = 0;
			let robeTable = document.getElementById("robe");
			let robeRows = robeTable.rows;
			
			for(i = 1; i < (robeRows.length); i++) {
				x = robeRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Fire (+") != -1 || x.innerHTML.indexOf(", Fire (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					robeRows[i].style.display = "";
				}
			}
		}
	}
	// Ignore any equipment with fire element
	else {
		document.getElementById("fireicon").src = darkImg;
		document.getElementById("CBfire").checked = false;
		
		if(document.getElementById("CBlshield").checked == true) {
			let x, i = 0;
			let lshieldTable = document.getElementById("lshield");
			let lshieldRows = lshieldTable.rows;
			
			for(i = 1; i < (lshieldRows.length); i++) {
				x = lshieldRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Fire (+") != -1 || x.innerHTML.indexOf(", Fire (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					lshieldRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBhshield").checked == true) {
			let x, i = 0;
			let hshieldTable = document.getElementById("hshield");
			let hshieldRows = hshieldTable.rows;
			
			for(i = 1; i < (hshieldRows.length); i++) {
				x = hshieldRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Fire (+") != -1 || x.innerHTML.indexOf(", Fire (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					hshieldRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBhat").checked == true) {
			let x, i = 0;
			let hatTable = document.getElementById("hat");
			let hatRows = hatTable.rows;
			
			for(i = 1; i < (hatRows.length); i++) {
				x = hatRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Fire (+") != -1 || x.innerHTML.indexOf(", Fire (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					hatRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBhelm").checked == true) {
			let x, i = 0;
			let helmTable = document.getElementById("helm");
			let helmRows = helmTable.rows;
			
			for(i = 1; i < (helmRows.length); i++) {
				x = helmRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Fire (+") != -1 || x.innerHTML.indexOf(", Fire (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					helmRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBclothes").checked == true) {
			let x, i = 0;
			let clothesTable = document.getElementById("clothes");
			let clothesRows = clothesTable.rows;
			
			for(i = 1; i < (clothesRows.length); i++) {
				x = clothesRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Fire (+") != -1 || x.innerHTML.indexOf(", Fire (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					clothesRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBlarmor").checked == true) {
			let x, i = 0;
			let larmorTable = document.getElementById("larmor");
			let larmorRows = larmorTable.rows;
			
			for(i = 1; i < (larmorRows.length); i++) {
				x = larmorRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Fire (+") != -1 || x.innerHTML.indexOf(", Fire (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					larmorRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBharmor").checked == true) {
			let x, i = 0;
			let harmorTable = document.getElementById("harmor");
			let harmorRows = harmorTable.rows;
			
			for(i = 1; i < (harmorRows.length); i++) {
				x = harmorRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Fire (+") != -1 || x.innerHTML.indexOf(", Fire (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					harmorRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBrobe").checked == true) {
			let x, i = 0;
			let robeTable = document.getElementById("robe");
			let robeRows = robeTable.rows;
			
			for(i = 1; i < (robeRows.length); i++) {
				x = robeRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Fire (+") != -1 || x.innerHTML.indexOf(", Fire (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					robeRows[i].style.display = "none";
				}
			}
		}
	}
});

let iceIcon = document.querySelector("img[id=iceicon]");
iceIcon.addEventListener('click', function() {
	let brightImg = "../../resources/ice.png";
	let darkImg = "../../resources/darkice.png";
	// Include any equipment with ice element
	if(document.getElementById("iceicon").getAttribute('src') == darkImg) {
		document.getElementById("iceicon").src = brightImg;
		document.getElementById("CBice").checked = true;
		
		// Include any light shields with ice resistance in search
		if(document.getElementById("CBlshield").checked == true) {
			let x, i = 0;
			let lshieldTable = document.getElementById("lshield");
			let lshieldRows = lshieldTable.rows;
			
			for(i = 1; i < (lshieldRows.length); i++) {
				x = lshieldRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Ice (+") != -1 || x.innerHTML.indexOf(", Ice (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					lshieldRows[i].style.display = "";
				}
			}
		}
		// Include any heavy shields with ice resistance in search
		if(document.getElementById("CBhshield").checked == true) {
			let x, i = 0;
			let hshieldTable = document.getElementById("hshield");
			let hshieldRows = hshieldTable.rows;
			
			for(i = 1; i < (hshieldRows.length); i++) {
				x = hshieldRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Ice (+") != -1 || x.innerHTML.indexOf(", Ice (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					hshieldRows[i].style.display = "";
				}
			}
		}
		// Include any hats with ice resistance in search
		if(document.getElementById("CBhat").checked == true) {
			let x, i = 0;
			let hatTable = document.getElementById("hat");
			let hatRows = hatTable.rows;
			
			for(i = 1; i < (hatRows.length); i++) {
				x = hatRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Ice (+") != -1 || x.innerHTML.indexOf(", Ice (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					hatRows[i].style.display = "";
				}
			}
		}
		// Include any helms with ice resistance in search
		if(document.getElementById("CBhelm").checked == true) {
			let x, i = 0;
			let helmTable = document.getElementById("helm");
			let helmRows = helmTable.rows;
			
			for(i = 1; i < (helmRows.length); i++) {
				x = helmRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Ice (+") != -1 || x.innerHTML.indexOf(", Ice (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					helmRows[i].style.display = "";
				}
			}
		}
		// Include any clothes with ice resistance in search
		if(document.getElementById("CBclothes").checked == true) {
			let x, i = 0;
			let clothesTable = document.getElementById("clothes");
			let clothesRows = clothesTable.rows;
			
			for(i = 1; i < (clothesRows.length); i++) {
				x = clothesRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Ice (+") != -1 || x.innerHTML.indexOf(", Ice (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					clothesRows[i].style.display = "";
				}
			}
		}
		// Include any light armor with ice resistance in search
		if(document.getElementById("CBlarmor").checked == true) {
			let x, i = 0;
			let larmorTable = document.getElementById("larmor");
			let larmorRows = larmorTable.rows;
			
			for(i = 1; i < (larmorRows.length); i++) {
				x = larmorRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Ice (+") != -1 || x.innerHTML.indexOf(", Ice (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					larmorRows[i].style.display = "";
				}
			}
		}
		// Include any heavy armor with ice resistance in search
		if(document.getElementById("CBharmor").checked == true) {
			let x, i = 0;
			let harmorTable = document.getElementById("harmor");
			let harmorRows = harmorTable.rows;
			
			for(i = 1; i < (harmorRows.length); i++) {
				x = harmorRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Ice (+") != -1 || x.innerHTML.indexOf(", Ice (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					harmorRows[i].style.display = "";
				}
			}
		}
		// Include any robes with ice resistance in search
		if(document.getElementById("CBrobe").checked == true) {
			let x, i = 0;
			let robeTable = document.getElementById("robe");
			let robeRows = robeTable.rows;
			
			for(i = 1; i < (robeRows.length); i++) {
				x = robeRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Ice (+") != -1 || x.innerHTML.indexOf(", Ice (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					robeRows[i].style.display = "";
				}
			}
		}
	}
	// Ignore any equipment with ice element
	else {
		document.getElementById("iceicon").src = darkImg;
		document.getElementById("CBice").checked = false;
		
		if(document.getElementById("CBlshield").checked == true) {
			let x, i = 0;
			let lshieldTable = document.getElementById("lshield");
			let lshieldRows = lshieldTable.rows;
			
			for(i = 1; i < (lshieldRows.length); i++) {
				x = lshieldRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Fire (+") != -1 || x.innerHTML.indexOf(", Fire (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					lshieldRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBhshield").checked == true) {
			let x, i = 0;
			let hshieldTable = document.getElementById("hshield");
			let hshieldRows = hshieldTable.rows;
			
			for(i = 1; i < (hshieldRows.length); i++) {
				x = hshieldRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Ice (+") != -1 || x.innerHTML.indexOf(", Ice (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					hshieldRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBhat").checked == true) {
			let x, i = 0;
			let hatTable = document.getElementById("hat");
			let hatRows = hatTable.rows;
			
			for(i = 1; i < (hatRows.length); i++) {
				x = hatRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Ice (+") != -1 || x.innerHTML.indexOf(", Ice (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					hatRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBhelm").checked == true) {
			let x, i = 0;
			let helmTable = document.getElementById("helm");
			let helmRows = helmTable.rows;
			
			for(i = 1; i < (helmRows.length); i++) {
				x = helmRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Ice (+") != -1 || x.innerHTML.indexOf(", Ice (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					helmRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBclothes").checked == true) {
			let x, i = 0;
			let clothesTable = document.getElementById("clothes");
			let clothesRows = clothesTable.rows;
			
			for(i = 1; i < (clothesRows.length); i++) {
				x = clothesRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Ice (+") != -1 || x.innerHTML.indexOf(", Ice (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					clothesRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBlarmor").checked == true) {
			let x, i = 0;
			let larmorTable = document.getElementById("larmor");
			let larmorRows = larmorTable.rows;
			
			for(i = 1; i < (larmorRows.length); i++) {
				x = larmorRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Ice (+") != -1 || x.innerHTML.indexOf(", Ice (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					larmorRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBharmor").checked == true) {
			let x, i = 0;
			let harmorTable = document.getElementById("harmor");
			let harmorRows = harmorTable.rows;
			
			for(i = 1; i < (harmorRows.length); i++) {
				x = harmorRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Ice (+") != -1 || x.innerHTML.indexOf(", Ice (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					harmorRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBrobe").checked == true) {
			let x, i = 0;
			let robeTable = document.getElementById("robe");
			let robeRows = robeTable.rows;
			
			for(i = 1; i < (robeRows.length); i++) {
				x = robeRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Ice (+") != -1 || x.innerHTML.indexOf(", Ice (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					robeRows[i].style.display = "none";
				}
			}
		}
	}
});

let lightningIcon = document.querySelector("img[id=lightningicon]");
lightningIcon.addEventListener('click', function() {
	let brightImg = "../../resources/lightning.png";
	let darkImg = "../../resources/darklightning.png";
	// Include any equipment with lightning element
	if(document.getElementById("lightningicon").getAttribute('src') == darkImg) {
		document.getElementById("lightningicon").src = brightImg;
		document.getElementById("CBlightning").checked = true;
		
		// Include any light shields with lightning resistance in search
		if(document.getElementById("CBlshield").checked == true) {
			let x, i = 0;
			let lshieldTable = document.getElementById("lshield");
			let lshieldRows = lshieldTable.rows;
			
			for(i = 1; i < (lshieldRows.length); i++) {
				x = lshieldRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Lightning (+") != -1 || x.innerHTML.indexOf(", Lightning (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					lshieldRows[i].style.display = "";
				}
			}
		}
		// Include any heavy shields with lightning resistance in search
		if(document.getElementById("CBhshield").checked == true) {
			let x, i = 0;
			let hshieldTable = document.getElementById("hshield");
			let hshieldRows = hshieldTable.rows;
			
			for(i = 1; i < (hshieldRows.length); i++) {
				x = hshieldRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Lightning (+") != -1 || x.innerHTML.indexOf(", Lightning (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					hshieldRows[i].style.display = "";
				}
			}
		}
		// Include any hats with lightning resistance in search
		if(document.getElementById("CBhat").checked == true) {
			let x, i = 0;
			let hatTable = document.getElementById("hat");
			let hatRows = hatTable.rows;
			
			for(i = 1; i < (hatRows.length); i++) {
				x = hatRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Lightning (+") != -1 || x.innerHTML.indexOf(", Lightning (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					hatRows[i].style.display = "";
				}
			}
		}
		// Include any helms with lightning resistance in search
		if(document.getElementById("CBhelm").checked == true) {
			let x, i = 0;
			let helmTable = document.getElementById("helm");
			let helmRows = helmTable.rows;
			
			for(i = 1; i < (helmRows.length); i++) {
				x = helmRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Lightning (+") != -1 || x.innerHTML.indexOf(", Lightning (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					helmRows[i].style.display = "";
				}
			}
		}
		// Include any clothes with lightning resistance in search
		if(document.getElementById("CBclothes").checked == true) {
			let x, i = 0;
			let clothesTable = document.getElementById("clothes");
			let clothesRows = clothesTable.rows;
			
			for(i = 1; i < (clothesRows.length); i++) {
				x = clothesRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Lightning (+") != -1 || x.innerHTML.indexOf(", Lightning (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					clothesRows[i].style.display = "";
				}
			}
		}
		// Include any light armor with lightning resistance in search
		if(document.getElementById("CBlarmor").checked == true) {
			let x, i = 0;
			let larmorTable = document.getElementById("larmor");
			let larmorRows = larmorTable.rows;
			
			for(i = 1; i < (larmorRows.length); i++) {
				x = larmorRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Lightning (+") != -1 || x.innerHTML.indexOf(", Lightning (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					larmorRows[i].style.display = "";
				}
			}
		}
		// Include any heavy armor with lightning resistance in search
		if(document.getElementById("CBharmor").checked == true) {
			let x, i = 0;
			let harmorTable = document.getElementById("harmor");
			let harmorRows = harmorTable.rows;
			
			for(i = 1; i < (harmorRows.length); i++) {
				x = harmorRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Lightning (+") != -1 || x.innerHTML.indexOf(", Lightning (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					harmorRows[i].style.display = "";
				}
			}
		}
		// Include any robes with lightning resistance in search
		if(document.getElementById("CBrobe").checked == true) {
			let x, i = 0;
			let robeTable = document.getElementById("robe");
			let robeRows = robeTable.rows;
			
			for(i = 1; i < (robeRows.length); i++) {
				x = robeRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Lightning (+") != -1 || x.innerHTML.indexOf(", Lightning (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					robeRows[i].style.display = "";
				}
			}
		}
	}
	else {
		document.getElementById("lightningicon").src = darkImg;
		document.getElementById("CBlightning").checked = false;
		
		if(document.getElementById("CBlshield").checked == true) {
			let x, i = 0;
			let lshieldTable = document.getElementById("lshield");
			let lshieldRows = lshieldTable.rows;
			
			for(i = 1; i < (lshieldRows.length); i++) {
				x = lshieldRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Lightning (+") != -1 || x.innerHTML.indexOf(", Lightning (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					lshieldRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBhshield").checked == true) {
			let x, i = 0;
			let hshieldTable = document.getElementById("hshield");
			let hshieldRows = hshieldTable.rows;
			
			for(i = 1; i < (hshieldRows.length); i++) {
				x = hshieldRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Lightning (+") != -1 || x.innerHTML.indexOf(", Lightning (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					hshieldRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBhat").checked == true) {
			let x, i = 0;
			let hatTable = document.getElementById("hat");
			let hatRows = hatTable.rows;
			
			for(i = 1; i < (hatRows.length); i++) {
				x = hatRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Lightning (+") != -1 || x.innerHTML.indexOf(", Lightning (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					hatRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBhelm").checked == true) {
			let x, i = 0;
			let helmTable = document.getElementById("helm");
			let helmRows = helmTable.rows;
			
			for(i = 1; i < (helmRows.length); i++) {
				x = helmRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Lightning (+") != -1 || x.innerHTML.indexOf(", Lightning (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					helmRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBclothes").checked == true) {
			let x, i = 0;
			let clothesTable = document.getElementById("clothes");
			let clothesRows = clothesTable.rows;
			
			for(i = 1; i < (clothesRows.length); i++) {
				x = clothesRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Lightning (+") != -1 || x.innerHTML.indexOf(", Lightning (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					clothesRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBlarmor").checked == true) {
			let x, i = 0;
			let larmorTable = document.getElementById("larmor");
			let larmorRows = larmorTable.rows;
			
			for(i = 1; i < (larmorRows.length); i++) {
				x = larmorRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Lightning (+") != -1 || x.innerHTML.indexOf(", Lightning (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					larmorRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBharmor").checked == true) {
			let x, i = 0;
			let harmorTable = document.getElementById("harmor");
			let harmorRows = harmorTable.rows;
			
			for(i = 1; i < (harmorRows.length); i++) {
				x = harmorRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Lightning (+") != -1 || x.innerHTML.indexOf(", Lightning (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					harmorRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBrobe").checked == true) {
			let x, i = 0;
			let robeTable = document.getElementById("robe");
			let robeRows = robeTable.rows;
			
			for(i = 1; i < (robeRows.length); i++) {
				x = robeRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Lightning (+") != -1 || x.innerHTML.indexOf(", Lightning (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					robeRows[i].style.display = "none";
				}
			}
		}
	}
});

let waterIcon = document.querySelector("img[id=watericon]");
waterIcon.addEventListener('click', function() {
	let brightImg = "../../resources/water.png";
	let darkImg = "../../resources/darkwater.png";
	if(document.getElementById("watericon").getAttribute('src') == darkImg) {
		document.getElementById("watericon").src = brightImg;
		document.getElementById("CBwater").checked = true;
		
		// Include any light shields with water resistance in search
		if(document.getElementById("CBlshield").checked == true) {
			let x, i = 0;
			let lshieldTable = document.getElementById("lshield");
			let lshieldRows = lshieldTable.rows;
			
			for(i = 1; i < (lshieldRows.length); i++) {
				x = lshieldRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Water (+") != -1 || x.innerHTML.indexOf(", Water (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					lshieldRows[i].style.display = "";
				}
			}
		}
		// Include any heavy shields with water resistance in search
		if(document.getElementById("CBhshield").checked == true) {
			let x, i = 0;
			let hshieldTable = document.getElementById("hshield");
			let hshieldRows = hshieldTable.rows;
			
			for(i = 1; i < (hshieldRows.length); i++) {
				x = hshieldRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Water (+") != -1 || x.innerHTML.indexOf(", Water (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					hshieldRows[i].style.display = "";
				}
			}
		}
		// Include any hats with water resistance in search
		if(document.getElementById("CBhat").checked == true) {
			let x, i = 0;
			let hatTable = document.getElementById("hat");
			let hatRows = hatTable.rows;
			
			for(i = 1; i < (hatRows.length); i++) {
				x = hatRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Water (+") != -1 || x.innerHTML.indexOf(", Water (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					hatRows[i].style.display = "";
				}
			}
		}
		// Include any helms with water resistance in search
		if(document.getElementById("CBhelm").checked == true) {
			let x, i = 0;
			let helmTable = document.getElementById("helm");
			let helmRows = helmTable.rows;
			
			for(i = 1; i < (helmRows.length); i++) {
				x = helmRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Water (+") != -1 || x.innerHTML.indexOf(", Water (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					helmRows[i].style.display = "";
				}
			}
		}
		// Include any clothes with water resistance in search
		if(document.getElementById("CBclothes").checked == true) {
			let x, i = 0;
			let clothesTable = document.getElementById("clothes");
			let clothesRows = clothesTable.rows;
			
			for(i = 1; i < (clothesRows.length); i++) {
				x = clothesRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Water (+") != -1 || x.innerHTML.indexOf(", Water (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					clothesRows[i].style.display = "";
				}
			}
		}
		// Include any light armor with water resistance in search
		if(document.getElementById("CBlarmor").checked == true) {
			let x, i = 0;
			let larmorTable = document.getElementById("larmor");
			let larmorRows = larmorTable.rows;
			
			for(i = 1; i < (larmorRows.length); i++) {
				x = larmorRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Water (+") != -1 || x.innerHTML.indexOf(", Water (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					larmorRows[i].style.display = "";
				}
			}
		}
		// Include any heavy armor with water resistance in search
		if(document.getElementById("CBharmor").checked == true) {
			let x, i = 0;
			let harmorTable = document.getElementById("harmor");
			let harmorRows = harmorTable.rows;
			
			for(i = 1; i < (harmorRows.length); i++) {
				x = harmorRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Water (+") != -1 || x.innerHTML.indexOf(", Water (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					harmorRows[i].style.display = "";
				}
			}
		}
		// Include any robes with water resistance in search
		if(document.getElementById("CBrobe").checked == true) {
			let x, i = 0;
			let robeTable = document.getElementById("robe");
			let robeRows = robeTable.rows;
			
			for(i = 1; i < (robeRows.length); i++) {
				x = robeRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Water (+") != -1 || x.innerHTML.indexOf(", Water (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					robeRows[i].style.display = "";
				}
			}
		}
	}
	else {
		document.getElementById("watericon").src = darkImg;
		document.getElementById("CBwater").checked = false;
		
		if(document.getElementById("CBlshield").checked == true) {
			let x, i = 0;
			let lshieldTable = document.getElementById("lshield");
			let lshieldRows = lshieldTable.rows;
			
			for(i = 1; i < (lshieldRows.length); i++) {
				x = lshieldRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Water (+") != -1 || x.innerHTML.indexOf(", Water (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					lshieldRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBhshield").checked == true) {
			let x, i = 0;
			let hshieldTable = document.getElementById("hshield");
			let hshieldRows = hshieldTable.rows;
			
			for(i = 1; i < (hshieldRows.length); i++) {
				x = hshieldRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Water (+") != -1 || x.innerHTML.indexOf(", Water (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					hshieldRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBhat").checked == true) {
			let x, i = 0;
			let hatTable = document.getElementById("hat");
			let hatRows = hatTable.rows;
			
			for(i = 1; i < (hatRows.length); i++) {
				x = hatRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Water (+") != -1 || x.innerHTML.indexOf(", Water (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					hatRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBhelm").checked == true) {
			let x, i = 0;
			let helmTable = document.getElementById("helm");
			let helmRows = helmTable.rows;
			
			for(i = 1; i < (helmRows.length); i++) {
				x = helmRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Water (+") != -1 || x.innerHTML.indexOf(", Water (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					helmRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBclothes").checked == true) {
			let x, i = 0;
			let clothesTable = document.getElementById("clothes");
			let clothesRows = clothesTable.rows;
			
			for(i = 1; i < (clothesRows.length); i++) {
				x = clothesRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Water (+") != -1 || x.innerHTML.indexOf(", Water (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					clothesRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBlarmor").checked == true) {
			let x, i = 0;
			let larmorTable = document.getElementById("larmor");
			let larmorRows = larmorTable.rows;
			
			for(i = 1; i < (larmorRows.length); i++) {
				x = larmorRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Water (+") != -1 || x.innerHTML.indexOf(", Water (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					larmorRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBharmor").checked == true) {
			let x, i = 0;
			let harmorTable = document.getElementById("harmor");
			let harmorRows = harmorTable.rows;
			
			for(i = 1; i < (harmorRows.length); i++) {
				x = harmorRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Water (+") != -1 || x.innerHTML.indexOf(", Water (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					harmorRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBrobe").checked == true) {
			let x, i = 0;
			let robeTable = document.getElementById("robe");
			let robeRows = robeTable.rows;
			
			for(i = 1; i < (robeRows.length); i++) {
				x = robeRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Water (+") != -1 || x.innerHTML.indexOf(", Water (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					robeRows[i].style.display = "none";
				}
			}
		}
	}
});

let windIcon = document.querySelector("img[id=windicon]");
windIcon.addEventListener('click', function() {
	let brightImg = "../../resources/wind.png";
	let darkImg = "../../resources/darkwind.png";
	if(document.getElementById("windicon").getAttribute('src') == darkImg) {
		document.getElementById("windicon").src = brightImg;
		document.getElementById("CBwind").checked = true;
		
		// Include any light shields with wind resistance in search
		if(document.getElementById("CBlshield").checked == true) {
			let x, i = 0;
			let lshieldTable = document.getElementById("lshield");
			let lshieldRows = lshieldTable.rows;
			
			for(i = 1; i < (lshieldRows.length); i++) {
				x = lshieldRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Wind (+") != -1 || x.innerHTML.indexOf(", Wind (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					lshieldRows[i].style.display = "";
				}
			}
		}
		// Include any heavy shields with wind resistance in search
		if(document.getElementById("CBhshield").checked == true) {
			let x, i = 0;
			let hshieldTable = document.getElementById("hshield");
			let hshieldRows = hshieldTable.rows;
			
			for(i = 1; i < (hshieldRows.length); i++) {
				x = hshieldRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Wind (+") != -1 || x.innerHTML.indexOf(", Wind (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					hshieldRows[i].style.display = "";
				}
			}
		}
		// Include any hats with wind resistance in search
		if(document.getElementById("CBhat").checked == true) {
			let x, i = 0;
			let hatTable = document.getElementById("hat");
			let hatRows = hatTable.rows;
			
			for(i = 1; i < (hatRows.length); i++) {
				x = hatRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Wind (+") != -1 || x.innerHTML.indexOf(", Wind (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					hatRows[i].style.display = "";
				}
			}
		}
		// Include any helms with wind resistance in search
		if(document.getElementById("CBhelm").checked == true) {
			let x, i = 0;
			let helmTable = document.getElementById("helm");
			let helmRows = helmTable.rows;
			
			for(i = 1; i < (helmRows.length); i++) {
				x = helmRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Wind (+") != -1 || x.innerHTML.indexOf(", Wind (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					helmRows[i].style.display = "";
				}
			}
		}
		// Include any clothes with wind resistance in search
		if(document.getElementById("CBclothes").checked == true) {
			let x, i = 0;
			let clothesTable = document.getElementById("clothes");
			let clothesRows = clothesTable.rows;
			
			for(i = 1; i < (clothesRows.length); i++) {
				x = clothesRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Wind (+") != -1 || x.innerHTML.indexOf(", Wind (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					clothesRows[i].style.display = "";
				}
			}
		}
		// Include any light armor with wind resistance in search
		if(document.getElementById("CBlarmor").checked == true) {
			let x, i = 0;
			let larmorTable = document.getElementById("larmor");
			let larmorRows = larmorTable.rows;
			
			for(i = 1; i < (larmorRows.length); i++) {
				x = larmorRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Wind (+") != -1 || x.innerHTML.indexOf(", Wind (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					larmorRows[i].style.display = "";
				}
			}
		}
		// Include any heavy armor with wind resistance in search
		if(document.getElementById("CBharmor").checked == true) {
			let x, i = 0;
			let harmorTable = document.getElementById("harmor");
			let harmorRows = harmorTable.rows;
			
			for(i = 1; i < (harmorRows.length); i++) {
				x = harmorRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Wind (+") != -1 || x.innerHTML.indexOf(", Wind (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					harmorRows[i].style.display = "";
				}
			}
		}
		// Include any robes with wind resistance in search
		if(document.getElementById("CBrobe").checked == true) {
			let x, i = 0;
			let robeTable = document.getElementById("robe");
			let robeRows = robeTable.rows;
			
			for(i = 1; i < (robeRows.length); i++) {
				x = robeRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Wind (+") != -1 || x.innerHTML.indexOf(", Wind (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					robeRows[i].style.display = "";
				}
			}
		}
	}
	else {
		document.getElementById("windicon").src = darkImg;
		document.getElementById("CBwind").checked = false;
		
		if(document.getElementById("CBlshield").checked == true) {
			let x, i = 0;
			let lshieldTable = document.getElementById("lshield");
			let lshieldRows = lshieldTable.rows;
			
			for(i = 1; i < (lshieldRows.length); i++) {
				x = lshieldRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Wind (+") != -1 || x.innerHTML.indexOf(", Wind (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					lshieldRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBhshield").checked == true) {
			let x, i = 0;
			let hshieldTable = document.getElementById("hshield");
			let hshieldRows = hshieldTable.rows;
			
			for(i = 1; i < (hshieldRows.length); i++) {
				x = hshieldRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Wind (+") != -1 || x.innerHTML.indexOf(", Wind (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					hshieldRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBhat").checked == true) {
			let x, i = 0;
			let hatTable = document.getElementById("hat");
			let hatRows = hatTable.rows;
			
			for(i = 1; i < (hatRows.length); i++) {
				x = hatRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Wind (+") != -1 || x.innerHTML.indexOf(", Wind (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					hatRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBhelm").checked == true) {
			let x, i = 0;
			let helmTable = document.getElementById("helm");
			let helmRows = helmTable.rows;
			
			for(i = 1; i < (helmRows.length); i++) {
				x = helmRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Wind (+") != -1 || x.innerHTML.indexOf(", Wind (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					helmRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBclothes").checked == true) {
			let x, i = 0;
			let clothesTable = document.getElementById("clothes");
			let clothesRows = clothesTable.rows;
			
			for(i = 1; i < (clothesRows.length); i++) {
				x = clothesRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Wind (+") != -1 || x.innerHTML.indexOf(", Wind (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					clothesRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBlarmor").checked == true) {
			let x, i = 0;
			let larmorTable = document.getElementById("larmor");
			let larmorRows = larmorTable.rows;
			
			for(i = 1; i < (larmorRows.length); i++) {
				x = larmorRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Wind (+") != -1 || x.innerHTML.indexOf(", Wind (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					larmorRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBharmor").checked == true) {
			let x, i = 0;
			let harmorTable = document.getElementById("harmor");
			let harmorRows = harmorTable.rows;
			
			for(i = 1; i < (harmorRows.length); i++) {
				x = harmorRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Wind (+") != -1 || x.innerHTML.indexOf(", Wind (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					harmorRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBrobe").checked == true) {
			let x, i = 0;
			let robeTable = document.getElementById("robe");
			let robeRows = robeTable.rows;
			
			for(i = 1; i < (robeRows.length); i++) {
				x = robeRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Wind (+") != -1 || x.innerHTML.indexOf(", Wind (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					robeRows[i].style.display = "none";
				}
			}
		}
	}
});

let earthIcon = document.querySelector("img[id=earthicon]");
earthIcon.addEventListener('click', function() {
	let brightImg = "../../resources/earth.png";
	let darkImg = "../../resources/darkearth.png";
	if(document.getElementById("earthicon").getAttribute('src') == darkImg) {
		document.getElementById("earthicon").src = brightImg;
		document.getElementById("CBearth").checked = true;
		
		// Include any light shields with earth resistance in search
		if(document.getElementById("CBlshield").checked == true) {
			let x, i = 0;
			let lshieldTable = document.getElementById("lshield");
			let lshieldRows = lshieldTable.rows;
			
			for(i = 1; i < (lshieldRows.length); i++) {
				x = lshieldRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Earth (+") != -1 || x.innerHTML.indexOf(", Earth (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					lshieldRows[i].style.display = "";
				}
			}
		}
		// Include any heavy shields with earth resistance in search
		if(document.getElementById("CBhshield").checked == true) {
			let x, i = 0;
			let hshieldTable = document.getElementById("hshield");
			let hshieldRows = hshieldTable.rows;
			
			for(i = 1; i < (hshieldRows.length); i++) {
				x = hshieldRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Earth (+") != -1 || x.innerHTML.indexOf(", Earth (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					hshieldRows[i].style.display = "";
				}
			}
		}
		// Include any hats with earth resistance in search
		if(document.getElementById("CBhat").checked == true) {
			let x, i = 0;
			let hatTable = document.getElementById("hat");
			let hatRows = hatTable.rows;
			
			for(i = 1; i < (hatRows.length); i++) {
				x = hatRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Earth (+") != -1 || x.innerHTML.indexOf(", Earth (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					hatRows[i].style.display = "";
				}
			}
		}
		// Include any helms with earth resistance in search
		if(document.getElementById("CBhelm").checked == true) {
			let x, i = 0;
			let helmTable = document.getElementById("helm");
			let helmRows = helmTable.rows;
			
			for(i = 1; i < (helmRows.length); i++) {
				x = helmRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Earth (+") != -1 || x.innerHTML.indexOf(", Earth (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					helmRows[i].style.display = "";
				}
			}
		}
		// Include any clothes with earth resistance in search
		if(document.getElementById("CBclothes").checked == true) {
			let x, i = 0;
			let clothesTable = document.getElementById("clothes");
			let clothesRows = clothesTable.rows;
			
			for(i = 1; i < (clothesRows.length); i++) {
				x = clothesRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Earth (+") != -1 || x.innerHTML.indexOf(", Earth (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					clothesRows[i].style.display = "";
				}
			}
		}
		// Include any light armor with earth resistance in search
		if(document.getElementById("CBlarmor").checked == true) {
			let x, i = 0;
			let larmorTable = document.getElementById("larmor");
			let larmorRows = larmorTable.rows;
			
			for(i = 1; i < (larmorRows.length); i++) {
				x = larmorRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Earth (+") != -1 || x.innerHTML.indexOf(", Earth (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					larmorRows[i].style.display = "";
				}
			}
		}
		// Include any heavy armor with earth resistance in search
		if(document.getElementById("CBharmor").checked == true) {
			let x, i = 0;
			let harmorTable = document.getElementById("harmor");
			let harmorRows = harmorTable.rows;
			
			for(i = 1; i < (harmorRows.length); i++) {
				x = harmorRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Earth (+") != -1 || x.innerHTML.indexOf(", Earth (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					harmorRows[i].style.display = "";
				}
			}
		}
		// Include any robes with earth resistance in search
		if(document.getElementById("CBrobe").checked == true) {
			let x, i = 0;
			let robeTable = document.getElementById("robe");
			let robeRows = robeTable.rows;
			
			for(i = 1; i < (robeRows.length); i++) {
				x = robeRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Earth (+") != -1 || x.innerHTML.indexOf(", Earth (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					robeRows[i].style.display = "";
				}
			}
		}
	}
	else {
		document.getElementById("earthicon").src = darkImg;
		document.getElementById("CBearth").checked = false;
		
		if(document.getElementById("CBlshield").checked == true) {
			let x, i = 0;
			let lshieldTable = document.getElementById("lshield");
			let lshieldRows = lshieldTable.rows;
			
			for(i = 1; i < (lshieldRows.length); i++) {
				x = lshieldRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Earth (+") != -1 || x.innerHTML.indexOf(", Earth (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					lshieldRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBhshield").checked == true) {
			let x, i = 0;
			let hshieldTable = document.getElementById("hshield");
			let hshieldRows = hshieldTable.rows;
			
			for(i = 1; i < (hshieldRows.length); i++) {
				x = hshieldRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Earth (+") != -1 || x.innerHTML.indexOf(", Earth (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					hshieldRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBhat").checked == true) {
			let x, i = 0;
			let hatTable = document.getElementById("hat");
			let hatRows = hatTable.rows;
			
			for(i = 1; i < (hatRows.length); i++) {
				x = hatRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Earth (+") != -1 || x.innerHTML.indexOf(", Earth (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					hatRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBhelm").checked == true) {
			let x, i = 0;
			let helmTable = document.getElementById("helm");
			let helmRows = helmTable.rows;
			
			for(i = 1; i < (helmRows.length); i++) {
				x = helmRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Earth (+") != -1 || x.innerHTML.indexOf(", Earth (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					helmRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBclothes").checked == true) {
			let x, i = 0;
			let clothesTable = document.getElementById("clothes");
			let clothesRows = clothesTable.rows;
			
			for(i = 1; i < (clothesRows.length); i++) {
				x = clothesRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Earth (+") != -1 || x.innerHTML.indexOf(", Earth (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					clothesRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBlarmor").checked == true) {
			let x, i = 0;
			let larmorTable = document.getElementById("larmor");
			let larmorRows = larmorTable.rows;
			
			for(i = 1; i < (larmorRows.length); i++) {
				x = larmorRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Earth (+") != -1 || x.innerHTML.indexOf(", Earth (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					larmorRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBharmor").checked == true) {
			let x, i = 0;
			let harmorTable = document.getElementById("harmor");
			let harmorRows = harmorTable.rows;
			
			for(i = 1; i < (harmorRows.length); i++) {
				x = harmorRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Earth (+") != -1 || x.innerHTML.indexOf(", Earth (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					harmorRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBrobe").checked == true) {
			let x, i = 0;
			let robeTable = document.getElementById("robe");
			let robeRows = robeTable.rows;
			
			for(i = 1; i < (robeRows.length); i++) {
				x = robeRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Earth (+") != -1 || x.innerHTML.indexOf(", Earth (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					robeRows[i].style.display = "none";
				}
			}
		}
	}
});

let lightIcon = document.querySelector("img[id=lighticon]");
lightIcon.addEventListener('click', function() {
	let brightImg = "../../resources/light.png";
	let darkImg = "../../resources/darklight.png";
	if(document.getElementById("lighticon").getAttribute('src') == darkImg) {
		document.getElementById("lighticon").src = brightImg;
		document.getElementById("CBlight").checked = true;
		
		// Include any light shields with light resistance in search
		if(document.getElementById("CBlshield").checked == true) {
			let x, i = 0;
			let lshieldTable = document.getElementById("lshield");
			let lshieldRows = lshieldTable.rows;
			
			for(i = 1; i < (lshieldRows.length); i++) {
				x = lshieldRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Light (+") != -1 || x.innerHTML.indexOf(", Light (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					lshieldRows[i].style.display = "";
				}
			}
		}
		// Include any heavy shields with light resistance in search
		if(document.getElementById("CBhshield").checked == true) {
			let x, i = 0;
			let hshieldTable = document.getElementById("hshield");
			let hshieldRows = hshieldTable.rows;
			
			for(i = 1; i < (hshieldRows.length); i++) {
				x = hshieldRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Light (+") != -1 || x.innerHTML.indexOf(", Light (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					hshieldRows[i].style.display = "";
				}
			}
		}
		// Include any hats with light resistance in search
		if(document.getElementById("CBhat").checked == true) {
			let x, i = 0;
			let hatTable = document.getElementById("hat");
			let hatRows = hatTable.rows;
			
			for(i = 1; i < (hatRows.length); i++) {
				x = hatRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Light (+") != -1 || x.innerHTML.indexOf(", Light (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					hatRows[i].style.display = "";
				}
			}
		}
		// Include any helms with light resistance in search
		if(document.getElementById("CBhelm").checked == true) {
			let x, i = 0;
			let helmTable = document.getElementById("helm");
			let helmRows = helmTable.rows;
			
			for(i = 1; i < (helmRows.length); i++) {
				x = helmRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Light (+") != -1 || x.innerHTML.indexOf(", Light (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					helmRows[i].style.display = "";
				}
			}
		}
		// Include any clothes with light resistance in search
		if(document.getElementById("CBclothes").checked == true) {
			let x, i = 0;
			let clothesTable = document.getElementById("clothes");
			let clothesRows = clothesTable.rows;
			
			for(i = 1; i < (clothesRows.length); i++) {
				x = clothesRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Light (+") != -1 || x.innerHTML.indexOf(", Light (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					clothesRows[i].style.display = "";
				}
			}
		}
		// Include any light armor with light resistance in search
		if(document.getElementById("CBlarmor").checked == true) {
			let x, i = 0;
			let larmorTable = document.getElementById("larmor");
			let larmorRows = larmorTable.rows;
			
			for(i = 1; i < (larmorRows.length); i++) {
				x = larmorRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Light (+") != -1 || x.innerHTML.indexOf(", Light (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					larmorRows[i].style.display = "";
				}
			}
		}
		// Include any heavy armor with light resistance in search
		if(document.getElementById("CBharmor").checked == true) {
			let x, i = 0;
			let harmorTable = document.getElementById("harmor");
			let harmorRows = harmorTable.rows;
			
			for(i = 1; i < (harmorRows.length); i++) {
				x = harmorRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Light (+") != -1 || x.innerHTML.indexOf(", Light (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					harmorRows[i].style.display = "";
				}
			}
		}
		// Include any robes with light resistance in search
		if(document.getElementById("CBrobe").checked == true) {
			let x, i = 0;
			let robeTable = document.getElementById("robe");
			let robeRows = robeTable.rows;
			
			for(i = 1; i < (robeRows.length); i++) {
				x = robeRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Light (+") != -1 || x.innerHTML.indexOf(", Light (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					robeRows[i].style.display = "";
				}
			}
		}
	}
	else {
		document.getElementById("lighticon").src = darkImg;
		document.getElementById("CBlight").checked = false;
		
		if(document.getElementById("CBlshield").checked == true) {
			let x, i = 0;
			let lshieldTable = document.getElementById("lshield");
			let lshieldRows = lshieldTable.rows;
			
			for(i = 1; i < (lshieldRows.length); i++) {
				x = lshieldRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Light (+") != -1 || x.innerHTML.indexOf(", Light (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					lshieldRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBhshield").checked == true) {
			let x, i = 0;
			let hshieldTable = document.getElementById("hshield");
			let hshieldRows = hshieldTable.rows;
			
			for(i = 1; i < (hshieldRows.length); i++) {
				x = hshieldRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Light (+") != -1 || x.innerHTML.indexOf(", Light (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					hshieldRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBhat").checked == true) {
			let x, i = 0;
			let hatTable = document.getElementById("hat");
			let hatRows = hatTable.rows;
			
			for(i = 1; i < (hatRows.length); i++) {
				x = hatRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Light (+") != -1 || x.innerHTML.indexOf(", Light (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					hatRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBhelm").checked == true) {
			let x, i = 0;
			let helmTable = document.getElementById("helm");
			let helmRows = helmTable.rows;
			
			for(i = 1; i < (helmRows.length); i++) {
				x = helmRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Light (+") != -1 || x.innerHTML.indexOf(", Light (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					helmRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBclothes").checked == true) {
			let x, i = 0;
			let clothesTable = document.getElementById("clothes");
			let clothesRows = clothesTable.rows;
			
			for(i = 1; i < (clothesRows.length); i++) {
				x = clothesRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Light (+") != -1 || x.innerHTML.indexOf(", Light (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					clothesRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBlarmor").checked == true) {
			let x, i = 0;
			let larmorTable = document.getElementById("larmor");
			let larmorRows = larmorTable.rows;
			
			for(i = 1; i < (larmorRows.length); i++) {
				x = larmorRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Light (+") != -1 || x.innerHTML.indexOf(", Light (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					larmorRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBharmor").checked == true) {
			let x, i = 0;
			let harmorTable = document.getElementById("harmor");
			let harmorRows = harmorTable.rows;
			
			for(i = 1; i < (harmorRows.length); i++) {
				x = harmorRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Light (+") != -1 || x.innerHTML.indexOf(", Light (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					harmorRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBrobe").checked == true) {
			let x, i = 0;
			let robeTable = document.getElementById("robe");
			let robeRows = robeTable.rows;
			
			for(i = 1; i < (robeRows.length); i++) {
				x = robeRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Light (+") != -1 || x.innerHTML.indexOf(", Light (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					robeRows[i].style.display = "none";
				}
			}
		}
	}
});

let darkIcon = document.querySelector("img[id=darkicon]");
darkIcon.addEventListener('click', function() {
	let brightImg = "../../resources/dark.png";
	let darkImg = "../../resources/darkdark.png";
	if(document.getElementById("darkicon").getAttribute('src') == darkImg) {
		document.getElementById("darkicon").src = brightImg;
		document.getElementById("CBdark").checked = true;
		
		// Include any light shields with dark resistance in search
		if(document.getElementById("CBlshield").checked == true) {
			let x, i = 0;
			let lshieldTable = document.getElementById("lshield");
			let lshieldRows = lshieldTable.rows;
			
			for(i = 1; i < (lshieldRows.length); i++) {
				x = lshieldRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Dark (+") != -1 || x.innerHTML.indexOf(", Dark (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					lshieldRows[i].style.display = "";
				}
			}
		}
		// Include any heavy shields with dark resistance in search
		if(document.getElementById("CBhshield").checked == true) {
			let x, i = 0;
			let hshieldTable = document.getElementById("hshield");
			let hshieldRows = hshieldTable.rows;
			
			for(i = 1; i < (hshieldRows.length); i++) {
				x = hshieldRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Dark (+") != -1 || x.innerHTML.indexOf(", Dark (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					hshieldRows[i].style.display = "";
				}
			}
		}
		// Include any hats with dark resistance in search
		if(document.getElementById("CBhat").checked == true) {
			let x, i = 0;
			let hatTable = document.getElementById("hat");
			let hatRows = hatTable.rows;
			
			for(i = 1; i < (hatRows.length); i++) {
				x = hatRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Dark (+") != -1 || x.innerHTML.indexOf(", Dark (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					hatRows[i].style.display = "";
				}
			}
		}
		// Include any helms with dark resistance in search
		if(document.getElementById("CBhelm").checked == true) {
			let x, i = 0;
			let helmTable = document.getElementById("helm");
			let helmRows = helmTable.rows;
			
			for(i = 1; i < (helmRows.length); i++) {
				x = helmRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Dark (+") != -1 || x.innerHTML.indexOf(", Dark (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					helmRows[i].style.display = "";
				}
			}
		}
		// Include any clothes with dark resistance in search
		if(document.getElementById("CBclothes").checked == true) {
			let x, i = 0;
			let clothesTable = document.getElementById("clothes");
			let clothesRows = clothesTable.rows;
			
			for(i = 1; i < (clothesRows.length); i++) {
				x = clothesRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Dark (+") != -1 || x.innerHTML.indexOf(", Dark (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					clothesRows[i].style.display = "";
				}
			}
		}
		// Include any light armor with dark resistance in search
		if(document.getElementById("CBlarmor").checked == true) {
			let x, i = 0;
			let larmorTable = document.getElementById("larmor");
			let larmorRows = larmorTable.rows;
			
			for(i = 1; i < (larmorRows.length); i++) {
				x = larmorRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Dark (+") != -1 || x.innerHTML.indexOf(", Dark (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					larmorRows[i].style.display = "";
				}
			}
		}
		// Include any heavy armor with dark resistance in search
		if(document.getElementById("CBharmor").checked == true) {
			let x, i = 0;
			let harmorTable = document.getElementById("harmor");
			let harmorRows = harmorTable.rows;
			
			for(i = 1; i < (harmorRows.length); i++) {
				x = harmorRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Dark (+") != -1 || x.innerHTML.indexOf(", Dark (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					harmorRows[i].style.display = "";
				}
			}
		}
		// Include any robes with dark resistance in search
		if(document.getElementById("CBrobe").checked == true) {
			let x, i = 0;
			let robeTable = document.getElementById("robe");
			let robeRows = robeTable.rows;
			
			for(i = 1; i < (robeRows.length); i++) {
				x = robeRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Dark (+") != -1 || x.innerHTML.indexOf(", Dark (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					robeRows[i].style.display = "";
				}
			}
		}
	}
	else {
		document.getElementById("darkicon").src = darkImg;
		document.getElementById("CBdark").checked = false;
		
		if(document.getElementById("CBlshield").checked == true) {
			let x, i = 0;
			let lshieldTable = document.getElementById("lshield");
			let lshieldRows = lshieldTable.rows;
			
			for(i = 1; i < (lshieldRows.length); i++) {
				x = lshieldRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Dark (+") != -1 || x.innerHTML.indexOf(", Dark (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					lshieldRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBhshield").checked == true) {
			let x, i = 0;
			let hshieldTable = document.getElementById("hshield");
			let hshieldRows = hshieldTable.rows;
			
			for(i = 1; i < (hshieldRows.length); i++) {
				x = hshieldRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Dark (+") != -1 || x.innerHTML.indexOf(", Dark (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					hshieldRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBhat").checked == true) {
			let x, i = 0;
			let hatTable = document.getElementById("hat");
			let hatRows = hatTable.rows;
			
			for(i = 1; i < (hatRows.length); i++) {
				x = hatRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Dark (+") != -1 || x.innerHTML.indexOf(", Dark (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					hatRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBhelm").checked == true) {
			let x, i = 0;
			let helmTable = document.getElementById("helm");
			let helmRows = helmTable.rows;
			
			for(i = 1; i < (helmRows.length); i++) {
				x = helmRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Dark (+") != -1 || x.innerHTML.indexOf(", Dark (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					helmRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBclothes").checked == true) {
			let x, i = 0;
			let clothesTable = document.getElementById("clothes");
			let clothesRows = clothesTable.rows;
			
			for(i = 1; i < (clothesRows.length); i++) {
				x = clothesRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Dark (+") != -1 || x.innerHTML.indexOf(", Dark (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					clothesRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBlarmor").checked == true) {
			let x, i = 0;
			let larmorTable = document.getElementById("larmor");
			let larmorRows = larmorTable.rows;
			
			for(i = 1; i < (larmorRows.length); i++) {
				x = larmorRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Dark (+") != -1 || x.innerHTML.indexOf(", Dark (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					larmorRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBharmor").checked == true) {
			let x, i = 0;
			let harmorTable = document.getElementById("harmor");
			let harmorRows = harmorTable.rows;
			
			for(i = 1; i < (harmorRows.length); i++) {
				x = harmorRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Dark (+") != -1 || x.innerHTML.indexOf(", Dark (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					harmorRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBrobe").checked == true) {
			let x, i = 0;
			let robeTable = document.getElementById("robe");
			let robeRows = robeTable.rows;
			
			for(i = 1; i < (robeRows.length); i++) {
				x = robeRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Resistance: Dark (+") != -1 || x.innerHTML.indexOf(", Dark (+") != -1 ||
						x.innerHTML.indexOf("Resistance: All elements (+") != -1) {
					robeRows[i].style.display = "none";
				}
			}
		}
	}
});
				
let ltFilter = document.querySelector("input[id=ignoreLT]");
ltFilter.addEventListener('click', function() {
	if(document.getElementById("ignoreLT").checked == true) {
		let i = 0;
		let lshieldTable = document.getElementById("lshield");
		let lshieldRows = lshieldTable.rows;
		
		for(i = 1; i < (lshieldRows.length); i++) {
			let lt = lshieldRows[i].getElementsByTagName("td")[10];
			
			if(lt.innerHTML == "false" && lshieldRows[i].style.display == "") {
				lshieldRows[i].style.display = "";
			}
			else if(lt.innerHTML == "true" && lshieldRows[i].style.display == ""){
				lshieldRows[i].style.display = "none";
			}		
		}
		
		let hshieldTable = document.getElementById("hshield");
		let hshieldRows = hshieldTable.rows;
		
		for(i = 1; i < (hshieldRows.length); i++) {
			let lt = hshieldRows[i].getElementsByTagName("td")[10];
			
			if(lt.innerHTML == "false" && hshieldRows[i].style.display == "") {
				hshieldRows[i].style.display = "";
			}
			else if(lt.innerHTML == "true" && hshieldRows[i].style.display == ""){
				hshieldRows[i].style.display = "none";
			}
		}
		
		let hatTable = document.getElementById("hat");
		let hatRows = hatTable.rows;
		
		for(i = 1; i < (hatRows.length); i++) {
			let lt = hatRows[i].getElementsByTagName("td")[10];
			
			if(lt.innerHTML == "false" && hatRows[i].style.display == "") {
				hatRows[i].style.display = "";
			}
			else if(lt.innerHTML == "true" && hatRows[i].style.display == ""){
				hatRows[i].style.display = "none";
			}
		}
		
		let helmTable = document.getElementById("helm");
		let helmRows = helmTable.rows;
		
		for(i = 1; i < (helmRows.length); i++) {
			let lt = helmRows[i].getElementsByTagName("td")[10];
			
			if(lt.innerHTML == "false" && helmRows[i].style.display == "") {
				helmRows[i].style.display = "";
			}
			else if(lt.innerHTML == "true" && helmRows[i].style.display == ""){
				helmRows[i].style.display = "none";
			}
		}	
		
		let clothesTable = document.getElementById("clothes");
		let clothesRows = clothesTable.rows;
		
		for(i = 1; i < (clothesRows.length); i++) {
			let lt = clothesRows[i].getElementsByTagName("td")[10];
			
			if(lt.innerHTML == "false" && clothesRows[i].style.display == "") {
				clothesRows[i].style.display = "";
			}
			else if(lt.innerHTML == "true" && clothesRows[i].style.display == ""){
				clothesRows[i].style.display = "none";
			}
		}
		
		let larmorTable = document.getElementById("larmor");
		let larmorRows = larmorTable.rows;
		
		for(i = 1; i < (larmorRows.length); i++) {
			let lt = larmorRows[i].getElementsByTagName("td")[10];
			
			if(lt.innerHTML == "false" && larmorRows[i].style.display == "") {
				larmorRows[i].style.display = "";
			}
			else if(lt.innerHTML == "true" && larmorRows[i].style.display == ""){
				larmorRows[i].style.display = "none";
			}
		}
		
		let harmorTable = document.getElementById("harmor");
		let harmorRows = harmorTable.rows;
		
		for(i = 1; i < (harmorRows.length); i++) {
			let lt = harmorRows[i].getElementsByTagName("td")[10];
			
			if(lt.innerHTML == "false" && harmorRows[i].style.display == "") {
				harmorRows[i].style.display = "";
			}
			else if(lt.innerHTML == "true" && harmorRows[i].style.display == ""){
				harmorRows[i].style.display = "none";
			}
		}
		
		let robeTable = document.getElementById("robe");
		let robeRows = robeTable.rows;
		
		for(i = 1; i < (robeRows.length); i++) {
			let lt = robeRows[i].getElementsByTagName("td")[10];
			
			if(lt.innerHTML == "false" && robeRows[i].style.display == "") {
				robeRows[i].style.display = "";
			}
			else if(lt.innerHTML == "true" && robeRows[i].style.display == ""){
				robeRows[i].style.display = "none";
			}
		}
		
	}
	else {
		let i = 0;
		let lshieldTable = document.getElementById("lshield");
		let lshieldRows = lshieldTable.rows;
		
		for(i = 1; i < (lshieldRows.length); i++) {
			let lshield = lshieldRows[i].getElementsByTagName("td")[7];
			let lt = lshieldRows[i].getElementsByTagName("td")[10];
		
			
			if(lt.innerHTML == "true" && lshieldRows[i].style.display == "none" &&
					(lshield.innerHTML.indexOf("Resistance: Fire (+") != -1 || lshield.innerHTML.indexOf(", Fire (+") != -1 ||
							lshield.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBfire").checked == true &&
					document.getElementById("CBlshield").checked == true) {
				lshieldRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && lshieldRows[i].style.display == "none" &&
					(lshield.innerHTML.indexOf("Resistance: Ice (+") != -1 || lshield.innerHTML.indexOf(", Ice (+") != -1 ||
							lshield.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBice").checked == true &&
					document.getElementById("CBlshield").checked == true) {
				lshieldRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && lshieldRows[i].style.display == "none" &&
					(lshield.innerHTML.indexOf("Resistance: Lightning (+") != -1 || lshield.innerHTML.indexOf(", Lightning (+") != -1 ||
							lshield.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBlightning").checked == true &&
					document.getElementById("CBlshield").checked == true) {
				lshieldRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && lshieldRows[i].style.display == "none" &&
					(lshield.innerHTML.indexOf("Resistance: Water (+") != -1 || lshield.innerHTML.indexOf(", Water (+") != -1 ||
							lshield.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBwater").checked == true &&
					document.getElementById("CBlshield").checked == true) {
				lshieldRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && lshieldRows[i].style.display == "none" &&
					(lshield.innerHTML.indexOf("Resistance: Wind (+") != -1 || lshield.innerHTML.indexOf(", Wind (+") != -1 ||
							lshield.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBwind").checked == true &&
					document.getElementById("CBlshield").checked == true) {
				lshieldRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && lshieldRows[i].style.display == "none" &&
					(lshield.innerHTML.indexOf("Resistance: Earth (+") != -1 || lshield.innerHTML.indexOf(", Earth (+") != -1 ||
							lshield.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBearth").checked == true &&
					document.getElementById("CBlshield").checked == true) {
				lshieldRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && lshieldRows[i].style.display == "none" &&
					(lshield.innerHTML.indexOf("Resistance: Light (+") != -1 || lshield.innerHTML.indexOf(", Light (+") != -1 ||
							lshield.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBlight").checked == true &&
					document.getElementById("CBlshield").checked == true) {
				lshieldRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && lshieldRows[i].style.display == "none" &&
					(lshield.innerHTML.indexOf("Resistance: Dark (+") != -1 || lshield.innerHTML.indexOf(", Dark (+") != -1 ||
							lshield.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBdark").checked == true &&
					document.getElementById("CBlshield").checked == true) {
				lshieldRows[i].style.display = "";
			}
		}
		
		let hshieldTable = document.getElementById("hshield");
		let hshieldRows = hshieldTable.rows;
		
		for(i = 1; i < (hshieldRows.length); i++) {
			let hshield = hshieldRows[i].getElementsByTagName("td")[7];
			let lt = hshieldRows[i].getElementsByTagName("td")[10];
			
			if(lt.innerHTML == "true" && hshieldRows[i].style.display == "none" &&
					(hshield.innerHTML.indexOf("Resistance: Fire (+") != -1 || hshield.innerHTML.indexOf(", Fire (+") != -1 ||
							hshield.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBfire").checked == true &&
					document.getElementById("CBhshield").checked == true) {
				hshieldRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && hshieldRows[i].style.display == "none" &&
					(hshield.innerHTML.indexOf("Resistance: Ice (+") != -1 || hshield.innerHTML.indexOf(", Ice (+") != -1 ||
							hshield.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBice").checked == true &&
					document.getElementById("CBhshield").checked == true) {
				hshieldRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && hshieldRows[i].style.display == "none" &&
					(hshield.innerHTML.indexOf("Resistance: Lightning (+") != -1 || hshield.innerHTML.indexOf(", Lightning (+") != -1 ||
							hshield.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBlightning").checked == true &&
					document.getElementById("CBhshield").checked == true) {
				hshieldRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && hshieldRows[i].style.display == "none" &&
					(hshield.innerHTML.indexOf("Resistance: Water (+") != -1 || hshield.innerHTML.indexOf(", Water (+") != -1 ||
							hshield.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBwater").checked == true &&
					document.getElementById("CBhshield").checked == true) {
				hshieldRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && hshieldRows[i].style.display == "none" &&
					(hshield.innerHTML.indexOf("Resistance: Wind (+") != -1 || hshield.innerHTML.indexOf(", Wind (+") != -1 ||
							hshield.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBwind").checked == true &&
					document.getElementById("CBhshield").checked == true) {
				hshieldRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && hshieldRows[i].style.display == "none" &&
					(hshield.innerHTML.indexOf("Resistance: Earth (+") != -1 || hshield.innerHTML.indexOf(", Earth (+") != -1 ||
							hshield.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBearth").checked == true &&
					document.getElementById("CBhshield").checked == true) {
				hshieldRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && hshieldRows[i].style.display == "none" &&
					(hshield.innerHTML.indexOf("Resistance: Light (+") != -1 || hshield.innerHTML.indexOf(", Light (+") != -1 ||
							hshield.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBlight").checked == true &&
					document.getElementById("CBhshield").checked == true) {
				hshieldRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && hshieldRows[i].style.display == "none" &&
					(hshield.innerHTML.indexOf("Resistance: Dark (+") != -1 || hshield.innerHTML.indexOf(", Dark (+") != -1 ||
							hshield.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBdark").checked == true &&
					document.getElementById("CBhshield").checked == true) {
				hshieldRows[i].style.display = "";
			}
		}
		
		let hatTable = document.getElementById("hat");
		let hatRows = hatTable.rows;
		
		for(i = 1; i < (hatRows.length); i++) {
			let hat = hatRows[i].getElementsByTagName("td")[7];
			let lt = hatRows[i].getElementsByTagName("td")[10];
			
			if(lt.innerHTML == "true" && hatRows[i].style.display == "none" &&
					(hat.innerHTML.indexOf("Resistance: Fire (+") != -1 || hat.innerHTML.indexOf(", Fire (+") != -1 ||
							hat.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBfire").checked == true &&
					document.getElementById("CBhat").checked == true) {
				hatRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && hatRows[i].style.display == "none" &&
					(hat.innerHTML.indexOf("Resistance: Ice (+") != -1 || hat.innerHTML.indexOf(", Ice (+") != -1 ||
							hat.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBice").checked == true &&
					document.getElementById("CBhat").checked == true) {
				hatRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && hatRows[i].style.display == "none" &&
					(hat.innerHTML.indexOf("Resistance: Lightning (+") != -1 || hat.innerHTML.indexOf(", Lightning (+") != -1 ||
							hat.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBlightning").checked == true &&
					document.getElementById("CBhat").checked == true) {
				hatRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && hatRows[i].style.display == "none" &&
					(hat.innerHTML.indexOf("Resistance: Water (+") != -1 || hat.innerHTML.indexOf(", Water (+") != -1 ||
							hat.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBwater").checked == true &&
					document.getElementById("CBhat").checked == true) {
				hatRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && hatRows[i].style.display == "none" &&
					(hat.innerHTML.indexOf("Resistance: Wind (+") != -1 || hat.innerHTML.indexOf(", Wind (+") != -1 ||
							hat.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBwind").checked == true &&
					document.getElementById("CBhat").checked == true) {
				hatRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && hatRows[i].style.display == "none" &&
					(hat.innerHTML.indexOf("Resistance: Earth (+") != -1 || hat.innerHTML.indexOf(", Earth (+") != -1 ||
							hat.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBearth").checked == true &&
					document.getElementById("CBhat").checked == true) {
				hatRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && hatRows[i].style.display == "none" &&
					(hat.innerHTML.indexOf("Resistance: Light (+") != -1 || hat.innerHTML.indexOf(", Light (+") != -1 ||
							hat.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBlight").checked == true &&
					document.getElementById("CBhat").checked == true) {
				hatRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && hatRows[i].style.display == "none" &&
					(hat.innerHTML.indexOf("Resistance: Dark (+") != -1 || hat.innerHTML.indexOf(", Dark (+") != -1 ||
							hat.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBdark").checked == true &&
					document.getElementById("CBhat").checked == true) {
				hatRows[i].style.display = "";
			}
		}	
		
		let helmTable = document.getElementById("helm");
		let helmRows = helmTable.rows;
		
		for(i = 1; i < (helmRows.length); i++) {
			let helm = helmRows[i].getElementsByTagName("td")[7];
			let lt = helmRows[i].getElementsByTagName("td")[10];
			
			if(lt.innerHTML == "true" && helmRows[i].style.display == "none" &&
					(helm.innerHTML.indexOf("Resistance: Fire (+") != -1 || helm.innerHTML.indexOf(", Fire (+") != -1 ||
							helm.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBfire").checked == true &&
					document.getElementById("CBhelm").checked == true) {
				helmRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && helmRows[i].style.display == "none" &&
					(helm.innerHTML.indexOf("Resistance: Ice (+") != -1 || helm.innerHTML.indexOf(", Ice (+") != -1 ||
							helm.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBice").checked == true &&
					document.getElementById("CBhelm").checked == true) {
				helmRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && helmRows[i].style.display == "none" &&
					(helm.innerHTML.indexOf("Resistance: Lightning (+") != -1 || helm.innerHTML.indexOf(", Lightning (+") != -1 ||
							helm.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBlightning").checked == true &&
					document.getElementById("CBhelm").checked == true) {
				helmRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && helmRows[i].style.display == "none" &&
					(helm.innerHTML.indexOf("Resistance: Water (+") != -1 || helm.innerHTML.indexOf(", Water (+") != -1 ||
							helm.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBwater").checked == true &&
					document.getElementById("CBhelm").checked == true) {
				helmRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && helmRows[i].style.display == "none" &&
					(helm.innerHTML.indexOf("Resistance: Wind (+") != -1 || helm.innerHTML.indexOf(", Wind (+") != -1 ||
							helm.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBwind").checked == true &&
					document.getElementById("CBhelm").checked == true) {
				helmRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && helmRows[i].style.display == "none" &&
					(helm.innerHTML.indexOf("Resistance: Earth (+") != -1 || helm.innerHTML.indexOf(", Earth (+") != -1 ||
							helm.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBearth").checked == true &&
					document.getElementById("CBhelm").checked == true) {
				helmRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && helmRows[i].style.display == "none" &&
					(helm.innerHTML.indexOf("Resistance: Light (+") != -1 || helm.innerHTML.indexOf(", Light (+") != -1 ||
							helm.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBlight").checked == true &&
					document.getElementById("CBhelm").checked == true) {
				helmRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && helmRows[i].style.display == "none" &&
					(helm.innerHTML.indexOf("Resistance: Dark (+") != -1 || helm.innerHTML.indexOf(", Dark (+") != -1 ||
							helm.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBdark").checked == true &&
					document.getElementById("CBhelm").checked == true) {
				helmRows[i].style.display = "";
			}
		}
		
		let clothesTable = document.getElementById("clothes");
		let clothesRows = clothesTable.rows;
		
		for(i = 1; i < (clothesRows.length); i++) {
			let clothes = clothesRows[i].getElementsByTagName("td")[7];
			let lt = clothesRows[i].getElementsByTagName("td")[10];
			
			if(lt.innerHTML == "true" && clothesRows[i].style.display == "none" &&
					(clothes.innerHTML.indexOf("Resistance: Fire (+") != -1 || clothes.innerHTML.indexOf(", Fire (+") != -1 ||
							clothes.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBfire").checked == true &&
					document.getElementById("CBclothes").checked == true) {
				clothesRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && clothesRows[i].style.display == "none" &&
					(clothes.innerHTML.indexOf("Resistance: Ice (+") != -1 || clothes.innerHTML.indexOf(", Ice (+") != -1 ||
							clothes.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBice").checked == true &&
					document.getElementById("CBclothes").checked == true) {
				clothesRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && clothesRows[i].style.display == "none" &&
					(clothes.innerHTML.indexOf("Resistance: Lightning (+") != -1 || clothes.innerHTML.indexOf(", Lightning (+") != -1 ||
							clothes.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBlightning").checked == true &&
					document.getElementById("CBclothes").checked == true) {
				clothesRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && clothesRows[i].style.display == "none" &&
					(clothes.innerHTML.indexOf("Resistance: Water (+") != -1 || clothes.innerHTML.indexOf(", Water (+") != -1 ||
							clothes.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBwater").checked == true &&
					document.getElementById("CBclothes").checked == true) {
				clothesRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && clothesRows[i].style.display == "none" &&
					(clothes.innerHTML.indexOf("Resistance: Wind (+") != -1 || clothes.innerHTML.indexOf(", Wind (+") != -1 ||
							clothes.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBwind").checked == true &&
					document.getElementById("CBclothes").checked == true) {
				clothesRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && clothesRows[i].style.display == "none" &&
					(clothes.innerHTML.indexOf("Resistance: Earth (+") != -1 || clothes.innerHTML.indexOf(", Earth (+") != -1 ||
							clothes.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBearth").checked == true &&
					document.getElementById("CBclothes").checked == true) {
				clothesRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && clothesRows[i].style.display == "none" &&
					(clothes.innerHTML.indexOf("Resistance: Light (+") != -1 || clothes.innerHTML.indexOf(", Light (+") != -1 ||
							clothes.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBlight").checked == true &&
					document.getElementById("CBclothes").checked == true) {
				clothesRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && clothesRows[i].style.display == "none" &&
					(clothes.innerHTML.indexOf("Resistance: Dark (+") != -1 || clothes.innerHTML.indexOf(", Dark (+") != -1 ||
							clothes.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBdark").checked == true &&
					document.getElementById("CBclothes").checked == true) {
				clothesRows[i].style.display = "";
			}
		}
		
		let larmorTable = document.getElementById("larmor");
		let larmorRows = larmorTable.rows;
		
		for(i = 1; i < (larmorRows.length); i++) {
			let larmor = larmorRows[i].getElementsByTagName("td")[7];
			let lt = larmorRows[i].getElementsByTagName("td")[10];
			
			if(lt.innerHTML == "true" && larmorRows[i].style.display == "none" &&
					(larmor.innerHTML.indexOf("Resistance: Fire (+") != -1 || larmor.innerHTML.indexOf(", Fire (+") != -1 ||
							larmor.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBfire").checked == true &&
					document.getElementById("CBlarmor").checked == true) {
				larmorRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && larmorRows[i].style.display == "none" &&
					(larmor.innerHTML.indexOf("Resistance: Ice (+") != -1 || larmor.innerHTML.indexOf(", Ice (+") != -1 ||
							larmor.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBice").checked == true &&
					document.getElementById("CBlarmor").checked == true) {
				larmorRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && larmorRows[i].style.display == "none" &&
					(larmor.innerHTML.indexOf("Resistance: Lightning (+") != -1 || larmor.innerHTML.indexOf(", Lightning (+") != -1 ||
							larmor.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBlightning").checked == true &&
					document.getElementById("CBlarmor").checked == true) {
				larmorRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && larmorRows[i].style.display == "none" &&
					(larmor.innerHTML.indexOf("Resistance: Water (+") != -1 || larmor.innerHTML.indexOf(", Water (+") != -1 ||
							larmor.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBwater").checked == true &&
					document.getElementById("CBlarmor").checked == true) {
				larmorRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && larmorRows[i].style.display == "none" &&
					(larmor.innerHTML.indexOf("Resistance: Wind (+") != -1 || larmor.innerHTML.indexOf(", Wind (+") != -1 ||
							larmor.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBwind").checked == true &&
					document.getElementById("CBlarmor").checked == true) {
				larmorRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && larmorRows[i].style.display == "none" &&
					(larmor.innerHTML.indexOf("Resistance: Earth (+") != -1 || larmor.innerHTML.indexOf(", Earth (+") != -1 ||
							larmor.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBearth").checked == true &&
					document.getElementById("CBlarmor").checked == true) {
				larmorRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && larmorRows[i].style.display == "none" &&
					(larmor.innerHTML.indexOf("Resistance: Light (+") != -1 || larmor.innerHTML.indexOf(", Light (+") != -1 ||
							larmor.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBlight").checked == true &&
					document.getElementById("CBlarmor").checked == true) {
				larmorRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && larmorRows[i].style.display == "none" &&
					(larmor.innerHTML.indexOf("Resistance: Dark (+") != -1 || larmor.innerHTML.indexOf(", Dark (+") != -1 ||
							larmor.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBdark").checked == true &&
					document.getElementById("CBlarmor").checked == true) {
				larmorRows[i].style.display = "";
			}
		}
		
		let harmorTable = document.getElementById("harmor");
		let harmorRows = harmorTable.rows;
		
		for(i = 1; i < (harmorRows.length); i++) {
			let harmor = harmorRows[i].getElementsByTagName("td")[7];
			let lt = harmorRows[i].getElementsByTagName("td")[10];
			
			if(lt.innerHTML == "true" && harmorRows[i].style.display == "none" &&
					(harmor.innerHTML.indexOf("Resistance: Fire (+") != -1 || harmor.innerHTML.indexOf(", Fire (+") != -1 ||
							harmor.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBfire").checked == true &&
					document.getElementById("CBharmor").checked == true) {
				harmorRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && harmorRows[i].style.display == "none" &&
					(harmor.innerHTML.indexOf("Resistance: Ice (+") != -1 || harmor.innerHTML.indexOf(", Ice (+") != -1 ||
							harmor.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBice").checked == true &&
					document.getElementById("CBharmor").checked == true) {
				harmorRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && harmorRows[i].style.display == "none" &&
					(harmor.innerHTML.indexOf("Resistance: Lightning (+") != -1 || harmor.innerHTML.indexOf(", Lightning (+") != -1 ||
							harmor.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBlightning").checked == true &&
					document.getElementById("CBharmor").checked == true) {
				harmorRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && harmorRows[i].style.display == "none" &&
					(harmor.innerHTML.indexOf("Resistance: Water (+") != -1 || harmor.innerHTML.indexOf(", Water (+") != -1 ||
							harmor.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBwater").checked == true &&
					document.getElementById("CBharmor").checked == true) {
				harmorRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && harmorRows[i].style.display == "none" &&
					(harmor.innerHTML.indexOf("Resistance: Wind (+") != -1 || harmor.innerHTML.indexOf(", Wind (+") != -1 ||
							harmor.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBwind").checked == true &&
					document.getElementById("CBharmor").checked == true) {
				harmorRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && harmorRows[i].style.display == "none" &&
					(harmor.innerHTML.indexOf("Resistance: Earth (+") != -1 || harmor.innerHTML.indexOf(", Earth (+") != -1 ||
							harmor.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBearth").checked == true &&
					document.getElementById("CBharmor").checked == true) {
				harmorRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && harmorRows[i].style.display == "none" &&
					(harmor.innerHTML.indexOf("Resistance: Light (+") != -1 || harmor.innerHTML.indexOf(", Light (+") != -1 ||
							harmor.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBlight").checked == true &&
					document.getElementById("CBharmor").checked == true) {
				harmorRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && harmorRows[i].style.display == "none" &&
					(harmor.innerHTML.indexOf("Resistance: Dark (+") != -1 || harmor.innerHTML.indexOf(", Dark (+") != -1 ||
							harmor.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBdark").checked == true &&
					document.getElementById("CBharmor").checked == true) {
				lshieldRows[i].style.display = "";
			}
		}
		
		let robeTable = document.getElementById("robe");
		let robeRows = robeTable.rows;
		
		for(i = 1; i < (robeRows.length); i++) {
			let robe = robeRows[i].getElementsByTagName("td")[7];
			let lt = robeRows[i].getElementsByTagName("td")[10];
			
			if(lt.innerHTML == "true" && robeRows[i].style.display == "none" &&
					(robe.innerHTML.indexOf("Resistance: Fire (+") != -1 || robe.innerHTML.indexOf(", Fire (+") != -1 ||
							robe.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBfire").checked == true &&
					document.getElementById("CBrobe").checked == true) {
				robeRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && robeRows[i].style.display == "none" &&
					(robe.innerHTML.indexOf("Resistance: Ice (+") != -1 || robe.innerHTML.indexOf(", Ice (+") != -1 ||
							robe.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBice").checked == true &&
					document.getElementById("CBrobe").checked == true) {
				robeRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && robeRows[i].style.display == "none" &&
					(robe.innerHTML.indexOf("Resistance: Lightning (+") != -1 || robe.innerHTML.indexOf(", Lightning (+") != -1 ||
							robe.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBlightning").checked == true &&
					document.getElementById("CBrobe").checked == true) {
				robeRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && robeRows[i].style.display == "none" &&
					(robe.innerHTML.indexOf("Resistance: Water (+") != -1 || robe.innerHTML.indexOf(", Water (+") != -1 ||
							robe.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBwater").checked == true &&
					document.getElementById("CBrobe").checked == true) {
				robeRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && robeRows[i].style.display == "none" &&
					(robe.innerHTML.indexOf("Resistance: Wind (+") != -1 || robe.innerHTML.indexOf(", Wind (+") != -1 ||
							robe.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBwind").checked == true &&
					document.getElementById("CBrobe").checked == true) {
				robeRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && robeRows[i].style.display == "none" &&
					(robe.innerHTML.indexOf("Resistance: Earth (+") != -1 || robe.innerHTML.indexOf(", Earth (+") != -1 ||
							robe.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBearth").checked == true &&
					document.getElementById("CBrobe").checked == true) {
				robeRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && robeRows[i].style.display == "none" &&
					(robe.innerHTML.indexOf("Resistance: Light (+") != -1 || robe.innerHTML.indexOf(", Light (+") != -1 ||
							robe.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBlight").checked == true &&
					document.getElementById("CBrobe").checked == true) {
				robeRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && robeRows[i].style.display == "none" &&
					(robe.innerHTML.indexOf("Resistance: Dark (+") != -1 || robe.innerHTML.indexOf(", Dark (+") != -1 ||
							robe.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBdark").checked == true &&
					document.getElementById("CBrobe").checked == true) {
				robeRows[i].style.display = "";
			}
		}
	}
});		
let tmrFilter = document.querySelector("input[id=ignoreTMR]");
tmrFilter.addEventListener('click', function() {
	if(document.getElementById("ignoreTMR").checked == true) {
		let i = 0;
		let lshieldTable = document.getElementById("lshield");
		let lshieldRows = lshieldTable.rows;
		
		for(i = 1; i < (lshieldRows.length); i++) {
			let tmr = lshieldRows[i].getElementsByTagName("td")[8];
			
			if(tmr.innerHTML == "false" && lshieldRows[i].style.display == "") {
				lshieldRows[i].style.display = "";
			}
			else if(tmr.innerHTML == "true" && lshieldRows[i].style.display == ""){
				lshieldRows[i].style.display = "none";
			}		
		}
		
		let hshieldTable = document.getElementById("hshield");
		let hshieldRows = hshieldTable.rows;
		
		for(i = 1; i < (hshieldRows.length); i++) {
			let tmr = hshieldRows[i].getElementsByTagName("td")[8];
			
			if(tmr.innerHTML == "false" && hshieldRows[i].style.display == "") {
				hshieldRows[i].style.display = "";
			}
			else if(tmr.innerHTML == "true" && hshieldRows[i].style.display == ""){
				hshieldRows[i].style.display = "none";
			}
		}
		
		let hatTable = document.getElementById("hat");
		let hatRows = hatTable.rows;
		
		for(i = 1; i < (hatRows.length); i++) {
			let tmr = hatRows[i].getElementsByTagName("td")[8];
			
			if(tmr.innerHTML == "false" && hatRows[i].style.display == "") {
				hatRows[i].style.display = "";
			}
			else if(tmr.innerHTML == "true" && hatRows[i].style.display == ""){
				hatRows[i].style.display = "none";
			}
		}
		
		let helmTable = document.getElementById("helm");
		let helmRows = helmTable.rows;
		
		for(i = 1; i < (helmRows.length); i++) {
			let tmr = helmRows[i].getElementsByTagName("td")[8];
			
			if(tmr.innerHTML == "false" && helmRows[i].style.display == "") {
				helmRows[i].style.display = "";
			}
			else if(tmr.innerHTML == "true" && helmRows[i].style.display == ""){
				helmRows[i].style.display = "none";
			}
		}	
		
		let clothesTable = document.getElementById("clothes");
		let clothesRows = clothesTable.rows;
		
		for(i = 1; i < (clothesRows.length); i++) {
			let tmr = clothesRows[i].getElementsByTagName("td")[8];
			
			if(tmr.innerHTML == "false" && clothesRows[i].style.display == "") {
				clothesRows[i].style.display = "";
			}
			else if(tmr.innerHTML == "true" && clothesRows[i].style.display == ""){
				clothesRows[i].style.display = "none";
			}
		}
		
		let larmorTable = document.getElementById("larmor");
		let larmorRows = larmorTable.rows;
		
		for(i = 1; i < (larmorRows.length); i++) {
			let tmr = larmorRows[i].getElementsByTagName("td")[8];
			
			if(tmr.innerHTML == "false" && larmorRows[i].style.display == "") {
				larmorRows[i].style.display = "";
			}
			else if(tmr.innerHTML == "true" && larmorRows[i].style.display == ""){
				larmorRows[i].style.display = "none";
			}
		}
		
		let harmorTable = document.getElementById("harmor");
		let harmorRows = harmorTable.rows;
		
		for(i = 1; i < (harmorRows.length); i++) {
			let tmr = harmorRows[i].getElementsByTagName("td")[8];
			
			if(tmr.innerHTML == "false" && harmorRows[i].style.display == "") {
				harmorRows[i].style.display = "";
			}
			else if(tmr.innerHTML == "true" && harmorRows[i].style.display == ""){
				harmorRows[i].style.display = "none";
			}
		}
		
		let robeTable = document.getElementById("robe");
		let robeRows = robeTable.rows;
		
		for(i = 1; i < (robeRows.length); i++) {
			let tmr = robeRows[i].getElementsByTagName("td")[8];
			
			if(tmr.innerHTML == "false" && robeRows[i].style.display == "") {
				robeRows[i].style.display = "";
			}
			else if(tmr.innerHTML == "true" && robeRows[i].style.display == ""){
				robeRows[i].style.display = "none";
			}
		}
		
	}
	else {
		let i = 0;
		let lshieldTable = document.getElementById("lshield");
		let lshieldRows = lshieldTable.rows;
		
		for(i = 1; i < (lshieldRows.length); i++) {
			let lshield = lshieldRows[i].getElementsByTagName("td")[7];
			let tmr = lshieldRows[i].getElementsByTagName("td")[8];
		
			
			if(tmr.innerHTML == "true" && lshieldRows[i].style.display == "none" &&
					(lshield.innerHTML.indexOf("Resistance: Fire (+") != -1 || lshield.innerHTML.indexOf(", Fire (+") != -1 ||
							lshield.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBfire").checked == true &&
					document.getElementById("CBlshield").checked == true) {
				lshieldRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && lshieldRows[i].style.display == "none" &&
					(lshield.innerHTML.indexOf("Resistance: Ice (+") != -1 || lshield.innerHTML.indexOf(", Ice (+") != -1 ||
							lshield.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBice").checked == true &&
					document.getElementById("CBlshield").checked == true) {
				lshieldRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && lshieldRows[i].style.display == "none" &&
					(lshield.innerHTML.indexOf("Resistance: Lightning (+") != -1 || lshield.innerHTML.indexOf(", Lightning (+") != -1 ||
							lshield.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBlightning").checked == true &&
					document.getElementById("CBlshield").checked == true) {
				lshieldRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && lshieldRows[i].style.display == "none" &&
					(lshield.innerHTML.indexOf("Resistance: Water (+") != -1 || lshield.innerHTML.indexOf(", Water (+") != -1 ||
							lshield.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBwater").checked == true &&
					document.getElementById("CBlshield").checked == true) {
				lshieldRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && lshieldRows[i].style.display == "none" &&
					(lshield.innerHTML.indexOf("Resistance: Wind (+") != -1 || lshield.innerHTML.indexOf(", Wind (+") != -1 ||
							lshield.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBwind").checked == true &&
					document.getElementById("CBlshield").checked == true) {
				lshieldRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && lshieldRows[i].style.display == "none" &&
					(lshield.innerHTML.indexOf("Resistance: Earth (+") != -1 || lshield.innerHTML.indexOf(", Earth (+") != -1 ||
							lshield.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBearth").checked == true &&
					document.getElementById("CBlshield").checked == true) {
				lshieldRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && lshieldRows[i].style.display == "none" &&
					(lshield.innerHTML.indexOf("Resistance: Light (+") != -1 || lshield.innerHTML.indexOf(", Light (+") != -1 ||
							lshield.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBlight").checked == true &&
					document.getElementById("CBlshield").checked == true) {
				lshieldRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && lshieldRows[i].style.display == "none" &&
					(lshield.innerHTML.indexOf("Resistance: Dark (+") != -1 || lshield.innerHTML.indexOf(", Dark (+") != -1 ||
							lshield.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBdark").checked == true &&
					document.getElementById("CBlshield").checked == true) {
				lshieldRows[i].style.display = "";
			}
		}
		
		let hshieldTable = document.getElementById("hshield");
		let hshieldRows = hshieldTable.rows;
		
		for(i = 1; i < (hshieldRows.length); i++) {
			let hshield = hshieldRows[i].getElementsByTagName("td")[7];
			let tmr = hshieldRows[i].getElementsByTagName("td")[8];
			
			if(tmr.innerHTML == "true" && hshieldRows[i].style.display == "none" &&
					(hshield.innerHTML.indexOf("Resistance: Fire (+") != -1 || hshield.innerHTML.indexOf(", Fire (+") != -1 ||
							hshield.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBfire").checked == true &&
					document.getElementById("CBhshield").checked == true) {
				hshieldRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && hshieldRows[i].style.display == "none" &&
					(hshield.innerHTML.indexOf("Resistance: Ice (+") != -1 || hshield.innerHTML.indexOf(", Ice (+") != -1 ||
							hshield.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBice").checked == true &&
					document.getElementById("CBhshield").checked == true) {
				hshieldRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && hshieldRows[i].style.display == "none" &&
					(hshield.innerHTML.indexOf("Resistance: Lightning (+") != -1 || hshield.innerHTML.indexOf(", Lightning (+") != -1 ||
							hshield.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBlightning").checked == true &&
					document.getElementById("CBhshield").checked == true) {
				hshieldRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && hshieldRows[i].style.display == "none" &&
					(hshield.innerHTML.indexOf("Resistance: Water (+") != -1 || hshield.innerHTML.indexOf(", Water (+") != -1 ||
							hshield.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBwater").checked == true &&
					document.getElementById("CBhshield").checked == true) {
				hshieldRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && hshieldRows[i].style.display == "none" &&
					(hshield.innerHTML.indexOf("Resistance: Wind (+") != -1 || hshield.innerHTML.indexOf(", Wind (+") != -1 ||
							hshield.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBwind").checked == true &&
					document.getElementById("CBhshield").checked == true) {
				hshieldRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && hshieldRows[i].style.display == "none" &&
					(hshield.innerHTML.indexOf("Resistance: Earth (+") != -1 || hshield.innerHTML.indexOf(", Earth (+") != -1 ||
							hshield.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBearth").checked == true &&
					document.getElementById("CBhshield").checked == true) {
				hshieldRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && hshieldRows[i].style.display == "none" &&
					(hshield.innerHTML.indexOf("Resistance: Light (+") != -1 || hshield.innerHTML.indexOf(", Light (+") != -1 ||
							hshield.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBlight").checked == true &&
					document.getElementById("CBhshield").checked == true) {
				hshieldRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && hshieldRows[i].style.display == "none" &&
					(hshield.innerHTML.indexOf("Resistance: Dark (+") != -1 || hshield.innerHTML.indexOf(", Dark (+") != -1 ||
							hshield.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBdark").checked == true &&
					document.getElementById("CBhshield").checked == true) {
				hshieldRows[i].style.display = "";
			}
		}
		
		let hatTable = document.getElementById("hat");
		let hatRows = hatTable.rows;
		
		for(i = 1; i < (hatRows.length); i++) {
			let hat = hatRows[i].getElementsByTagName("td")[7];
			let tmr = hatRows[i].getElementsByTagName("td")[8];
			
			if(tmr.innerHTML == "true" && hatRows[i].style.display == "none" &&
					(hat.innerHTML.indexOf("Resistance: Fire (+") != -1 || hat.innerHTML.indexOf(", Fire (+") != -1 ||
							hat.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBfire").checked == true &&
					document.getElementById("CBhat").checked == true) {
				hatRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && hatRows[i].style.display == "none" &&
					(hat.innerHTML.indexOf("Resistance: Ice (+") != -1 || hat.innerHTML.indexOf(", Ice (+") != -1 ||
							hat.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBice").checked == true &&
					document.getElementById("CBhat").checked == true) {
				hatRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && hatRows[i].style.display == "none" &&
					(hat.innerHTML.indexOf("Resistance: Lightning (+") != -1 || hat.innerHTML.indexOf(", Lightning (+") != -1 ||
							hat.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBlightning").checked == true &&
					document.getElementById("CBhat").checked == true) {
				hatRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && hatRows[i].style.display == "none" &&
					(hat.innerHTML.indexOf("Resistance: Water (+") != -1 || hat.innerHTML.indexOf(", Water (+") != -1 ||
							hat.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBwater").checked == true &&
					document.getElementById("CBhat").checked == true) {
				hatRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && hatRows[i].style.display == "none" &&
					(hat.innerHTML.indexOf("Resistance: Wind (+") != -1 || hat.innerHTML.indexOf(", Wind (+") != -1 ||
							hat.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBwind").checked == true &&
					document.getElementById("CBhat").checked == true) {
				hatRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && hatRows[i].style.display == "none" &&
					(hat.innerHTML.indexOf("Resistance: Earth (+") != -1 || hat.innerHTML.indexOf(", Earth (+") != -1 ||
							hat.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBearth").checked == true &&
					document.getElementById("CBhat").checked == true) {
				hatRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && hatRows[i].style.display == "none" &&
					(hat.innerHTML.indexOf("Resistance: Light (+") != -1 || hat.innerHTML.indexOf(", Light (+") != -1 ||
							hat.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBlight").checked == true &&
					document.getElementById("CBhat").checked == true) {
				hatRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && hatRows[i].style.display == "none" &&
					(hat.innerHTML.indexOf("Resistance: Dark (+") != -1 || hat.innerHTML.indexOf(", Dark (+") != -1 ||
							hat.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBdark").checked == true &&
					document.getElementById("CBhat").checked == true) {
				hatRows[i].style.display = "";
			}
		}	
		
		let helmTable = document.getElementById("helm");
		let helmRows = helmTable.rows;
		
		for(i = 1; i < (helmRows.length); i++) {
			let helm = helmRows[i].getElementsByTagName("td")[7];
			let tmr = helmRows[i].getElementsByTagName("td")[8];
			
			if(tmr.innerHTML == "true" && helmRows[i].style.display == "none" &&
					(helm.innerHTML.indexOf("Resistance: Fire (+") != -1 || helm.innerHTML.indexOf(", Fire (+") != -1 ||
							helm.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBfire").checked == true &&
					document.getElementById("CBhelm").checked == true) {
				helmRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && helmRows[i].style.display == "none" &&
					(helm.innerHTML.indexOf("Resistance: Ice (+") != -1 || helm.innerHTML.indexOf(", Ice (+") != -1 ||
							helm.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBice").checked == true &&
					document.getElementById("CBhelm").checked == true) {
				helmRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && helmRows[i].style.display == "none" &&
					(helm.innerHTML.indexOf("Resistance: Lightning (+") != -1 || helm.innerHTML.indexOf(", Lightning (+") != -1 ||
							helm.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBlightning").checked == true &&
					document.getElementById("CBhelm").checked == true) {
				helmRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && helmRows[i].style.display == "none" &&
					(helm.innerHTML.indexOf("Resistance: Water (+") != -1 || helm.innerHTML.indexOf(", Water (+") != -1 ||
							helm.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBwater").checked == true &&
					document.getElementById("CBhelm").checked == true) {
				helmRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && helmRows[i].style.display == "none" &&
					(helm.innerHTML.indexOf("Resistance: Wind (+") != -1 || helm.innerHTML.indexOf(", Wind (+") != -1 ||
							helm.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBwind").checked == true &&
					document.getElementById("CBhelm").checked == true) {
				helmRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && helmRows[i].style.display == "none" &&
					(helm.innerHTML.indexOf("Resistance: Earth (+") != -1 || helm.innerHTML.indexOf(", Earth (+") != -1 ||
							helm.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBearth").checked == true &&
					document.getElementById("CBhelm").checked == true) {
				helmRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && helmRows[i].style.display == "none" &&
					(helm.innerHTML.indexOf("Resistance: Light (+") != -1 || helm.innerHTML.indexOf(", Light (+") != -1 ||
							helm.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBlight").checked == true &&
					document.getElementById("CBhelm").checked == true) {
				helmRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && helmRows[i].style.display == "none" &&
					(helm.innerHTML.indexOf("Resistance: Dark (+") != -1 || helm.innerHTML.indexOf(", Dark (+") != -1 ||
							helm.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBdark").checked == true &&
					document.getElementById("CBhelm").checked == true) {
				helmRows[i].style.display = "";
			}
		}
		
		let clothesTable = document.getElementById("clothes");
		let clothesRows = clothesTable.rows;
		
		for(i = 1; i < (clothesRows.length); i++) {
			let clothes = clothesRows[i].getElementsByTagName("td")[7];
			let tmr = clothesRows[i].getElementsByTagName("td")[8];
			
			if(tmr.innerHTML == "true" && clothesRows[i].style.display == "none" &&
					(clothes.innerHTML.indexOf("Resistance: Fire (+") != -1 || clothes.innerHTML.indexOf(", Fire (+") != -1 ||
							clothes.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBfire").checked == true &&
					document.getElementById("CBclothes").checked == true) {
				clothesRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && clothesRows[i].style.display == "none" &&
					(clothes.innerHTML.indexOf("Resistance: Ice (+") != -1 || clothes.innerHTML.indexOf(", Ice (+") != -1 ||
							clothes.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBice").checked == true &&
					document.getElementById("CBclothes").checked == true) {
				clothesRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && clothesRows[i].style.display == "none" &&
					(clothes.innerHTML.indexOf("Resistance: Lightning (+") != -1 || clothes.innerHTML.indexOf(", Lightning (+") != -1 ||
							clothes.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBlightning").checked == true &&
					document.getElementById("CBclothes").checked == true) {
				clothesRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && clothesRows[i].style.display == "none" &&
					(clothes.innerHTML.indexOf("Resistance: Water (+") != -1 || clothes.innerHTML.indexOf(", Water (+") != -1 ||
							clothes.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBwater").checked == true &&
					document.getElementById("CBclothes").checked == true) {
				clothesRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && clothesRows[i].style.display == "none" &&
					(clothes.innerHTML.indexOf("Resistance: Wind (+") != -1 || clothes.innerHTML.indexOf(", Wind (+") != -1 ||
							clothes.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBwind").checked == true &&
					document.getElementById("CBclothes").checked == true) {
				clothesRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && clothesRows[i].style.display == "none" &&
					(clothes.innerHTML.indexOf("Resistance: Earth (+") != -1 || clothes.innerHTML.indexOf(", Earth (+") != -1 ||
							clothes.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBearth").checked == true &&
					document.getElementById("CBclothes").checked == true) {
				clothesRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && clothesRows[i].style.display == "none" &&
					(clothes.innerHTML.indexOf("Resistance: Light (+") != -1 || clothes.innerHTML.indexOf(", Light (+") != -1 ||
							clothes.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBlight").checked == true &&
					document.getElementById("CBclothes").checked == true) {
				clothesRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && clothesRows[i].style.display == "none" &&
					(clothes.innerHTML.indexOf("Resistance: Dark (+") != -1 || clothes.innerHTML.indexOf(", Dark (+") != -1 ||
							clothes.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBdark").checked == true &&
					document.getElementById("CBclothes").checked == true) {
				clothesRows[i].style.display = "";
			}
		}
		
		let larmorTable = document.getElementById("larmor");
		let larmorRows = larmorTable.rows;
		
		for(i = 1; i < (larmorRows.length); i++) {
			let larmor = larmorRows[i].getElementsByTagName("td")[7];
			let tmr = larmorRows[i].getElementsByTagName("td")[8];
			
			if(tmr.innerHTML == "true" && larmorRows[i].style.display == "none" &&
					(larmor.innerHTML.indexOf("Resistance: Fire (+") != -1 || larmor.innerHTML.indexOf(", Fire (+") != -1 ||
							larmor.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBfire").checked == true &&
					document.getElementById("CBlarmor").checked == true) {
				larmorRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && larmorRows[i].style.display == "none" &&
					(larmor.innerHTML.indexOf("Resistance: Ice (+") != -1 || larmor.innerHTML.indexOf(", Ice (+") != -1 ||
							larmor.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBice").checked == true &&
					document.getElementById("CBlarmor").checked == true) {
				larmorRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && larmorRows[i].style.display == "none" &&
					(larmor.innerHTML.indexOf("Resistance: Lightning (+") != -1 || larmor.innerHTML.indexOf(", Lightning (+") != -1 ||
							larmor.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBlightning").checked == true &&
					document.getElementById("CBlarmor").checked == true) {
				larmorRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && larmorRows[i].style.display == "none" &&
					(larmor.innerHTML.indexOf("Resistance: Water (+") != -1 || larmor.innerHTML.indexOf(", Water (+") != -1 ||
							larmor.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBwater").checked == true &&
					document.getElementById("CBlarmor").checked == true) {
				larmorRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && larmorRows[i].style.display == "none" &&
					(larmor.innerHTML.indexOf("Resistance: Wind (+") != -1 || larmor.innerHTML.indexOf(", Wind (+") != -1 ||
							larmor.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBwind").checked == true &&
					document.getElementById("CBlarmor").checked == true) {
				larmorRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && larmorRows[i].style.display == "none" &&
					(larmor.innerHTML.indexOf("Resistance: Earth (+") != -1 || larmor.innerHTML.indexOf(", Earth (+") != -1 ||
							larmor.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBearth").checked == true &&
					document.getElementById("CBlarmor").checked == true) {
				larmorRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && larmorRows[i].style.display == "none" &&
					(larmor.innerHTML.indexOf("Resistance: Light (+") != -1 || larmor.innerHTML.indexOf(", Light (+") != -1 ||
							larmor.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBlight").checked == true &&
					document.getElementById("CBlarmor").checked == true) {
				larmorRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && larmorRows[i].style.display == "none" &&
					(larmor.innerHTML.indexOf("Resistance: Dark (+") != -1 || larmor.innerHTML.indexOf(", Dark (+") != -1 ||
							larmor.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBdark").checked == true &&
					document.getElementById("CBlarmor").checked == true) {
				larmorRows[i].style.display = "";
			}
		}
		
		let harmorTable = document.getElementById("harmor");
		let harmorRows = harmorTable.rows;
		
		for(i = 1; i < (harmorRows.length); i++) {
			let harmor = harmorRows[i].getElementsByTagName("td")[7];
			let tmr = harmorRows[i].getElementsByTagName("td")[8];
			
			if(tmr.innerHTML == "true" && harmorRows[i].style.display == "none" &&
					(harmor.innerHTML.indexOf("Resistance: Fire (+") != -1 || harmor.innerHTML.indexOf(", Fire (+") != -1 ||
							harmor.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBfire").checked == true &&
					document.getElementById("CBharmor").checked == true) {
				harmorRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && harmorRows[i].style.display == "none" &&
					(harmor.innerHTML.indexOf("Resistance: Ice (+") != -1 || harmor.innerHTML.indexOf(", Ice (+") != -1 ||
							harmor.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBice").checked == true &&
					document.getElementById("CBharmor").checked == true) {
				harmorRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && harmorRows[i].style.display == "none" &&
					(harmor.innerHTML.indexOf("Resistance: Lightning (+") != -1 || harmor.innerHTML.indexOf(", Lightning (+") != -1 ||
							harmor.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBlightning").checked == true &&
					document.getElementById("CBharmor").checked == true) {
				harmorRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && harmorRows[i].style.display == "none" &&
					(harmor.innerHTML.indexOf("Resistance: Water (+") != -1 || harmor.innerHTML.indexOf(", Water (+") != -1 ||
							harmor.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBwater").checked == true &&
					document.getElementById("CBharmor").checked == true) {
				harmorRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && harmorRows[i].style.display == "none" &&
					(harmor.innerHTML.indexOf("Resistance: Wind (+") != -1 || harmor.innerHTML.indexOf(", Wind (+") != -1 ||
							harmor.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBwind").checked == true &&
					document.getElementById("CBharmor").checked == true) {
				harmorRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && harmorRows[i].style.display == "none" &&
					(harmor.innerHTML.indexOf("Resistance: Earth (+") != -1 || harmor.innerHTML.indexOf(", Earth (+") != -1 ||
							harmor.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBearth").checked == true &&
					document.getElementById("CBharmor").checked == true) {
				harmorRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && harmorRows[i].style.display == "none" &&
					(harmor.innerHTML.indexOf("Resistance: Light (+") != -1 || harmor.innerHTML.indexOf(", Light (+") != -1 ||
							harmor.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBlight").checked == true &&
					document.getElementById("CBharmor").checked == true) {
				harmorRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && harmorRows[i].style.display == "none" &&
					(harmor.innerHTML.indexOf("Resistance: Dark (+") != -1 || harmor.innerHTML.indexOf(", Dark (+") != -1 ||
							harmor.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBdark").checked == true &&
					document.getElementById("CBharmor").checked == true) {
				lshieldRows[i].style.display = "";
			}
		}
		
		let robeTable = document.getElementById("robe");
		let robeRows = robeTable.rows;
		
		for(i = 1; i < (robeRows.length); i++) {
			let robe = robeRows[i].getElementsByTagName("td")[7];
			let tmr = robeRows[i].getElementsByTagName("td")[8];
			
			if(tmr.innerHTML == "true" && robeRows[i].style.display == "none" &&
					(robe.innerHTML.indexOf("Resistance: Fire (+") != -1 || robe.innerHTML.indexOf(", Fire (+") != -1 ||
							robe.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBfire").checked == true &&
					document.getElementById("CBrobe").checked == true) {
				robeRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && robeRows[i].style.display == "none" &&
					(robe.innerHTML.indexOf("Resistance: Ice (+") != -1 || robe.innerHTML.indexOf(", Ice (+") != -1 ||
							robe.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBice").checked == true &&
					document.getElementById("CBrobe").checked == true) {
				robeRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && robeRows[i].style.display == "none" &&
					(robe.innerHTML.indexOf("Resistance: Lightning (+") != -1 || robe.innerHTML.indexOf(", Lightning (+") != -1 ||
							robe.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBlightning").checked == true &&
					document.getElementById("CBrobe").checked == true) {
				robeRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && robeRows[i].style.display == "none" &&
					(robe.innerHTML.indexOf("Resistance: Water (+") != -1 || robe.innerHTML.indexOf(", Water (+") != -1 ||
							robe.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBwater").checked == true &&
					document.getElementById("CBrobe").checked == true) {
				robeRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && robeRows[i].style.display == "none" &&
					(robe.innerHTML.indexOf("Resistance: Wind (+") != -1 || robe.innerHTML.indexOf(", Wind (+") != -1 ||
							robe.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBwind").checked == true &&
					document.getElementById("CBrobe").checked == true) {
				robeRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && robeRows[i].style.display == "none" &&
					(robe.innerHTML.indexOf("Resistance: Earth (+") != -1 || robe.innerHTML.indexOf(", Earth (+") != -1 ||
							robe.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBearth").checked == true &&
					document.getElementById("CBrobe").checked == true) {
				robeRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && robeRows[i].style.display == "none" &&
					(robe.innerHTML.indexOf("Resistance: Light (+") != -1 || robe.innerHTML.indexOf(", Light (+") != -1 ||
							robe.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBlight").checked == true &&
					document.getElementById("CBrobe").checked == true) {
				robeRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && robeRows[i].style.display == "none" &&
					(robe.innerHTML.indexOf("Resistance: Dark (+") != -1 || robe.innerHTML.indexOf(", Dark (+") != -1 ||
							robe.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBdark").checked == true &&
					document.getElementById("CBrobe").checked == true) {
				robeRows[i].style.display = "";
			}
		}
	}
});		
let stmrFilter = document.querySelector("input[id=ignoreSTMR]");
stmrFilter.addEventListener('click', function() {
	if(document.getElementById("ignoreSTMR").checked == true) {
		let i = 0;
		let lshieldTable = document.getElementById("lshield");
		let lshieldRows = lshieldTable.rows;
		
		for(i = 1; i < (lshieldRows.length); i++) {
			let stmr = lshieldRows[i].getElementsByTagName("td")[9];
			
			if(stmr.innerHTML == "false" && lshieldRows[i].style.display == "") {
				lshieldRows[i].style.display = "";
			}
			else if(stmr.innerHTML == "true" && lshieldRows[i].style.display == ""){
				lshieldRows[i].style.display = "none";
			}		
		}
		
		let hshieldTable = document.getElementById("hshield");
		let hshieldRows = hshieldTable.rows;
		
		for(i = 1; i < (hshieldRows.length); i++) {
			let stmr = hshieldRows[i].getElementsByTagName("td")[9];
			
			if(stmr.innerHTML == "false" && hshieldRows[i].style.display == "") {
				hshieldRows[i].style.display = "";
			}
			else if(stmr.innerHTML == "true" && hshieldRows[i].style.display == ""){
				hshieldRows[i].style.display = "none";
			}
		}
		
		let hatTable = document.getElementById("hat");
		let hatRows = hatTable.rows;
		
		for(i = 1; i < (hatRows.length); i++) {
			let stmr = hatRows[i].getElementsByTagName("td")[9];
			
			if(stmr.innerHTML == "false" && hatRows[i].style.display == "") {
				hatRows[i].style.display = "";
			}
			else if(stmr.innerHTML == "true" && hatRows[i].style.display == ""){
				hatRows[i].style.display = "none";
			}
		}
		
		let helmTable = document.getElementById("helm");
		let helmRows = helmTable.rows;
		
		for(i = 1; i < (helmRows.length); i++) {
			let stmr = helmRows[i].getElementsByTagName("td")[9];
			
			if(stmr.innerHTML == "false" && helmRows[i].style.display == "") {
				helmRows[i].style.display = "";
			}
			else if(stmr.innerHTML == "true" && helmRows[i].style.display == ""){
				helmRows[i].style.display = "none";
			}
		}	
		
		let clothesTable = document.getElementById("clothes");
		let clothesRows = clothesTable.rows;
		
		for(i = 1; i < (clothesRows.length); i++) {
			let stmr = clothesRows[i].getElementsByTagName("td")[9];
			
			if(stmr.innerHTML == "false" && clothesRows[i].style.display == "") {
				clothesRows[i].style.display = "";
			}
			else if(stmr.innerHTML == "true" && clothesRows[i].style.display == ""){
				clothesRows[i].style.display = "none";
			}
		}
		
		let larmorTable = document.getElementById("larmor");
		let larmorRows = larmorTable.rows;
		
		for(i = 1; i < (larmorRows.length); i++) {
			let stmr = larmorRows[i].getElementsByTagName("td")[9];
			
			if(stmr.innerHTML == "false" && larmorRows[i].style.display == "") {
				larmorRows[i].style.display = "";
			}
			else if(stmr.innerHTML == "true" && larmorRows[i].style.display == ""){
				larmorRows[i].style.display = "none";
			}
		}
		
		let harmorTable = document.getElementById("harmor");
		let harmorRows = harmorTable.rows;
		
		for(i = 1; i < (harmorRows.length); i++) {
			let stmr = harmorRows[i].getElementsByTagName("td")[9];
			
			if(stmr.innerHTML == "false" && harmorRows[i].style.display == "") {
				harmorRows[i].style.display = "";
			}
			else if(stmr.innerHTML == "true" && harmorRows[i].style.display == ""){
				harmorRows[i].style.display = "none";
			}
		}
		
		let robeTable = document.getElementById("robe");
		let robeRows = robeTable.rows;
		
		for(i = 1; i < (robeRows.length); i++) {
			let stmr = robeRows[i].getElementsByTagName("td")[9];
			
			if(stmr.innerHTML == "false" && robeRows[i].style.display == "") {
				robeRows[i].style.display = "";
			}
			else if(stmr.innerHTML == "true" && robeRows[i].style.display == ""){
				robeRows[i].style.display = "none";
			}
		}
		
	}
	else {
		let i = 0;
		let lshieldTable = document.getElementById("lshield");
		let lshieldRows = lshieldTable.rows;
		
		for(i = 1; i < (lshieldRows.length); i++) {
			let lshield = lshieldRows[i].getElementsByTagName("td")[7];
			let stmr = lshieldRows[i].getElementsByTagName("td")[9];
		
			
			if(stmr.innerHTML == "true" && lshieldRows[i].style.display == "none" &&
					(lshield.innerHTML.indexOf("Resistance: Fire (+") != -1 || lshield.innerHTML.indexOf(", Fire (+") != -1 ||
							lshield.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBfire").checked == true &&
					document.getElementById("CBlshield").checked == true) {
				lshieldRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && lshieldRows[i].style.display == "none" &&
					(lshield.innerHTML.indexOf("Resistance: Ice (+") != -1 || lshield.innerHTML.indexOf(", Ice (+") != -1 ||
							lshield.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBice").checked == true &&
					document.getElementById("CBlshield").checked == true) {
				lshieldRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && lshieldRows[i].style.display == "none" &&
					(lshield.innerHTML.indexOf("Resistance: Lightning (+") != -1 || lshield.innerHTML.indexOf(", Lightning (+") != -1 ||
							lshield.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBlightning").checked == true &&
					document.getElementById("CBlshield").checked == true) {
				lshieldRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && lshieldRows[i].style.display == "none" &&
					(lshield.innerHTML.indexOf("Resistance: Water (+") != -1 || lshield.innerHTML.indexOf(", Water (+") != -1 ||
							lshield.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBwater").checked == true &&
					document.getElementById("CBlshield").checked == true) {
				lshieldRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && lshieldRows[i].style.display == "none" &&
					(lshield.innerHTML.indexOf("Resistance: Wind (+") != -1 || lshield.innerHTML.indexOf(", Wind (+") != -1 ||
							lshield.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBwind").checked == true &&
					document.getElementById("CBlshield").checked == true) {
				lshieldRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && lshieldRows[i].style.display == "none" &&
					(lshield.innerHTML.indexOf("Resistance: Earth (+") != -1 || lshield.innerHTML.indexOf(", Earth (+") != -1 ||
							lshield.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBearth").checked == true &&
					document.getElementById("CBlshield").checked == true) {
				lshieldRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && lshieldRows[i].style.display == "none" &&
					(lshield.innerHTML.indexOf("Resistance: Light (+") != -1 || lshield.innerHTML.indexOf(", Light (+") != -1 ||
							lshield.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBlight").checked == true &&
					document.getElementById("CBlshield").checked == true) {
				lshieldRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && lshieldRows[i].style.display == "none" &&
					(lshield.innerHTML.indexOf("Resistance: Dark (+") != -1 || lshield.innerHTML.indexOf(", Dark (+") != -1 ||
							lshield.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBdark").checked == true &&
					document.getElementById("CBlshield").checked == true) {
				lshieldRows[i].style.display = "";
			}
		}
		
		let hshieldTable = document.getElementById("hshield");
		let hshieldRows = hshieldTable.rows;
		
		for(i = 1; i < (hshieldRows.length); i++) {
			let hshield = hshieldRows[i].getElementsByTagName("td")[7];
			let stmr = hshieldRows[i].getElementsByTagName("td")[9];
			
			if(stmr.innerHTML == "true" && hshieldRows[i].style.display == "none" &&
					(hshield.innerHTML.indexOf("Resistance: Fire (+") != -1 || hshield.innerHTML.indexOf(", Fire (+") != -1 ||
							hshield.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBfire").checked == true &&
					document.getElementById("CBhshield").checked == true) {
				hshieldRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && hshieldRows[i].style.display == "none" &&
					(hshield.innerHTML.indexOf("Resistance: Ice (+") != -1 || hshield.innerHTML.indexOf(", Ice (+") != -1 ||
							hshield.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBice").checked == true &&
					document.getElementById("CBhshield").checked == true) {
				hshieldRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && hshieldRows[i].style.display == "none" &&
					(hshield.innerHTML.indexOf("Resistance: Lightning (+") != -1 || hshield.innerHTML.indexOf(", Lightning (+") != -1 ||
							hshield.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBlightning").checked == true &&
					document.getElementById("CBhshield").checked == true) {
				hshieldRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && hshieldRows[i].style.display == "none" &&
					(hshield.innerHTML.indexOf("Resistance: Water (+") != -1 || hshield.innerHTML.indexOf(", Water (+") != -1 ||
							hshield.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBwater").checked == true &&
					document.getElementById("CBhshield").checked == true) {
				hshieldRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && hshieldRows[i].style.display == "none" &&
					(hshield.innerHTML.indexOf("Resistance: Wind (+") != -1 || hshield.innerHTML.indexOf(", Wind (+") != -1 ||
							hshield.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBwind").checked == true &&
					document.getElementById("CBhshield").checked == true) {
				hshieldRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && hshieldRows[i].style.display == "none" &&
					(hshield.innerHTML.indexOf("Resistance: Earth (+") != -1 || hshield.innerHTML.indexOf(", Earth (+") != -1 ||
							hshield.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBearth").checked == true &&
					document.getElementById("CBhshield").checked == true) {
				hshieldRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && hshieldRows[i].style.display == "none" &&
					(hshield.innerHTML.indexOf("Resistance: Light (+") != -1 || hshield.innerHTML.indexOf(", Light (+") != -1 ||
							hshield.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBlight").checked == true &&
					document.getElementById("CBhshield").checked == true) {
				hshieldRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && hshieldRows[i].style.display == "none" &&
					(hshield.innerHTML.indexOf("Resistance: Dark (+") != -1 || hshield.innerHTML.indexOf(", Dark (+") != -1 ||
							hshield.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBdark").checked == true &&
					document.getElementById("CBhshield").checked == true) {
				hshieldRows[i].style.display = "";
			}
		}
		
		let hatTable = document.getElementById("hat");
		let hatRows = hatTable.rows;
		
		for(i = 1; i < (hatRows.length); i++) {
			let hat = hatRows[i].getElementsByTagName("td")[7];
			let stmr = hatRows[i].getElementsByTagName("td")[9];
			
			if(stmr.innerHTML == "true" && hatRows[i].style.display == "none" &&
					(hat.innerHTML.indexOf("Resistance: Fire (+") != -1 || hat.innerHTML.indexOf(", Fire (+") != -1 ||
							hat.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBfire").checked == true &&
					document.getElementById("CBhat").checked == true) {
				hatRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && hatRows[i].style.display == "none" &&
					(hat.innerHTML.indexOf("Resistance: Ice (+") != -1 || hat.innerHTML.indexOf(", Ice (+") != -1 ||
							hat.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBice").checked == true &&
					document.getElementById("CBhat").checked == true) {
				hatRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && hatRows[i].style.display == "none" &&
					(hat.innerHTML.indexOf("Resistance: Lightning (+") != -1 || hat.innerHTML.indexOf(", Lightning (+") != -1 ||
							hat.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBlightning").checked == true &&
					document.getElementById("CBhat").checked == true) {
				hatRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && hatRows[i].style.display == "none" &&
					(hat.innerHTML.indexOf("Resistance: Water (+") != -1 || hat.innerHTML.indexOf(", Water (+") != -1 ||
							hat.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBwater").checked == true &&
					document.getElementById("CBhat").checked == true) {
				hatRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && hatRows[i].style.display == "none" &&
					(hat.innerHTML.indexOf("Resistance: Wind (+") != -1 || hat.innerHTML.indexOf(", Wind (+") != -1 ||
							hat.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBwind").checked == true &&
					document.getElementById("CBhat").checked == true) {
				hatRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && hatRows[i].style.display == "none" &&
					(hat.innerHTML.indexOf("Resistance: Earth (+") != -1 || hat.innerHTML.indexOf(", Earth (+") != -1 ||
							hat.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBearth").checked == true &&
					document.getElementById("CBhat").checked == true) {
				hatRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && hatRows[i].style.display == "none" &&
					(hat.innerHTML.indexOf("Resistance: Light (+") != -1 || hat.innerHTML.indexOf(", Light (+") != -1 ||
							hat.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBlight").checked == true &&
					document.getElementById("CBhat").checked == true) {
				hatRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && hatRows[i].style.display == "none" &&
					(hat.innerHTML.indexOf("Resistance: Dark (+") != -1 || hat.innerHTML.indexOf(", Dark (+") != -1 ||
							hat.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBdark").checked == true &&
					document.getElementById("CBhat").checked == true) {
				hatRows[i].style.display = "";
			}
		}	
		
		let helmTable = document.getElementById("helm");
		let helmRows = helmTable.rows;
		
		for(i = 1; i < (helmRows.length); i++) {
			let helm = helmRows[i].getElementsByTagName("td")[7];
			let stmr = helmRows[i].getElementsByTagName("td")[9];
			
			if(stmr.innerHTML == "true" && helmRows[i].style.display == "none" &&
					(helm.innerHTML.indexOf("Resistance: Fire (+") != -1 || helm.innerHTML.indexOf(", Fire (+") != -1 ||
							helm.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBfire").checked == true &&
					document.getElementById("CBhelm").checked == true) {
				helmRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && helmRows[i].style.display == "none" &&
					(helm.innerHTML.indexOf("Resistance: Ice (+") != -1 || helm.innerHTML.indexOf(", Ice (+") != -1 ||
							helm.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBice").checked == true &&
					document.getElementById("CBhelm").checked == true) {
				helmRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && helmRows[i].style.display == "none" &&
					(helm.innerHTML.indexOf("Resistance: Lightning (+") != -1 || helm.innerHTML.indexOf(", Lightning (+") != -1 ||
							helm.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBlightning").checked == true &&
					document.getElementById("CBhelm").checked == true) {
				helmRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && helmRows[i].style.display == "none" &&
					(helm.innerHTML.indexOf("Resistance: Water (+") != -1 || helm.innerHTML.indexOf(", Water (+") != -1 ||
							helm.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBwater").checked == true &&
					document.getElementById("CBhelm").checked == true) {
				helmRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && helmRows[i].style.display == "none" &&
					(helm.innerHTML.indexOf("Resistance: Wind (+") != -1 || helm.innerHTML.indexOf(", Wind (+") != -1 ||
							helm.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBwind").checked == true &&
					document.getElementById("CBhelm").checked == true) {
				helmRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && helmRows[i].style.display == "none" &&
					(helm.innerHTML.indexOf("Resistance: Earth (+") != -1 || helm.innerHTML.indexOf(", Earth (+") != -1 ||
							helm.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBearth").checked == true &&
					document.getElementById("CBhelm").checked == true) {
				helmRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && helmRows[i].style.display == "none" &&
					(helm.innerHTML.indexOf("Resistance: Light (+") != -1 || helm.innerHTML.indexOf(", Light (+") != -1 ||
							helm.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBlight").checked == true &&
					document.getElementById("CBhelm").checked == true) {
				helmRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && helmRows[i].style.display == "none" &&
					(helm.innerHTML.indexOf("Resistance: Dark (+") != -1 || helm.innerHTML.indexOf(", Dark (+") != -1 ||
							helm.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBdark").checked == true &&
					document.getElementById("CBhelm").checked == true) {
				helmRows[i].style.display = "";
			}
		}
		
		let clothesTable = document.getElementById("clothes");
		let clothesRows = clothesTable.rows;
		
		for(i = 1; i < (clothesRows.length); i++) {
			let clothes = clothesRows[i].getElementsByTagName("td")[7];
			let stmr = clothesRows[i].getElementsByTagName("td")[9];
			
			if(stmr.innerHTML == "true" && clothesRows[i].style.display == "none" &&
					(clothes.innerHTML.indexOf("Resistance: Fire (+") != -1 || clothes.innerHTML.indexOf(", Fire (+") != -1 ||
							clothes.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBfire").checked == true &&
					document.getElementById("CBclothes").checked == true) {
				clothesRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && clothesRows[i].style.display == "none" &&
					(clothes.innerHTML.indexOf("Resistance: Ice (+") != -1 || clothes.innerHTML.indexOf(", Ice (+") != -1 ||
							clothes.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBice").checked == true &&
					document.getElementById("CBclothes").checked == true) {
				clothesRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && clothesRows[i].style.display == "none" &&
					(clothes.innerHTML.indexOf("Resistance: Lightning (+") != -1 || clothes.innerHTML.indexOf(", Lightning (+") != -1 ||
							clothes.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBlightning").checked == true &&
					document.getElementById("CBclothes").checked == true) {
				clothesRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && clothesRows[i].style.display == "none" &&
					(clothes.innerHTML.indexOf("Resistance: Water (+") != -1 || clothes.innerHTML.indexOf(", Water (+") != -1 ||
							clothes.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBwater").checked == true &&
					document.getElementById("CBclothes").checked == true) {
				clothesRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && clothesRows[i].style.display == "none" &&
					(clothes.innerHTML.indexOf("Resistance: Wind (+") != -1 || clothes.innerHTML.indexOf(", Wind (+") != -1 ||
							clothes.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBwind").checked == true &&
					document.getElementById("CBclothes").checked == true) {
				clothesRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && clothesRows[i].style.display == "none" &&
					(clothes.innerHTML.indexOf("Resistance: Earth (+") != -1 || clothes.innerHTML.indexOf(", Earth (+") != -1 ||
							clothes.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBearth").checked == true &&
					document.getElementById("CBclothes").checked == true) {
				clothesRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && clothesRows[i].style.display == "none" &&
					(clothes.innerHTML.indexOf("Resistance: Light (+") != -1 || clothes.innerHTML.indexOf(", Light (+") != -1 ||
							clothes.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBlight").checked == true &&
					document.getElementById("CBclothes").checked == true) {
				clothesRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && clothesRows[i].style.display == "none" &&
					(clothes.innerHTML.indexOf("Resistance: Dark (+") != -1 || clothes.innerHTML.indexOf(", Dark (+") != -1 ||
							clothes.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBdark").checked == true &&
					document.getElementById("CBclothes").checked == true) {
				clothesRows[i].style.display = "";
			}
		}
		
		let larmorTable = document.getElementById("larmor");
		let larmorRows = larmorTable.rows;
		
		for(i = 1; i < (larmorRows.length); i++) {
			let larmor = larmorRows[i].getElementsByTagName("td")[7];
			let stmr = larmorRows[i].getElementsByTagName("td")[9];
			
			if(stmr.innerHTML == "true" && larmorRows[i].style.display == "none" &&
					(larmor.innerHTML.indexOf("Resistance: Fire (+") != -1 || larmor.innerHTML.indexOf(", Fire (+") != -1 ||
							larmor.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBfire").checked == true &&
					document.getElementById("CBlarmor").checked == true) {
				larmorRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && larmorRows[i].style.display == "none" &&
					(larmor.innerHTML.indexOf("Resistance: Ice (+") != -1 || larmor.innerHTML.indexOf(", Ice (+") != -1 ||
							larmor.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBice").checked == true &&
					document.getElementById("CBlarmor").checked == true) {
				larmorRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && larmorRows[i].style.display == "none" &&
					(larmor.innerHTML.indexOf("Resistance: Lightning (+") != -1 || larmor.innerHTML.indexOf(", Lightning (+") != -1 ||
							larmor.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBlightning").checked == true &&
					document.getElementById("CBlarmor").checked == true) {
				larmorRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && larmorRows[i].style.display == "none" &&
					(larmor.innerHTML.indexOf("Resistance: Water (+") != -1 || larmor.innerHTML.indexOf(", Water (+") != -1 ||
							larmor.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBwater").checked == true &&
					document.getElementById("CBlarmor").checked == true) {
				larmorRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && larmorRows[i].style.display == "none" &&
					(larmor.innerHTML.indexOf("Resistance: Wind (+") != -1 || larmor.innerHTML.indexOf(", Wind (+") != -1 ||
							larmor.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBwind").checked == true &&
					document.getElementById("CBlarmor").checked == true) {
				larmorRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && larmorRows[i].style.display == "none" &&
					(larmor.innerHTML.indexOf("Resistance: Earth (+") != -1 || larmor.innerHTML.indexOf(", Earth (+") != -1 ||
							larmor.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBearth").checked == true &&
					document.getElementById("CBlarmor").checked == true) {
				larmorRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && larmorRows[i].style.display == "none" &&
					(larmor.innerHTML.indexOf("Resistance: Light (+") != -1 || larmor.innerHTML.indexOf(", Light (+") != -1 ||
							larmor.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBlight").checked == true &&
					document.getElementById("CBlarmor").checked == true) {
				larmorRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && larmorRows[i].style.display == "none" &&
					(larmor.innerHTML.indexOf("Resistance: Dark (+") != -1 || larmor.innerHTML.indexOf(", Dark (+") != -1 ||
							larmor.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBdark").checked == true &&
					document.getElementById("CBlarmor").checked == true) {
				larmorRows[i].style.display = "";
			}
		}
		
		let harmorTable = document.getElementById("harmor");
		let harmorRows = harmorTable.rows;
		
		for(i = 1; i < (harmorRows.length); i++) {
			let harmor = harmorRows[i].getElementsByTagName("td")[7];
			let stmr = harmorRows[i].getElementsByTagName("td")[9];
			
			if(stmr.innerHTML == "true" && harmorRows[i].style.display == "none" &&
					(harmor.innerHTML.indexOf("Resistance: Fire (+") != -1 || harmor.innerHTML.indexOf(", Fire (+") != -1 ||
							harmor.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBfire").checked == true &&
					document.getElementById("CBharmor").checked == true) {
				harmorRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && harmorRows[i].style.display == "none" &&
					(harmor.innerHTML.indexOf("Resistance: Ice (+") != -1 || harmor.innerHTML.indexOf(", Ice (+") != -1 ||
							harmor.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBice").checked == true &&
					document.getElementById("CBharmor").checked == true) {
				harmorRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && harmorRows[i].style.display == "none" &&
					(harmor.innerHTML.indexOf("Resistance: Lightning (+") != -1 || harmor.innerHTML.indexOf(", Lightning (+") != -1 ||
							harmor.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBlightning").checked == true &&
					document.getElementById("CBharmor").checked == true) {
				harmorRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && harmorRows[i].style.display == "none" &&
					(harmor.innerHTML.indexOf("Resistance: Water (+") != -1 || harmor.innerHTML.indexOf(", Water (+") != -1 ||
							harmor.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBwater").checked == true &&
					document.getElementById("CBharmor").checked == true) {
				harmorRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && harmorRows[i].style.display == "none" &&
					(harmor.innerHTML.indexOf("Resistance: Wind (+") != -1 || harmor.innerHTML.indexOf(", Wind (+") != -1 ||
							harmor.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBwind").checked == true &&
					document.getElementById("CBharmor").checked == true) {
				harmorRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && harmorRows[i].style.display == "none" &&
					(harmor.innerHTML.indexOf("Resistance: Earth (+") != -1 || harmor.innerHTML.indexOf(", Earth (+") != -1 ||
							harmor.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBearth").checked == true &&
					document.getElementById("CBharmor").checked == true) {
				harmorRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && harmorRows[i].style.display == "none" &&
					(harmor.innerHTML.indexOf("Resistance: Light (+") != -1 || harmor.innerHTML.indexOf(", Light (+") != -1 ||
							harmor.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBlight").checked == true &&
					document.getElementById("CBharmor").checked == true) {
				harmorRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && harmorRows[i].style.display == "none" &&
					(harmor.innerHTML.indexOf("Resistance: Dark (+") != -1 || harmor.innerHTML.indexOf(", Dark (+") != -1 ||
							harmor.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBdark").checked == true &&
					document.getElementById("CBharmor").checked == true) {
				lshieldRows[i].style.display = "";
			}
		}
		
		let robeTable = document.getElementById("robe");
		let robeRows = robeTable.rows;
		
		for(i = 1; i < (robeRows.length); i++) {
			let robe = robeRows[i].getElementsByTagName("td")[7];
			let stmr = robeRows[i].getElementsByTagName("td")[9];
			
			if(stmr.innerHTML == "true" && robeRows[i].style.display == "none" &&
					(robe.innerHTML.indexOf("Resistance: Fire (+") != -1 || robe.innerHTML.indexOf(", Fire (+") != -1 ||
							robe.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBfire").checked == true &&
					document.getElementById("CBrobe").checked == true) {
				robeRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && robeRows[i].style.display == "none" &&
					(robe.innerHTML.indexOf("Resistance: Ice (+") != -1 || robe.innerHTML.indexOf(", Ice (+") != -1 ||
							robe.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBice").checked == true &&
					document.getElementById("CBrobe").checked == true) {
				robeRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && robeRows[i].style.display == "none" &&
					(robe.innerHTML.indexOf("Resistance: Lightning (+") != -1 || robe.innerHTML.indexOf(", Lightning (+") != -1 ||
							robe.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBlightning").checked == true &&
					document.getElementById("CBrobe").checked == true) {
				robeRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && robeRows[i].style.display == "none" &&
					(robe.innerHTML.indexOf("Resistance: Water (+") != -1 || robe.innerHTML.indexOf(", Water (+") != -1 ||
							robe.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBwater").checked == true &&
					document.getElementById("CBrobe").checked == true) {
				robeRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && robeRows[i].style.display == "none" &&
					(robe.innerHTML.indexOf("Resistance: Wind (+") != -1 || robe.innerHTML.indexOf(", Wind (+") != -1 ||
							robe.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBwind").checked == true &&
					document.getElementById("CBrobe").checked == true) {
				robeRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && robeRows[i].style.display == "none" &&
					(robe.innerHTML.indexOf("Resistance: Earth (+") != -1 || robe.innerHTML.indexOf(", Earth (+") != -1 ||
							robe.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBearth").checked == true &&
					document.getElementById("CBrobe").checked == true) {
				robeRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && robeRows[i].style.display == "none" &&
					(robe.innerHTML.indexOf("Resistance: Light (+") != -1 || robe.innerHTML.indexOf(", Light (+") != -1 ||
							robe.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBlight").checked == true &&
					document.getElementById("CBrobe").checked == true) {
				robeRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && robeRows[i].style.display == "none" &&
					(robe.innerHTML.indexOf("Resistance: Dark (+") != -1 || robe.innerHTML.indexOf(", Dark (+") != -1 ||
							robe.innerHTML.indexOf("Resistance: All elements (+") != -1) &&
					document.getElementById("CBdark").checked == true &&
					document.getElementById("CBrobe").checked == true) {
				robeRows[i].style.display = "";
			}
		}
	}
});		