let daggerIcon = document.querySelector("img[id=daggericon]");
daggerIcon.addEventListener('click', function() {
	let brightImg = "../../resources/dagger.png";
	let darkImg = "../../resources/darkdagger.png";
	
	
	// Include daggers in search
	if(document.getElementById("daggericon").getAttribute('src') == darkImg) {
		document.getElementById("daggericon").src = brightImg;
		document.getElementById("CBdagger").checked = true;
		
		let x, i = 0;
		let daggerTable = document.getElementById("dagger");
		let daggerRows = daggerTable.rows;
		
		for(i = 1; i < (daggerRows.length); i++) {
			x = daggerRows[i].getElementsByTagName("td")[7];
			
			// Fire element dagger exists in the database
			if(document.getElementById("CBfire").checked == true && 
					(x.innerHTML.indexOf("Element: Fire") != -1 || x.innerHTML.indexOf(", Fire") != -1)) {
				daggerRows[i].style.display = "";
			}
			// Ice element dagger exists in the database
			if(document.getElementById("CBice").checked == true &&
					(x.innerHTML.indexOf("Element: Ice") != -1 || x.innerHTML.indexOf(", Ice") != -1)) {
				daggerRows[i].style.display = "";
			}
			// Lightning element dagger exists in the database
			if(document.getElementById("CBlightning").checked == true &&
					(x.innerHTML.indexOf("Element: Lightning") != -1 || x.innerHTML.indexOf(", Lightning") != -1)) {
				daggerRows[i].style.display = "";
			}
			// Water element dagger exists in the database
			if(document.getElementById("CBwater").checked == true &&
					(x.innerHTML.indexOf("Element: Water") != -1 || x.innerHTML.indexOf(", Water") != -1)) {
				daggerRows[i].style.display = "";
			}
			// Wind element dagger exists in the database
			if(document.getElementById("CBwind").checked == true &&
					(x.innerHTML.indexOf("Element: Wind") != -1 || x.innerHTML.indexOf(", Wind") != -1)) {
				daggerRows[i].style.display = "";
			}
			// Earth element dagger exists in the database
			if(document.getElementById("CBearth").checked == true &&
					(x.innerHTML.indexOf("Element: Earth") != -1 || x.innerHTML.indexOf(", Earth") != -1)) {
				daggerRows[i].style.display = "";
			}
			// Light element dagger exists in the database
			if(document.getElementById("CBlight").checked == true &&
					(x.innerHTML.indexOf("Element: Light") != -1 || x.innerHTML.indexOf(", Light") != -1) && x.innerHTML.indexOf("Lightning") == -1) {
				daggerRows[i].style.display = "";
			}
			// Dark element dagger exists in the database
			if(document.getElementById("CBdark").checked == true &&
					(x.innerHTML.indexOf("Element: Dark") != -1 || x.innerHTML.indexOf(", Dark") != -1)) {
				daggerRows[i].style.display = "";
			}
			if(document.getElementById("CBnon").checked == true &&
					x.innerHTML.indexOf("Element:") == -1) {
				daggerRows[i].style.display = "";
			}
		}
	}
	// Ignore daggers in search
	else {
		document.getElementById("daggericon").src = darkImg;	
		document.getElementById("CBdagger").checked = false;
		
		let x, i = 0;
		let daggerTable = document.getElementById("dagger");
		let daggerRows = daggerTable.rows;
		
		for(i = 1; i < (daggerRows.length - 1); i++) {
			daggerRows[i].style.display = "none";
		}		
	}
});

let swordIcon = document.querySelector("img[id=swordicon]");
swordIcon.addEventListener('click', function() {
	let brightImg = "../../resources/sword.png";
	let darkImg = "../../resources/darksword.png";
	// Include swords in search
	if(document.getElementById("swordicon").getAttribute('src') == darkImg) {
		document.getElementById("swordicon").src = brightImg;
		document.getElementById("CBsword").checked = true;
		
		let x, i = 0;
		let swordTable = document.getElementById("sword");
		let swordRows = swordTable.rows;
		
		for(i = 1; i < (swordRows.length); i++) {
			x = swordRows[i].getElementsByTagName("td")[7];
			// Fire element sword exists in the database
			if(document.getElementById("CBfire").checked == true && 
					(x.innerHTML.indexOf("Element: Fire") != -1 || x.innerHTML.indexOf(", Fire") != -1)) {
				swordRows[i].style.display = "";
			}
			// Ice element sword exists in the database
			if(document.getElementById("CBice").checked == true &&
					(x.innerHTML.indexOf("Element: Ice") != -1 || x.innerHTML.indexOf(", Ice") != -1)) {
				swordRows[i].style.display = "";
			}
			// Lightning element sword exists in the database
			if(document.getElementById("CBlightning").checked == true &&
					(x.innerHTML.indexOf("Element: Lightning") != -1 || x.innerHTML.indexOf(", Lightning") != -1)) {
				swordRows[i].style.display = "";
			}
			// Water element sword exists in the database
			if(document.getElementById("CBwater").checked == true &&
					(x.innerHTML.indexOf("Element: Water") != -1 || x.innerHTML.indexOf(", Water") != -1)) {
				swordRows[i].style.display = "";
			}
			// Wind element sword exists in the database
			if(document.getElementById("CBwind").checked == true &&
					(x.innerHTML.indexOf("Element: Wind") != -1 || x.innerHTML.indexOf(", Wind") != -1)) {
				swordRows[i].style.display = "";
			}
			// Earth element sword exists in the database
			if(document.getElementById("CBearth").checked == true &&
					(x.innerHTML.indexOf("Element: Earth") != -1 || x.innerHTML.indexOf(", Earth") != -1)) {
				swordRows[i].style.display = "";
			}
			// Light element sword exists in the database
			if(document.getElementById("CBlight").checked == true &&
					(x.innerHTML.indexOf("Element: Light") != -1 || x.innerHTML.indexOf(", Light") != -1) && x.innerHTML.indexOf("Lightning") == -1) {
				swordRows[i].style.display = "";
			}
			// Dark element sword exists in the database
			if(document.getElementById("CBdark").checked == true &&
					(x.innerHTML.indexOf("Element: Dark") != -1 || x.innerHTML.indexOf(", Dark") != -1)) {
				swordRows[i].style.display = "";
			}
		}
	}
	// Ignore swords in search
	else {
		document.getElementById("swordicon").src = darkImg;	
		document.getElementById("CBsword").checked = false;
		
		let x, i = 0;
		let swordTable = document.getElementById("sword");
		let swordRows = swordTable.rows;
		
		for(i = 1; i < (swordRows.length); i++) {
			swordRows[i].style.display = "none";
		}	
	}
});

let gswordIcon = document.querySelector("img[id=gswordicon]");
gswordIcon.addEventListener('click', function() {
	let brightImg = "../../resources/gsword.png";
	let darkImg = "../../resources/darkgsword.png";
	// Include great swords in search
	if(document.getElementById("gswordicon").getAttribute('src') == darkImg) {
		document.getElementById("gswordicon").src = brightImg;
		document.getElementById("CBgsword").checked = true;
		
		let x, i = 0;
		let gswordTable = document.getElementById("gsword");
		let gswordRows = gswordTable.rows;
		
		for(i = 1; i < (gswordRows.length); i++) {
			x = gswordRows[i].getElementsByTagName("td")[7];
			// Fire element great sword exists in the database
			if(document.getElementById("CBfire").checked == true && 
					(x.innerHTML.indexOf("Element: Fire") != -1 || x.innerHTML.indexOf(", Fire") != -1)) {
				gswordRows[i].style.display = "";
			}
			// Ice element great sword exists in the database
			if(document.getElementById("CBice").checked == true &&
					(x.innerHTML.indexOf("Element: Ice") != -1 || x.innerHTML.indexOf(", Ice") != -1)) {
				gswordRows[i].style.display = "";
			}
			// Lightning element great sword exists in the database
			if(document.getElementById("CBlightning").checked == true &&
					(x.innerHTML.indexOf("Element: Lightning") != -1 || x.innerHTML.indexOf(", Lightning") != -1) ) {
				gswordRows[i].style.display = "";
			}
			// Water element great sword exists in the database
			if(document.getElementById("CBwater").checked == true &&
					(x.innerHTML.indexOf("Element: Water") != -1 || x.innerHTML.indexOf(", Water") != -1)) {
				gswordRows[i].style.display = "";
			}
			// Wind element great sword exists in the database
			if(document.getElementById("CBwind").checked == true &&
					(x.innerHTML.indexOf("Element: Wind") != -1 || x.innerHTML.indexOf(", Wind") != -1)) {
				gswordRows[i].style.display = "";
			}
			// Earth element great sword exists in the database
			if(document.getElementById("CBearth").checked == true &&
					(x.innerHTML.indexOf("Element: Earth") != -1 || x.innerHTML.indexOf(", Earth") != -1)) {
				gswordRows[i].style.display = "";
			}
			// Light element great sword exists in the database
			if(document.getElementById("CBlight").checked == true &&
					(x.innerHTML.indexOf("Element: Light") != -1 || x.innerHTML.indexOf(", Light") != -1) && x.innerHTML.indexOf("Lightning") == -1) {
				gswordRows[i].style.display = "";
			}
			// Dark element great sword exists in the database
			if(document.getElementById("CBdark").checked == true &&
					(x.innerHTML.indexOf("Element: Dark") != -1 || x.innerHTML.indexOf(", Dark") != -1)) {
				gswordRows[i].style.display = "";
			}
		}
	}
	// Ignore great swords in search
	else {
		document.getElementById("gswordicon").src = darkImg;	
		document.getElementById("CBgsword").checked = false;
		
		let x, i = 0;
		let gswordTable = document.getElementById("gsword");
		let gswordRows = gswordTable.rows;
		
		for(i = 1; i < (gswordRows.length); i++) {
			gswordRows[i].style.display = "none";
		}	
	}
});
	
let katanaIcon = document.querySelector("img[id=katanaicon]");
katanaIcon.addEventListener('click', function() {
	let brightImg = "../../resources/katana.png";
	let darkImg = "../../resources/darkkatana.png";
	// Include katanas in search
	if(document.getElementById("katanaicon").getAttribute('src') == darkImg) {
		document.getElementById("katanaicon").src = brightImg;
		document.getElementById("CBkatana").checked = true;
		
		let x, i = 0;
		let katanaTable = document.getElementById("katana");
		let katanaRows = katanaTable.rows;
		
		for(i = 1; i < (katanaRows.length); i++) {
			x = katanaRows[i].getElementsByTagName("td")[7];
			// Fire element katana exists in the database
			if(document.getElementById("CBfire").checked == true && 
					(x.innerHTML.indexOf("Element: Fire") != -1 || x.innerHTML.indexOf(", Fire") != -1)) {
				katanaRows[i].style.display = "";
			}
			// Ice element katana exists in the database
			if(document.getElementById("CBice").checked == true &&
					(x.innerHTML.indexOf("Element: Ice") != -1 || x.innerHTML.indexOf(", Ice") != -1)) {
				katanaRows[i].style.display = "";
			}
			// Lightning element katana exists in the database
			if(document.getElementById("CBlightning").checked == true &&
					(x.innerHTML.indexOf("Element: Lightning") != -1 || x.innerHTML.indexOf(", Lightning") != -1)) {
				katanaRows[i].style.display = "";
			}
			// Water element katana exists in the database
			if(document.getElementById("CBwater").checked == true &&
					(x.innerHTML.indexOf("Element: Water") != -1 || x.innerHTML.indexOf(", Water") != -1)) {
				katanaRows[i].style.display = "";
			}
			// Wind element katana exists in the database
			if(document.getElementById("CBwind").checked == true &&
					(x.innerHTML.indexOf("Element: Wind") != -1 || x.innerHTML.indexOf(", Wind") != -1)) {
				katanaRows[i].style.display = "";
			}
			// Earth element katana exists in the database
			if(document.getElementById("CBearth").checked == true &&
					(x.innerHTML.indexOf("Element: Earth") != -1 || x.innerHTML.indexOf(", Earth") != -1)) {
				katanaRows[i].style.display = "";
			}
			// Light element katana exists in the database
			if(document.getElementById("CBlight").checked == true &&
					(x.innerHTML.indexOf("Element: Light") != -1 || x.innerHTML.indexOf(", Light") != -1) && x.innerHTML.indexOf("Lightning") == -1) {
				katanaRows[i].style.display = "";
			}
			// Dark element katana exists in the database
			if(document.getElementById("CBdark").checked == true &&
					(x.innerHTML.indexOf("Element: Dark") != -1 || x.innerHTML.indexOf(", Dark") != -1)) {
				katanaRows[i].style.display = "";
			}
		}
	}
	// Ignore katanas in search
	else {
		document.getElementById("katanaicon").src = darkImg;	
		document.getElementById("CBkatana").checked = false;
		
		let x, i = 0;
		let katanaTable = document.getElementById("katana");
		let katanaRows = katanaTable.rows;
		
		for(i = 1; i < (katanaRows.length); i++) {
			katanaRows[i].style.display = "none";
		}	
	}
});

let staffIcon = document.querySelector("img[id=stafficon]");
staffIcon.addEventListener('click', function() {
	let brightImg = "../../resources/staff.png";
	let darkImg = "../../resources/darkstaff.png";
	// Include staves in search
	if(document.getElementById("stafficon").getAttribute('src') == darkImg) {
		document.getElementById("stafficon").src = brightImg;
		document.getElementById("CBstaff").checked = true;
		
		let x, i = 0;
		let staffTable = document.getElementById("staff");
		let staffRows = staffTable.rows;
		
		for(i = 1; i < (staffRows.length); i++) {
			x = staffRows[i].getElementsByTagName("td")[7];
			// Fire element staff exists in the database
			if(document.getElementById("CBfire").checked == true && 
					(x.innerHTML.indexOf("Element: Fire") != -1 || x.innerHTML.indexOf(", Fire") != -1)) {
				staffRows[i].style.display = "";
			}
			// Ice element staff exists in the database
			if(document.getElementById("CBice").checked == true &&
					(x.innerHTML.indexOf("Element: Ice") != -1 || x.innerHTML.indexOf(", Ice") != -1)) {
				staffRows[i].style.display = "";
			}
			// Lightning element staff exists in the database
			if(document.getElementById("CBlightning").checked == true &&
					(x.innerHTML.indexOf("Element: Lightning") != -1 || x.innerHTML.indexOf(", Lightning") != -1)) {
				staffRows[i].style.display = "";
			}
			// Water element staff exists in the database
			if(document.getElementById("CBwater").checked == true &&
					(x.innerHTML.indexOf("Element: Water") != -1 || x.innerHTML.indexOf(", Water") != -1)) {
				staffRows[i].style.display = "";
			}
			// Wind element staff exists in the database
			if(document.getElementById("CBwind").checked == true &&
					(x.innerHTML.indexOf("Element: Wind") != -1 || x.innerHTML.indexOf(", Wind") != -1)) {
				staffRows[i].style.display = "";
			}
			// Earth element staff exists in the database
			if(document.getElementById("CBearth").checked == true &&
					(x.innerHTML.indexOf("Element: Earth") != -1 || x.innerHTML.indexOf(", Earth") != -1)) {
				staffRows[i].style.display = "";
			}
			// Light element staff exists in the database
			if(document.getElementById("CBlight").checked == true &&
					(x.innerHTML.indexOf("Element: Light") != -1 || x.innerHTML.indexOf(", Light") != -1) && x.innerHTML.indexOf("Lightning") == -1) {
				staffRows[i].style.display = "";
			}
			// Dark element staff exists in the database
			if(document.getElementById("CBdark").checked == true &&
					(x.innerHTML.indexOf("Element: Dark") != -1 || x.innerHTML.indexOf(", Dark") != -1)) {
				staffRows[i].style.display = "";
			}
		}
	}
	// Ignore staves in search
	else {
		document.getElementById("stafficon").src = darkImg;	
		document.getElementById("CBstaff").checked = false;
		
		let x, i = 0;
		let staffTable = document.getElementById("staff");
		let staffRows = staffTable.rows;
		
		for(i = 1; i < (staffRows.length); i++) {
			staffRows[i].style.display = "none";
		}	
	}
});

let rodIcon = document.querySelector("img[id=rodicon]");
rodIcon.addEventListener('click', function() {
	let brightImg = "../../resources/rod.png";
	let darkImg = "../../resources/darkrod.png";
	// Include rods in search
	if(document.getElementById("rodicon").getAttribute('src') == darkImg) {
		document.getElementById("rodicon").src = brightImg;
		document.getElementById("CBrod").checked = true;
		
		let x, i = 0;
		let rodTable = document.getElementById("rod");
		let rodRows = rodTable.rows;
		
		for(i = 1; i < (rodRows.length); i++) {
			x = rodRows[i].getElementsByTagName("td")[7];
			// Fire element rod exists in the database
			if(document.getElementById("CBfire").checked == true && 
					(x.innerHTML.indexOf("Element: Fire") != -1 || x.innerHTML.indexOf(", Fire") != -1)) {
				rodRows[i].style.display = "";
			}
			// Ice element rod exists in the database
			if(document.getElementById("CBice").checked == true &&
					(x.innerHTML.indexOf("Element: Ice") != -1 || x.innerHTML.indexOf(", Ice") != -1)) {
				rodRows[i].style.display = "";
			}
			// Lightning element rod exists in the database
			if(document.getElementById("CBlightning").checked == true &&
					(x.innerHTML.indexOf("Element: Lightning") != -1 || x.innerHTML.indexOf(", Lightning") != -1)) {
				rodRows[i].style.display = "";
			}
			// Water element rod exists in the database
			if(document.getElementById("CBwater").checked == true &&
					(x.innerHTML.indexOf("Element: Water") != -1 || x.innerHTML.indexOf(", Water") != -1)) {
				rodRows[i].style.display = "";
			}
			// Wind element rod exists in the database
			if(document.getElementById("CBwind").checked == true &&
					(x.innerHTML.indexOf("Element: Wind") != -1 || x.innerHTML.indexOf(", Wind") != -1)) {
				rodRows[i].style.display = "";
			}
			// Earth element rod exists in the database
			if(document.getElementById("CBearth").checked == true &&
					(x.innerHTML.indexOf("Element: Earth") != -1 || x.innerHTML.indexOf(", Earth") != -1)) {
				rodRows[i].style.display = "";
			}
			// Light element rod exists in the database
			if(document.getElementById("CBlight").checked == true &&
					(x.innerHTML.indexOf("Element: Light") != -1 || x.innerHTML.indexOf(", Light") != -1) && x.innerHTML.indexOf("Lightning") == -1) {
				rodRows[i].style.display = "";
			}
			// Dark element rod exists in the database
			if(document.getElementById("CBdark").checked == true &&
					(x.innerHTML.indexOf("Element: Dark") != -1 || x.innerHTML.indexOf(", Dark") != -1)) {
				rodRows[i].style.display = "";
			}
		}
	}
	// Ignore rods in search
	else {
		document.getElementById("rodicon").src = darksImg;	
		document.getElementById("CBrod").checked = false;
		
		let x, i = 0;
		let rodTable = document.getElementById("rod");
		let rodRows = rodTable.rows;
		
		for(i = 1; i < (rodRows.length); i++) {
			rodRows[i].style.display = "none";
		}	
	}
});

let bowIcon = document.querySelector("img[id=bowicon]");
bowIcon.addEventListener('click', function() {
	let brightImg = "../../resources/bow.png";
	let darkImg = "../../resources/darkbow.png";
	// Include bows in search
	if(document.getElementById("bowicon").getAttribute('src') == darkImg) {
		document.getElementById("bowicon").src = brightImg;
		document.getElementById("CBbow").checked = true;
		
		let x, i = 0;
		let bowTable = document.getElementById("bow");
		let bowRows = bowTable.rows;
		
		for(i = 1; i < (bowRows.length); i++) {
			x = bowRows[i].getElementsByTagName("td")[7];
			// Fire element bow exists in the database
			if(document.getElementById("CBfire").checked == true && 
					(x.innerHTML.indexOf("Element: Fire") != -1 || x.innerHTML.indexOf(", Fire") != -1)) {
				bowRows[i].style.display = "";
			}
			// Ice element bow exists in the database
			if(document.getElementById("CBice").checked == true &&
					(x.innerHTML.indexOf("Element: Ice") != -1 || x.innerHTML.indexOf(", Ice") != -1)) {
				bowRows[i].style.display = "";
			}
			// Lightning element bow exists in the database
			if(document.getElementById("CBlightning").checked == true &&
					(x.innerHTML.indexOf("Element: Lightning") != -1 || x.innerHTML.indexOf(", Lightning") != -1)) {
				bowRows[i].style.display = "";
			}
			// Water element bow exists in the database
			if(document.getElementById("CBwater").checked == true &&
					(x.innerHTML.indexOf("Element: Water") != -1 || x.innerHTML.indexOf(", Water") != -1)) {
				bowRows[i].style.display = "";
			}
			// Wind element bow exists in the database
			if(document.getElementById("CBwind").checked == true &&
					(x.innerHTML.indexOf("Element: Wind") != -1 || x.innerHTML.indexOf(", Wind") != -1)) {
				bowRows[i].style.display = "";
			}
			// Earth element bow exists in the database
			if(document.getElementById("CBearth").checked == true &&
					(x.innerHTML.indexOf("Element: Earth") != -1 || x.innerHTML.indexOf(", Earth") != -1)) {
				bowRows[i].style.display = "";
			}
			// Light element bow exists in the database
			if(document.getElementById("CBlight").checked == true &&
					(x.innerHTML.indexOf("Element: Light") != -1 || x.innerHTML.indexOf(", Light") != -1) && x.innerHTML.indexOf("Lightning") == -1) {
				bowRows[i].style.display = "";
			}
			// Dark element bow exists in the database
			if(document.getElementById("CBdark").checked == true &&
					(x.innerHTML.indexOf("Element: Dark") != -1 || x.innerHTML.indexOf(", Dark") != -1)) {
				bowRows[i].style.display = "";
			}
		}
	}
	// Ignore bows in search
	else {
		document.getElementById("bowicon").src = darkImg;	
		document.getElementById("CBbow").checked = false;
		
		let x, i = 0;
		let bowTable = document.getElementById("bow");
		let bowRows = bowTable.rows;
		
		for(i = 1; i < (bowRows.length); i++) {
			bowRows[i].style.display = "none";
		}	
	}
});

let axeIcon = document.querySelector("img[id=axeicon]");
axeIcon.addEventListener('click', function() {
	let brightImg = "../../resources/axe.png";
	let darkImg = "../../resources/darkaxe.png";
	// Include axes in search
	if(document.getElementById("axeicon").getAttribute('src') == darkImg) {
		document.getElementById("axeicon").src = brightImg;
		document.getElementById("CBaxe").checked = true;
		
		let x, i = 0;
		let axeTable = document.getElementById("axe");
		let axeRows = axeTable.rows;
		
		for(i = 1; i < (axeRows.length); i++) {
			x = axeRows[i].getElementsByTagName("td")[7];
			// Fire element axe exists in the database
			if(document.getElementById("CBfire").checked == true && 
					(x.innerHTML.indexOf("Element: Fire") != -1 || x.innerHTML.indexOf(", Fire") != -1)) {
				axeRows[i].style.display = "";
			}
			// Ice element axe exists in the database
			if(document.getElementById("CBice").checked == true &&
					(x.innerHTML.indexOf("Element: Ice") != -1 || x.innerHTML.indexOf(", Ice") != -1)) {
				axeRows[i].style.display = "";
			}
			// Lightning element axe exists in the database
			if(document.getElementById("CBlightning").checked == true &&
					(x.innerHTML.indexOf("Element: Lightning") != -1 || x.innerHTML.indexOf(", Lightning") != -1)) {
				axeRows[i].style.display = "";
			}
			// Water element axe exists in the database
			if(document.getElementById("CBwater").checked == true &&
					(x.innerHTML.indexOf("Element: Water") != -1 || x.innerHTML.indexOf(", Water") != -1)) {
				axeRows[i].style.display = "";
			}
			// Wind element axe exists in the database
			if(document.getElementById("CBwind").checked == true &&
					(x.innerHTML.indexOf("Element: Wind") != -1 || x.innerHTML.indexOf(", Wind") != -1)) {
				axeRows[i].style.display = "";
			}
			// Earth element axe exists in the database
			if(document.getElementById("CBearth").checked == true &&
					(x.innerHTML.indexOf("Element: Earth") != -1 || x.innerHTML.indexOf(", Earth") != -1)) {
				axeRows[i].style.display = "";
			}
			// Light element axe exists in the database
			if(document.getElementById("CBlight").checked == true &&
					(x.innerHTML.indexOf("Element: Light") != -1 || x.innerHTML.indexOf(", Light") != -1) && x.innerHTML.indexOf("Lightning") == -1) {
				axeRows[i].style.display = "";
			}
			// Dark element axe exists in the database
			if(document.getElementById("CBdark").checked == true &&
					(x.innerHTML.indexOf("Element: Dark") != -1 || x.innerHTML.indexOf(", Dark") != -1)) {
				axeRows[i].style.display = "";
			}
		}
	}
	// Ignore axes in search
	else {
		document.getElementById("axeicon").src = darkImg;	
		document.getElementById("CBaxe").checked = false;
		
		let x, i = 0;
		let axeTable = document.getElementById("axe");
		let axeRows = axeTable.rows;
		
		for(i = 1; i < (axeRows.length); i++) {
			axeRows[i].style.display = "none";
		}	
	}
});

let hammerIcon = document.querySelector("img[id=hammericon]");
hammerIcon.addEventListener('click', function() {
	let brightImg = "../../resources/hammer.png";
	let darkImg = "../../resources/darkhammer.png";
	// Include hammers in search
	if(document.getElementById("hammericon").getAttribute('src') == darkImg) {
		document.getElementById("hammericon").src = brightImg;
		document.getElementById("CBhammer").checked = true;
		
		let x, i = 0;
		let hammerTable = document.getElementById("hammer");
		let hammerRows = hammerTable.rows;
		
		for(i = 1; i < (hammerRows.length); i++) {
			x = hammerRows[i].getElementsByTagName("td")[7];
			// Fire element hammer exists in the database
			if(document.getElementById("CBfire").checked == true && 
					(x.innerHTML.indexOf("Element: Fire") != -1 || x.innerHTML.indexOf(", Fire") != -1)) {
				hammerRows[i].style.display = "";
			}
			// Ice element hammer exists in the database
			if(document.getElementById("CBice").checked == true &&
					(x.innerHTML.indexOf("Element: Ice") != -1 || x.innerHTML.indexOf(", Ice") != -1)) {
				hammerRows[i].style.display = "";
			}
			// Lightning element hammer exists in the database
			if(document.getElementById("CBlightning").checked == true &&
					(x.innerHTML.indexOf("Element: Lightning") != -1 || x.innerHTML.indexOf(", Lightning") != -1)) {
				hammerRows[i].style.display = "";
			}
			// Water element hammer exists in the database
			if(document.getElementById("CBwater").checked == true &&
					(x.innerHTML.indexOf("Element: Water") != -1 || x.innerHTML.indexOf(", Water") != -1)) {
				hammerRows[i].style.display = "";
			}
			// Wind element hammer exists in the database
			if(document.getElementById("CBwind").checked == true &&
					(x.innerHTML.indexOf("Element: Wind") != -1 || x.innerHTML.indexOf(", Wind") != -1)) {
				hammerRows[i].style.display = "";
			}
			// Earth element hammer exists in the database
			if(document.getElementById("CBearth").checked == true &&
					(x.innerHTML.indexOf("Element: Earth") != -1 || x.innerHTML.indexOf(", Earth") != -1)) {
				hammerRows[i].style.display = "";
			}
			// Light element hammer exists in the database
			if(document.getElementById("CBlight").checked == true &&
					(x.innerHTML.indexOf("Element: Light") != -1 || x.innerHTML.indexOf(", Light") != -1) && x.innerHTML.indexOf("Lightning") == -1) {
				hammerRows[i].style.display = "";
			}
			// Dark element hammer exists in the database
			if(document.getElementById("CBdark").checked == true &&
					(x.innerHTML.indexOf("Element: Dark") != -1 || x.innerHTML.indexOf(", Dark") != -1)) {
				hammerRows[i].style.display = "";
			}
		}
	}
	// Ignore hammers in search
	else {
		document.getElementById("hammericon").src = darkImg;	
		document.getElementById("CBhammer").checked = false;
		
		let x, i = 0;
		let hammerTable = document.getElementById("hammer");
		let hammerRows = hammerTable.rows;
		
		for(i = 1; i < (hammerRows.length); i++) {
			hammerRows[i].style.display = "none";
		}	
	}
});

let spearIcon = document.querySelector("img[id=spearicon]");
spearIcon.addEventListener('click', function() {
	let brightImg = "../../resources/spear.png";
	let darkImg = "../../resources/darkspear.png";
	// Include spears in search
	if(document.getElementById("spearicon").getAttribute('src') == darkImg) {
		document.getElementById("spearicon").src = brightImg;
		document.getElementById("CBspear").checked = true;
		
		let x, i = 0;
		let spearTable = document.getElementById("spear");
		let spearRows = spearTable.rows;
		
		for(i = 1; i < (spearRows.length); i++) {
			x = spearRows[i].getElementsByTagName("td")[7];
			// Fire element spear exists in the database
			if(document.getElementById("CBfire").checked == true && 
					(x.innerHTML.indexOf("Element: Fire") != -1 || x.innerHTML.indexOf(", Fire") != -1)) {
				spearRows[i].style.display = "";
			}
			// Ice element spear exists in the database
			if(document.getElementById("CBice").checked == true &&
					(x.innerHTML.indexOf("Element: Ice") != -1 || x.innerHTML.indexOf(", Ice") != -1)) {
				spearRows[i].style.display = "";
			}
			// Lightning element spear exists in the database
			if(document.getElementById("CBlightning").checked == true &&
					(x.innerHTML.indexOf("Element: Lightning") != -1 || x.innerHTML.indexOf(", Lightning") != -1)) {
				spearRows[i].style.display = "";
			}
			// Water element spear exists in the database
			if(document.getElementById("CBwater").checked == true &&
					(x.innerHTML.indexOf("Element: Water") != -1 || x.innerHTML.indexOf(", Water") != -1)) {
				spearRows[i].style.display = "";
			}
			// Wind element spear exists in the database
			if(document.getElementById("CBwind").checked == true &&
					(x.innerHTML.indexOf("Element: Wind") != -1 || x.innerHTML.indexOf(", Wind") != -1)) {
				spearRows[i].style.display = "";
			}
			// Earth element spear exists in the database
			if(document.getElementById("CBearth").checked == true &&
					(x.innerHTML.indexOf("Element: Earth") != -1 || x.innerHTML.indexOf(", Earth") != -1)) {
				spearRows[i].style.display = "";
			}
			// Light element spear exists in the database
			if(document.getElementById("CBlight").checked == true &&
					(x.innerHTML.indexOf("Element: Light") != -1 || x.innerHTML.indexOf(", Light") != -1) && x.innerHTML.indexOf("Lightning") == -1) {
				spearRows[i].style.display = "";
			}
			// Dark element spear exists in the database
			if(document.getElementById("CBdark").checked == true &&
					(x.innerHTML.indexOf("Element: Dark") != -1 || x.innerHTML.indexOf(", Dark") != -1)) {
				spearRows[i].style.display = "";
			}
		}
	}
	// Ignore spears in search
	else {
		document.getElementById("spearicon").src = darkImg;	
		document.getElementById("CBspear").checked = false;
		
		let x, i = 0;
		let spearTable = document.getElementById("spears");
		let spearRows = spearTable.rows;
		
		for(i = 1; i < (spearRows.length); i++) {
			spearRows[i].style.display = "none";
		}	
	}
});

let harpIcon = document.querySelector("img[id=harpicon]");
harpIcon.addEventListener('click', function() {
	let brightImg = "../../resources/harp.png";
	let darkImg = "../../resources/darkharp.png";
	// Include harps in search
	if(document.getElementById("harpicon").getAttribute('src') == darkImg) {
		document.getElementById("harpicon").src = brightImg;
		document.getElementById("CBharp").checked = true;
		
		let x, i = 0;
		let harpTable = document.getElementById("harp");
		let harpRows = harpTable.rows;
		
		for(i = 1; i < (harpRows.length); i++) {
			x = harpRows[i].getElementsByTagName("td")[7];
			// Fire element harp exists in the database
			if(document.getElementById("CBfire").checked == true && 
					(x.innerHTML.indexOf("Element: Fire") != -1 || x.innerHTML.indexOf(", Fire") != -1)) {
				harpRows[i].style.display = "";
			}
			// Ice element harp exists in the database
			if(document.getElementById("CBice").checked == true &&
					(x.innerHTML.indexOf("Element: Ice") != -1 || x.innerHTML.indexOf(", Ice") != -1)) {
				harpRows[i].style.display = "";
			}
			// Lightning element harp exists in the database
			if(document.getElementById("CBlightning").checked == true &&
					(x.innerHTML.indexOf("Element: Lightning") != -1 || x.innerHTML.indexOf(", Lightning") != -1)) {
				harpRows[i].style.display = "";
			}
			// Water element harp exists in the database
			if(document.getElementById("CBwater").checked == true &&
					(x.innerHTML.indexOf("Element: Water") != -1 || x.innerHTML.indexOf(", Water") != -1)) {
				harpRows[i].style.display = "";
			}
			// Wind element harp exists in the database
			if(document.getElementById("CBwind").checked == true &&
					(x.innerHTML.indexOf("Element: Wind") != -1 || x.innerHTML.indexOf(", Wind") != -1)) {
				harpRows[i].style.display = "";
			}
			// Earth element harp exists in the database
			if(document.getElementById("CBearth").checked == true &&
					(x.innerHTML.indexOf("Element: Earth") != -1 || x.innerHTML.indexOf(", Earth") != -1)) {
				harpRows[i].style.display = "";
			}
			// Light element harp exists in the database
			if(document.getElementById("CBlight").checked == true &&
					(x.innerHTML.indexOf("Element: Light") != -1 || x.innerHTML.indexOf(", Light") != -1) && x.innerHTML.indexOf("Lightning") == -1) {
				harpRows[i].style.display = "";
			}
			// Dark element harp exists in the database
			if(document.getElementById("CBdark").checked == true &&
					(x.innerHTML.indexOf("Element: Dark") != -1 || x.innerHTML.indexOf(", Dark") != -1)) {
				harpRows[i].style.display = "";
			}
		}
	}
	// Ignore harps in search
	else {
		document.getElementById("harpicon").src = darkImg;	
		document.getElementById("CBharp").checked = false;
		
		let x, i = 0;
		let harpTable = document.getElementById("harp");
		let harpRows = harpTable.rows;
		
		for(i = 1; i < (harpRows.length); i++) {
			harpRows[i].style.display = "none";
		}	
	}
});

let whipIcon = document.querySelector("img[id=whipicon]");
whipIcon.addEventListener('click', function() {
	let brightImg = "../../resources/whip.png";
	let darkImg = "../../resources/darkwhip.png";
	// Include whips in search
	if(document.getElementById("whipicon").getAttribute('src') == darkImg) {
		document.getElementById("whipicon").src = brightImg;
		document.getElementById("CBwhip").checked = true;
		
		let x, i = 0;
		let whipTable = document.getElementById("whip");
		let whipRows = whipTable.rows;
		
		for(i = 1; i < (whipRows.length); i++) {
			x = whipRows[i].getElementsByTagName("td")[7];
			// Fire element whip exists in the database
			if(document.getElementById("CBfire").checked == true && 
					(x.innerHTML.indexOf("Element: Fire") != -1 || x.innerHTML.indexOf(", Fire") != -1)) {
				whipRows[i].style.display = "";
			}
			// Ice element whip exists in the database
			if(document.getElementById("CBice").checked == true &&
					(x.innerHTML.indexOf("Element: Ice") != -1 || x.innerHTML.indexOf(", Ice") != -1)) {
				whipRows[i].style.display = "";
			}
			// Lightning element whip exists in the database
			if(document.getElementById("CBlightning").checked == true &&
					(x.innerHTML.indexOf("Element: Lightning") != -1 || x.innerHTML.indexOf(", Lightning") != -1)) {
				whipRows[i].style.display = "";
			}
			// Water element whip exists in the database
			if(document.getElementById("CBwater").checked == true &&
					(x.innerHTML.indexOf("Element: Water") != -1 || x.innerHTML.indexOf(", Water") != -1)) {
				whipRows[i].style.display = "";
			}
			// Wind element whip exists in the database
			if(document.getElementById("CBwind").checked == true &&
					(x.innerHTML.indexOf("Element: Wind") != -1 || x.innerHTML.indexOf(", Wind") != -1)) {
				whipRows[i].style.display = "";
			}
			// Earth element whip exists in the database
			if(document.getElementById("CBearth").checked == true &&
					(x.innerHTML.indexOf("Element: Earth") != -1 || x.innerHTML.indexOf(", Earth") != -1)) {
				whipRows[i].style.display = "";
			}
			// Light element whip exists in the database
			if(document.getElementById("CBlight").checked == true &&
					(x.innerHTML.indexOf("Element: Light") != -1 || x.innerHTML.indexOf(", Light") != -1) && x.innerHTML.indexOf("Lightning") == -1) {
				whipRows[i].style.display = "";
			}
			// Dark element whip exists in the database
			if(document.getElementById("CBdark").checked == true &&
					(x.innerHTML.indexOf("Element: Dark") != -1 || x.innerHTML.indexOf(", Dark") != -1)) {
				whipRows[i].style.display = "";
			}
		}
	}
	// Ignore whips in search
	else {
		document.getElementById("whipicon").src = darkImg;	
		document.getElementById("CBwhip").checked = false;
		
		let x, i = 0;
		let whipTable = document.getElementById("whip");
		let whipRows = whipTable.rows;
		
		for(i = 1; i < (whipRows.length); i++) {
			whipRows[i].style.display = "none";
		}
	}
});

let twIcon = document.querySelector("img[id=twicon]");
twIcon.addEventListener('click', function() {
	let brightImg = "../../resources/tw.png";
	let darkImg = "../../resources/darktw.png";
	// Include throwing weapons in search
	if(document.getElementById("twicon").getAttribute('src') == darkImg) {
		document.getElementById("twicon").src = brightImg;
		document.getElementById("CBtw").checked = true;
		
		let x, i = 0;
		let twTable = document.getElementById("tw");
		let twRows = twTable.rows;
		
		for(i = 1; i < (twRows.length); i++) {
			x = twRows[i].getElementsByTagName("td")[7];
			// Fire element throwing weapon exists in the database
			if(document.getElementById("CBfire").checked == true && 
					(x.innerHTML.indexOf("Element: Fire") != -1 || x.innerHTML.indexOf(", Fire") != -1)) {
				twRows[i].style.display = "";
			}
			// Ice element throwing weapon exists in the database
			if(document.getElementById("CBice").checked == true &&
					(x.innerHTML.indexOf("Element: Ice") != -1 || x.innerHTML.indexOf(", Ice") != -1)) {
				twRows[i].style.display = "";
			}
			// Lightning element throwing weapon exists in the database
			if(document.getElementById("CBlightning").checked == true &&
					(x.innerHTML.indexOf("Element: Lightning") != -1 || x.innerHTML.indexOf(", Lightning") != -1)) {
				twRows[i].style.display = "";
			}
			// Water element throwing weapon exists in the database
			if(document.getElementById("CBwater").checked == true &&
					(x.innerHTML.indexOf("Element: Water") != -1 || x.innerHTML.indexOf(", Water") != -1)) {
				twRows[i].style.display = "";
			}
			// Wind element throwing weapon exists in the database
			if(document.getElementById("CBwind").checked == true &&
					(x.innerHTML.indexOf("Element: Wind") != -1 || x.innerHTML.indexOf(", Wind") != -1)) {
				twRows[i].style.display = "";
			}
			// Earth element throwing weapon exists in the database
			if(document.getElementById("CBearth").checked == true &&
					(x.innerHTML.indexOf("Element: Earth") != -1 || x.innerHTML.indexOf(", Earth") != -1)) {
				twRows[i].style.display = "";
			}
			// Light element throwing weapon exists in the database
			if(document.getElementById("CBlight").checked == true &&
					(x.innerHTML.indexOf("Element: Light") != -1 || x.innerHTML.indexOf(", Light") != -1) && x.innerHTML.indexOf("Lightning") == -1) {
				twRows[i].style.display = "";
			}
			// Dark element throwing weapon exists in the database
			if(document.getElementById("CBdark").checked == true &&
					(x.innerHTML.indexOf("Element: Dark") != -1 || x.innerHTML.indexOf(", Dark") != -1)) {
				twRows[i].style.display = "";
			}
		}
	}
	// Ignore throwing weapons in search
	else {
		document.getElementById("twicon").src = darkImg;	
		document.getElementById("CBtw").checked = false;
		
		let x, i = 0;
		let twTable = document.getElementById("tw");
		let twRows = twTable.rows;
		
		for(i = 1; i < (twRows.length); i++) {
			twRows[i].style.display = "none";
		}
	}
});

let gunIcon = document.querySelector("img[id=gunicon]");
gunIcon.addEventListener('click', function() {
	let brightImg = "../../resources/gun.png";
	let darkImg = "../../resources/darkgun.png";
	// Include guns in search
	if(document.getElementById("gunicon").getAttribute('src') == darkImg) {
		document.getElementById("gunicon").src = brightImg;
		document.getElementById("CBgun").checked = true;
		
		let x, i = 0;
		let gunTable = document.getElementById("gun");
		let gunRows = gunTable.rows;
		
		for(i = 1; i < (gunRows.length); i++) {
			x = gunRows[i].getElementsByTagName("td")[7];
			// Fire element gun exists in the database
			if(document.getElementById("CBfire").checked == true && 
					(x.innerHTML.indexOf("Element: Fire") != -1 || x.innerHTML.indexOf(", Fire") != -1)) {
				gunRows[i].style.display = "";
			}
			// Ice element gun exists in the database
			if(document.getElementById("CBice").checked == true &&
					(x.innerHTML.indexOf("Element: Ice") != -1 || x.innerHTML.indexOf(", Ice") != -1)) {
				gunRows[i].style.display = "";
			}
			// Lightning element gun exists in the database
			if(document.getElementById("CBlightning").checked == true &&
					(x.innerHTML.indexOf("Element: Lightning") != -1 || x.innerHTML.indexOf(", Lightning") != -1)) {
				gunRows[i].style.display = "";
			}
			// Water element gun exists in the database
			if(document.getElementById("CBwater").checked == true &&
					(x.innerHTML.indexOf("Element: Water") != -1 || x.innerHTML.indexOf(", Water") != -1)) {
				gunRows[i].style.display = "";
			}
			// Wind element gun exists in the database
			if(document.getElementById("CBwind").checked == true &&
					(x.innerHTML.indexOf("Element: Wind") != -1 || x.innerHTML.indexOf(", Wind") != -1)) {
				gunRows[i].style.display = "";
			}
			// Earth element gun exists in the database
			if(document.getElementById("CBearth").checked == true &&
					(x.innerHTML.indexOf("Element: Earth") != -1 || x.innerHTML.indexOf(", Earth") != -1)) {
				gunRows[i].style.display = "";
			}
			// Light element gun exists in the database
			if(document.getElementById("CBlight").checked == true &&
					(x.innerHTML.indexOf("Element: Light") != -1 || x.innerHTML.indexOf(", Light") != -1) && x.innerHTML.indexOf("Lightning") == -1) {
				gunRows[i].style.display = "";
			}
			// Dark element gun exists in the database
			if(document.getElementById("CBdark").checked == true &&
					(x.innerHTML.indexOf("Element: Dark") != -1 || x.innerHTML.indexOf(", Dark") != -1)) {
				gunRows[i].style.display = "";
			}
		}
	}
	// Ignore guns in search
	else {
		document.getElementById("gunicon").src = darkImg;	
		document.getElementById("CBgun").checked = false;
		
		let x, i = 0;
		let gunTable = document.getElementById("gun");
		let gunRows = gunTable.rows;
		
		for(i = 1; i < (gunRows.length); i++) {
			gunRows[i].style.display = "none";
		}
	}
});

let maceIcon = document.querySelector("img[id=maceicon]");
maceIcon.addEventListener('click', function() {
	let brightImg = "../../resources/mace.png";
	let darkImg = "../../resources/darkmace.png";
	// Include maces in search
	if(document.getElementById("maceicon").getAttribute('src') == darkImg) {
		document.getElementById("maceicon").src = brightImg;
		document.getElementById("CBmace").checked = true;
		
		let x, i = 0;
		let maceTable = document.getElementById("mace");
		let maceRows = maceTable.rows;
		
		for(i = 1; i < (maceRows.length); i++) {
			x = maceRows[i].getElementsByTagName("td")[7];
			// Fire element mace exists in the database
			if(document.getElementById("CBfire").checked == true && 
					(x.innerHTML.indexOf("Element: Fire") != -1 || x.innerHTML.indexOf(", Fire") != -1)) {
				maceRows[i].style.display = "";
			}
			// Ice element mace exists in the database
			if(document.getElementById("CBice").checked == true &&
					(x.innerHTML.indexOf("Element: Ice") != -1 || x.innerHTML.indexOf(", Ice") != -1)) {
				maceRows[i].style.display = "";
			}
			// Lightning element mace exists in the database
			if(document.getElementById("CBlightning").checked == true &&
					(x.innerHTML.indexOf("Element: Lightning") != -1 || x.innerHTML.indexOf(", Lightning") != -1)) {
				maceRows[i].style.display = "";
			}
			// Water element mace exists in the database
			if(document.getElementById("CBwater").checked == true &&
					(x.innerHTML.indexOf("Element: Water") != -1 || x.innerHTML.indexOf(", Water") != -1)) {
				maceRows[i].style.display = "";
			}
			// Wind element mace exists in the database
			if(document.getElementById("CBwind").checked == true &&
					(x.innerHTML.indexOf("Element: Wind") != -1 || x.innerHTML.indexOf(", Wind") != -1)) {
				maceRows[i].style.display = "";
			}
			// Earth element mace exists in the database
			if(document.getElementById("CBearth").checked == true &&
					(x.innerHTML.indexOf("Element: Earth") != -1 || x.innerHTML.indexOf(", Earth") != -1)) {
				maceRows[i].style.display = "";
			}
			// Light element mace exists in the database
			if(document.getElementById("CBlight").checked == true &&
					(x.innerHTML.indexOf("Element: Light") != -1 || x.innerHTML.indexOf(", Light") != -1) && x.innerHTML.indexOf("Lightning") == -1) {
				maceRows[i].style.display = "";
			}
			// Dark element mace exists in the database
			if(document.getElementById("CBdark").checked == true &&
					(x.innerHTML.indexOf("Element: Dark") != -1 || x.innerHTML.indexOf(", Dark") != -1)) {
				maceRows[i].style.display = "";
			}
		}
	}
	// Ignore maces in search
	else {
		document.getElementById("maceicon").src = darkImg;	
		document.getElementById("CBmace").checked = false;
		
		let x, i = 0;
		let maceTable = document.getElementById("mace");
		let maceRows = maceTable.rows;
		
		for(i = 1; i < (maceRows.length); i++) {
			maceRows[i].style.display = "none";
		}
	}
});

let fistIcon = document.querySelector("img[id=fisticon]");
fistIcon.addEventListener('click', function() {
	let brightImg = "../../resources/fist.png";
	let darkImg = "../../resources/darkfist.png";
	// Include fists in search
	if(document.getElementById("fisticon").getAttribute('src') == darkImg) {
		document.getElementById("fisticon").src = brightImg;
		document.getElementById("CBfist").checked = true;
		
		let x, i = 0;
		let fistTable = document.getElementById("fist");
		let fistRows = fistTable.rows;
		
		for(i = 1; i < (fistRows.length); i++) {
			x = fistRows[i].getElementsByTagName("td")[7];
			// Fire element fist exists in the database
			if(document.getElementById("CBfire").checked == true && 
					(x.innerHTML.indexOf("Element: Fire") != -1 || x.innerHTML.indexOf(", Fire") != -1)) {
				fistRows[i].style.display = "";
			}
			// Ice element fist exists in the database
			if(document.getElementById("CBice").checked == true &&
					(x.innerHTML.indexOf("Element: Ice") != -1 || x.innerHTML.indexOf(", Ice") != -1)) {
				fistRows[i].style.display = "";
			}
			// Lightning element fist exists in the database
			if(document.getElementById("CBlightning").checked == true &&
					(x.innerHTML.indexOf("Element: Lightning") != -1 || x.innerHTML.indexOf(", Lightning") != -1)) {
				fistRows[i].style.display = "";
			}
			// Water element fist exists in the database
			if(document.getElementById("CBwater").checked == true &&
					(x.innerHTML.indexOf("Element: Water") != -1 || x.innerHTML.indexOf(", Water") != -1)) {
				fistRows[i].style.display = "";
			}
			// Wind element fist exists in the database
			if(document.getElementById("CBwind").checked == true &&
					(x.innerHTML.indexOf("Element: Wind") != -1 || x.innerHTML.indexOf(", Wind") != -1)) {
				fistRows[i].style.display = "";
			}
			// Earth element fist exists in the database
			if(document.getElementById("CBearth").checked == true &&
					(x.innerHTML.indexOf("Element: Earth") != -1 || x.innerHTML.indexOf(", Earth") != -1)) {
				fistRows[i].style.display = "";
			}
			// Light element fist exists in the database
			if(document.getElementById("CBlight").checked == true &&
					(x.innerHTML.indexOf("Element: Light") != -1 || x.innerHTML.indexOf(", Light") != -1) && x.innerHTML.indexOf("Lightning") == -1) {
				fistRows[i].style.display = "";
			}
			// Dark element fist exists in the database
			if(document.getElementById("CBdark").checked == true &&
					(x.innerHTML.indexOf("Element: Dark") != -1 || x.innerHTML.indexOf(", Dark") != -1)) {
				fistRows[i].style.display = "";
			}
		}
	}
	// Ignore fists in search
	else {
		document.getElementById("fisticon").src = darkImg;	
		document.getElementById("CBfist").checked = false;
		
		let x, i = 0;
		let fistTable = document.getElementById("fist");
		let fistRows = fistTable.rows;
		
		for(i = 1; i < (fistRows.length); i++) {
			fistRows[i].style.display = "none";
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
		
		// Include any fire element daggers in search
		if(document.getElementById("CBdagger").checked == true) {
			let x, i = 0;
			let daggerTable = document.getElementById("dagger");
			let daggerRows = daggerTable.rows;
			
			for(i = 1; i < (daggerRows.length); i++) {
				x = daggerRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Fire") != -1 || x.innerHTML.indexOf(", Fire") != -1) {
					daggerRows[i].style.display = "";
				}
			}
		}
		// Include any fire element swords in search
		if(document.getElementById("CBsword").checked == true) {
			let x, i = 0;
			let swordTable = document.getElementById("sword");
			let swordRows = swordTable.rows;
			
			for(i = 1; i < (swordRows.length); i++) {
				x = swordRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Fire") != -1 || x.innerHTML.indexOf(", Fire") != -1) {
					swordRows[i].style.display = "";
				}
			}
		}
		// Include any fire element great swords in search
		if(document.getElementById("CBgsword").checked == true) {
			let x, i = 0;
			let gswordTable = document.getElementById("gsword");
			let gswordRows = gswordTable.rows;
			
			for(i = 1; i < (gswordRows.length); i++) {
				x = gswordRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Fire") != -1 || x.innerHTML.indexOf(", Fire") != -1) {
					gswordRows[i].style.display = "";
				}
			}
		}
		// Include any fire element katanas in search
		if(document.getElementById("CBkatana").checked == true) {
			let x, i = 0;
			let katanaTable = document.getElementById("katana");
			let katanaRows = katanaTable.rows;
			
			for(i = 1; i < (katanaRows.length); i++) {
				x = katanaRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Fire") != -1 || x.innerHTML.indexOf(", Fire") != -1) {
					katanaRows[i].style.display = "";
				}
			}
		}
		// Include any fire element staves in search
		if(document.getElementById("CBstaff").checked == true) {
			let x, i = 0;
			let staffTable = document.getElementById("staff");
			let staffRows = staffTable.rows;
			
			for(i = 1; i < (staffRows.length); i++) {
				x = staffRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Fire") != -1 || x.innerHTML.indexOf(", Fire") != -1) {
					staffRows[i].style.display = "";
				}
			}
		}
		// Include any fire element rods in search
		if(document.getElementById("CBrod").checked == true) {
			let x, i = 0;
			let rodTable = document.getElementById("rod");
			let rodRows = rodTable.rows;
			
			for(i = 1; i < (rodRows.length); i++) {
				x = rodRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Fire") != -1 || x.innerHTML.indexOf(", Fire") != -1) {
					rodRows[i].style.display = "";
				}
			}
		}
		// Include any fire element bows in search
		if(document.getElementById("CBbow").checked == true) {
			let x, i = 0;
			let bowTable = document.getElementById("bow");
			let bowRows = bowTable.rows;
			
			for(i = 1; i < (bowRows.length); i++) {
				x = bowRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Fire") != -1 || x.innerHTML.indexOf(", Fire") != -1) {
					bowRows[i].style.display = "";
				}
			}
		}
		// Include any fire element axes in search
		if(document.getElementById("CBaxe").checked == true) {
			let x, i = 0;
			let axeTable = document.getElementById("axe");
			let axeRows = axeTable.rows;
			
			for(i = 1; i < (axeRows.length); i++) {
				x = axeRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Fire") != -1 || x.innerHTML.indexOf(", Fire") != -1) {
					axeRows[i].style.display = "";
				}
			}
		}
		// Include any fire element hammers in search
		if(document.getElementById("CBhammer").checked == true) {
			let x, i = 0;
			let hammerTable = document.getElementById("hammer");
			let hammerRows = hammerTable.rows;
			
			for(i = 1; i < (hammerRows.length); i++) {
				x = hammerRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Fire") != -1 || x.innerHTML.indexOf(", Fire") != -1) {
					hammerRows[i].style.display = "";
				}
			}
		}
		// Include any fire element spears in search
		if(document.getElementById("CBspear").checked == true) {
			let x, i = 0;
			let spearTable = document.getElementById("spear");
			let spearRows = spearTable.rows;
			
			for(i = 1; i < (spearRows.length); i++) {
				x = spearRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Fire") != -1 || x.innerHTML.indexOf(", Fire") != -1) {
					spearRows[i].style.display = "";
				}
			}
		}
		// Include any fire element harps in search
		if(document.getElementById("CBharp").checked == true) {
			let x, i = 0;
			let harpTable = document.getElementById("harp");
			let harpRows = harpTable.rows;
			
			for(i = 1; i < (harpRows.length); i++) {
				x = harpRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Fire") != -1 || x.innerHTML.indexOf(", Fire") != -1) {
					harpRows[i].style.display = "";
				}
			}
		}
		// Include any fire element whips in search
		if(document.getElementById("CBwhip").checked == true) {
			let x, i = 0;
			let whipTable = document.getElementById("whip");
			let whipRows = whipTable.rows;
			
			for(i = 1; i < (whipRows.length); i++) {
				x = whipRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Fire") != -1 || x.innerHTML.indexOf(", Fire") != -1) {
					whipRows[i].style.display = "";
				}
			}
		}
		// Include any fire element throwing weapons in search
		if(document.getElementById("CBtw").checked == true) {
			let x, i = 0;
			let twTable = document.getElementById("tw");
			let twRows = twTable.rows;
			
			for(i = 1; i < (twRows.length); i++) {
				x = twRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Fire") != -1 || x.innerHTML.indexOf(", Fire") != -1) {
					twRows[i].style.display = "";
				}
			}
		}
		// Include any fire element guns in search
		if(document.getElementById("CBgun").checked == true) {
			let x, i = 0;
			let gunTable = document.getElementById("gun");
			let gunRows = gunTable.rows;
			
			for(i = 1; i < (gunRows.length); i++) {
				x = gunRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Fire") != -1 || x.innerHTML.indexOf(", Fire") != -1) {
					gunRows[i].style.display = "";
				}
			}
		}
		// Include any fire element maces in search
		if(document.getElementById("CBmace").checked == true) {
			let x, i = 0;
			let maceTable = document.getElementById("mace");
			let maceRows = maceTable.rows;
			
			for(i = 1; i < (maceRows.length); i++) {
				x = maceRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Fire") != -1 || x.innerHTML.indexOf(", Fire") != -1) {
					maceRows[i].style.display = "";
				}
			}
		}
		// Include any fire element fists in search
		if(document.getElementById("CBfist").checked == true) {
			let x, i = 0;
			let fistTable = document.getElementById("fist");
			let fistRows = fistTable.rows;
			
			for(i = 1; i < (fistRows.length); i++) {
				x = fistRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Fire") != -1 || x.innerHTML.indexOf(", Fire") != -1) {
					fistRows[i].style.display = "";
				}
			}
		}
	}
	// Ignore any equipment with fire element
	else {
		document.getElementById("fireicon").src = darkImg;
		document.getElementById("CBfire").checked = false;
		
		if(document.getElementById("CBdagger").checked == true) {
			let x, i = 0;
			let daggerTable = document.getElementById("dagger");
			let daggerRows = daggerTable.rows;
			
			for(i = 1; i < (daggerRows.length); i++) {
				x = daggerRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Fire") != -1 || x.innerHTML.indexOf(", Fire") != -1) {
					daggerRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBsword").checked == true) {
			let x, i = 0;
			let swordTable = document.getElementById("sword");
			let swordRows = swordTable.rows;
			
			for(i = 1; i < (swordRows.length); i++) {
				x = swordRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Fire") != -1 || x.innerHTML.indexOf(", Fire") != -1) {
					swordRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBgsword").checked == true) {
			let x, i = 0;
			let gswordTable = document.getElementById("gsword");
			let gswordRows = gswordTable.rows;
			
			for(i = 1; i < (gswordRows.length); i++) {
				x = gswordRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Fire") != -1 || x.innerHTML.indexOf(", Fire") != -1) {
					gswordRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBkatana").checked == true) {
			let x, i = 0;
			let katanaTable = document.getElementById("katana");
			let katanaRows = katanaTable.rows;
			
			for(i = 1; i < (katanaRows.length); i++) {
				x = katanaRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Fire") != -1 || x.innerHTML.indexOf(", Fire") != -1) {
					katanaRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBstaff").checked == true) {
			let x, i = 0;
			let staffTable = document.getElementById("staff");
			let staffRows = staffTable.rows;
			
			for(i = 1; i < (staffRows.length); i++) {
				x = staffRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Fire") != -1 || x.innerHTML.indexOf(", Fire") != -1) {
					staffRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBrod").checked == true) {
			let x, i = 0;
			let rodTable = document.getElementById("rod");
			let rodRows = rodTable.rows;
			
			for(i = 1; i < (rodRows.length); i++) {
				x = rodRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Fire") != -1 || x.innerHTML.indexOf(", Fire") != -1) {
					rodRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBbow").checked == true) {
			let x, i = 0;
			let bowTable = document.getElementById("bow");
			let bowRows = bowTable.rows;
			
			for(i = 1; i < (bowRows.length); i++) {
				x = bowRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Fire") != -1 || x.innerHTML.indexOf(", Fire") != -1) {
					bowRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBaxe").checked == true) {
			let x, i = 0;
			let axeTable = document.getElementById("axe");
			let axeRows = axeTable.rows;
			
			for(i = 1; i < (axeRows.length); i++) {
				x = axeRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Fire") != -1 || x.innerHTML.indexOf(", Fire") != -1) {
					axeRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBhammer").checked == true) {
			let x, i = 0;
			let hammerTable = document.getElementById("hammer");
			let hammerRows = hammerTable.rows;
			
			for(i = 1; i < (hammerRows.length); i++) {
				x = hammerRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Fire") != -1 || x.innerHTML.indexOf(", Fire") != -1) {
					hammerRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBspear").checked == true) {
			let x, i = 0;
			let spearTable = document.getElementById("spear");
			let spearRows = spearTable.rows;
			
			for(i = 1; i < (spearRows.length); i++) {
				x = spearRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Fire") != -1 || x.innerHTML.indexOf(", Fire") != -1) {
					spearRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBharp").checked == true) {
			let x, i = 0;
			let harpTable = document.getElementById("harp");
			let harpRows = harpTable.rows;
			
			for(i = 1; i < (harpRows.length); i++) {
				x = harpRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Fire") != -1 || x.innerHTML.indexOf(", Fire") != -1) {
					harpRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBwhip").checked == true) {
			let x, i = 0;
			let whipTable = document.getElementById("whip");
			let whipRows = whipTable.rows;
			
			for(i = 1; i < (whipRows.length); i++) {
				x = whipRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Fire") != -1 || x.innerHTML.indexOf(", Fire") != -1) {
					whipRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBtw").checked == true) {
			let x, i = 0;
			let twTable = document.getElementById("tw");
			let twRows = twTable.rows;
			
			for(i = 1; i < (twRows.length); i++) {
				x = twRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Fire") != -1 || x.innerHTML.indexOf(", Fire") != -1) {
					twRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBgun").checked == true) {
			let x, i = 0;
			let gunTable = document.getElementById("gun");
			let gunRows = gunTable.rows;
			
			for(i = 1; i < (gunRows.length); i++) {
				x = gunRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Fire") != -1 || x.innerHTML.indexOf(", Fire") != -1) {
					gunRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBmace").checked == true) {
			let x, i = 0;
			let maceTable = document.getElementById("mace");
			let maceRows = maceTable.rows;
			
			for(i = 1; i < (maceRows.length); i++) {
				x = maceRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Fire") != -1 || x.innerHTML.indexOf(", Fire") != -1) {
					maceRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBfist").checked == true) {
			let x, i = 0;
			let fistTable = document.getElementById("fist");
			let fistRows = fistTable.rows;
			
			for(i = 1; i < (fistRows.length); i++) {
				x = fistRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Fire") != -1 || x.innerHTML.indexOf(", Fire") != -1) {
					fistRows[i].style.display = "none";
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
		
		// Include any ice element daggers in search
		if(document.getElementById("CBdagger").checked == true) {
			let x, i = 0;
			let daggerTable = document.getElementById("dagger");
			let daggerRows = daggerTable.rows;
			
			for(i = 1; i < (daggerRows.length); i++) {
				x = daggerRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Ice") != -1 || x.innerHTML.indexOf(", Ice") != -1) {
					daggerRows[i].style.display = "";
				}
			}
		}
		// Include any ice element swords in search
		if(document.getElementById("CBsword").checked == true) {
			let x, i = 0;
			let swordTable = document.getElementById("sword");
			let swordRows = swordTable.rows;
			
			for(i = 1; i < (swordRows.length); i++) {
				x = swordRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Ice") != -1 || x.innerHTML.indexOf(", Ice") != -1) {
					swordRows[i].style.display = "";
				}
			}
		}
		// Include any ice element great swords in search
		if(document.getElementById("CBgsword").checked == true) {
			let x, i = 0;
			let gswordTable = document.getElementById("gsword");
			let gswordRows = gswordTable.rows;
			
			for(i = 1; i < (gswordRows.length); i++) {
				x = gswordRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Ice") != -1 || x.innerHTML.indexOf(", Ice") != -1) {
					gswordRows[i].style.display = "";
				}
			}
		}
		// Include any ice element katanas in search
		if(document.getElementById("CBkatana").checked == true) {
			let x, i = 0;
			let katanaTable = document.getElementById("katana");
			let katanaRows = katanaTable.rows;
			
			for(i = 1; i < (katanaRows.length); i++) {
				x = katanaRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Ice") != -1 || x.innerHTML.indexOf(", Ice") != -1) {
					katanaRows[i].style.display = "";
				}
			}
		}
		// Include any ice element staves in search
		if(document.getElementById("CBstaff").checked == true) {
			let x, i = 0;
			let staffTable = document.getElementById("staff");
			let staffRows = staffTable.rows;
			
			for(i = 1; i < (staffRows.length); i++) {
				x = staffRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Ice") != -1 || x.innerHTML.indexOf(", Ice") != -1) {
					staffRows[i].style.display = "";
				}
			}
		}
		// Include any ice element rods in search
		if(document.getElementById("CBrod").checked == true) {
			let x, i = 0;
			let rodTable = document.getElementById("rod");
			let rodRows = rodTable.rows;
			
			for(i = 1; i < (rodRows.length); i++) {
				x = rodRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Ice") != -1 || x.innerHTML.indexOf(", Ice") != -1) {
					rodRows[i].style.display = "";
				}
			}
		}
		// Include any ice element bows in search
		if(document.getElementById("CBbow").checked == true) {
			let x, i = 0;
			let bowTable = document.getElementById("bow");
			let bowRows = bowTable.rows;
			
			for(i = 1; i < (bowRows.length); i++) {
				x = bowRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Ice") != -1 || x.innerHTML.indexOf(", Ice") != -1) {
					bowRows[i].style.display = "";
				}
			}
		}
		// Include any ice element axes in search
		if(document.getElementById("CBaxe").checked == true) {
			let x, i = 0;
			let axeTable = document.getElementById("axe");
			let axeRows = axeTable.rows;
			
			for(i = 1; i < (axeRows.length); i++) {
				x = axeRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Ice") != -1 || x.innerHTML.indexOf(", Ice") != -1) {
					axeRows[i].style.display = "";
				}
			}
		}
		// Include any ice element hammers in search
		if(document.getElementById("CBhammer").checked == true) {
			let x, i = 0;
			let hammerTable = document.getElementById("hammer");
			let hammerRows = hammerTable.rows;
			
			for(i = 1; i < (hammerRows.length); i++) {
				x = hammerRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Ice") != -1 || x.innerHTML.indexOf(", Ice") != -1) {
					hammerRows[i].style.display = "";
				}
			}
		}
		// Include any ice element spears in search
		if(document.getElementById("CBspear").checked == true) {
			let x, i = 0;
			let spearTable = document.getElementById("spear");
			let spearRows = spearTable.rows;
			
			for(i = 1; i < (spearRows.length); i++) {
				x = spearRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Ice") != -1 || x.innerHTML.indexOf(", Ice") != -1) {
					spearRows[i].style.display = "";
				}
			}
		}
		// Include any ice element harps in search
		if(document.getElementById("CBharp").checked == true) {
			let x, i = 0;
			let harpTable = document.getElementById("harp");
			let harpRows = harpTable.rows;
			
			for(i = 1; i < (harpRows.length); i++) {
				x = harpRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Ice") != -1 || x.innerHTML.indexOf(", Ice") != -1) {
					harpRows[i].style.display = "";
				}
			}
		}
		// Include any ice element whips in search
		if(document.getElementById("CBwhip").checked == true) {
			let x, i = 0;
			let whipTable = document.getElementById("whip");
			let whipRows = whipTable.rows;
			
			for(i = 1; i < (whipRows.length); i++) {
				x = whipRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Ice") != -1 || x.innerHTML.indexOf(", Ice") != -1) {
					whipRows[i].style.display = "";
				}
			}
		}
		// Include any ice element throwing weapons in search
		if(document.getElementById("CBtw").checked == true) {
			let x, i = 0;
			let twTable = document.getElementById("tw");
			let twRows = twTable.rows;
			
			for(i = 1; i < (twRows.length); i++) {
				x = twRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Ice") != -1 || x.innerHTML.indexOf(", Ice") != -1) {
					twRows[i].style.display = "";
				}
			}
		}
		// Include any ice element guns in search
		if(document.getElementById("CBgun").checked == true) {
			let x, i = 0;
			let gunTable = document.getElementById("gun");
			let gunRows = gunTable.rows;
			
			for(i = 1; i < (gunRows.length); i++) {
				x = gunRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Ice") != -1 || x.innerHTML.indexOf(", Ice") != -1) {
					gunRows[i].style.display = "";
				}
			}
		}
		// Include any ice element maces in search
		if(document.getElementById("CBmace").checked == true) {
			let x, i = 0;
			let maceTable = document.getElementById("mace");
			let maceRows = maceTable.rows;
			
			for(i = 1; i < (maceRows.length); i++) {
				x = maceRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Ice") != -1 || x.innerHTML.indexOf(", Ice") != -1) {
					maceRows[i].style.display = "";
				}
			}
		}
		// Include any ice element fists in search
		if(document.getElementById("CBfist").checked == true) {
			let x, i = 0;
			let fistTable = document.getElementById("fist");
			let fistRows = fistTable.rows;
			
			for(i = 1; i < (fistRows.length); i++) {
				x = fistRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Ice") != -1 || x.innerHTML.indexOf(", Ice") != -1) {
					fistRows[i].style.display = "";
				}
			}
		}
	}
	// Ignore any equipment with ice element
	else {
		document.getElementById("iceicon").src = darkImg;
		document.getElementById("CBice").checked = false;
		
		if(document.getElementById("CBdagger").checked == true) {
			let x, i = 0;
			let daggerTable = document.getElementById("dagger");
			let daggerRows = daggerTable.rows;
			
			for(i = 1; i < (daggerRows.length); i++) {
				x = daggerRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Ice") != -1 || x.innerHTML.indexOf(", Ice") != -1) {
					daggerRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBsword").checked == true) {
			let x, i = 0;
			let swordTable = document.getElementById("sword");
			let swordRows = swordTable.rows;
			
			for(i = 1; i < (swordRows.length); i++) {
				x = swordRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Ice") != -1 || x.innerHTML.indexOf(", Ice") != -1) {
					swordRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBgsword").checked == true) {
			let x, i = 0;
			let gswordTable = document.getElementById("gsword");
			let gswordRows = gswordTable.rows;
			
			for(i = 1; i < (gswordRows.length); i++) {
				x = gswordRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Ice") != -1 || x.innerHTML.indexOf(", Ice") != -1) {
					gswordRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBkatana").checked == true) {
			let x, i = 0;
			let katanaTable = document.getElementById("katana");
			let katanaRows = katanaTable.rows;
			
			for(i = 1; i < (katanaRows.length); i++) {
				x = katanaRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Ice") != -1 || x.innerHTML.indexOf(", Ice") != -1) {
					katanaRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBstaff").checked == true) {
			let x, i = 0;
			let staffTable = document.getElementById("staff");
			let staffRows = staffTable.rows;
			
			for(i = 1; i < (staffRows.length); i++) {
				x = staffRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Ice") != -1 || x.innerHTML.indexOf(", Ice") != -1) {
					staffRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBrod").checked == true) {
			let x, i = 0;
			let rodTable = document.getElementById("rod");
			let rodRows = rodTable.rows;
			
			for(i = 1; i < (rodRows.length); i++) {
				x = rodRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Ice") != -1 || x.innerHTML.indexOf(", Ice") != -1) {
					rodRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBbow").checked == true) {
			let x, i = 0;
			let bowTable = document.getElementById("bow");
			let bowRows = bowTable.rows;
			
			for(i = 1; i < (bowRows.length); i++) {
				x = bowRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Ice") != -1 || x.innerHTML.indexOf(", Ice") != -1) {
					bowRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBaxe").checked == true) {
			let x, i = 0;
			let axeTable = document.getElementById("axe");
			let axeRows = axeTable.rows;
			
			for(i = 1; i < (axeRows.length); i++) {
				x = axeRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Ice") != -1 || x.innerHTML.indexOf(", Ice") != -1) {
					axeRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBhammer").checked == true) {
			let x, i = 0;
			let hammerTable = document.getElementById("hammer");
			let hammerRows = hammerTable.rows;
			
			for(i = 1; i < (hammerRows.length); i++) {
				x = hammerRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Ice") != -1 || x.innerHTML.indexOf(", Ice") != -1) {
					hammerRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBspear").checked == true) {
			let x, i = 0;
			let spearTable = document.getElementById("spear");
			let spearRows = spearTable.rows;
			
			for(i = 1; i < (spearRows.length); i++) {
				x = spearRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Ice") != -1 || x.innerHTML.indexOf(", Ice") != -1) {
					spearRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBharp").checked == true) {
			let x, i = 0;
			let harpTable = document.getElementById("harp");
			let harpRows = harpTable.rows;
			
			for(i = 1; i < (harpRows.length); i++) {
				x = harpRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Ice") != -1 || x.innerHTML.indexOf(", Ice") != -1) {
					harpRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBwhip").checked == true) {
			let x, i = 0;
			let whipTable = document.getElementById("whip");
			let whipRows = whipTable.rows;
			
			for(i = 1; i < (whipRows.length); i++) {
				x = whipRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Ice") != -1 || x.innerHTML.indexOf(", Ice") != -1) {
					whipRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBtw").checked == true) {
			let x, i = 0;
			let twTable = document.getElementById("tw");
			let twRows = twTable.rows;
			
			for(i = 1; i < (twRows.length); i++) {
				x = twRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Ice") != -1 || x.innerHTML.indexOf(", Ice") != -1) {
					twRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBgun").checked == true) {
			let x, i = 0;
			let gunTable = document.getElementById("gun");
			let gunRows = gunTable.rows;
			
			for(i = 1; i < (gunRows.length); i++) {
				x = gunRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Ice") != -1 || x.innerHTML.indexOf(", Ice") != -1) {
					gunRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBmace").checked == true) {
			let x, i = 0;
			let maceTable = document.getElementById("mace");
			let maceRows = maceTable.rows;
			
			for(i = 1; i < (maceRows.length); i++) {
				x = maceRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Ice") != -1 || x.innerHTML.indexOf(", Ice") != -1) {
					maceRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBfist").checked == true) {
			let x, i = 0;
			let fistTable = document.getElementById("fist");
			let fistRows = fistTable.rows;
			
			for(i = 1; i < (fistRows.length); i++) {
				x = fistRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Ice") != -1 || x.innerHTML.indexOf(", Ice") != -1) {
					fistRows[i].style.display = "none";
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
		
		// Include any lightning element daggers in search
		if(document.getElementById("CBdagger").checked == true) {
			let x, i = 0;
			let daggerTable = document.getElementById("dagger");
			let daggerRows = daggerTable.rows;
			
			for(i = 1; i < (daggerRows.length); i++) {
				x = daggerRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Lightning") != -1 || x.innerHTML.indexOf(", Lightning") != -1) {
					daggerRows[i].style.display = "";
				}
			}
		}
		// Include any lightning element swords in search
		if(document.getElementById("CBsword").checked == true) {
			let x, i = 0;
			let swordTable = document.getElementById("sword");
			let swordRows = swordTable.rows;
			
			for(i = 1; i < (swordRows.length); i++) {
				x = swordRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Lightning") != -1 || x.innerHTML.indexOf(", Lightning") != -1) {
					swordRows[i].style.display = "";
				}
			}
		}
		// Include any lightning element great swords in search
		if(document.getElementById("CBgsword").checked == true) {
			let x, i = 0;
			let gswordTable = document.getElementById("gsword");
			let gswordRows = gswordTable.rows;
			
			for(i = 1; i < (gswordRows.length); i++) {
				x = gswordRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Lightning") != -1 || x.innerHTML.indexOf(", Lightning") != -1) {
					gswordRows[i].style.display = "";
				}
			}
		}
		// Include any lightning element katanas in search
		if(document.getElementById("CBkatana").checked == true) {
			let x, i = 0;
			let katanaTable = document.getElementById("katana");
			let katanaRows = katanaTable.rows;
			
			for(i = 1; i < (katanaRows.length); i++) {
				x = katanaRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Lightning") != -1 || x.innerHTML.indexOf(", Lightning") != -1) {
					katanaRows[i].style.display = "";
				}
			}
		}
		// Include any lightning element staves in search
		if(document.getElementById("CBstaff").checked == true) {
			let x, i = 0;
			let staffTable = document.getElementById("staff");
			let staffRows = staffTable.rows;
			
			for(i = 1; i < (staffRows.length); i++) {
				x = staffRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Lightning") != -1 || x.innerHTML.indexOf(", Lightning") != -1) {
					staffRows[i].style.display = "";
				}
			}
		}
		// Include any lightning element rods in search
		if(document.getElementById("CBrod").checked == true) {
			let x, i = 0;
			let rodTable = document.getElementById("rod");
			let rodRows = rodTable.rows;
			
			for(i = 1; i < (rodRows.length); i++) {
				x = rodRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Lightning") != -1 || x.innerHTML.indexOf(", Lightning") != -1) {
					rodRows[i].style.display = "";
				}
			}
		}
		// Include any lightning element bows in search
		if(document.getElementById("CBbow").checked == true) {
			let x, i = 0;
			let bowTable = document.getElementById("bow");
			let bowRows = bowTable.rows;
			
			for(i = 1; i < (bowRows.length); i++) {
				x = bowRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Lightning") != -1 || x.innerHTML.indexOf(", Lightning") != -1) {
					bowRows[i].style.display = "";
				}
			}
		}
		// Include any lightning element axes in search
		if(document.getElementById("CBaxe").checked == true) {
			let x, i = 0;
			let axeTable = document.getElementById("axe");
			let axeRows = axeTable.rows;
			
			for(i = 1; i < (axeRows.length); i++) {
				x = axeRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Lightning") != -1 || x.innerHTML.indexOf(", Lightning") != -1) {
					axeRows[i].style.display = "";
				}
			}
		}
		// Include any lightning element hammers in search
		if(document.getElementById("CBhammer").checked == true) {
			let x, i = 0;
			let hammerTable = document.getElementById("hammer");
			let hammerRows = hammerTable.rows;
			
			for(i = 1; i < (hammerRows.length); i++) {
				x = hammerRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Lightning") != -1 || x.innerHTML.indexOf(", Lightning") != -1) {
					hammerRows[i].style.display = "";
				}
			}
		}
		// Include any lightning element spears in search
		if(document.getElementById("CBspear").checked == true) {
			let x, i = 0;
			let spearTable = document.getElementById("spear");
			let spearRows = spearTable.rows;
			
			for(i = 1; i < (spearRows.length); i++) {
				x = spearRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Lightning") != -1 || x.innerHTML.indexOf(", Lightning") != -1) {
					spearRows[i].style.display = "";
				}
			}
		}
		// Include any lightning element harps in search
		if(document.getElementById("CBharp").checked == true) {
			let x, i = 0;
			let harpTable = document.getElementById("harp");
			let harpRows = harpTable.rows;
			
			for(i = 1; i < (harpRows.length); i++) {
				x = harpRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Lightning") != -1 || x.innerHTML.indexOf(", Lightning") != -1) {
					harpRows[i].style.display = "";
				}
			}
		}
		// Include any lightning element whips in search
		if(document.getElementById("CBwhip").checked == true) {
			let x, i = 0;
			let whipTable = document.getElementById("whip");
			let whipRows = whipTable.rows;
			
			for(i = 1; i < (whipRows.length); i++) {
				x = whipRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Lightning") != -1 || x.innerHTML.indexOf(", Lightning") != -1) {
					whipRows[i].style.display = "";
				}
			}
		}
		// Include any lightning element throwing weapons in search
		if(document.getElementById("CBtw").checked == true) {
			let x, i = 0;
			let twTable = document.getElementById("tw");
			let twRows = twTable.rows;
			
			for(i = 1; i < (twRows.length); i++) {
				x = twRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Lightning") != -1 || x.innerHTML.indexOf(", Lightning") != -1) {
					twRows[i].style.display = "";
				}
			}
		}
		// Include any lightning element guns in search
		if(document.getElementById("CBgun").checked == true) {
			let x, i = 0;
			let gunTable = document.getElementById("gun");
			let gunRows = gunTable.rows;
			
			for(i = 1; i < (gunRows.length); i++) {
				x = gunRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Lightning") != -1 || x.innerHTML.indexOf(", Lightning") != -1) {
					gunRows[i].style.display = "";
				}
			}
		}
		// Include any lightning element maces in search
		if(document.getElementById("CBmace").checked == true) {
			let x, i = 0;
			let maceTable = document.getElementById("mace");
			let maceRows = maceTable.rows;
			
			for(i = 1; i < (maceRows.length); i++) {
				x = maceRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Lightning") != -1 || x.innerHTML.indexOf(", Lightning") != -1) {
					maceRows[i].style.display = "";
				}
			}
		}
		// Include any lightning element fists in search
		if(document.getElementById("CBfist").checked == true) {
			let x, i = 0;
			let fistTable = document.getElementById("fist");
			let fistRows = fistTable.rows;
			
			for(i = 1; i < (fistRows.length); i++) {
				x = fistRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Lightning") != -1 || x.innerHTML.indexOf(", Lightning") != -1) {
					fistRows[i].style.display = "";
				}
			}
		}
	}
	else {
		document.getElementById("lightningicon").src = darkImg;
		document.getElementById("CBlightning").checked = false;
		
		if(document.getElementById("CBdagger").checked == true) {
			let x, i = 0;
			let daggerTable = document.getElementById("dagger");
			let daggerRows = daggerTable.rows;
			
			for(i = 1; i < (daggerRows.length); i++) {
				x = daggerRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Lightning") != -1 || x.innerHTML.indexOf(", Lightning") != -1) {
					daggerRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBsword").checked == true) {
			let x, i = 0;
			let swordTable = document.getElementById("sword");
			let swordRows = swordTable.rows;
			
			for(i = 1; i < (swordRows.length); i++) {
				x = swordRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Lightning") != -1 || x.innerHTML.indexOf(", Lightning") != -1) {
					swordRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBgsword").checked == true) {
			let x, i = 0;
			let gswordTable = document.getElementById("gsword");
			let gswordRows = gswordTable.rows;
			
			for(i = 1; i < (gswordRows.length); i++) {
				x = gswordRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Lightning") != -1 || x.innerHTML.indexOf(", Lightning") != -1) {
					gswordRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBkatana").checked == true) {
			let x, i = 0;
			let katanaTable = document.getElementById("katana");
			let katanaRows = katanaTable.rows;
			
			for(i = 1; i < (katanaRows.length); i++) {
				x = katanaRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Lightning") != -1 || x.innerHTML.indexOf(", Lightning") != -1) {
					katanaRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBstaff").checked == true) {
			let x, i = 0;
			let staffTable = document.getElementById("staff");
			let staffRows = staffTable.rows;
			
			for(i = 1; i < (staffRows.length); i++) {
				x = staffRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Lightning") != -1 || x.innerHTML.indexOf(", Lightning") != -1) {
					staffRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBrod").checked == true) {
			let x, i = 0;
			let rodTable = document.getElementById("rod");
			let rodRows = rodTable.rows;
			
			for(i = 1; i < (rodRows.length); i++) {
				x = rodRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Lightning") != -1 || x.innerHTML.indexOf(", Lightning") != -1) {
					rodRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBbow").checked == true) {
			let x, i = 0;
			let bowTable = document.getElementById("bow");
			let bowRows = bowTable.rows;
			
			for(i = 1; i < (bowRows.length); i++) {
				x = bowRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Lightning") != -1 || x.innerHTML.indexOf(", Lightning") != -1) {
					bowRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBaxe").checked == true) {
			let x, i = 0;
			let axeTable = document.getElementById("axe");
			let axeRows = axeTable.rows;
			
			for(i = 1; i < (axeRows.length); i++) {
				x = axeRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Lightning") != -1 || x.innerHTML.indexOf(", Lightning") != -1) {
					axeRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBhammer").checked == true) {
			let x, i = 0;
			let hammerTable = document.getElementById("hammer");
			let hammerRows = hammerTable.rows;
			
			for(i = 1; i < (hammerRows.length); i++) {
				x = hammerRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Lightning") != -1 || x.innerHTML.indexOf(", Lightning") != -1) {
					hammerRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBspear").checked == true) {
			let x, i = 0;
			let spearTable = document.getElementById("spear");
			let spearRows = spearTable.rows;
			
			for(i = 1; i < (spearRows.length); i++) {
				x = spearRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Lightning") != -1 || x.innerHTML.indexOf(", Lightning") != -1) {
					spearRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBharp").checked == true) {
			let x, i = 0;
			let harpTable = document.getElementById("harp");
			let harpRows = harpTable.rows;
			
			for(i = 1; i < (harpRows.length); i++) {
				x = harpRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Lightning") != -1 || x.innerHTML.indexOf(", Lightning") != -1) {
					harpRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBwhip").checked == true) {
			let x, i = 0;
			let whipTable = document.getElementById("whip");
			let whipRows = whipTable.rows;
			
			for(i = 1; i < (whipRows.length); i++) {
				x = whipRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Lightning") != -1 || x.innerHTML.indexOf(", Lightning") != -1) {
					whipRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBtw").checked == true) {
			let x, i = 0;
			let twTable = document.getElementById("tw");
			let twRows = twTable.rows;
			
			for(i = 1; i < (twRows.length); i++) {
				x = twRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Lightning") != -1 || x.innerHTML.indexOf(", Lightning") != -1) {
					twRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBgun").checked == true) {
			let x, i = 0;
			let gunTable = document.getElementById("gun");
			let gunRows = gunTable.rows;
			
			for(i = 1; i < (gunRows.length); i++) {
				x = gunRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Lightning") != -1 || x.innerHTML.indexOf(", Lightning") != -1) {
					gunRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBmace").checked == true) {
			let x, i = 0;
			let maceTable = document.getElementById("mace");
			let maceRows = maceTable.rows;
			
			for(i = 1; i < (maceRows.length); i++) {
				x = maceRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Lightning") != -1 || x.innerHTML.indexOf(", Lightning") != -1) {
					maceRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBfist").checked == true) {
			let x, i = 0;
			let fistTable = document.getElementById("fist");
			let fistRows = fistTable.rows;
			
			for(i = 1; i < (fistRows.length); i++) {
				x = fistRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Lightning") != -1 || x.innerHTML.indexOf(", Lightning") != -1) {
					fistRows[i].style.display = "none";
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
		
		// Include any water element daggers in search
		if(document.getElementById("CBdagger").checked == true) {
			let x, i = 0;
			let daggerTable = document.getElementById("dagger");
			let daggerRows = daggerTable.rows;
			
			for(i = 1; i < (daggerRows.length); i++) {
				x = daggerRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Water") != -1 || x.innerHTML.indexOf(", Water") != -1) {
					daggerRows[i].style.display = "";
				}
			}
		}
		// Include any water element swords in search
		if(document.getElementById("CBsword").checked == true) {
			let x, i = 0;
			let swordTable = document.getElementById("sword");
			let swordRows = swordTable.rows;
			
			for(i = 1; i < (swordRows.length); i++) {
				x = swordRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Water") != -1 || x.innerHTML.indexOf(", Water") != -1) {
					swordRows[i].style.display = "";
				}
			}
		}
		// Include any water element great swords in search
		if(document.getElementById("CBgsword").checked == true) {
			let x, i = 0;
			let gswordTable = document.getElementById("gsword");
			let gswordRows = gswordTable.rows;
			
			for(i = 1; i < (gswordRows.length); i++) {
				x = gswordRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Water") != -1 || x.innerHTML.indexOf(", Water") != -1) {
					gswordRows[i].style.display = "";
				}
			}
		}
		// Include any water element katanas in search
		if(document.getElementById("CBkatana").checked == true) {
			let x, i = 0;
			let katanaTable = document.getElementById("katana");
			let katanaRows = katanaTable.rows;
			
			for(i = 1; i < (katanaRows.length); i++) {
				x = katanaRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Water") != -1 || x.innerHTML.indexOf(", Water") != -1) {
					katanaRows[i].style.display = "";
				}
			}
		}
		// Include any water element staves in search
		if(document.getElementById("CBstaff").checked == true) {
			let x, i = 0;
			let staffTable = document.getElementById("staff");
			let staffRows = staffTable.rows;
			
			for(i = 1; i < (staffRows.length); i++) {
				x = staffRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Water") != -1 || x.innerHTML.indexOf(", Water") != -1) {
					staffRows[i].style.display = "";
				}
			}
		}
		// Include any water element rods in search
		if(document.getElementById("CBrod").checked == true) {
			let x, i = 0;
			let rodTable = document.getElementById("rod");
			let rodRows = rodTable.rows;
			
			for(i = 1; i < (rodRows.length); i++) {
				x = rodRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Water") != -1 || x.innerHTML.indexOf(", Water") != -1) {
					rodRows[i].style.display = "";
				}
			}
		}
		// Include any water element bows in search
		if(document.getElementById("CBbow").checked == true) {
			let x, i = 0;
			let bowTable = document.getElementById("bow");
			let bowRows = bowTable.rows;
			
			for(i = 1; i < (bowRows.length); i++) {
				x = bowRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Water") != -1 || x.innerHTML.indexOf(", Water") != -1) {
					bowRows[i].style.display = "";
				}
			}
		}
		// Include any water element axes in search
		if(document.getElementById("CBaxe").checked == true) {
			let x, i = 0;
			let axeTable = document.getElementById("axe");
			let axeRows = axeTable.rows;
			
			for(i = 1; i < (axeRows.length); i++) {
				x = axeRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Water") != -1 || x.innerHTML.indexOf(", Water") != -1) {
					axeRows[i].style.display = "";
				}
			}
		}
		// Include any water element hammers in search
		if(document.getElementById("CBhammer").checked == true) {
			let x, i = 0;
			let hammerTable = document.getElementById("hammer");
			let hammerRows = hammerTable.rows;
			
			for(i = 1; i < (hammerRows.length); i++) {
				x = hammerRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Water") != -1 || x.innerHTML.indexOf(", Water") != -1) {
					hammerRows[i].style.display = "";
				}
			}
		}
		// Include any water element spears in search
		if(document.getElementById("CBspear").checked == true) {
			let x, i = 0;
			let spearTable = document.getElementById("spear");
			let spearRows = spearTable.rows;
			
			for(i = 1; i < (spearRows.length); i++) {
				x = spearRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Water") != -1 || x.innerHTML.indexOf(", Water") != -1) {
					spearRows[i].style.display = "";
				}
			}
		}
		// Include any water element harps in search
		if(document.getElementById("CBharp").checked == true) {
			let x, i = 0;
			let harpTable = document.getElementById("harp");
			let harpRows = harpTable.rows;
			
			for(i = 1; i < (harpRows.length); i++) {
				x = harpRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Water") != -1 || x.innerHTML.indexOf(", Water") != -1) {
					harpRows[i].style.display = "";
				}
			}
		}
		// Include any water element whips in search
		if(document.getElementById("CBwhip").checked == true) {
			let x, i = 0;
			let whipTable = document.getElementById("whip");
			let whipRows = whipTable.rows;
			
			for(i = 1; i < (whipRows.length); i++) {
				x = whipRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Water") != -1 || x.innerHTML.indexOf(", Water") != -1) {
					whipRows[i].style.display = "";
				}
			}
		}
		// Include any water element throwing weapons in search
		if(document.getElementById("CBtw").checked == true) {
			let x, i = 0;
			let twTable = document.getElementById("tw");
			let twRows = twTable.rows;
			
			for(i = 1; i < (twRows.length); i++) {
				x = twRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Water") != -1 || x.innerHTML.indexOf(", Water") != -1) {
					twRows[i].style.display = "";
				}
			}
		}
		// Include any water element guns in search
		if(document.getElementById("CBgun").checked == true) {
			let x, i = 0;
			let gunTable = document.getElementById("gun");
			let gunRows = gunTable.rows;
			
			for(i = 1; i < (gunRows.length); i++) {
				x = gunRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Water") != -1 || x.innerHTML.indexOf(", Water") != -1) {
					gunRows[i].style.display = "";
				}
			}
		}
		// Include any water element maces in search
		if(document.getElementById("CBmace").checked == true) {
			let x, i = 0;
			let maceTable = document.getElementById("mace");
			let maceRows = maceTable.rows;
			
			for(i = 1; i < (maceRows.length); i++) {
				x = maceRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Water") != -1 || x.innerHTML.indexOf(", Water") != -1) {
					maceRows[i].style.display = "";
				}
			}
		}
		// Include any water element fists in search
		if(document.getElementById("CBfist").checked == true) {
			let x, i = 0;
			let fistTable = document.getElementById("fist");
			let fistRows = fistTable.rows;
			
			for(i = 1; i < (fistRows.length); i++) {
				x = fistRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Water") != -1 || x.innerHTML.indexOf(", Water") != -1) {
					fistRows[i].style.display = "";
				}
			}
		}
	}
	else {
		document.getElementById("watericon").src = darkImg;
		document.getElementById("CBwater").checked = false;
		
		if(document.getElementById("CBdagger").checked == true) {
			let x, i = 0;
			let daggerTable = document.getElementById("dagger");
			let daggerRows = daggerTable.rows;
			
			for(i = 1; i < (daggerRows.length); i++) {
				x = daggerRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Water") != -1 || x.innerHTML.indexOf(", Water") != -1) {
					daggerRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBsword").checked == true) {
			let x, i = 0;
			let swordTable = document.getElementById("sword");
			let swordRows = swordTable.rows;
			
			for(i = 1; i < (swordRows.length); i++) {
				x = swordRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Water") != -1 || x.innerHTML.indexOf(", Water") != -1) {
					swordRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBgsword").checked == true) {
			let x, i = 0;
			let gswordTable = document.getElementById("gsword");
			let gswordRows = gswordTable.rows;
			
			for(i = 1; i < (gswordRows.length); i++) {
				x = gswordRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Water") != -1 || x.innerHTML.indexOf(", Water") != -1) {
					gswordRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBkatana").checked == true) {
			let x, i = 0;
			let katanaTable = document.getElementById("katana");
			let katanaRows = katanaTable.rows;
			
			for(i = 1; i < (katanaRows.length); i++) {
				x = katanaRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Water") != -1 || x.innerHTML.indexOf(", Water") != -1) {
					katanaRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBstaff").checked == true) {
			let x, i = 0;
			let staffTable = document.getElementById("staff");
			let staffRows = staffTable.rows;
			
			for(i = 1; i < (staffRows.length); i++) {
				x = staffRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Water") != -1 || x.innerHTML.indexOf(", Water") != -1) {
					staffRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBrod").checked == true) {
			let x, i = 0;
			let rodTable = document.getElementById("rod");
			let rodRows = rodTable.rows;
			
			for(i = 1; i < (rodRows.length); i++) {
				x = rodRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Water") != -1 || x.innerHTML.indexOf(", Water") != -1) {
					rodRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBbow").checked == true) {
			let x, i = 0;
			let bowTable = document.getElementById("bow");
			let bowRows = bowTable.rows;
			
			for(i = 1; i < (bowRows.length); i++) {
				x = bowRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Water") != -1 || x.innerHTML.indexOf(", Water") != -1) {
					bowRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBaxe").checked == true) {
			let x, i = 0;
			let axeTable = document.getElementById("axe");
			let axeRows = axeTable.rows;
			
			for(i = 1; i < (axeRows.length); i++) {
				x = axeRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Water") != -1 || x.innerHTML.indexOf(", Water") != -1) {
					axeRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBhammer").checked == true) {
			let x, i = 0;
			let hammerTable = document.getElementById("hammer");
			let hammerRows = hammerTable.rows;
			
			for(i = 1; i < (hammerRows.length); i++) {
				x = hammerRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Water") != -1 || x.innerHTML.indexOf(", Water") != -1) {
					hammerRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBspear").checked == true) {
			let x, i = 0;
			let spearTable = document.getElementById("spear");
			let spearRows = spearTable.rows;
			
			for(i = 1; i < (spearRows.length); i++) {
				x = spearRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Water") != -1 || x.innerHTML.indexOf(", Water") != -1) {
					spearRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBharp").checked == true) {
			let x, i = 0;
			let harpTable = document.getElementById("harp");
			let harpRows = harpTable.rows;
			
			for(i = 1; i < (harpRows.length); i++) {
				x = harpRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Water") != -1 || x.innerHTML.indexOf(", Water") != -1) {
					harpRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBwhip").checked == true) {
			let x, i = 0;
			let whipTable = document.getElementById("whip");
			let whipRows = whipTable.rows;
			
			for(i = 1; i < (whipRows.length); i++) {
				x = whipRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Water") != -1 || x.innerHTML.indexOf(", Water") != -1) {
					whipRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBtw").checked == true) {
			let x, i = 0;
			let twTable = document.getElementById("tw");
			let twRows = twTable.rows;
			
			for(i = 1; i < (twRows.length); i++) {
				x = twRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Water") != -1 || x.innerHTML.indexOf(", Water") != -1) {
					twRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBgun").checked == true) {
			let x, i = 0;
			let gunTable = document.getElementById("gun");
			let gunRows = gunTable.rows;
			
			for(i = 1; i < (gunRows.length); i++) {
				x = gunRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Water") != -1 || x.innerHTML.indexOf(", Water") != -1) {
					gunRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBmace").checked == true) {
			let x, i = 0;
			let maceTable = document.getElementById("mace");
			let maceRows = maceTable.rows;
			
			for(i = 1; i < (maceRows.length); i++) {
				x = maceRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Water") != -1 || x.innerHTML.indexOf(", Water") != -1) {
					maceRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBfist").checked == true) {
			let x, i = 0;
			let fistTable = document.getElementById("fist");
			let fistRows = fistTable.rows;
			
			for(i = 1; i < (fistRows.length); i++) {
				x = fistRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Water") != -1 || x.innerHTML.indexOf(", Water") != -1) {
					fistRows[i].style.display = "none";
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
		
		// Include any wind element daggers in search
		if(document.getElementById("CBdagger").checked == true) {
			let x, i = 0;
			let daggerTable = document.getElementById("dagger");
			let daggerRows = daggerTable.rows;
			
			for(i = 1; i < (daggerRows.length); i++) {
				x = daggerRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Wind") != -1 || x.innerHTML.indexOf(", Wind") != -1) {
					daggerRows[i].style.display = "";
				}
			}
		}
		// Include any wind element swords in search
		if(document.getElementById("CBsword").checked == true) {
			let x, i = 0;
			let swordTable = document.getElementById("sword");
			let swordRows = swordTable.rows;
			
			for(i = 1; i < (swordRows.length); i++) {
				x = swordRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Wind") != -1 || x.innerHTML.indexOf(", Wind") != -1) {
					swordRows[i].style.display = "";
				}
			}
		}
		// Include any wind element great swords in search
		if(document.getElementById("CBgsword").checked == true) {
			let x, i = 0;
			let gswordTable = document.getElementById("gsword");
			let gswordRows = gswordTable.rows;
			
			for(i = 1; i < (gswordRows.length); i++) {
				x = gswordRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Wind") != -1 || x.innerHTML.indexOf(", Wind") != -1) {
					gswordRows[i].style.display = "";
				}
			}
		}
		// Include any wind element katanas in search
		if(document.getElementById("CBkatana").checked == true) {
			let x, i = 0;
			let katanaTable = document.getElementById("katana");
			let katanaRows = katanaTable.rows;
			
			for(i = 1; i < (katanaRows.length); i++) {
				x = katanaRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Wind") != -1 || x.innerHTML.indexOf(", Wind") != -1) {
					katanaRows[i].style.display = "";
				}
			}
		}
		// Include any wind element staves in search
		if(document.getElementById("CBstaff").checked == true) {
			let x, i = 0;
			let staffTable = document.getElementById("staff");
			let staffRows = staffTable.rows;
			
			for(i = 1; i < (staffRows.length); i++) {
				x = staffRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Wind") != -1 || x.innerHTML.indexOf(", Wind") != -1) {
					staffRows[i].style.display = "";
				}
			}
		}
		// Include any wind element rods in search
		if(document.getElementById("CBrod").checked == true) {
			let x, i = 0;
			let rodTable = document.getElementById("rod");
			let rodRows = rodTable.rows;
			
			for(i = 1; i < (rodRows.length); i++) {
				x = rodRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Wind") != -1 || x.innerHTML.indexOf(", Wind") != -1) {
					rodRows[i].style.display = "";
				}
			}
		}
		// Include any wind element bows in search
		if(document.getElementById("CBbow").checked == true) {
			let x, i = 0;
			let bowTable = document.getElementById("bow");
			let bowRows = bowTable.rows;
			
			for(i = 1; i < (bowRows.length); i++) {
				x = bowRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Wind") != -1 || x.innerHTML.indexOf(", Wind") != -1) {
					bowRows[i].style.display = "";
				}
			}
		}
		// Include any wind element axes in search
		if(document.getElementById("CBaxe").checked == true) {
			let x, i = 0;
			let axeTable = document.getElementById("axe");
			let axeRows = axeTable.rows;
			
			for(i = 1; i < (axeRows.length); i++) {
				x = axeRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Wind") != -1 || x.innerHTML.indexOf(", Wind") != -1) {
					axeRows[i].style.display = "";
				}
			}
		}
		// Include any wind element hammers in search
		if(document.getElementById("CBhammer").checked == true) {
			let x, i = 0;
			let hammerTable = document.getElementById("hammer");
			let hammerRows = hammerTable.rows;
			
			for(i = 1; i < (hammerRows.length); i++) {
				x = hammerRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Wind") != -1 || x.innerHTML.indexOf(", Wind") != -1) {
					hammerRows[i].style.display = "";
				}
			}
		}
		// Include any wind element spears in search
		if(document.getElementById("CBspear").checked == true) {
			let x, i = 0;
			let spearTable = document.getElementById("spear");
			let spearRows = spearTable.rows;
			
			for(i = 1; i < (spearRows.length); i++) {
				x = spearRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Wind") != -1 || x.innerHTML.indexOf(", Wind") != -1) {
					spearRows[i].style.display = "";
				}
			}
		}
		// Include any wind element harps in search
		if(document.getElementById("CBharp").checked == true) {
			let x, i = 0;
			let harpTable = document.getElementById("harp");
			let harpRows = harpTable.rows;
			
			for(i = 1; i < (harpRows.length); i++) {
				x = harpRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Wind") != -1 || x.innerHTML.indexOf(", Wind") != -1) {
					harpRows[i].style.display = "";
				}
			}
		}
		// Include any wind element whips in search
		if(document.getElementById("CBwhip").checked == true) {
			let x, i = 0;
			let whipTable = document.getElementById("whip");
			let whipRows = whipTable.rows;
			
			for(i = 1; i < (whipRows.length); i++) {
				x = whipRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Wind") != -1 || x.innerHTML.indexOf(", Wind") != -1) {
					whipRows[i].style.display = "";
				}
			}
		}
		// Include any wind element throwing weapons in search
		if(document.getElementById("CBtw").checked == true) {
			let x, i = 0;
			let twTable = document.getElementById("tw");
			let twRows = twTable.rows;
			
			for(i = 1; i < (twRows.length); i++) {
				x = twRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Wind") != -1 || x.innerHTML.indexOf(", Wind") != -1) {
					twRows[i].style.display = "";
				}
			}
		}
		// Include any wind element guns in search
		if(document.getElementById("CBgun").checked == true) {
			let x, i = 0;
			let gunTable = document.getElementById("gun");
			let gunRows = gunTable.rows;
			
			for(i = 1; i < (gunRows.length); i++) {
				x = gunRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Wind") != -1 || x.innerHTML.indexOf(", Wind") != -1) {
					gunRows[i].style.display = "";
				}
			}
		}
		// Include any wind element maces in search
		if(document.getElementById("CBmace").checked == true) {
			let x, i = 0;
			let maceTable = document.getElementById("mace");
			let maceRows = maceTable.rows;
			
			for(i = 1; i < (maceRows.length); i++) {
				x = maceRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Wind") != -1 || x.innerHTML.indexOf(", Wind") != -1) {
					maceRows[i].style.display = "";
				}
			}
		}
		// Include any wind element fists in search
		if(document.getElementById("CBfist").checked == true) {
			let x, i = 0;
			let fistTable = document.getElementById("fist");
			let fistRows = fistTable.rows;
			
			for(i = 1; i < (fistRows.length); i++) {
				x = fistRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Wind") != -1 || x.innerHTML.indexOf(", Wind") != -1) {
					fistRows[i].style.display = "";
				}
			}
		}
	}
	else {
		document.getElementById("windicon").src = darkImg;
		document.getElementById("CBwind").checked = false;
		
		if(document.getElementById("CBdagger").checked == true) {
			let x, i = 0;
			let daggerTable = document.getElementById("dagger");
			let daggerRows = daggerTable.rows;
			
			for(i = 1; i < (daggerRows.length); i++) {
				x = daggerRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Wind") != -1 || x.innerHTML.indexOf(", Wind") != -1) {
					daggerRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBsword").checked == true) {
			let x, i = 0;
			let swordTable = document.getElementById("sword");
			let swordRows = swordTable.rows;
			
			for(i = 1; i < (swordRows.length); i++) {
				x = swordRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Wind") != -1 || x.innerHTML.indexOf(", Wind") != -1) {
					swordRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBgsword").checked == true) {
			let x, i = 0;
			let gswordTable = document.getElementById("gsword");
			let gswordRows = gswordTable.rows;
			
			for(i = 1; i < (gswordRows.length); i++) {
				x = gswordRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Wind") != -1 || x.innerHTML.indexOf(", Wind") != -1) {
					gswordRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBkatana").checked == true) {
			let x, i = 0;
			let katanaTable = document.getElementById("katana");
			let katanaRows = katanaTable.rows;
			
			for(i = 1; i < (katanaRows.length); i++) {
				x = katanaRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Wind") != -1 || x.innerHTML.indexOf(", Wind") != -1) {
					katanaRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBstaff").checked == true) {
			let x, i = 0;
			let staffTable = document.getElementById("staff");
			let staffRows = staffTable.rows;
			
			for(i = 1; i < (staffRows.length); i++) {
				x = staffRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Wind") != -1 || x.innerHTML.indexOf(", Wind") != -1) {
					staffRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBrod").checked == true) {
			let x, i = 0;
			let rodTable = document.getElementById("rod");
			let rodRows = rodTable.rows;
			
			for(i = 1; i < (rodRows.length); i++) {
				x = rodRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Wind") != -1 || x.innerHTML.indexOf(", Wind") != -1) {
					rodRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBbow").checked == true) {
			let x, i = 0;
			let bowTable = document.getElementById("bow");
			let bowRows = bowTable.rows;
			
			for(i = 1; i < (bowRows.length); i++) {
				x = bowRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Wind") != -1 || x.innerHTML.indexOf(", Wind") != -1) {
					bowRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBaxe").checked == true) {
			let x, i = 0;
			let axeTable = document.getElementById("axe");
			let axeRows = axeTable.rows;
			
			for(i = 1; i < (axeRows.length); i++) {
				x = axeRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Wind") != -1 || x.innerHTML.indexOf(", Wind") != -1) {
					axeRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBhammer").checked == true) {
			let x, i = 0;
			let hammerTable = document.getElementById("hammer");
			let hammerRows = hammerTable.rows;
			
			for(i = 1; i < (hammerRows.length); i++) {
				x = hammerRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Wind") != -1 || x.innerHTML.indexOf(", Wind") != -1) {
					hammerRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBspear").checked == true) {
			let x, i = 0;
			let spearTable = document.getElementById("spear");
			let spearRows = spearTable.rows;
			
			for(i = 1; i < (spearRows.length); i++) {
				x = spearRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Wind") != -1 || x.innerHTML.indexOf(", Wind") != -1) {
					spearRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBharp").checked == true) {
			let x, i = 0;
			let harpTable = document.getElementById("harp");
			let harpRows = harpTable.rows;
			
			for(i = 1; i < (harpRows.length); i++) {
				x = harpRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Wind") != -1 || x.innerHTML.indexOf(", Wind") != -1) {
					harpRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBwhip").checked == true) {
			let x, i = 0;
			let whipTable = document.getElementById("whip");
			let whipRows = whipTable.rows;
			
			for(i = 1; i < (whipRows.length); i++) {
				x = whipRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Wind") != -1 || x.innerHTML.indexOf(", Wind") != -1) {
					whipRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBtw").checked == true) {
			let x, i = 0;
			let twTable = document.getElementById("tw");
			let twRows = twTable.rows;
			
			for(i = 1; i < (twRows.length); i++) {
				x = twRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Wind") != -1 || x.innerHTML.indexOf(", Wind") != -1) {
					twRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBgun").checked == true) {
			let x, i = 0;
			let gunTable = document.getElementById("gun");
			let gunRows = gunTable.rows;
			
			for(i = 1; i < (gunRows.length); i++) {
				x = gunRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Wind") != -1 || x.innerHTML.indexOf(", Wind") != -1) {
					gunRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBmace").checked == true) {
			let x, i = 0;
			let maceTable = document.getElementById("mace");
			let maceRows = maceTable.rows;
			
			for(i = 1; i < (maceRows.length); i++) {
				x = maceRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Wind") != -1 || x.innerHTML.indexOf(", Wind") != -1) {
					maceRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBfist").checked == true) {
			let x, i = 0;
			let fistTable = document.getElementById("fist");
			let fistRows = fistTable.rows;
			
			for(i = 1; i < (fistRows.length); i++) {
				x = fistRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Wind") != -1 || x.innerHTML.indexOf(", Wind") != -1) {
					fistRows[i].style.display = "none";
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
		
		// Include any earth element daggers in search
		if(document.getElementById("CBdagger").checked == true) {
			let x, i = 0;
			let daggerTable = document.getElementById("dagger");
			let daggerRows = daggerTable.rows;
			
			for(i = 1; i < (daggerRows.length); i++) {
				x = daggerRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Earth") != -1 || x.innerHTML.indexOf(", Earth") != -1) {
					daggerRows[i].style.display = "";
				}
			}
		}
		// Include any earth element swords in search
		if(document.getElementById("CBsword").checked == true) {
			let x, i = 0;
			let swordTable = document.getElementById("sword");
			let swordRows = swordTable.rows;
			
			for(i = 1; i < (swordRows.length); i++) {
				x = swordRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Earth") != -1 || x.innerHTML.indexOf(", Earth") != -1) {
					swordRows[i].style.display = "";
				}
			}
		}
		// Include any earth element great swords in search
		if(document.getElementById("CBgsword").checked == true) {
			let x, i = 0;
			let gswordTable = document.getElementById("gsword");
			let gswordRows = gswordTable.rows;
			
			for(i = 1; i < (gswordRows.length); i++) {
				x = gswordRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Earth") != -1 || x.innerHTML.indexOf(", Earth") != -1) {
					gswordRows[i].style.display = "";
				}
			}
		}
		// Include any earth element katanas in search
		if(document.getElementById("CBkatana").checked == true) {
			let x, i = 0;
			let katanaTable = document.getElementById("katana");
			let katanaRows = katanaTable.rows;
			
			for(i = 1; i < (katanaRows.length); i++) {
				x = katanaRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Earth") != -1 || x.innerHTML.indexOf(", Earth") != -1) {
					katanaRows[i].style.display = "";
				}
			}
		}
		// Include any earth element staves in search
		if(document.getElementById("CBstaff").checked == true) {
			let x, i = 0;
			let staffTable = document.getElementById("staff");
			let staffRows = staffTable.rows;
			
			for(i = 1; i < (staffRows.length); i++) {
				x = staffRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Earth") != -1 || x.innerHTML.indexOf(", Earth") != -1) {
					staffRows[i].style.display = "";
				}
			}
		}
		// Include any earth element rods in search
		if(document.getElementById("CBrod").checked == true) {
			let x, i = 0;
			let rodTable = document.getElementById("rod");
			let rodRows = rodTable.rows;
			
			for(i = 1; i < (rodRows.length); i++) {
				x = rodRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Earth") != -1 || x.innerHTML.indexOf(", Earth") != -1) {
					rodRows[i].style.display = "";
				}
			}
		}
		// Include any earth element bows in search
		if(document.getElementById("CBbow").checked == true) {
			let x, i = 0;
			let bowTable = document.getElementById("bow");
			let bowRows = bowTable.rows;
			
			for(i = 1; i < (bowRows.length); i++) {
				x = bowRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Earth") != -1 || x.innerHTML.indexOf(", Earth") != -1) {
					bowRows[i].style.display = "";
				}
			}
		}
		// Include any earth element axes in search
		if(document.getElementById("CBaxe").checked == true) {
			let x, i = 0;
			let axeTable = document.getElementById("axe");
			let axeRows = axeTable.rows;
			
			for(i = 1; i < (axeRows.length); i++) {
				x = axeRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Earth") != -1 || x.innerHTML.indexOf(", Earth") != -1) {
					axeRows[i].style.display = "";
				}
			}
		}
		// Include any earth element hammers in search
		if(document.getElementById("CBhammer").checked == true) {
			let x, i = 0;
			let hammerTable = document.getElementById("hammer");
			let hammerRows = hammerTable.rows;
			
			for(i = 1; i < (hammerRows.length); i++) {
				x = hammerRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Earth") != -1 || x.innerHTML.indexOf(", Earth") != -1) {
					hammerRows[i].style.display = "";
				}
			}
		}
		// Include any earth element spears in search
		if(document.getElementById("CBspear").checked == true) {
			let x, i = 0;
			let spearTable = document.getElementById("spear");
			let spearRows = spearTable.rows;
			
			for(i = 1; i < (spearRows.length); i++) {
				x = spearRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Earth") != -1 || x.innerHTML.indexOf(", Earth") != -1) {
					spearRows[i].style.display = "";
				}
			}
		}
		// Include any earth element harps in search
		if(document.getElementById("CBharp").checked == true) {
			let x, i = 0;
			let harpTable = document.getElementById("harp");
			let harpRows = harpTable.rows;
			
			for(i = 1; i < (harpRows.length); i++) {
				x = harpRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Earth") != -1 || x.innerHTML.indexOf(", Earth") != -1) {
					harpRows[i].style.display = "";
				}
			}
		}
		// Include any earth element whips in search
		if(document.getElementById("CBwhip").checked == true) {
			let x, i = 0;
			let whipTable = document.getElementById("whip");
			let whipRows = whipTable.rows;
			
			for(i = 1; i < (whipRows.length); i++) {
				x = whipRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Earth") != -1 || x.innerHTML.indexOf(", Earth") != -1) {
					whipRows[i].style.display = "";
				}
			}
		}
		// Include any earth element throwing weapons in search
		if(document.getElementById("CBtw").checked == true) {
			let x, i = 0;
			let twTable = document.getElementById("tw");
			let twRows = twTable.rows;
			
			for(i = 1; i < (twRows.length); i++) {
				x = twRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Earth") != -1 || x.innerHTML.indexOf(", Earth") != -1) {
					twRows[i].style.display = "";
				}
			}
		}
		// Include any earth element guns in search
		if(document.getElementById("CBgun").checked == true) {
			let x, i = 0;
			let gunTable = document.getElementById("gun");
			let gunRows = gunTable.rows;
			
			for(i = 1; i < (gunRows.length); i++) {
				x = gunRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Earth") != -1 || x.innerHTML.indexOf(", Earth") != -1) {
					gunRows[i].style.display = "";
				}
			}
		}
		// Include any earth element maces in search
		if(document.getElementById("CBmace").checked == true) {
			let x, i = 0;
			let maceTable = document.getElementById("mace");
			let maceRows = maceTable.rows;
			
			for(i = 1; i < (maceRows.length); i++) {
				x = maceRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Earth") != -1 || x.innerHTML.indexOf(", Earth") != -1) {
					maceRows[i].style.display = "";
				}
			}
		}
		// Include any earth element fists in search
		if(document.getElementById("CBfist").checked == true) {
			let x, i = 0;
			let fistTable = document.getElementById("fist");
			let fistRows = fistTable.rows;
			
			for(i = 1; i < (fistRows.length); i++) {
				x = fistRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Earth") != -1 || x.innerHTML.indexOf(", Earth") != -1) {
					fistRows[i].style.display = "";
				}
			}
		}
	}
	else {
		document.getElementById("earthicon").src = darkImg;
		document.getElementById("CBearth").checked = false;
		
		if(document.getElementById("CBdagger").checked == true) {
			let x, i = 0;
			let daggerTable = document.getElementById("dagger");
			let daggerRows = daggerTable.rows;
			
			for(i = 1; i < (daggerRows.length); i++) {
				x = daggerRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Earth") != -1 || x.innerHTML.indexOf(", Earth") != -1) {
					daggerRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBsword").checked == true) {
			let x, i = 0;
			let swordTable = document.getElementById("sword");
			let swordRows = swordTable.rows;
			
			for(i = 1; i < (swordRows.length); i++) {
				x = swordRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Earth") != -1 || x.innerHTML.indexOf(", Earth") != -1) {
					swordRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBgsword").checked == true) {
			let x, i = 0;
			let gswordTable = document.getElementById("gsword");
			let gswordRows = gswordTable.rows;
			
			for(i = 1; i < (gswordRows.length); i++) {
				x = gswordRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Earth") != -1 || x.innerHTML.indexOf(", Earth") != -1) {
					gswordRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBkatana").checked == true) {
			let x, i = 0;
			let katanaTable = document.getElementById("katana");
			let katanaRows = katanaTable.rows;
			
			for(i = 1; i < (katanaRows.length); i++) {
				x = katanaRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Earth") != -1 || x.innerHTML.indexOf(", Earth") != -1) {
					katanaRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBstaff").checked == true) {
			let x, i = 0;
			let staffTable = document.getElementById("staff");
			let staffRows = staffTable.rows;
			
			for(i = 1; i < (staffRows.length); i++) {
				x = staffRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Earth") != -1 || x.innerHTML.indexOf(", Earth") != -1) {
					staffRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBrod").checked == true) {
			let x, i = 0;
			let rodTable = document.getElementById("rod");
			let rodRows = rodTable.rows;
			
			for(i = 1; i < (rodRows.length); i++) {
				x = rodRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Earth") != -1 || x.innerHTML.indexOf(", Earth") != -1) {
					rodRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBbow").checked == true) {
			let x, i = 0;
			let bowTable = document.getElementById("bow");
			let bowRows = bowTable.rows;
			
			for(i = 1; i < (bowRows.length); i++) {
				x = bowRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Earth") != -1 || x.innerHTML.indexOf(", Earth") != -1) {
					bowRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBaxe").checked == true) {
			let x, i = 0;
			let axeTable = document.getElementById("axe");
			let axeRows = axeTable.rows;
			
			for(i = 1; i < (axeRows.length); i++) {
				x = axeRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Earth") != -1 || x.innerHTML.indexOf(", Earth") != -1) {
					axeRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBhammer").checked == true) {
			let x, i = 0;
			let hammerTable = document.getElementById("hammer");
			let hammerRows = hammerTable.rows;
			
			for(i = 1; i < (hammerRows.length); i++) {
				x = hammerRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Earth") != -1 || x.innerHTML.indexOf(", Earth") != -1) {
					hammerRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBspear").checked == true) {
			let x, i = 0;
			let spearTable = document.getElementById("spear");
			let spearRows = spearTable.rows;
			
			for(i = 1; i < (spearRows.length); i++) {
				x = spearRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Earth") != -1 || x.innerHTML.indexOf(", Earth") != -1) {
					spearRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBharp").checked == true) {
			let x, i = 0;
			let harpTable = document.getElementById("harp");
			let harpRows = harpTable.rows;
			
			for(i = 1; i < (harpRows.length); i++) {
				x = harpRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Earth") != -1 || x.innerHTML.indexOf(", Earth") != -1) {
					harpRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBwhip").checked == true) {
			let x, i = 0;
			let whipTable = document.getElementById("whip");
			let whipRows = whipTable.rows;
			
			for(i = 1; i < (whipRows.length); i++) {
				x = whipRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Earth") != -1 || x.innerHTML.indexOf(", Earth") != -1) {
					whipRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBtw").checked == true) {
			let x, i = 0;
			let twTable = document.getElementById("tw");
			let twRows = twTable.rows;
			
			for(i = 1; i < (twRows.length); i++) {
				x = twRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Earth") != -1 || x.innerHTML.indexOf(", Earth") != -1) {
					twRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBgun").checked == true) {
			let x, i = 0;
			let gunTable = document.getElementById("gun");
			let gunRows = gunTable.rows;
			
			for(i = 1; i < (gunRows.length); i++) {
				x = gunRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Earth") != -1 || x.innerHTML.indexOf(", Earth") != -1) {
					gunRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBmace").checked == true) {
			let x, i = 0;
			let maceTable = document.getElementById("mace");
			let maceRows = maceTable.rows;
			
			for(i = 1; i < (maceRows.length); i++) {
				x = maceRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Earth") != -1 || x.innerHTML.indexOf(", Earth") != -1) {
					maceRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBfist").checked == true) {
			let x, i = 0;
			let fistTable = document.getElementById("fist");
			let fistRows = fistTable.rows;
			
			for(i = 1; i < (fistRows.length); i++) {
				x = fistRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Earth") != -1 || x.innerHTML.indexOf(", Earth") != -1) {
					fistRows[i].style.display = "none";
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
		
		// Include any light element daggers in search
		if(document.getElementById("CBdagger").checked == true) {
			let x, i = 0;
			let daggerTable = document.getElementById("dagger");
			let daggerRows = daggerTable.rows;
			
			for(i = 1; i < (daggerRows.length); i++) {
				x = daggerRows[i].getElementsByTagName("td")[7];
				if((x.innerHTML.indexOf("Element: Light") != -1 || x.innerHTML.indexOf(", Light") != -1) && x.innerHTML.indexOf("Lightning") == -1) {
					daggerRows[i].style.display = "";
				}
			}
		}
		// Include any light element swords in search
		if(document.getElementById("CBsword").checked == true) {
			let x, i = 0;
			let swordTable = document.getElementById("sword");
			let swordRows = swordTable.rows;
			
			for(i = 1; i < (swordRows.length); i++) {
				x = swordRows[i].getElementsByTagName("td")[7];
				if((x.innerHTML.indexOf("Element: Light") != -1 || x.innerHTML.indexOf(", Light") != -1) && x.innerHTML.indexOf("Lightning") == -1) {
					swordRows[i].style.display = "";
				}
			}
		}
		// Include any light element great swords in search
		if(document.getElementById("CBgsword").checked == true) {
			let x, i = 0;
			let gswordTable = document.getElementById("gsword");
			let gswordRows = gswordTable.rows;
			
			for(i = 1; i < (gswordRows.length); i++) {
				x = gswordRows[i].getElementsByTagName("td")[7];
				if((x.innerHTML.indexOf("Element: Light") != -1 || x.innerHTML.indexOf(", Light") != -1) && x.innerHTML.indexOf("Lightning") == -1) {
					gswordRows[i].style.display = "";
				}
			}
		}
		// Include any light element katanas in search
		if(document.getElementById("CBkatana").checked == true) {
			let x, i = 0;
			let katanaTable = document.getElementById("katana");
			let katanaRows = katanaTable.rows;
			
			for(i = 1; i < (katanaRows.length); i++) {
				x = katanaRows[i].getElementsByTagName("td")[7];
				if((x.innerHTML.indexOf("Element: Light") != -1 || x.innerHTML.indexOf(", Light") != -1) && x.innerHTML.indexOf("Lightning") == -1) {
					katanaRows[i].style.display = "";
				}
			}
		}
		// Include any light element staves in search
		if(document.getElementById("CBstaff").checked == true) {
			let x, i = 0;
			let staffTable = document.getElementById("staff");
			let staffRows = staffTable.rows;
			
			for(i = 1; i < (staffRows.length); i++) {
				x = staffRows[i].getElementsByTagName("td")[7];
				if((x.innerHTML.indexOf("Element: Light") != -1 || x.innerHTML.indexOf(", Light") != -1) && x.innerHTML.indexOf("Lightning") == -1) {
					staffRows[i].style.display = "";
				}
			}
		}
		// Include any light element rods in search
		if(document.getElementById("CBrod").checked == true) {
			let x, i = 0;
			let rodTable = document.getElementById("rod");
			let rodRows = rodTable.rows;
			
			for(i = 1; i < (rodRows.length); i++) {
				x = rodRows[i].getElementsByTagName("td")[7];
				if((x.innerHTML.indexOf("Element: Light") != -1 || x.innerHTML.indexOf(", Light") != -1) && x.innerHTML.indexOf("Lightning") == -1) {
					rodRows[i].style.display = "";
				}
			}
		}
		// Include any light element bows in search
		if(document.getElementById("CBbow").checked == true) {
			let x, i = 0;
			let bowTable = document.getElementById("bow");
			let bowRows = bowTable.rows;
			
			for(i = 1; i < (bowRows.length); i++) {
				x = bowRows[i].getElementsByTagName("td")[7];
				if((x.innerHTML.indexOf("Element: Light") != -1 || x.innerHTML.indexOf(", Light") != -1) && x.innerHTML.indexOf("Lightning") == -1) {
					bowRows[i].style.display = "";
				}
			}
		}
		// Include any light element axes in search
		if(document.getElementById("CBaxe").checked == true) {
			let x, i = 0;
			let axeTable = document.getElementById("axe");
			let axeRows = axeTable.rows;
			
			for(i = 1; i < (axeRows.length); i++) {
				x = axeRows[i].getElementsByTagName("td")[7];
				if((x.innerHTML.indexOf("Element: Light") != -1 || x.innerHTML.indexOf(", Light") != -1) && x.innerHTML.indexOf("Lightning") == -1) {
					axeRows[i].style.display = "";
				}
			}
		}
		// Include any light element hammers in search
		if(document.getElementById("CBhammer").checked == true) {
			let x, i = 0;
			let hammerTable = document.getElementById("hammer");
			let hammerRows = hammerTable.rows;
			
			for(i = 1; i < (hammerRows.length); i++) {
				x = hammerRows[i].getElementsByTagName("td")[7];
				if((x.innerHTML.indexOf("Element: Light") != -1 || x.innerHTML.indexOf(", Light") != -1) && x.innerHTML.indexOf("Lightning") == -1) {
					hammerRows[i].style.display = "";
				}
			}
		}
		// Include any light element spears in search
		if(document.getElementById("CBspear").checked == true) {
			let x, i = 0;
			let spearTable = document.getElementById("spear");
			let spearRows = spearTable.rows;
			
			for(i = 1; i < (spearRows.length); i++) {
				x = spearRows[i].getElementsByTagName("td")[7];
				if((x.innerHTML.indexOf("Element: Light") != -1 || x.innerHTML.indexOf(", Light") != -1) && x.innerHTML.indexOf("Lightning") == -1) {
					spearRows[i].style.display = "";
				}
			}
		}
		// Include any light element harps in search
		if(document.getElementById("CBharp").checked == true) {
			let x, i = 0;
			let harpTable = document.getElementById("harp");
			let harpRows = harpTable.rows;
			
			for(i = 1; i < (harpRows.length); i++) {
				x = harpRows[i].getElementsByTagName("td")[7];
				if((x.innerHTML.indexOf("Element: Light") != -1 || x.innerHTML.indexOf(", Light") != -1) && x.innerHTML.indexOf("Lightning") == -1) {
					harpRows[i].style.display = "";
				}
			}
		}
		// Include any light element whips in search
		if(document.getElementById("CBwhip").checked == true) {
			let x, i = 0;
			let whipTable = document.getElementById("whip");
			let whipRows = whipTable.rows;
			
			for(i = 1; i < (whipRows.length); i++) {
				x = whipRows[i].getElementsByTagName("td")[7];
				if((x.innerHTML.indexOf("Element: Light") != -1 || x.innerHTML.indexOf(", Light") != -1) && x.innerHTML.indexOf("Lightning") == -1) {
					whipRows[i].style.display = "";
				}
			}
		}
		// Include any light element throwing weapons in search
		if(document.getElementById("CBtw").checked == true) {
			let x, i = 0;
			let twTable = document.getElementById("tw");
			let twRows = twTable.rows;
			
			for(i = 1; i < (twRows.length); i++) {
				x = twRows[i].getElementsByTagName("td")[7];
				if((x.innerHTML.indexOf("Element: Light") != -1 || x.innerHTML.indexOf(", Light") != -1) && x.innerHTML.indexOf("Lightning") == -1) {
					twRows[i].style.display = "";
				}
			}
		}
		// Include any light element guns in search
		if(document.getElementById("CBgun").checked == true) {
			let x, i = 0;
			let gunTable = document.getElementById("gun");
			let gunRows = gunTable.rows;
			
			for(i = 1; i < (gunRows.length); i++) {
				x = gunRows[i].getElementsByTagName("td")[7];
				if((x.innerHTML.indexOf("Element: Light") != -1 || x.innerHTML.indexOf(", Light") != -1) && x.innerHTML.indexOf("Lightning") == -1) {
					gunRows[i].style.display = "";
				}
			}
		}
		// Include any light element maces in search
		if(document.getElementById("CBmace").checked == true) {
			let x, i = 0;
			let maceTable = document.getElementById("mace");
			let maceRows = maceTable.rows;
			
			for(i = 1; i < (maceRows.length); i++) {
				x = maceRows[i].getElementsByTagName("td")[7];
				if((x.innerHTML.indexOf("Element: Light") != -1 || x.innerHTML.indexOf(", Light") != -1) && x.innerHTML.indexOf("Lightning") == -1) {
					maceRows[i].style.display = "";
				}
			}
		}
		// Include any light element fists in search
		if(document.getElementById("CBfist").checked == true) {
			let x, i = 0;
			let fistTable = document.getElementById("fist");
			let fistRows = fistTable.rows;
			
			for(i = 1; i < (fistRows.length); i++) {
				x = fistRows[i].getElementsByTagName("td")[7];
				if((x.innerHTML.indexOf("Element: Light") != -1 || x.innerHTML.indexOf(", Light") != -1) && x.innerHTML.indexOf("Lightning") == -1) {
					fistRows[i].style.display = "";
				}
			}
		}
	}
	else {
		document.getElementById("lighticon").src = darkImg;
		document.getElementById("CBlight").checked = false;
		
		if(document.getElementById("CBdagger").checked == true) {
			let x, i = 0;
			let daggerTable = document.getElementById("dagger");
			let daggerRows = daggerTable.rows;
			
			for(i = 1; i < (daggerRows.length); i++) {
				x = daggerRows[i].getElementsByTagName("td")[7];
				if((x.innerHTML.indexOf("Element: Light") != -1 || x.innerHTML.indexOf(", Light") != -1) && x.innerHTML.indexOf("Lightning") == -1) {
					daggerRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBsword").checked == true) {
			let x, i = 0;
			let swordTable = document.getElementById("sword");
			let swordRows = swordTable.rows;
			
			for(i = 1; i < (swordRows.length); i++) {
				x = swordRows[i].getElementsByTagName("td")[7];
				if((x.innerHTML.indexOf("Element: Light") != -1 || x.innerHTML.indexOf(", Light") != -1) && x.innerHTML.indexOf("Lightning") == -1) {
					swordRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBgsword").checked == true) {
			let x, i = 0;
			let gswordTable = document.getElementById("gsword");
			let gswordRows = gswordTable.rows;
			
			for(i = 1; i < (gswordRows.length); i++) {
				x = gswordRows[i].getElementsByTagName("td")[7];
				if((x.innerHTML.indexOf("Element: Light") != -1 || x.innerHTML.indexOf(", Light") != -1) && x.innerHTML.indexOf("Lightning") == -1) {
					gswordRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBkatana").checked == true) {
			let x, i = 0;
			let katanaTable = document.getElementById("katana");
			let katanaRows = katanaTable.rows;
			
			for(i = 1; i < (katanaRows.length); i++) {
				x = katanaRows[i].getElementsByTagName("td")[7];
				if((x.innerHTML.indexOf("Element: Light") != -1 || x.innerHTML.indexOf(", Light") != -1) && x.innerHTML.indexOf("Lightning") == -1) {
					katanaRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBstaff").checked == true) {
			let x, i = 0;
			let staffTable = document.getElementById("staff");
			let staffRows = staffTable.rows;
			
			for(i = 1; i < (staffRows.length); i++) {
				x = staffRows[i].getElementsByTagName("td")[7];
				if((x.innerHTML.indexOf("Element: Light") != -1 || x.innerHTML.indexOf(", Light") != -1) && x.innerHTML.indexOf("Lightning") == -1) {
					staffRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBrod").checked == true) {
			let x, i = 0;
			let rodTable = document.getElementById("rod");
			let rodRows = rodTable.rows;
			
			for(i = 1; i < (rodRows.length); i++) {
				x = rodRows[i].getElementsByTagName("td")[7];
				if((x.innerHTML.indexOf("Element: Light") != -1 || x.innerHTML.indexOf(", Light") != -1) && x.innerHTML.indexOf("Lightning") == -1) {
					rodRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBbow").checked == true) {
			let x, i = 0;
			let bowTable = document.getElementById("bow");
			let bowRows = bowTable.rows;
			
			for(i = 1; i < (bowRows.length); i++) {
				x = bowRows[i].getElementsByTagName("td")[7];
				if((x.innerHTML.indexOf("Element: Light") != -1 || x.innerHTML.indexOf(", Light") != -1) && x.innerHTML.indexOf("Lightning") == -1) {
					bowRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBaxe").checked == true) {
			let x, i = 0;
			let axeTable = document.getElementById("axe");
			let axeRows = axeTable.rows;
			
			for(i = 1; i < (axeRows.length); i++) {
				x = axeRows[i].getElementsByTagName("td")[7];
				if((x.innerHTML.indexOf("Element: Light") != -1 || x.innerHTML.indexOf(", Light") != -1) && x.innerHTML.indexOf("Lightning") == -1) {
					axeRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBhammer").checked == true) {
			let x, i = 0;
			let hammerTable = document.getElementById("hammer");
			let hammerRows = hammerTable.rows;
			
			for(i = 1; i < (hammerRows.length); i++) {
				x = hammerRows[i].getElementsByTagName("td")[7];
				if((x.innerHTML.indexOf("Element: Light") != -1 || x.innerHTML.indexOf(", Light") != -1) && x.innerHTML.indexOf("Lightning") == -1) {
					hammerRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBspear").checked == true) {
			let x, i = 0;
			let spearTable = document.getElementById("spear");
			let spearRows = spearTable.rows;
			
			for(i = 1; i < (spearRows.length); i++) {
				x = spearRows[i].getElementsByTagName("td")[7];
				if((x.innerHTML.indexOf("Element: Light") != -1 || x.innerHTML.indexOf(", Light") != -1) && x.innerHTML.indexOf("Lightning") == -1) {
					spearRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBharp").checked == true) {
			let x, i = 0;
			let harpTable = document.getElementById("harp");
			let harpRows = harpTable.rows;
			
			for(i = 1; i < (harpRows.length); i++) {
				x = harpRows[i].getElementsByTagName("td")[7];
				if((x.innerHTML.indexOf("Element: Light") != -1 || x.innerHTML.indexOf(", Light") != -1) && x.innerHTML.indexOf("Lightning") == -1) {
					harpRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBwhip").checked == true) {
			let x, i = 0;
			let whipTable = document.getElementById("whip");
			let whipRows = whipTable.rows;
			
			for(i = 1; i < (whipRows.length); i++) {
				x = whipRows[i].getElementsByTagName("td")[7];
				if((x.innerHTML.indexOf("Element: Light") != -1 || x.innerHTML.indexOf(", Light") != -1) && x.innerHTML.indexOf("Lightning") == -1) {
					whipRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBtw").checked == true) {
			let x, i = 0;
			let twTable = document.getElementById("tw");
			let twRows = twTable.rows;
			
			for(i = 1; i < (twRows.length); i++) {
				x = twRows[i].getElementsByTagName("td")[7];
				if((x.innerHTML.indexOf("Element: Light") != -1 || x.innerHTML.indexOf(", Light") != -1) && x.innerHTML.indexOf("Lightning") == -1) {
					twRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBgun").checked == true) {
			let x, i = 0;
			let gunTable = document.getElementById("gun");
			let gunRows = gunTable.rows;
			
			for(i = 1; i < (gunRows.length); i++) {
				x = gunRows[i].getElementsByTagName("td")[7];
				if((x.innerHTML.indexOf("Element: Light") != -1 || x.innerHTML.indexOf(", Light") != -1) && x.innerHTML.indexOf("Lightning") == -1) {
					gunRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBmace").checked == true) {
			let x, i = 0;
			let maceTable = document.getElementById("mace");
			let maceRows = maceTable.rows;
			
			for(i = 1; i < (maceRows.length); i++) {
				x = maceRows[i].getElementsByTagName("td")[7];
				if((x.innerHTML.indexOf("Element: Light") != -1 || x.innerHTML.indexOf(", Light") != -1) && x.innerHTML.indexOf("Lightning") == -1) {
					maceRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBfist").checked == true) {
			let x, i = 0;
			let fistTable = document.getElementById("fist");
			let fistRows = fistTable.rows;
			
			for(i = 1; i < (fistRows.length); i++) {
				x = fistRows[i].getElementsByTagName("td")[7];
				if((x.innerHTML.indexOf("Element: Light") != -1 || x.innerHTML.indexOf(", Light") != -1) && x.innerHTML.indexOf("Lightning") == -1) {
					fistRows[i].style.display = "none";
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
		
		// Include any dark element daggers in search
		if(document.getElementById("CBdagger").checked == true) {
			let x, i = 0;
			let daggerTable = document.getElementById("dagger");
			let daggerRows = daggerTable.rows;
			
			for(i = 1; i < (daggerRows.length); i++) {
				x = daggerRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Dark") != -1 || x.innerHTML.indexOf(", Dark") != -1) {
					daggerRows[i].style.display = "";
				}
			}
		}
		// Include any dark element swords in search
		if(document.getElementById("CBsword").checked == true) {
			let x, i = 0;
			let swordTable = document.getElementById("sword");
			let swordRows = swordTable.rows;
			
			for(i = 1; i < (swordRows.length); i++) {
				x = swordRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Dark") != -1 || x.innerHTML.indexOf(", Dark") != -1) {
					swordRows[i].style.display = "";
				}
			}
		}
		// Include any dark element great swords in search
		if(document.getElementById("CBgsword").checked == true) {
			let x, i = 0;
			let gswordTable = document.getElementById("gsword");
			let gswordRows = gswordTable.rows;
			
			for(i = 1; i < (gswordRows.length); i++) {
				x = gswordRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Dark") != -1 || x.innerHTML.indexOf(", Dark") != -1) {
					gswordRows[i].style.display = "";
				}
			}
		}
		// Include any dark element katanas in search
		if(document.getElementById("CBkatana").checked == true) {
			let x, i = 0;
			let katanaTable = document.getElementById("katana");
			let katanaRows = katanaTable.rows;
			
			for(i = 1; i < (katanaRows.length); i++) {
				x = katanaRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Dark") != -1 || x.innerHTML.indexOf(", Dark") != -1) {
					katanaRows[i].style.display = "";
				}
			}
		}
		// Include any dark element staves in search
		if(document.getElementById("CBstaff").checked == true) {
			let x, i = 0;
			let staffTable = document.getElementById("staff");
			let staffRows = staffTable.rows;
			
			for(i = 1; i < (staffRows.length); i++) {
				x = staffRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Dark") != -1 || x.innerHTML.indexOf(", Dark") != -1) {
					staffRows[i].style.display = "";
				}
			}
		}
		// Include any dark element rods in search
		if(document.getElementById("CBrod").checked == true) {
			let x, i = 0;
			let rodTable = document.getElementById("rod");
			let rodRows = rodTable.rows;
			
			for(i = 1; i < (rodRows.length); i++) {
				x = rodRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Dark") != -1 || x.innerHTML.indexOf(", Dark") != -1) {
					rodRows[i].style.display = "";
				}
			}
		}
		// Include any dark element bows in search
		if(document.getElementById("CBbow").checked == true) {
			let x, i = 0;
			let bowTable = document.getElementById("bow");
			let bowRows = bowTable.rows;
			
			for(i = 1; i < (bowRows.length); i++) {
				x = bowRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Dark") != -1 || x.innerHTML.indexOf(", Dark") != -1) {
					bowRows[i].style.display = "";
				}
			}
		}
		// Include any dark element axes in search
		if(document.getElementById("CBaxe").checked == true) {
			let x, i = 0;
			let axeTable = document.getElementById("axe");
			let axeRows = axeTable.rows;
			
			for(i = 1; i < (axeRows.length); i++) {
				x = axeRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Dark") != -1 || x.innerHTML.indexOf(", Dark") != -1) {
					axeRows[i].style.display = "";
				}
			}
		}
		// Include any dark element hammers in search
		if(document.getElementById("CBhammer").checked == true) {
			let x, i = 0;
			let hammerTable = document.getElementById("hammer");
			let hammerRows = hammerTable.rows;
			
			for(i = 1; i < (hammerRows.length); i++) {
				x = hammerRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Dark") != -1 || x.innerHTML.indexOf(", Dark") != -1) {
					hammerRows[i].style.display = "";
				}
			}
		}
		// Include any dark element spears in search
		if(document.getElementById("CBspear").checked == true) {
			let x, i = 0;
			let spearTable = document.getElementById("spear");
			let spearRows = spearTable.rows;
			
			for(i = 1; i < (spearRows.length); i++) {
				x = spearRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Dark") != -1 || x.innerHTML.indexOf(", Dark") != -1) {
					spearRows[i].style.display = "";
				}
			}
		}
		// Include any dark element harps in search
		if(document.getElementById("CBharp").checked == true) {
			let x, i = 0;
			let harpTable = document.getElementById("harp");
			let harpRows = harpTable.rows;
			
			for(i = 1; i < (harpRows.length); i++) {
				x = harpRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Dark") != -1 || x.innerHTML.indexOf(", Dark") != -1) {
					harpRows[i].style.display = "";
				}
			}
		}
		// Include any dark element whips in search
		if(document.getElementById("CBwhip").checked == true) {
			let x, i = 0;
			let whipTable = document.getElementById("whip");
			let whipRows = whipTable.rows;
			
			for(i = 1; i < (whipRows.length); i++) {
				x = whipRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Dark") != -1 || x.innerHTML.indexOf(", Dark") != -1) {
					whipRows[i].style.display = "";
				}
			}
		}
		// Include any dark element throwing weapons in search
		if(document.getElementById("CBtw").checked == true) {
			let x, i = 0;
			let twTable = document.getElementById("tw");
			let twRows = twTable.rows;
			
			for(i = 1; i < (twRows.length); i++) {
				x = twRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Dark") != -1 || x.innerHTML.indexOf(", Dark") != -1) {
					twRows[i].style.display = "";
				}
			}
		}
		// Include any dark element guns in search
		if(document.getElementById("CBgun").checked == true) {
			let x, i = 0;
			let gunTable = document.getElementById("gun");
			let gunRows = gunTable.rows;
			
			for(i = 1; i < (gunRows.length); i++) {
				x = gunRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Dark") != -1 || x.innerHTML.indexOf(", Dark") != -1) {
					gunRows[i].style.display = "";
				}
			}
		}
		// Include any dark element maces in search
		if(document.getElementById("CBmace").checked == true) {
			let x, i = 0;
			let maceTable = document.getElementById("mace");
			let maceRows = maceTable.rows;
			
			for(i = 1; i < (maceRows.length); i++) {
				x = maceRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Dark") != -1 || x.innerHTML.indexOf(", Dark") != -1) {
					maceRows[i].style.display = "";
				}
			}
		}
		// Include any dark element fists in search
		if(document.getElementById("CBfist").checked == true) {
			let x, i = 0;
			let fistTable = document.getElementById("fist");
			let fistRows = fistTable.rows;
			
			for(i = 1; i < (fistRows.length); i++) {
				x = fistRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Dark") != -1 || x.innerHTML.indexOf(", Dark") != -1) {
					fistRows[i].style.display = "";
				}
			}
		}
	}
	else {
		document.getElementById("darkicon").src = darkImg;
		document.getElementById("CBdark").checked = false;
		
		if(document.getElementById("CBdagger").checked == true) {
			let x, i = 0;
			let daggerTable = document.getElementById("dagger");
			let daggerRows = daggerTable.rows;
			
			for(i = 1; i < (daggerRows.length); i++) {
				x = daggerRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Dark") != -1 || x.innerHTML.indexOf(", Dark") != -1) {
					daggerRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBsword").checked == true) {
			let x, i = 0;
			let swordTable = document.getElementById("sword");
			let swordRows = swordTable.rows;
			
			for(i = 1; i < (swordRows.length); i++) {
				x = swordRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Dark") != -1 || x.innerHTML.indexOf(", Dark") != -1) {
					swordRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBgsword").checked == true) {
			let x, i = 0;
			let gswordTable = document.getElementById("gsword");
			let gswordRows = gswordTable.rows;
			
			for(i = 1; i < (gswordRows.length); i++) {
				x = gswordRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Dark") != -1 || x.innerHTML.indexOf(", Dark") != -1) {
					gswordRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBkatana").checked == true) {
			let x, i = 0;
			let katanaTable = document.getElementById("katana");
			let katanaRows = katanaTable.rows;
			
			for(i = 1; i < (katanaRows.length); i++) {
				x = katanaRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Dark") != -1 || x.innerHTML.indexOf(", Dark") != -1) {
					katanaRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBstaff").checked == true) {
			let x, i = 0;
			let staffTable = document.getElementById("staff");
			let staffRows = staffTable.rows;
			
			for(i = 1; i < (staffRows.length); i++) {
				x = staffRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Dark") != -1 || x.innerHTML.indexOf(", Dark") != -1) {
					staffRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBrod").checked == true) {
			let x, i = 0;
			let rodTable = document.getElementById("rod");
			let rodRows = rodTable.rows;
			
			for(i = 1; i < (rodRows.length); i++) {
				x = rodRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Dark") != -1 || x.innerHTML.indexOf(", Dark") != -1) {
					rodRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBbow").checked == true) {
			let x, i = 0;
			let bowTable = document.getElementById("bow");
			let bowRows = bowTable.rows;
			
			for(i = 1; i < (bowRows.length); i++) {
				x = bowRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Dark") != -1 || x.innerHTML.indexOf(", Dark") != -1) {
					bowRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBaxe").checked == true) {
			let x, i = 0;
			let axeTable = document.getElementById("axe");
			let axeRows = axeTable.rows;
			
			for(i = 1; i < (axeRows.length); i++) {
				x = axeRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Dark") != -1 || x.innerHTML.indexOf(", Dark") != -1) {
					axeRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBhammer").checked == true) {
			let x, i = 0;
			let hammerTable = document.getElementById("hammer");
			let hammerRows = hammerTable.rows;
			
			for(i = 1; i < (hammerRows.length); i++) {
				x = hammerRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Dark") != -1 || x.innerHTML.indexOf(", Dark") != -1) {
					hammerRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBspear").checked == true) {
			let x, i = 0;
			let spearTable = document.getElementById("spear");
			let spearRows = spearTable.rows;
			
			for(i = 1; i < (spearRows.length); i++) {
				x = spearRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Dark") != -1 || x.innerHTML.indexOf(", Dark") != -1) {
					spearRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBharp").checked == true) {
			let x, i = 0;
			let harpTable = document.getElementById("harp");
			let harpRows = harpTable.rows;
			
			for(i = 1; i < (harpRows.length); i++) {
				x = harpRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Dark") != -1 || x.innerHTML.indexOf(", Dark") != -1) {
					harpRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBwhip").checked == true) {
			let x, i = 0;
			let whipTable = document.getElementById("whip");
			let whipRows = whipTable.rows;
			
			for(i = 1; i < (whipRows.length); i++) {
				x = whipRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Dark") != -1 || x.innerHTML.indexOf(", Dark") != -1) {
					whipRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBtw").checked == true) {
			let x, i = 0;
			let twTable = document.getElementById("tw");
			let twRows = twTable.rows;
			
			for(i = 1; i < (twRows.length); i++) {
				x = twRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Dark") != -1 || x.innerHTML.indexOf(", Dark") != -1) {
					twRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBgun").checked == true) {
			let x, i = 0;
			let gunTable = document.getElementById("gun");
			let gunRows = gunTable.rows;
			
			for(i = 1; i < (gunRows.length); i++) {
				x = gunRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Dark") != -1 || x.innerHTML.indexOf(", Dark") != -1) {
					gunRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBmace").checked == true) {
			let x, i = 0;
			let maceTable = document.getElementById("mace");
			let maceRows = maceTable.rows;
			
			for(i = 1; i < (maceRows.length); i++) {
				x = maceRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Dark") != -1 || x.innerHTML.indexOf(", Dark") != -1) {
					maceRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBfist").checked == true) {
			let x, i = 0;
			let fistTable = document.getElementById("fist");
			let fistRows = fistTable.rows;
			
			for(i = 1; i < (fistRows.length); i++) {
				x = fistRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element: Dark") != -1 || x.innerHTML.indexOf(", Dark") != -1) {
					fistRows[i].style.display = "none";
				}
			}
		}
	}
});

let nonIcon = document.querySelector("img[id=nonicon]");
nonIcon.addEventListener('click', function() {
	let brightImg = "../../resources/non.png";
	let darkImg = "../../resources/darknon.png";
	if(document.getElementById("nonicon").getAttribute('src') == darkImg) {
		document.getElementById("nonicon").src = brightImg;
		document.getElementById("CBnon").checked = true;
		
		// Include any non-elemental daggers in search
		if(document.getElementById("CBdagger").checked == true) {
			let x, i = 0;
			let daggerTable = document.getElementById("dagger");
			let daggerRows = daggerTable.rows;
			
			for(i = 1; i < (daggerRows.length); i++) {
				x = daggerRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element:") == -1) {
					daggerRows[i].style.display = "";
				}
			}
		}
		// Include any non-elemental swords in search
		if(document.getElementById("CBsword").checked == true) {
			let x, i = 0;
			let swordTable = document.getElementById("sword");
			let swordRows = swordTable.rows;
			
			for(i = 1; i < (swordRows.length); i++) {
				x = swordRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element:") == -1) {
					swordRows[i].style.display = "";
				}
			}
		}
		// Include any non-elemental great swords in search
		if(document.getElementById("CBgsword").checked == true) {
			let x, i = 0;
			let gswordTable = document.getElementById("gsword");
			let gswordRows = gswordTable.rows;
			
			for(i = 1; i < (gswordRows.length); i++) {
				x = gswordRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element:") == -1) {
					gswordRows[i].style.display = "";
				}
			}
		}
		// Include any non-elemental katanas in search
		if(document.getElementById("CBkatana").checked == true) {
			let x, i = 0;
			let katanaTable = document.getElementById("katana");
			let katanaRows = katanaTable.rows;
			
			for(i = 1; i < (katanaRows.length); i++) {
				x = katanaRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element:") == -1) {
					katanaRows[i].style.display = "";
				}
			}
		}
		// Include any non-elemental staves in search
		if(document.getElementById("CBstaff").checked == true) {
			let x, i = 0;
			let staffTable = document.getElementById("staff");
			let staffRows = staffTable.rows;
			
			for(i = 1; i < (staffRows.length); i++) {
				x = staffRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element:") == -1) {
					staffRows[i].style.display = "";
				}
			}
		}
		// Include any non-elemental rods in search
		if(document.getElementById("CBrod").checked == true) {
			let x, i = 0;
			let rodTable = document.getElementById("rod");
			let rodRows = rodTable.rows;
			
			for(i = 1; i < (rodRows.length); i++) {
				x = rodRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element:") == -1) {
					rodRows[i].style.display = "";
				}
			}
		}
		// Include any non-elemental bows in search
		if(document.getElementById("CBbow").checked == true) {
			let x, i = 0;
			let bowTable = document.getElementById("bow");
			let bowRows = bowTable.rows;
			
			for(i = 1; i < (bowRows.length); i++) {
				x = bowRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element:") == -1) {
					bowRows[i].style.display = "";
				}
			}
		}
		// Include any non-elemental axes in search
		if(document.getElementById("CBaxe").checked == true) {
			let x, i = 0;
			let axeTable = document.getElementById("axe");
			let axeRows = axeTable.rows;
			
			for(i = 1; i < (axeRows.length); i++) {
				x = axeRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element:") == -1) {
					axeRows[i].style.display = "";
				}
			}
		}
		// Include any non-elemental hammers in search
		if(document.getElementById("CBhammer").checked == true) {
			let x, i = 0;
			let hammerTable = document.getElementById("hammer");
			let hammerRows = hammerTable.rows;
			
			for(i = 1; i < (hammerRows.length); i++) {
				x = hammerRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element:") == -1) {
					hammerRows[i].style.display = "";
				}
			}
		}
		// Include any non-elemental spears in search
		if(document.getElementById("CBspear").checked == true) {
			let x, i = 0;
			let spearTable = document.getElementById("spear");
			let spearRows = spearTable.rows;
			
			for(i = 1; i < (spearRows.length); i++) {
				x = spearRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element:") == -1) {
					spearRows[i].style.display = "";
				}
			}
		}
		// Include any non-elemental harps in search
		if(document.getElementById("CBharp").checked == true) {
			let x, i = 0;
			let harpTable = document.getElementById("harp");
			let harpRows = harpTable.rows;
			
			for(i = 1; i < (harpRows.length); i++) {
				x = harpRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element:") == -1) {
					harpRows[i].style.display = "";
				}
			}
		}
		// Include any non-elemental whips in search
		if(document.getElementById("CBwhip").checked == true) {
			let x, i = 0;
			let whipTable = document.getElementById("whip");
			let whipRows = whipTable.rows;
			
			for(i = 1; i < (whipRows.length); i++) {
				x = whipRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element:") == -1) {
					whipRows[i].style.display = "";
				}
			}
		}
		// Include any non-elemental throwing weapons in search
		if(document.getElementById("CBtw").checked == true) {
			let x, i = 0;
			let twTable = document.getElementById("tw");
			let twRows = twTable.rows;
			
			for(i = 1; i < (twRows.length); i++) {
				x = twRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element:") == -1) {
					twRows[i].style.display = "";
				}
			}
		}
		// Include any non-elemental guns in search
		if(document.getElementById("CBgun").checked == true) {
			let x, i = 0;
			let gunTable = document.getElementById("gun");
			let gunRows = gunTable.rows;
			
			for(i = 1; i < (gunRows.length); i++) {
				x = gunRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element:") == -1) {
					gunRows[i].style.display = "";
				}
			}
		}
		// Include any non-elemental maces in search
		if(document.getElementById("CBmace").checked == true) {
			let x, i = 0;
			let maceTable = document.getElementById("mace");
			let maceRows = maceTable.rows;
			
			for(i = 1; i < (maceRows.length); i++) {
				x = maceRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element:") == -1) {
					maceRows[i].style.display = "";
				}
			}
		}
		// Include any non-elemental fists in search
		if(document.getElementById("CBfist").checked == true) {
			let x, i = 0;
			let fistTable = document.getElementById("fist");
			let fistRows = fistTable.rows;
			
			for(i = 1; i < (fistRows.length); i++) {
				x = fistRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element:") == -1) {
					fistRows[i].style.display = "";
				}
			}
		}
	}
	else {
		document.getElementById("nonicon").src = darkImg;
		document.getElementById("CBnon").checked = false;
		
		if(document.getElementById("CBdagger").checked == true) {
			let x, i = 0;
			let daggerTable = document.getElementById("dagger");
			let daggerRows = daggerTable.rows;
			
			for(i = 1; i < (daggerRows.length); i++) {
				x = daggerRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element:") == -1) {
					daggerRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBsword").checked == true) {
			let x, i = 0;
			let swordTable = document.getElementById("sword");
			let swordRows = swordTable.rows;
			
			for(i = 1; i < (swordRows.length); i++) {
				x = swordRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element:") == -1) {
					swordRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBgsword").checked == true) {
			let x, i = 0;
			let gswordTable = document.getElementById("gsword");
			let gswordRows = gswordTable.rows;
			
			for(i = 1; i < (gswordRows.length); i++) {
				x = gswordRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element:") == -1) {
					gswordRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBkatana").checked == true) {
			let x, i = 0;
			let katanaTable = document.getElementById("katana");
			let katanaRows = katanaTable.rows;
			
			for(i = 1; i < (katanaRows.length); i++) {
				x = katanaRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element:") == -1) {
					katanaRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBstaff").checked == true) {
			let x, i = 0;
			let staffTable = document.getElementById("staff");
			let staffRows = staffTable.rows;
			
			for(i = 1; i < (staffRows.length); i++) {
				x = staffRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element:") == -1) {
					staffRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBrod").checked == true) {
			let x, i = 0;
			let rodTable = document.getElementById("rod");
			let rodRows = rodTable.rows;
			
			for(i = 1; i < (rodRows.length); i++) {
				x = rodRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element:") == -1) {
					rodRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBbow").checked == true) {
			let x, i = 0;
			let bowTable = document.getElementById("bow");
			let bowRows = bowTable.rows;
			
			for(i = 1; i < (bowRows.length); i++) {
				x = bowRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element:") == -1) {
					bowRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBaxe").checked == true) {
			let x, i = 0;
			let axeTable = document.getElementById("axe");
			let axeRows = axeTable.rows;
			
			for(i = 1; i < (axeRows.length); i++) {
				x = axeRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element:") == -1) {
					axeRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBhammer").checked == true) {
			let x, i = 0;
			let hammerTable = document.getElementById("hammer");
			let hammerRows = hammerTable.rows;
			
			for(i = 1; i < (hammerRows.length); i++) {
				x = hammerRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element:") == -1) {
					hammerRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBspear").checked == true) {
			let x, i = 0;
			let spearTable = document.getElementById("spear");
			let spearRows = spearTable.rows;
			
			for(i = 1; i < (spearRows.length); i++) {
				x = spearRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element:") == -1) {
					spearRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBharp").checked == true) {
			let x, i = 0;
			let harpTable = document.getElementById("harp");
			let harpRows = harpTable.rows;
			
			for(i = 1; i < (harpRows.length); i++) {
				x = harpRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element:") == -1) {
					harpRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBwhip").checked == true) {
			let x, i = 0;
			let whipTable = document.getElementById("whip");
			let whipRows = whipTable.rows;
			
			for(i = 1; i < (whipRows.length); i++) {
				x = whipRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element:") == -1) {
					whipRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBtw").checked == true) {
			let x, i = 0;
			let twTable = document.getElementById("tw");
			let twRows = twTable.rows;
			
			for(i = 1; i < (twRows.length); i++) {
				x = twRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element:") == -1) {
					twRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBgun").checked == true) {
			let x, i = 0;
			let gunTable = document.getElementById("gun");
			let gunRows = gunTable.rows;
			
			for(i = 1; i < (gunRows.length); i++) {
				x = gunRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element:") == -1) {
					gunRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBmace").checked == true) {
			let x, i = 0;
			let maceTable = document.getElementById("mace");
			let maceRows = maceTable.rows;
			
			for(i = 1; i < (maceRows.length); i++) {
				x = maceRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element:") == -1) {
					maceRows[i].style.display = "none";
				}
			}
		}
		if(document.getElementById("CBfist").checked == true) {
			let x, i = 0;
			let fistTable = document.getElementById("fist");
			let fistRows = fistTable.rows;
			
			for(i = 1; i < (fistRows.length); i++) {
				x = fistRows[i].getElementsByTagName("td")[7];
				if(x.innerHTML.indexOf("Element:") == -1) {
					fistRows[i].style.display = "none";
				}
			}
		}
	}
});

let ltFilter = document.querySelector("input[id=ignoreLT]");
ltFilter.addEventListener('click', function() {
	if(document.getElementById("ignoreLT").checked == true) {
		let i = 0;
		let daggerTable = document.getElementById("dagger");
		let daggerRows = daggerTable.rows;
		
		for(i = 1; i < (daggerRows.length); i++) {
			let lt = daggerRows[i].getElementsByTagName("td")[10];
			
			if(lt.innerHTML == "false" && daggerRows[i].style.display == "") {
				daggerRows[i].style.display = "";
			}
			else if(lt.innerHTML == "true" && daggerRows[i].style.display == ""){
				daggerRows[i].style.display = "none";
			}
			
		}
		
		let swordTable = document.getElementById("sword");
		let swordRows = swordTable.rows;
		
		for(i = 1; i < (swordRows.length); i++) {
			let lt = swordRows[i].getElementsByTagName("td")[10];
			
			if(lt.innerHTML == "false" && swordRows[i].style.display == "") {
				swordRows[i].style.display = "";
			}
			else if(lt.innerHTML == "true" && swordRows[i].style.display == ""){
				swordRows[i].style.display = "none";
			}
		}
		
		let gswordTable = document.getElementById("gsword");
		let gswordRows = gswordTable.rows;
		
		for(i = 1; i < (gswordRows.length); i++) {
			let lt = gswordRows[i].getElementsByTagName("td")[10];
			
			if(lt.innerHTML == "false" && gswordRows[i].style.display == "") {
				gswordRows[i].style.display = "";
			}
			else if(lt.innerHTML == "true" && gswordRows[i].style.display == ""){
				gswordRows[i].style.display = "none";
			}
		}
		
		let katanaTable = document.getElementById("katana");
		let katanaRows = katanaTable.rows;
		
		for(i = 1; i < (katanaRows.length); i++) {
			let lt = katanaRows[i].getElementsByTagName("td")[10];
			
			if(lt.innerHTML == "false" && katanaRows[i].style.display == "") {
				katanaRows[i].style.display = "";
			}
			else if(lt.innerHTML == "true" && katanaRows[i].style.display == ""){
				katanaRows[i].style.display = "none";
			}
		}	
		
		let staffTable = document.getElementById("staff");
		let staffRows = staffTable.rows;
		
		for(i = 1; i < (staffRows.length); i++) {
			let lt = staffRows[i].getElementsByTagName("td")[10];
			
			if(lt.innerHTML == "false" && staffRows[i].style.display == "") {
				staffRows[i].style.display = "";
			}
			else if(lt.innerHTML == "true" && staffRows[i].style.display == ""){
				staffRows[i].style.display = "none";
			}
		}
		
		let rodTable = document.getElementById("rod");
		let rodRows = rodTable.rows;
		
		for(i = 1; i < (rodRows.length); i++) {
			let lt = rodRows[i].getElementsByTagName("td")[10];
			
			if(lt.innerHTML == "false" && rodRows[i].style.display == "") {
				rodRows[i].style.display = "";
			}
			else if(lt.innerHTML == "true" && rodRows[i].style.display == ""){
				rodRows[i].style.display = "none";
			}
		}
		
		let bowTable = document.getElementById("bow");
		let bowRows = bowTable.rows;
		
		for(i = 1; i < (bowRows.length); i++) {
			let lt = bowRows[i].getElementsByTagName("td")[10];
			
			if(lt.innerHTML == "false" && bowRows[i].style.display == "") {
				bowRows[i].style.display = "";
			}
			else if(lt.innerHTML == "true" && bowRows[i].style.display == ""){
				bowRows[i].style.display = "none";
			}
		}
		
		let axeTable = document.getElementById("axe");
		let axeRows = axeTable.rows;
		
		for(i = 1; i < (axeRows.length); i++) {
			let lt = axeRows[i].getElementsByTagName("td")[10];
			
			if(lt.innerHTML == "false" && axeRows[i].style.display == "") {
				axeRows[i].style.display = "";
			}
			else if(lt.innerHTML == "true" && axeRows[i].style.display == ""){
				axeRows[i].style.display = "none";
			}
		}
		
		let hammerTable = document.getElementById("hammer");
		let hammerRows = hammerTable.rows;
		
		for(i = 1; i < (hammerRows.length); i++) {
			let lt = hammerRows[i].getElementsByTagName("td")[10];
			
			if(lt.innerHTML == "false" && hammerRows[i].style.display == "") {
				hammerRows[i].style.display = "";
			}
			else if(lt.innerHTML == "true" && hammerRows[i].style.display == ""){
				hammerRows[i].style.display = "none";
			}
		}
		
		let spearTable = document.getElementById("spear");
		let spearRows = spearTable.rows;
		
		for(i = 1; i < (spearRows.length); i++) {
			let lt = spearRows[i].getElementsByTagName("td")[10];
			
			if(lt.innerHTML == "false" && spearRows[i].style.display == "") {
				spearRows[i].style.display = "";
			}
			else if(lt.innerHTML == "true" && spearRows[i].style.display == ""){
				spearRows[i].style.display = "none";
			}
		}
		
		let harpTable = document.getElementById("harp");
		let harpRows = harpTable.rows;
		
		for(i = 1; i < (harpRows.length); i++) {
			let lt = harpRows[i].getElementsByTagName("td")[10];
			
			if(lt.innerHTML == "false" && harpRows[i].style.display == "") {
				harpRows[i].style.display = "";
			}
			else if(lt.innerHTML == "true" && harpRows[i].style.display == ""){
				harpRows[i].style.display = "none";
			}
		}
		
		let whipTable = document.getElementById("whip");
		let whipRows = whipTable.rows;
		
		for(i = 1; i < (whipRows.length); i++) {
			let lt = whipRows[i].getElementsByTagName("td")[10];
			
			if(lt.innerHTML == "false" && whipRows[i].style.display == "") {
				whipRows[i].style.display = "";
			}
			else if(lt.innerHTML == "true" && whipRows[i].style.display == ""){
				whipRows[i].style.display = "none";
			}
		}
		
		let twTable = document.getElementById("tw");
		let twRows = twTable.rows;
		
		for(i = 1; i < (twRows.length); i++) {
			let lt = twRows[i].getElementsByTagName("td")[10];
			
			if(lt.innerHTML == "false" && twRows[i].style.display == "") {
				twRows[i].style.display = "";
			}
			else if(lt.innerHTML == "true" && twRows[i].style.display == ""){
				twRows[i].style.display = "none";
			}
		}
		
		let gunTable = document.getElementById("gun");
		let gunRows = gunTable.rows;
		
		for(i = 1; i < (gunRows.length); i++) {
			let lt = gunRows[i].getElementsByTagName("td")[10];
			
			if(lt.innerHTML == "false" && gunRows[i].style.display == "") {
				gunRows[i].style.display = "";
			}
			else if(lt.innerHTML == "true" && gunRows[i].style.display == ""){
				gunRows[i].style.display = "none";
			}
		}
		
		let maceTable = document.getElementById("mace");
		let maceRows = maceTable.rows;
		
		for(i = 1; i < (maceRows.length); i++) {
			let lt = maceRows[i].getElementsByTagName("td")[10];
			
			if(lt.innerHTML == "false" && maceRows[i].style.display == "") {
				maceRows[i].style.display = "";
			}
			else if(lt.innerHTML == "true" && maceRows[i].style.display == ""){
				maceRows[i].style.display = "none";
			}
		}
		
		let fistTable = document.getElementById("fist");
		let fistRows = fistTable.rows;
		
		for(i = 1; i < (fistRows.length); i++) {
			let lt = fistRows[i].getElementsByTagName("td")[10];
			
			if(lt.innerHTML == "false" && fistRows[i].style.display == "") {
				fistRows[i].style.display = "";
			}
			else if(lt.innerHTML == "true" && fistRows[i].style.display == ""){
				fistRows[i].style.display = "none";
			}
		}
	}
	else {
		let i = 0;
		let daggerTable = document.getElementById("dagger");
		let daggerRows = daggerTable.rows;
		
		for(i = 1; i < (daggerRows.length); i++) {
			let dagger = daggerRows[i].getElementsByTagName("td")[7];
			let lt = daggerRows[i].getElementsByTagName("td")[10];
			
			if(lt.innerHTML == "true" && daggerRows[i].style.display == "none" &&
					(dagger.innerHTML.indexOf("Element: Fire") != -1 ||
					dagger.innerHTML.indexOf(", Fire") != -1) &&
					document.getElementById("CBfire").checked == true &&
					document.getElementById("CBdagger").checked == true) {
				daggerRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && daggerRows[i].style.display == "none" &&
					(dagger.innerHTML.indexOf("Element: Ice") != -1 ||
					dagger.innerHTML.indexOf(", Ice") != -1) &&
					document.getElementById("CBice").checked == true &&
					document.getElementById("CBdagger").checked == true) {
				daggerRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && daggerRows[i].style.display == "none" &&
					(dagger.innerHTML.indexOf("Element: Lightning") != -1 ||
					dagger.innerHTML.indexOf(", Lightning") != -1) &&
					document.getElementById("CBlightning").checked == true &&
					document.getElementById("CBdagger").checked == true) {
				daggerRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && daggerRows[i].style.display == "none" &&
					(dagger.innerHTML.indexOf("Element: Water") != -1 ||
					dagger.innerHTML.indexOf(", Water") != -1) &&
					document.getElementById("CBwater").checked == true &&
					document.getElementById("CBdagger").checked == true) {
				daggerRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && daggerRows[i].style.display == "none" &&
					(dagger.innerHTML.indexOf("Element: Wind") != -1 ||
					dagger.innerHTML.indexOf(", Wind") != -1) &&
					document.getElementById("CBwind").checked == true &&
					document.getElementById("CBdagger").checked == true) {
				daggerRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && daggerRows[i].style.display == "none" &&
					(dagger.innerHTML.indexOf("Element: Earth") != -1 ||
					dagger.innerHTML.indexOf(", Earth") != -1) &&
					document.getElementById("CBearth").checked == true &&
					document.getElementById("CBdagger").checked == true) {
				daggerRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && daggerRows[i].style.display == "none" &&
					(dagger.innerHTML.indexOf("Element: Light") != -1 ||
					dagger.innerHTML.indexOf(", Light") != -1) &&
					document.getElementById("CBlight").checked == true &&
					document.getElementById("CBdagger").checked == true) {
				daggerRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && daggerRows[i].style.display == "none" &&
					(dagger.innerHTML.indexOf("Element: Dark") != -1 ||
					dagger.innerHTML.indexOf(", Dark") != -1) &&
					document.getElementById("CBdark").checked == true &&
					document.getElementById("CBdagger").checked == true) {
				daggerRows[i].style.display = "";
			}
		}
		
		let swordTable = document.getElementById("sword");
		let swordRows = swordTable.rows;
		
		for(i = 1; i < (swordRows.length); i++) {
			let sword = swordRows[i].getElementsByTagName("td")[7];
			let lt = swordRows[i].getElementsByTagName("td")[10];
			
			if(lt.innerHTML == "true" && swordRows[i].style.display == "none" &&
					(sword.innerHTML.indexOf("Element: Fire") != -1 ||
					sword.innerHTML.indexOf(", Fire") != -1) &&
					document.getElementById("CBfire").checked == true &&
					document.getElementById("CBsword").checked == true) {
				swordRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && swordRows[i].style.display == "none" &&
					(sword.innerHTML.indexOf("Element: Ice") != -1 ||
					sword.innerHTML.indexOf(", Ice") != -1) &&
					document.getElementById("CBice").checked == true &&
					document.getElementById("CBsword").checked == true) {
				swordRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && swordRows[i].style.display == "none" &&
					(sword.innerHTML.indexOf("Element: Lightning") != -1 ||
					sword.innerHTML.indexOf(", Lightning") != -1) &&
					document.getElementById("CBlightning").checked == true &&
					document.getElementById("CBsword").checked == true) {
				swordRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && swordRows[i].style.display == "none" &&
					(sword.innerHTML.indexOf("Element: Water") != -1 ||
					sword.innerHTML.indexOf(", Water") != -1) &&
					document.getElementById("CBwater").checked == true &&
					document.getElementById("CBsword").checked == true) {
				swordRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && swordRows[i].style.display == "none" &&
					(sword.innerHTML.indexOf("Element: Wind") != -1 ||
					sword.innerHTML.indexOf(", Wind") != -1) &&
					document.getElementById("CBwind").checked == true &&
					document.getElementById("CBsword").checked == true) {
				swordRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && swordRows[i].style.display == "none" &&
					(sword.innerHTML.indexOf("Element: Earth") != -1 ||
					sword.innerHTML.indexOf(", Earth") != -1) &&
					document.getElementById("CBearth").checked == true &&
					document.getElementById("CBsword").checked == true) {
				swordRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && swordRows[i].style.display == "none" &&
					(sword.innerHTML.indexOf("Element: Light") != -1 ||
					sword.innerHTML.indexOf(", Light") != -1) &&
					document.getElementById("CBlight").checked == true &&
					document.getElementById("CBsword").checked == true) {
				swordRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && swordRows[i].style.display == "none" &&
					(sword.innerHTML.indexOf("Element: Dark") != -1 ||
					sword.innerHTML.indexOf(", Dark") != -1) &&
					document.getElementById("CBdark").checked == true &&
					document.getElementById("CBsword").checked == true) {
				swordRows[i].style.display = "";
			}
		}
		
		let gswordTable = document.getElementById("gsword");
		let gswordRows = gswordTable.rows;
		
		for(i = 1; i < (gswordRows.length); i++) {
			let gsword = gswordRows[i].getElementsByTagName("td")[7];
			let lt = gswordRows[i].getElementsByTagName("td")[10];
			
			if(lt.innerHTML == "true" && gswordRows[i].style.display == "none" &&
					(gsword.innerHTML.indexOf("Element: Fire") != -1 ||
					gsword.innerHTML.indexOf(", Fire") != -1) &&
					document.getElementById("CBfire").checked == true &&
					document.getElementById("CBgsword").checked == true) {
				gswordRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && gswordRows[i].style.display == "none" &&
					(gsword.innerHTML.indexOf("Element: Ice") != -1 ||
					gsword.innerHTML.indexOf(", Ice") != -1) &&
					document.getElementById("CBice").checked == true &&
					document.getElementById("CBgsword").checked == true) {
				gswordRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && gswordRows[i].style.display == "none" &&
					(gsword.innerHTML.indexOf("Element: Lightning") != -1 ||
					gsword.innerHTML.indexOf(", Lightning") != -1) &&
					document.getElementById("CBlightning").checked == true &&
					document.getElementById("CBgsword").checked == true) {
				gswordRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && gswordRows[i].style.display == "none" &&
					(gsword.innerHTML.indexOf("Element: Water") != -1 ||
					gsword.innerHTML.indexOf(", Water") != -1) &&
					document.getElementById("CBwater").checked == true &&
					document.getElementById("CBgsword").checked == true) {
				gswordRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && gswordRows[i].style.display == "none" &&
					(gsword.innerHTML.indexOf("Element: Wind") != -1 ||
					gsword.innerHTML.indexOf(", Wind") != -1) &&
					document.getElementById("CBwind").checked == true &&
					document.getElementById("CBgsword").checked == true) {
				gswordRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && gswordRows[i].style.display == "none" &&
					(gsword.innerHTML.indexOf("Element: Earth") != -1 ||
					gsword.innerHTML.indexOf(", Earth") != -1) &&
					document.getElementById("CBearth").checked == true &&
					document.getElementById("CBgsword").checked == true) {
				gswordRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && gswordRows[i].style.display == "none" &&
					(gsword.innerHTML.indexOf("Element: Light") != -1 ||
					gsword.innerHTML.indexOf(", Light") != -1) &&
					document.getElementById("CBlight").checked == true &&
					document.getElementById("CBgsword").checked == true) {
				gswordRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && gswordRows[i].style.display == "none" &&
					(gsword.innerHTML.indexOf("Element: Dark") != -1 ||
					gsword.innerHTML.indexOf(", Dark") != -1) &&
					document.getElementById("CBdark").checked == true &&
					document.getElementById("CBgsword").checked == true) {
				gswordRows[i].style.display = "";
			}
		}	
		
		let katanaTable = document.getElementById("katana");
		let katanaRows = katanaTable.rows;
		
		for(i = 1; i < (katanaRows.length); i++) {
			let katana = katanaRows[i].getElementsByTagName("td")[7];
			let lt = katanaRows[i].getElementsByTagName("td")[10];
			
			if(lt.innerHTML == "true" && katanaRows[i].style.display == "none" &&
					(katana.innerHTML.indexOf("Element: Fire") != -1 ||
					katana.innerHTML.indexOf(", Fire") != -1) &&
					document.getElementById("CBfire").checked == true &&
					document.getElementById("CBkatana").checked == true) {
				katanaRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && katanaRows[i].style.display == "none" &&
					(katana.innerHTML.indexOf("Element: Ice") != -1 ||
					katana.innerHTML.indexOf(", Ice") != -1) &&
					document.getElementById("CBice").checked == true &&
					document.getElementById("CBkatana").checked == true) {
				katanaRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && katanaRows[i].style.display == "none" &&
					(katana.innerHTML.indexOf("Element: Lightning") != -1 ||
					katana.innerHTML.indexOf(", Lightning") != -1) &&
					document.getElementById("CBlightning").checked == true &&
					document.getElementById("CBkatana").checked == true) {
				katanaRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && katanaRows[i].style.display == "none" &&
					(katana.innerHTML.indexOf("Element: Water") != -1 ||
					katana.innerHTML.indexOf(", Water") != -1) &&
					document.getElementById("CBwater").checked == true &&
					document.getElementById("CBkatana").checked == true) {
				katanaRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && katanaRows[i].style.display == "none" &&
					(katana.innerHTML.indexOf("Element: Wind") != -1 ||
					katana.innerHTML.indexOf(", Wind") != -1) &&
					document.getElementById("CBwind").checked == true &&
					document.getElementById("CBkatana").checked == true) {
				katanaRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && katanaRows[i].style.display == "none" &&
					(katana.innerHTML.indexOf("Element: Earth") != -1 ||
					katana.innerHTML.indexOf(", Earth") != -1) &&
					document.getElementById("CBearth").checked == true &&
					document.getElementById("CBkatana").checked == true) {
				katanaRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && katanaRows[i].style.display == "none" &&
					(katana.innerHTML.indexOf("Element: Light") != -1 ||
					katana.innerHTML.indexOf(", Light") != -1) &&
					document.getElementById("CBlight").checked == true &&
					document.getElementById("CBkatana").checked == true) {
				katanaRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && katanaRows[i].style.display == "none" &&
					(katana.innerHTML.indexOf("Element: Dark") != -1 ||
					katana.innerHTML.indexOf(", Dark") != -1) &&
					document.getElementById("CBdark").checked == true &&
					document.getElementById("CBkatana").checked == true) {
				katanaRows[i].style.display = "";
			}
		}
		
		let staffTable = document.getElementById("staff");
		let staffRows = staffTable.rows;
		
		for(i = 1; i < (staffRows.length); i++) {
			let staff = staffRows[i].getElementsByTagName("td")[7];
			let lt = staffRows[i].getElementsByTagName("td")[10];
			
			if(lt.innerHTML == "true" && staffRows[i].style.display == "none" &&
					(staff.innerHTML.indexOf("Element: Fire") != -1 ||
					staff.innerHTML.indexOf(", Fire") != -1) &&
					document.getElementById("CBfire").checked == true &&
					document.getElementById("CBstaff").checked == true) {
				staffRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && staffRows[i].style.display == "none" &&
					(staff.innerHTML.indexOf("Element: Ice") != -1 ||
					staff.innerHTML.indexOf(", Ice") != -1) &&
					document.getElementById("CBice").checked == true &&
					document.getElementById("CBstaff").checked == true) {
				staffRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && staffRows[i].style.display == "none" &&
					(staff.innerHTML.indexOf("Element: Lightning") != -1 ||
					staff.innerHTML.indexOf(", Lightning") != -1) &&
					document.getElementById("CBlightning").checked == true &&
					document.getElementById("CBstaff").checked == true) {
				staffRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && staffRows[i].style.display == "none" &&
					(staff.innerHTML.indexOf("Element: Water") != -1 ||
					staff.innerHTML.indexOf(", Water") != -1) &&
					document.getElementById("CBwater").checked == true &&
					document.getElementById("CBstaff").checked == true) {
				staffRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && staffRows[i].style.display == "none" &&
					(staff.innerHTML.indexOf("Element: Wind") != -1 ||
					staff.innerHTML.indexOf(", Wind") != -1) &&
					document.getElementById("CBwind").checked == true &&
					document.getElementById("CBstaff").checked == true) {
				staffRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && staffRows[i].style.display == "none" &&
					(staff.innerHTML.indexOf("Element: Earth") != -1 ||
					staff.innerHTML.indexOf(", Earth") != -1) &&
					document.getElementById("CBearth").checked == true &&
					document.getElementById("CBstaff").checked == true) {
				staffRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && staffRows[i].style.display == "none" &&
					(staff.innerHTML.indexOf("Element: Light") != -1 ||
					staff.innerHTML.indexOf(", Light") != -1) &&
					document.getElementById("CBlight").checked == true &&
					document.getElementById("CBstaff").checked == true) {
				staffRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && staffRows[i].style.display == "none" &&
					(staff.innerHTML.indexOf("Element: Dark") != -1 ||
					staff.innerHTML.indexOf(", Dark") != -1) &&
					document.getElementById("CBdark").checked == true &&
					document.getElementById("CBstaff").checked == true) {
				staffRows[i].style.display = "";
			}
		}
		
		let rodTable = document.getElementById("rod");
		let rodRows = rodTable.rows;
		
		for(i = 1; i < (rodRows.length); i++) {
			let rod = rodRows[i].getElementsByTagName("td")[7];
			let lt = rodRows[i].getElementsByTagName("td")[10];
			
			if(lt.innerHTML == "true" && rodRows[i].style.display == "none" &&
					(rod.innerHTML.indexOf("Element: Fire") != -1 ||
					rod.innerHTML.indexOf(", Fire") != -1) &&
					document.getElementById("CBfire").checked == true &&
					document.getElementById("CBrod").checked == true) {
				rodRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && rodRows[i].style.display == "none" &&
					(rod.innerHTML.indexOf("Element: Ice") != -1 ||
					rod.innerHTML.indexOf(", Ice") != -1) &&
					document.getElementById("CBice").checked == true &&
					document.getElementById("CBrod").checked == true) {
				rodRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && rodRows[i].style.display == "none" &&
					(rod.innerHTML.indexOf("Element: Lightning") != -1 ||
					rod.innerHTML.indexOf(", Lightning") != -1) &&
					document.getElementById("CBlightning").checked == true &&
					document.getElementById("CBrod").checked == true) {
				rodRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && rodRows[i].style.display == "none" &&
					(rod.innerHTML.indexOf("Element: Water") != -1 ||
					rod.innerHTML.indexOf(", Water") != -1) &&
					document.getElementById("CBwater").checked == true &&
					document.getElementById("CBrod").checked == true) {
				rodRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && rodRows[i].style.display == "none" &&
					(rod.innerHTML.indexOf("Element: Wind") != -1 ||
					rod.innerHTML.indexOf(", Wind") != -1) &&
					document.getElementById("CBwind").checked == true &&
					document.getElementById("CBrod").checked == true) {
				rodRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && rodRows[i].style.display == "none" &&
					(rod.innerHTML.indexOf("Element: Earth") != -1 ||
					rod.innerHTML.indexOf(", Earth") != -1) &&
					document.getElementById("CBearth").checked == true &&
					document.getElementById("CBrod").checked == true) {
				rodRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && rodRows[i].style.display == "none" &&
					(rod.innerHTML.indexOf("Element: Light") != -1 ||
					rod.innerHTML.indexOf(", Light") != -1) &&
					document.getElementById("CBlight").checked == true &&
					document.getElementById("CBrod").checked == true) {
				rodRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && rodRows[i].style.display == "none" &&
					(rod.innerHTML.indexOf("Element: Dark") != -1 ||
					rod.innerHTML.indexOf(", Dark") != -1) &&
					document.getElementById("CBdark").checked == true &&
					document.getElementById("CBrod").checked == true) {
				rodRows[i].style.display = "";
			}
		}
		
		let bowTable = document.getElementById("bow");
		let bowRows = bowTable.rows;
		
		for(i = 1; i < (bowRows.length); i++) {
			let bow = bowRows[i].getElementsByTagName("td")[7];
			let lt = bowRows[i].getElementsByTagName("td")[10];
			
			if(lt.innerHTML == "true" && bowRows[i].style.display == "none" &&
					(bow.innerHTML.indexOf("Element: Fire") != -1 ||
					bow.innerHTML.indexOf(", Fire") != -1) &&
					document.getElementById("CBfire").checked == true &&
					document.getElementById("CBbow").checked == true) {
				bowRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && bowRows[i].style.display == "none" &&
					(bow.innerHTML.indexOf("Element: Ice") != -1 ||
					bow.innerHTML.indexOf(", Ice") != -1) &&
					document.getElementById("CBice").checked == true &&
					document.getElementById("CBbow").checked == true) {
				bowRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && bowRows[i].style.display == "none" &&
					(bow.innerHTML.indexOf("Element: Lightning") != -1 ||
					bow.innerHTML.indexOf(", Lightning") != -1) &&
					document.getElementById("CBlightning").checked == true &&
					document.getElementById("CBbow").checked == true) {
				bowRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && bowRows[i].style.display == "none" &&
					(bow.innerHTML.indexOf("Element: Water") != -1 ||
					bow.innerHTML.indexOf(", Water") != -1) &&
					document.getElementById("CBwater").checked == true &&
					document.getElementById("CBbow").checked == true) {
				bowRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && bowRows[i].style.display == "none" &&
					(bow.innerHTML.indexOf("Element: Wind") != -1 ||
					bow.innerHTML.indexOf(", Wind") != -1) &&
					document.getElementById("CBwind").checked == true &&
					document.getElementById("CBbow").checked == true) {
				bowRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && bowRows[i].style.display == "none" &&
					(bow.innerHTML.indexOf("Element: Earth") != -1 ||
					bow.innerHTML.indexOf(", Earth") != -1) &&
					document.getElementById("CBearth").checked == true &&
					document.getElementById("CBbow").checked == true) {
				bowRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && bowRows[i].style.display == "none" &&
					(bow.innerHTML.indexOf("Element: Light") != -1 ||
					bow.innerHTML.indexOf(", Light") != -1) &&
					document.getElementById("CBlight").checked == true &&
					document.getElementById("CBbow").checked == true) {
				bowRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && bowRows[i].style.display == "none" &&
					(bow.innerHTML.indexOf("Element: Dark") != -1 ||
					bow.innerHTML.indexOf(", Dark") != -1) &&
					document.getElementById("CBdark").checked == true &&
					document.getElementById("CBbow").checked == true) {
				bowRows[i].style.display = "";
			}
		}
		
		let axeTable = document.getElementById("axe");
		let axeRows = axeTable.rows;
		
		for(i = 1; i < (axeRows.length); i++) {
			let axe = axeRows[i].getElementsByTagName("td")[7];
			let lt = axeRows[i].getElementsByTagName("td")[10];
			
			if(lt.innerHTML == "true" && axeRows[i].style.display == "none" &&
					(axe.innerHTML.indexOf("Element: Fire") != -1 ||
					axe.innerHTML.indexOf(", Fire") != -1) &&
					document.getElementById("CBfire").checked == true &&
					document.getElementById("CBaxe").checked == true) {
				axeRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && axeRows[i].style.display == "none" &&
					(axe.innerHTML.indexOf("Element: Ice") != -1 ||
					axe.innerHTML.indexOf(", Ice") != -1) &&
					document.getElementById("CBice").checked == true &&
					document.getElementById("CBaxe").checked == true) {
				axeRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && axeRows[i].style.display == "none" &&
					(axe.innerHTML.indexOf("Element: Lightning") != -1 ||
					axe.innerHTML.indexOf(", Lightning") != -1) &&
					document.getElementById("CBlightning").checked == true &&
					document.getElementById("CBaxe").checked == true) {
				axeRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && axeRows[i].style.display == "none" &&
					(axe.innerHTML.indexOf("Element: Water") != -1 ||
					axe.innerHTML.indexOf(", Water") != -1) &&
					document.getElementById("CBwater").checked == true &&
					document.getElementById("CBaxe").checked == true) {
				axeRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && axeRows[i].style.display == "none" &&
					(axe.innerHTML.indexOf("Element: Wind") != -1 ||
					axe.innerHTML.indexOf(", Wind") != -1) &&
					document.getElementById("CBwind").checked == true &&
					document.getElementById("CBaxe").checked == true) {
				axeRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && axeRows[i].style.display == "none" &&
					(axe.innerHTML.indexOf("Element: Earth") != -1 ||
					axe.innerHTML.indexOf(", Earth") != -1) &&
					document.getElementById("CBearth").checked == true &&
					document.getElementById("CBaxe").checked == true) {
				axeRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && axeRows[i].style.display == "none" &&
					(axe.innerHTML.indexOf("Element: Light") != -1 ||
					axe.innerHTML.indexOf(", Light") != -1) &&
					document.getElementById("CBlight").checked == true &&
					document.getElementById("CBaxe").checked == true) {
				axeRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && axeRows[i].style.display == "none" &&
					(axe.innerHTML.indexOf("Element: Dark") != -1 ||
					axe.innerHTML.indexOf(", Dark") != -1) &&
					document.getElementById("CBdark").checked == true &&
					document.getElementById("CBaxe").checked == true) {
				axeRows[i].style.display = "";
			}
		}
		
		let hammerTable = document.getElementById("hammer");
		let hammerRows = hammerTable.rows;
		
		for(i = 1; i < (hammerRows.length); i++) {
			let hammer = hammerRows[i].getElementsByTagName("td")[7];
			let lt = hammerRows[i].getElementsByTagName("td")[10];
			
			if(lt.innerHTML == "true" && hammerRows[i].style.display == "none" &&
					(hammer.innerHTML.indexOf("Element: Fire") != -1 ||
					hammer.innerHTML.indexOf(", Fire") != -1) &&
					document.getElementById("CBfire").checked == true &&
					document.getElementById("CBhammer").checked == true) {
				hammerRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && hammerRows[i].style.display == "none" &&
					(hammer.innerHTML.indexOf("Element: Ice") != -1 ||
					hammer.innerHTML.indexOf(", Ice") != -1) &&
					document.getElementById("CBice").checked == true &&
					document.getElementById("CBhammer").checked == true) {
				hammerRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && hammerRows[i].style.display == "none" &&
					(hammer.innerHTML.indexOf("Element: Lightning") != -1 ||
					hammer.innerHTML.indexOf(", Lightning") != -1) &&
					document.getElementById("CBlightning").checked == true &&
					document.getElementById("CBhammer").checked == true) {
				hammerRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && hammerRows[i].style.display == "none" &&
					(hammer.innerHTML.indexOf("Element: Water") != -1 ||
					hammer.innerHTML.indexOf(", Water") != -1) &&
					document.getElementById("CBwater").checked == true &&
					document.getElementById("CBhammer").checked == true) {
				hammerRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && hammerRows[i].style.display == "none" &&
					(hammer.innerHTML.indexOf("Element: Wind") != -1 ||
					hammer.innerHTML.indexOf(", Wind") != -1) &&
					document.getElementById("CBwind").checked == true &&
					document.getElementById("CBhammer").checked == true) {
				hammerRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && hammerRows[i].style.display == "none" &&
					(hammer.innerHTML.indexOf("Element: Earth") != -1 ||
					hammer.innerHTML.indexOf(", Earth") != -1) &&
					document.getElementById("CBearth").checked == true &&
					document.getElementById("CBhammer").checked == true) {
				hammerRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && hammerRows[i].style.display == "none" &&
					(hammer.innerHTML.indexOf("Element: Light") != -1 ||
					hammer.innerHTML.indexOf(", Light") != -1) &&
					document.getElementById("CBlight").checked == true &&
					document.getElementById("CBhammer").checked == true) {
				hammerRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && hammerRows[i].style.display == "none" &&
					(hammer.innerHTML.indexOf("Element: Dark") != -1 ||
					hammer.innerHTML.indexOf(", Dark") != -1) &&
					document.getElementById("CBdark").checked == true &&
					document.getElementById("CBhammer").checked == true) {
				hammerRows[i].style.display = "";
			}
		}
		
		let spearTable = document.getElementById("spear");
		let spearRows = spearTable.rows;
		
		for(i = 1; i < (spearRows.length); i++) {
			let spear = spearRows[i].getElementsByTagName("td")[7];
			let lt = spearRows[i].getElementsByTagName("td")[10];
			
			if(lt.innerHTML == "true" && spearRows[i].style.display == "none" &&
					(spear.innerHTML.indexOf("Element: Fire") != -1 ||
					spear.innerHTML.indexOf(", Fire") != -1) &&
					document.getElementById("CBfire").checked == true &&
					document.getElementById("CBspear").checked == true) {
				spearRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && spearRows[i].style.display == "none" &&
					(spear.innerHTML.indexOf("Element: Ice") != -1 ||
					spear.innerHTML.indexOf(", Ice") != -1) &&
					document.getElementById("CBice").checked == true &&
					document.getElementById("CBspear").checked == true) {
				spearRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && spearRows[i].style.display == "none" &&
					(spear.innerHTML.indexOf("Element: Lightning") != -1 ||
					spear.innerHTML.indexOf(", Lightning") != -1) &&
					document.getElementById("CBlightning").checked == true &&
					document.getElementById("CBspear").checked == true) {
				spearRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && spearRows[i].style.display == "none" &&
					(spear.innerHTML.indexOf("Element: Water") != -1 ||
					spear.innerHTML.indexOf(", Water") != -1) &&
					document.getElementById("CBwater").checked == true &&
					document.getElementById("CBspear").checked == true) {
				spearRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && spearRows[i].style.display == "none" &&
					(spear.innerHTML.indexOf("Element: Wind") != -1 ||
					spear.innerHTML.indexOf(", Wind") != -1) &&
					document.getElementById("CBwind").checked == true &&
					document.getElementById("CBspear").checked == true) {
				spearRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && spearRows[i].style.display == "none" &&
					(spear.innerHTML.indexOf("Element: Earth") != -1 ||
					spear.innerHTML.indexOf(", Earth") != -1) &&
					document.getElementById("CBearth").checked == true &&
					document.getElementById("CBspear").checked == true) {
				spearRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && spearRows[i].style.display == "none" &&
					(spear.innerHTML.indexOf("Element: Light") != -1 ||
					spear.innerHTML.indexOf(", Light") != -1) &&
					document.getElementById("CBlight").checked == true &&
					document.getElementById("CBspear").checked == true) {
				spearRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && spearRows[i].style.display == "none" &&
					(spear.innerHTML.indexOf("Element: Dark") != -1 ||
					spear.innerHTML.indexOf(", Dark") != -1) &&
					document.getElementById("CBdark").checked == true &&
					document.getElementById("CBspear").checked == true) {
				spearRows[i].style.display = "";
			}
		}
		
		let harpTable = document.getElementById("harp");
		let harpRows = harpTable.rows;
		
		for(i = 1; i < (harpRows.length); i++) {
			let harp = harpRows[i].getElementsByTagName("td")[7];
			let lt = harpRows[i].getElementsByTagName("td")[10];
			
			if(lt.innerHTML == "true" && harpRows[i].style.display == "none" &&
					(harp.innerHTML.indexOf("Element: Fire") != -1 ||
					harp.innerHTML.indexOf(", Fire") != -1) &&
					document.getElementById("CBfire").checked == true &&
					document.getElementById("CBharp").checked == true) {
				harpRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && harpRows[i].style.display == "none" &&
					(harp.innerHTML.indexOf("Element: Ice") != -1 ||
					harp.innerHTML.indexOf(", Ice") != -1) &&
					document.getElementById("CBice").checked == true &&
					document.getElementById("CBharp").checked == true) {
				harpRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && harpRows[i].style.display == "none" &&
					(harp.innerHTML.indexOf("Element: Lightning") != -1 ||
					harp.innerHTML.indexOf(", Lightning") != -1) &&
					document.getElementById("CBlightning").checked == true &&
					document.getElementById("CBharp").checked == true) {
				harpRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && harpRows[i].style.display == "none" &&
					(harp.innerHTML.indexOf("Element: Water") != -1 ||
					harp.innerHTML.indexOf(", Water") != -1) &&
					document.getElementById("CBwater").checked == true &&
					document.getElementById("CBharp").checked == true) {
				harpRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && harpRows[i].style.display == "none" &&
					(harp.innerHTML.indexOf("Element: Wind") != -1 ||
					harp.innerHTML.indexOf(", Wind") != -1) &&
					document.getElementById("CBwind").checked == true &&
					document.getElementById("CBharp").checked == true) {
				harpRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && harpRows[i].style.display == "none" &&
					(harp.innerHTML.indexOf("Element: Earth") != -1 ||
					harp.innerHTML.indexOf(", Earth") != -1) &&
					document.getElementById("CBearth").checked == true &&
					document.getElementById("CBharp").checked == true) {
				harpRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && harpRows[i].style.display == "none" &&
					(harp.innerHTML.indexOf("Element: Light") != -1 ||
					harp.innerHTML.indexOf(", Light") != -1) &&
					document.getElementById("CBlight").checked == true &&
					document.getElementById("CBharp").checked == true) {
				harpRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && harpRows[i].style.display == "none" &&
					(harp.innerHTML.indexOf("Element: Dark") != -1 ||
					harp.innerHTML.indexOf(", Dark") != -1) &&
					document.getElementById("CBdark").checked == true &&
					document.getElementById("CBharp").checked == true) {
				harpRows[i].style.display = "";
			}
		}
		
		let whipTable = document.getElementById("whip");
		let whipRows = whipTable.rows;
		
		for(i = 1; i < (whipRows.length); i++) {
			let whip = whipRows[i].getElementsByTagName("td")[7];
			let lt = whipRows[i].getElementsByTagName("td")[10];
			
			if(lt.innerHTML == "true" && whipRows[i].style.display == "none" &&
					(whip.innerHTML.indexOf("Element: Fire") != -1 ||
					whip.innerHTML.indexOf(", Fire") != -1) &&
					document.getElementById("CBfire").checked == true &&
					document.getElementById("CBwhip").checked == true) {
				whipRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && whipRows[i].style.display == "none" &&
					(whip.innerHTML.indexOf("Element: Ice") != -1 ||
					whip.innerHTML.indexOf(", Ice") != -1) &&
					document.getElementById("CBice").checked == true &&
					document.getElementById("CBwhip").checked == true) {
				whipRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && whipRows[i].style.display == "none" &&
					(whip.innerHTML.indexOf("Element: Lightning") != -1 ||
					whip.innerHTML.indexOf(", Lightning") != -1) &&
					document.getElementById("CBlightning").checked == true &&
					document.getElementById("CBwhip").checked == true) {
				whipRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && whipRows[i].style.display == "none" &&
					(whip.innerHTML.indexOf("Element: Water") != -1 ||
					whip.innerHTML.indexOf(", Water") != -1) &&
					document.getElementById("CBwater").checked == true &&
					document.getElementById("CBwhip").checked == true) {
				whipRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && whipRows[i].style.display == "none" &&
					(whip.innerHTML.indexOf("Element: Wind") != -1 ||
					whip.innerHTML.indexOf(", Wind") != -1) &&
					document.getElementById("CBwind").checked == true &&
					document.getElementById("CBwhip").checked == true) {
				whipRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && whipRows[i].style.display == "none" &&
					(whip.innerHTML.indexOf("Element: Earth") != -1 ||
					whip.innerHTML.indexOf(", Earth") != -1) &&
					document.getElementById("CBearth").checked == true &&
					document.getElementById("CBwhip").checked == true) {
				whipRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && whipRows[i].style.display == "none" &&
					(whip.innerHTML.indexOf("Element: Light") != -1 ||
					whip.innerHTML.indexOf(", Light") != -1) &&
					document.getElementById("CBlight").checked == true &&
					document.getElementById("CBwhip").checked == true) {
				whipRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && whipRows[i].style.display == "none" &&
					(whip.innerHTML.indexOf("Element: Dark") != -1 ||
					whip.innerHTML.indexOf(", Dark") != -1) &&
					document.getElementById("CBdark").checked == true &&
					document.getElementById("CBwhip").checked == true) {
				whipRows[i].style.display = "";
			}
		}
		
		let twTable = document.getElementById("tw");
		let twRows = twTable.rows;
		
		for(i = 1; i < (twRows.length); i++) {
			let tw = twRows[i].getElementsByTagName("td")[7];
			let lt = twRows[i].getElementsByTagName("td")[10];
			
			if(lt.innerHTML == "true" && twRows[i].style.display == "none" &&
					(tw.innerHTML.indexOf("Element: Fire") != -1 ||
					tw.innerHTML.indexOf(", Fire") != -1) &&
					document.getElementById("CBfire").checked == true &&
					document.getElementById("CBtw").checked == true) {
				twRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && twRows[i].style.display == "none" &&
					(tw.innerHTML.indexOf("Element: Ice") != -1 ||
					tw.innerHTML.indexOf(", Ice") != -1) &&
					document.getElementById("CBice").checked == true &&
					document.getElementById("CBtw").checked == true) {
				twRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && twRows[i].style.display == "none" &&
					(tw.innerHTML.indexOf("Element: Lightning") != -1 ||
					tw.innerHTML.indexOf(", Lightning") != -1) &&
					document.getElementById("CBlightning").checked == true &&
					document.getElementById("CBtw").checked == true) {
				twRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && twRows[i].style.display == "none" &&
					(tw.innerHTML.indexOf("Element: Water") != -1 ||
					tw.innerHTML.indexOf(", Water") != -1) &&
					document.getElementById("CBwater").checked == true &&
					document.getElementById("CBtw").checked == true) {
				twRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && twRows[i].style.display == "none" &&
					(tw.innerHTML.indexOf("Element: Wind") != -1 ||
					tw.innerHTML.indexOf(", Wind") != -1) &&
					document.getElementById("CBwind").checked == true &&
					document.getElementById("CBtw").checked == true) {
				twRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && twRows[i].style.display == "none" &&
					(tw.innerHTML.indexOf("Element: Earth") != -1 ||
					tw.innerHTML.indexOf(", Earth") != -1) &&
					document.getElementById("CBearth").checked == true &&
					document.getElementById("CBtw").checked == true) {
				twRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && twRows[i].style.display == "none" &&
					(tw.innerHTML.indexOf("Element: Light") != -1 ||
					tw.innerHTML.indexOf(", Light") != -1) &&
					document.getElementById("CBlight").checked == true &&
					document.getElementById("CBtw").checked == true) {
				twRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && twRows[i].style.display == "none" &&
					(tw.innerHTML.indexOf("Element: Dark") != -1 ||
					tw.innerHTML.indexOf(", Dark") != -1) &&
					document.getElementById("CBdark").checked == true &&
					document.getElementById("CBtw").checked == true) {
				twRows[i].style.display = "";
			}
		}
		
		let gunTable = document.getElementById("gun");
		let gunRows = gunTable.rows;
		
		for(i = 1; i < (gunRows.length); i++) {
			let gun = gunRows[i].getElementsByTagName("td")[7];
			let lt = gunRows[i].getElementsByTagName("td")[10];
			
			if(lt.innerHTML == "true" && gunRows[i].style.display == "none" &&
					(gun.innerHTML.indexOf("Element: Fire") != -1 ||
					gun.innerHTML.indexOf(", Fire") != -1) &&
					document.getElementById("CBfire").checked == true &&
					document.getElementById("CBgun").checked == true) {
				gunRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && gunRows[i].style.display == "none" &&
					(gun.innerHTML.indexOf("Element: Ice") != -1 ||
					gun.innerHTML.indexOf(", Ice") != -1) &&
					document.getElementById("CBice").checked == true &&
					document.getElementById("CBgun").checked == true) {
				gunRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && gunRows[i].style.display == "none" &&
					(gun.innerHTML.indexOf("Element: Lightning") != -1 ||
					gun.innerHTML.indexOf(", Lightning") != -1) &&
					document.getElementById("CBlightning").checked == true &&
					document.getElementById("CBgun").checked == true) {
				gunRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && gunRows[i].style.display == "none" &&
					(gun.innerHTML.indexOf("Element: Water") != -1 ||
					gun.innerHTML.indexOf(", Water") != -1) &&
					document.getElementById("CBwater").checked == true &&
					document.getElementById("CBgun").checked == true) {
				gunRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && gunRows[i].style.display == "none" &&
					(gun.innerHTML.indexOf("Element: Wind") != -1 ||
					gun.innerHTML.indexOf(", Wind") != -1) &&
					document.getElementById("CBwind").checked == true &&
					document.getElementById("CBgun").checked == true) {
				gunRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && gunRows[i].style.display == "none" &&
					(gun.innerHTML.indexOf("Element: Earth") != -1 ||
					gun.innerHTML.indexOf(", Earth") != -1) &&
					document.getElementById("CBearth").checked == true &&
					document.getElementById("CBgun").checked == true) {
				gunRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && gunRows[i].style.display == "none" &&
					(gun.innerHTML.indexOf("Element: Light") != -1 ||
					gun.innerHTML.indexOf(", Light") != -1) &&
					document.getElementById("CBlight").checked == true &&
					document.getElementById("CBgun").checked == true) {
				gunRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && gunRows[i].style.display == "none" &&
					(gun.innerHTML.indexOf("Element: Dark") != -1 ||
					gun.innerHTML.indexOf(", Dark") != -1) &&
					document.getElementById("CBdark").checked == true &&
					document.getElementById("CBgun").checked == true) {
				gunRows[i].style.display = "";
			}
		}
		
		let maceTable = document.getElementById("mace");
		let maceRows = maceTable.rows;
		
		for(i = 1; i < (maceRows.length); i++) {
			let mace = maceRows[i].getElementsByTagName("td")[7];
			let lt = maceRows[i].getElementsByTagName("td")[10];
			
			if(lt.innerHTML == "true" && maceRows[i].style.display == "none" &&
					(mace.innerHTML.indexOf("Element: Fire") != -1 ||
					mace.innerHTML.indexOf(", Fire") != -1) &&
					document.getElementById("CBfire").checked == true &&
					document.getElementById("CBmace").checked == true) {
				maceRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && maceRows[i].style.display == "none" &&
					(mace.innerHTML.indexOf("Element: Ice") != -1 ||
					mace.innerHTML.indexOf(", Ice") != -1) &&
					document.getElementById("CBice").checked == true &&
					document.getElementById("CBmace").checked == true) {
				maceRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && maceRows[i].style.display == "none" &&
					(mace.innerHTML.indexOf("Element: Lightning") != -1 ||
					mace.innerHTML.indexOf(", Lightning") != -1) &&
					document.getElementById("CBlightning").checked == true &&
					document.getElementById("CBmace").checked == true) {
				maceRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && maceRows[i].style.display == "none" &&
					(mace.innerHTML.indexOf("Element: Water") != -1 ||
					mace.innerHTML.indexOf(", Water") != -1) &&
					document.getElementById("CBwater").checked == true &&
					document.getElementById("CBmace").checked == true) {
				maceRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && maceRows[i].style.display == "none" &&
					(mace.innerHTML.indexOf("Element: Wind") != -1 ||
					mace.innerHTML.indexOf(", Wind") != -1) &&
					document.getElementById("CBwind").checked == true &&
					document.getElementById("CBmace").checked == true) {
				maceRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && maceRows[i].style.display == "none" &&
					(mace.innerHTML.indexOf("Element: Earth") != -1 ||
					mace.innerHTML.indexOf(", Earth") != -1) &&
					document.getElementById("CBearth").checked == true &&
					document.getElementById("CBmace").checked == true) {
				maceRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && maceRows[i].style.display == "none" &&
					(mace.innerHTML.indexOf("Element: Light") != -1 ||
					mace.innerHTML.indexOf(", Light") != -1) &&
					document.getElementById("CBlight").checked == true &&
					document.getElementById("CBmace").checked == true) {
				maceRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && maceRows[i].style.display == "none" &&
					(mace.innerHTML.indexOf("Element: Dark") != -1 ||
					mace.innerHTML.indexOf(", Dark") != -1) &&
					document.getElementById("CBdark").checked == true &&
					document.getElementById("CBmace").checked == true) {
				maceRows[i].style.display = "";
			}
		}
		
		let fistTable = document.getElementById("fist");
		let fistRows = fistTable.rows;
		
		for(i = 1; i < (fistRows.length); i++) {
			let fist = fistRows[i].getElementsByTagName("td")[7];
			let lt = fistRows[i].getElementsByTagName("td")[10];
			
			if(lt.innerHTML == "true" && fistRows[i].style.display == "none" &&
					(fist.innerHTML.indexOf("Element: Fire") != -1 ||
					fist.innerHTML.indexOf(", Fire") != -1) &&
					document.getElementById("CBfire").checked == true &&
					document.getElementById("CBfist").checked == true) {
				fistRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && fistRows[i].style.display == "none" &&
					(fist.innerHTML.indexOf("Element: Ice") != -1 ||
					fist.innerHTML.indexOf(", Ice") != -1) &&
					document.getElementById("CBice").checked == true &&
					document.getElementById("CBfist").checked == true) {
				fistRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && fistRows[i].style.display == "none" &&
					(fist.innerHTML.indexOf("Element: Lightning") != -1 ||
					fist.innerHTML.indexOf(", Lightning") != -1) &&
					document.getElementById("CBlightning").checked == true &&
					document.getElementById("CBfist").checked == true) {
				fistRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && fistRows[i].style.display == "none" &&
					(fist.innerHTML.indexOf("Element: Water") != -1 ||
					fist.innerHTML.indexOf(", Water") != -1) &&
					document.getElementById("CBwater").checked == true &&
					document.getElementById("CBfist").checked == true) {
				fistRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && fistRows[i].style.display == "none" &&
					(fist.innerHTML.indexOf("Element: Wind") != -1 ||
					fist.innerHTML.indexOf(", Wind") != -1) &&
					document.getElementById("CBwind").checked == true &&
					document.getElementById("CBfist").checked == true) {
				fistRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && fistRows[i].style.display == "none" &&
					(fist.innerHTML.indexOf("Element: Earth") != -1 ||
					fist.innerHTML.indexOf(", Earth") != -1) &&
					document.getElementById("CBearth").checked == true &&
					document.getElementById("CBfist").checked == true) {
				fistRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && fistRows[i].style.display == "none" &&
					(fist.innerHTML.indexOf("Element: Light") != -1 ||
					fist.innerHTML.indexOf(", Light") != -1) &&
					document.getElementById("CBlight").checked == true &&
					document.getElementById("CBfist").checked == true) {
				fistRows[i].style.display = "";
			}
			if(lt.innerHTML == "true" && fistRows[i].style.display == "none" &&
					(fist.innerHTML.indexOf("Element: Dark") != -1 ||
					fist.innerHTML.indexOf(", Dark") != -1) &&
					document.getElementById("CBdark").checked == true &&
					document.getElementById("CBfist").checked == true) {
				fistRows[i].style.display = "";
			}
		}
	}
});

let stmrFilter = document.querySelector("input[id=ignoreSTMR]");
stmrFilter.addEventListener('click', function() {
	if(document.getElementById("ignoreSTMR").checked == true) {
		let i = 0;
		let daggerTable = document.getElementById("dagger");
		let daggerRows = daggerTable.rows;
		
		for(i = 1; i < (daggerRows.length); i++) {
			let stmr = daggerRows[i].getElementsByTagName("td")[9];
			if(stmr.innerHTML == "false" && daggerRows[i].style.display == "") {
				daggerRows[i].style.display = "";
			}
			else if(stmr.innerHTML == "true" && daggerRows[i].style.display == ""){
				daggerRows[i].style.display = "none";
			}
		}
		
		let swordTable = document.getElementById("sword");
		let swordRows = swordTable.rows;
		
		for(i = 1; i < (swordRows.length); i++) {
			let stmr = swordRows[i].getElementsByTagName("td")[9];
			
			if(stmr.innerHTML == "false" && swordRows[i].style.display == "") {
				swordRows[i].style.display = "";
			}
			else if(stmr.innerHTML == "true" && swordRows[i].style.display == ""){
				swordRows[i].style.display = "none";
			}
		}
		
		let gswordTable = document.getElementById("gsword");
		let gswordRows = gswordTable.rows;
		
		for(i = 1; i < (gswordRows.length); i++) {
			let stmr = gswordRows[i].getElementsByTagName("td")[9];
			
			if(stmr.innerHTML == "false" && gswordRows[i].style.display == "") {
				gswordRows[i].style.display = "";
			}
			else if(stmr.innerHTML == "true" && gswordRows[i].style.display == ""){
				gswordRows[i].style.display = "none";
			}
		}
		
		let katanaTable = document.getElementById("katana");
		let katanaRows = katanaTable.rows;
		
		for(i = 1; i < (katanaRows.length); i++) {
			let stmr = katanaRows[i].getElementsByTagName("td")[9];
			
			if(stmr.innerHTML == "false" && katanaRows[i].style.display == "") {
				katanaRows[i].style.display = "";
			}
			else if(stmr.innerHTML == "true" && katanaRows[i].style.display == ""){
				katanaRows[i].style.display = "none";
			}
		}	
		
		let staffTable = document.getElementById("staff");
		let staffRows = staffTable.rows;
		
		for(i = 1; i < (staffRows.length); i++) {
			let stmr = staffRows[i].getElementsByTagName("td")[9];
			
			if(stmr.innerHTML == "false" && staffRows[i].style.display == "") {
				staffRows[i].style.display = "";
			}
			else if(stmr.innerHTML == "true" && staffRows[i].style.display == ""){
				staffRows[i].style.display = "none";
			}
		}
		
		let rodTable = document.getElementById("rod");
		let rodRows = rodTable.rows;
		
		for(i = 1; i < (rodRows.length); i++) {
			let stmr = rodRows[i].getElementsByTagName("td")[9];
			
			if(stmr.innerHTML == "false" && rodRows[i].style.display == "") {
				rodRows[i].style.display = "";
			}
			else if(stmr.innerHTML == "true" && rodRows[i].style.display == ""){
				rodRows[i].style.display = "none";
			}
		}
		
		let bowTable = document.getElementById("bow");
		let bowRows = bowTable.rows;
		
		for(i = 1; i < (bowRows.length); i++) {
			let stmr = bowRows[i].getElementsByTagName("td")[9];
			
			if(stmr.innerHTML == "false" && bowRows[i].style.display == "") {
				bowRows[i].style.display = "";
			}
			else if(stmr.innerHTML == "true" && bowRows[i].style.display == ""){
				bowRows[i].style.display = "none";
			}
		}
		
		let axeTable = document.getElementById("axe");
		let axeRows = axeTable.rows;
		
		for(i = 1; i < (axeRows.length); i++) {
			let stmr = axeRows[i].getElementsByTagName("td")[9];
			
			if(stmr.innerHTML == "false" && axeRows[i].style.display == "") {
				axeRows[i].style.display = "";
			}
			else if(stmr.innerHTML == "true" && axeRows[i].style.display == ""){
				axeRows[i].style.display = "none";
			}
		}
		
		let hammerTable = document.getElementById("hammer");
		let hammerRows = hammerTable.rows;
		
		for(i = 1; i < (hammerRows.length); i++) {
			let stmr = hammerRows[i].getElementsByTagName("td")[9];
			
			if(stmr.innerHTML == "false" && hammerRows[i].style.display == "") {
				hammerRows[i].style.display = "";
			}
			else if(stmr.innerHTML == "true" && hammerRows[i].style.display == ""){
				hammerRows[i].style.display = "none";
			}
		}
		
		let spearTable = document.getElementById("spear");
		let spearRows = spearTable.rows;
		
		for(i = 1; i < (spearRows.length); i++) {
			let stmr = spearRows[i].getElementsByTagName("td")[9];
			
			if(stmr.innerHTML == "false" && spearRows[i].style.display == "") {
				spearRows[i].style.display = "";
			}
			else if(stmr.innerHTML == "true" && spearRows[i].style.display == ""){
				spearRows[i].style.display = "none";
			}
		}
		
		let harpTable = document.getElementById("harp");
		let harpRows = harpTable.rows;
		
		for(i = 1; i < (harpRows.length); i++) {
			let stmr = harpRows[i].getElementsByTagName("td")[9];
			
			if(stmr.innerHTML == "false" && harpRows[i].style.display == "") {
				harpRows[i].style.display = "";
			}
			else if(stmr.innerHTML == "true" && harpRows[i].style.display == ""){
				harpRows[i].style.display = "none";
			}
		}
		
		let whipTable = document.getElementById("whip");
		let whipRows = whipTable.rows;
		
		for(i = 1; i < (whipRows.length); i++) {
			let stmr = whipRows[i].getElementsByTagName("td")[9];
			
			if(stmr.innerHTML == "false" && whipRows[i].style.display == "") {
				whipRows[i].style.display = "";
			}
			else if(stmr.innerHTML == "true" && whipRows[i].style.display == ""){
				whipRows[i].style.display = "none";
			}
		}
		
		let twTable = document.getElementById("tw");
		let twRows = twTable.rows;
		
		for(i = 1; i < (twRows.length); i++) {
			let stmr = twRows[i].getElementsByTagName("td")[9];
			
			if(stmr.innerHTML == "false" && twRows[i].style.display == "") {
				twRows[i].style.display = "";
			}
			else if(stmr.innerHTML == "true" && twRows[i].style.display == ""){
				twRows[i].style.display = "none";
			}
		}
		
		let gunTable = document.getElementById("gun");
		let gunRows = gunTable.rows;
		
		for(i = 1; i < (gunRows.length); i++) {
			let stmr = gunRows[i].getElementsByTagName("td")[9];
			
			if(stmr.innerHTML == "false" && gunRows[i].style.display == "") {
				gunRows[i].style.display = "";
			}
			else if(stmr.innerHTML == "true" && gunRows[i].style.display == ""){
				gunRows[i].style.display = "none";
			}
		}
		
		let maceTable = document.getElementById("mace");
		let maceRows = maceTable.rows;
		
		for(i = 1; i < (maceRows.length); i++) {
			let stmr = maceRows[i].getElementsByTagName("td")[9];
			
			if(stmr.innerHTML == "false" && maceRows[i].style.display == "") {
				maceRows[i].style.display = "";
			}
			else if(stmr.innerHTML == "true" && maceRows[i].style.display == ""){
				maceRows[i].style.display = "none";
			}
		}
		
		let fistTable = document.getElementById("fist");
		let fistRows = fistTable.rows;
		
		for(i = 1; i < (fistRows.length); i++) {
			let stmr = fistRows[i].getElementsByTagName("td")[9];
			
			if(stmr.innerHTML == "false" && fistRows[i].style.display == "") {
				fistRows[i].style.display = "";
			}
			else if(stmr.innerHTML == "true" && fistRows[i].style.display == ""){
				fistRows[i].style.display = "none";
			}
		}
		
	}
	else {
		let i = 0;
		let daggerTable = document.getElementById("dagger");
		let daggerRows = daggerTable.rows;
		
		for(i = 1; i < (daggerRows.length); i++) {
			let dagger = daggerRows[i].getElementsByTagName("td")[7];
			let stmr = daggerRows[i].getElementsByTagName("td")[9];
			
			if(stmr.innerHTML == "true" && daggerRows[i].style.display == "none" &&
					(dagger.innerHTML.indexOf("Element: Fire") != -1 ||
					dagger.innerHTML.indexOf(", Fire") != -1) &&
					document.getElementById("CBfire").checked == true &&
					document.getElementById("CBdagger").checked == true) {
				daggerRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && daggerRows[i].style.display == "none" &&
					(dagger.innerHTML.indexOf("Element: Ice") != -1 ||
					dagger.innerHTML.indexOf(", Ice") != -1) &&
					document.getElementById("CBice").checked == true &&
					document.getElementById("CBdagger").checked == true) {
				daggerRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && daggerRows[i].style.display == "none" &&
					(dagger.innerHTML.indexOf("Element: Lightning") != -1 ||
					dagger.innerHTML.indexOf(", Lightning") != -1) &&
					document.getElementById("CBlightning").checked == true &&
					document.getElementById("CBdagger").checked == true) {
				daggerRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && daggerRows[i].style.display == "none" &&
					(dagger.innerHTML.indexOf("Element: Water") != -1 ||
					dagger.innerHTML.indexOf(", Water") != -1) &&
					document.getElementById("CBwater").checked == true &&
					document.getElementById("CBdagger").checked == true) {
				daggerRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && daggerRows[i].style.display == "none" &&
					(dagger.innerHTML.indexOf("Element: Wind") != -1 ||
					dagger.innerHTML.indexOf(", Wind") != -1) &&
					document.getElementById("CBwind").checked == true &&
					document.getElementById("CBdagger").checked == true) {
				daggerRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && daggerRows[i].style.display == "none" &&
					(dagger.innerHTML.indexOf("Element: Earth") != -1 ||
					dagger.innerHTML.indexOf(", Earth") != -1) &&
					document.getElementById("CBearth").checked == true &&
					document.getElementById("CBdagger").checked == true) {
				daggerRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && daggerRows[i].style.display == "none" &&
					(dagger.innerHTML.indexOf("Element: Light") != -1 ||
					dagger.innerHTML.indexOf(", Light") != -1) &&
					document.getElementById("CBlight").checked == true &&
					document.getElementById("CBdagger").checked == true) {
				daggerRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && daggerRows[i].style.display == "none" &&
					(dagger.innerHTML.indexOf("Element: Dark") != -1 ||
					dagger.innerHTML.indexOf(", Dark") != -1) &&
					document.getElementById("CBdark").checked == true &&
					document.getElementById("CBdagger").checked == true) {
				daggerRows[i].style.display = "";
			}
		}
		
		let swordTable = document.getElementById("sword");
		let swordRows = swordTable.rows;
		
		for(i = 1; i < (swordRows.length); i++) {
			let sword = swordRows[i].getElementsByTagName("td")[7];
			let stmr = swordRows[i].getElementsByTagName("td")[9];
			
			if(stmr.innerHTML == "true" && swordRows[i].style.display == "none" &&
					(sword.innerHTML.indexOf("Element: Fire") != -1 ||
					sword.innerHTML.indexOf(", Fire") != -1) &&
					document.getElementById("CBfire").checked == true &&
					document.getElementById("CBsword").checked == true) {
				swordRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && swordRows[i].style.display == "none" &&
					(sword.innerHTML.indexOf("Element: Ice") != -1 ||
					sword.innerHTML.indexOf(", Ice") != -1) &&
					document.getElementById("CBice").checked == true &&
					document.getElementById("CBsword").checked == true) {
				swordRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && swordRows[i].style.display == "none" &&
					(sword.innerHTML.indexOf("Element: Lightning") != -1 ||
					sword.innerHTML.indexOf(", Lightning") != -1) &&
					document.getElementById("CBlightning").checked == true &&
					document.getElementById("CBsword").checked == true) {
				swordRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && swordRows[i].style.display == "none" &&
					(sword.innerHTML.indexOf("Element: Water") != -1 ||
					sword.innerHTML.indexOf(", Water") != -1) &&
					document.getElementById("CBwater").checked == true &&
					document.getElementById("CBsword").checked == true) {
				swordRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && swordRows[i].style.display == "none" &&
					(sword.innerHTML.indexOf("Element: Wind") != -1 ||
					sword.innerHTML.indexOf(", Wind") != -1) &&
					document.getElementById("CBwind").checked == true &&
					document.getElementById("CBsword").checked == true) {
				swordRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && swordRows[i].style.display == "none" &&
					(sword.innerHTML.indexOf("Element: Earth") != -1 ||
					sword.innerHTML.indexOf(", Earth") != -1) &&
					document.getElementById("CBearth").checked == true &&
					document.getElementById("CBsword").checked == true) {
				swordRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && swordRows[i].style.display == "none" &&
					(sword.innerHTML.indexOf("Element: Light") != -1 ||
					sword.innerHTML.indexOf(", Light") != -1) &&
					document.getElementById("CBlight").checked == true &&
					document.getElementById("CBsword").checked == true) {
				swordRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && swordRows[i].style.display == "none" &&
					(sword.innerHTML.indexOf("Element: Dark") != -1 ||
					sword.innerHTML.indexOf(", Dark") != -1) &&
					document.getElementById("CBdark").checked == true &&
					document.getElementById("CBsword").checked == true) {
				swordRows[i].style.display = "";
			}
		}
		
		let gswordTable = document.getElementById("gsword");
		let gswordRows = gswordTable.rows;
		
		for(i = 1; i < (gswordRows.length); i++) {
			let gsword = gswordRows[i].getElementsByTagName("td")[7];
			let stmr = gswordRows[i].getElementsByTagName("td")[9];
			
			if(stmr.innerHTML == "true" && gswordRows[i].style.display == "none" &&
					(gsword.innerHTML.indexOf("Element: Fire") != -1 ||
					gsword.innerHTML.indexOf(", Fire") != -1) &&
					document.getElementById("CBfire").checked == true &&
					document.getElementById("CBgsword").checked == true) {
				gswordRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && gswordRows[i].style.display == "none" &&
					(gsword.innerHTML.indexOf("Element: Ice") != -1 ||
					gsword.innerHTML.indexOf(", Ice") != -1) &&
					document.getElementById("CBice").checked == true &&
					document.getElementById("CBgsword").checked == true) {
				gswordRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && gswordRows[i].style.display == "none" &&
					(gsword.innerHTML.indexOf("Element: Lightning") != -1 ||
					gsword.innerHTML.indexOf(", Lightning") != -1) &&
					document.getElementById("CBlightning").checked == true &&
					document.getElementById("CBgsword").checked == true) {
				gswordRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && gswordRows[i].style.display == "none" &&
					(gsword.innerHTML.indexOf("Element: Water") != -1 ||
					gsword.innerHTML.indexOf(", Water") != -1) &&
					document.getElementById("CBwater").checked == true &&
					document.getElementById("CBgsword").checked == true) {
				gswordRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && gswordRows[i].style.display == "none" &&
					(gsword.innerHTML.indexOf("Element: Wind") != -1 ||
					gsword.innerHTML.indexOf(", Wind") != -1) &&
					document.getElementById("CBwind").checked == true &&
					document.getElementById("CBgsword").checked == true) {
				gswordRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && gswordRows[i].style.display == "none" &&
					(gsword.innerHTML.indexOf("Element: Earth") != -1 ||
					gsword.innerHTML.indexOf(", Earth") != -1) &&
					document.getElementById("CBearth").checked == true &&
					document.getElementById("CBgsword").checked == true) {
				gswordRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && gswordRows[i].style.display == "none" &&
					(gsword.innerHTML.indexOf("Element: Light") != -1 ||
					gsword.innerHTML.indexOf(", Light") != -1) &&
					document.getElementById("CBlight").checked == true &&
					document.getElementById("CBgsword").checked == true) {
				gswordRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && gswordRows[i].style.display == "none" &&
					(gsword.innerHTML.indexOf("Element: Dark") != -1 ||
					gsword.innerHTML.indexOf(", Dark") != -1) &&
					document.getElementById("CBdark").checked == true &&
					document.getElementById("CBgsword").checked == true) {
				gswordRows[i].style.display = "";
			}
		}	
		
		let katanaTable = document.getElementById("katana");
		let katanaRows = katanaTable.rows;
		
		for(i = 1; i < (katanaRows.length); i++) {
			let katana = katanaRows[i].getElementsByTagName("td")[7];
			let stmr = katanaRows[i].getElementsByTagName("td")[9];
			
			if(stmr.innerHTML == "true" && katanaRows[i].style.display == "none" &&
					(katana.innerHTML.indexOf("Element: Fire") != -1 ||
					katana.innerHTML.indexOf(", Fire") != -1) &&
					document.getElementById("CBfire").checked == true &&
					document.getElementById("CBkatana").checked == true) {
				katanaRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && katanaRows[i].style.display == "none" &&
					(katana.innerHTML.indexOf("Element: Ice") != -1 ||
					katana.innerHTML.indexOf(", Ice") != -1) &&
					document.getElementById("CBice").checked == true &&
					document.getElementById("CBkatana").checked == true) {
				katanaRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && katanaRows[i].style.display == "none" &&
					(katana.innerHTML.indexOf("Element: Lightning") != -1 ||
					katana.innerHTML.indexOf(", Lightning") != -1) &&
					document.getElementById("CBlightning").checked == true &&
					document.getElementById("CBkatana").checked == true) {
				katanaRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && katanaRows[i].style.display == "none" &&
					(katana.innerHTML.indexOf("Element: Water") != -1 ||
					katana.innerHTML.indexOf(", Water") != -1) &&
					document.getElementById("CBwater").checked == true &&
					document.getElementById("CBkatana").checked == true) {
				katanaRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && katanaRows[i].style.display == "none" &&
					(katana.innerHTML.indexOf("Element: Wind") != -1 ||
					katana.innerHTML.indexOf(", Wind") != -1) &&
					document.getElementById("CBwind").checked == true &&
					document.getElementById("CBkatana").checked == true) {
				katanaRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && katanaRows[i].style.display == "none" &&
					(katana.innerHTML.indexOf("Element: Earth") != -1 ||
					katana.innerHTML.indexOf(", Earth") != -1) &&
					document.getElementById("CBearth").checked == true &&
					document.getElementById("CBkatana").checked == true) {
				katanaRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && katanaRows[i].style.display == "none" &&
					(katana.innerHTML.indexOf("Element: Light") != -1 ||
					katana.innerHTML.indexOf(", Light") != -1) &&
					document.getElementById("CBlight").checked == true &&
					document.getElementById("CBkatana").checked == true) {
				katanaRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && katanaRows[i].style.display == "none" &&
					(katana.innerHTML.indexOf("Element: Dark") != -1 ||
					katana.innerHTML.indexOf(", Dark") != -1) &&
					document.getElementById("CBdark").checked == true &&
					document.getElementById("CBkatana").checked == true) {
				katanaRows[i].style.display = "";
			}
		}
		
		let staffTable = document.getElementById("staff");
		let staffRows = staffTable.rows;
		
		for(i = 1; i < (staffRows.length); i++) {
			let staff = staffRows[i].getElementsByTagName("td")[7];
			let stmr = staffRows[i].getElementsByTagName("td")[9];
			
			if(stmr.innerHTML == "true" && staffRows[i].style.display == "none" &&
					(staff.innerHTML.indexOf("Element: Fire") != -1 ||
					staff.innerHTML.indexOf(", Fire") != -1) &&
					document.getElementById("CBfire").checked == true &&
					document.getElementById("CBstaff").checked == true) {
				staffRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && staffRows[i].style.display == "none" &&
					(staff.innerHTML.indexOf("Element: Ice") != -1 ||
					staff.innerHTML.indexOf(", Ice") != -1) &&
					document.getElementById("CBice").checked == true &&
					document.getElementById("CBstaff").checked == true) {
				staffRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && staffRows[i].style.display == "none" &&
					(staff.innerHTML.indexOf("Element: Lightning") != -1 ||
					staff.innerHTML.indexOf(", Lightning") != -1) &&
					document.getElementById("CBlightning").checked == true &&
					document.getElementById("CBstaff").checked == true) {
				staffRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && staffRows[i].style.display == "none" &&
					(staff.innerHTML.indexOf("Element: Water") != -1 ||
					staff.innerHTML.indexOf(", Water") != -1) &&
					document.getElementById("CBwater").checked == true &&
					document.getElementById("CBstaff").checked == true) {
				staffRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && staffRows[i].style.display == "none" &&
					(staff.innerHTML.indexOf("Element: Wind") != -1 ||
					staff.innerHTML.indexOf(", Wind") != -1) &&
					document.getElementById("CBwind").checked == true &&
					document.getElementById("CBstaff").checked == true) {
				staffRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && staffRows[i].style.display == "none" &&
					(staff.innerHTML.indexOf("Element: Earth") != -1 ||
					staff.innerHTML.indexOf(", Earth") != -1) &&
					document.getElementById("CBearth").checked == true &&
					document.getElementById("CBstaff").checked == true) {
				staffRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && staffRows[i].style.display == "none" &&
					(staff.innerHTML.indexOf("Element: Light") != -1 ||
					staff.innerHTML.indexOf(", Light") != -1) &&
					document.getElementById("CBlight").checked == true &&
					document.getElementById("CBstaff").checked == true) {
				staffRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && staffRows[i].style.display == "none" &&
					(staff.innerHTML.indexOf("Element: Dark") != -1 ||
					staff.innerHTML.indexOf(", Dark") != -1) &&
					document.getElementById("CBdark").checked == true &&
					document.getElementById("CBstaff").checked == true) {
				staffRows[i].style.display = "";
			}
		}
		
		let rodTable = document.getElementById("rod");
		let rodRows = rodTable.rows;
		
		for(i = 1; i < (rodRows.length); i++) {
			let rod = rodRows[i].getElementsByTagName("td")[7];
			let stmr = rodRows[i].getElementsByTagName("td")[9];
			
			if(stmr.innerHTML == "true" && rodRows[i].style.display == "none" &&
					(rod.innerHTML.indexOf("Element: Fire") != -1 ||
					rod.innerHTML.indexOf(", Fire") != -1) &&
					document.getElementById("CBfire").checked == true &&
					document.getElementById("CBrod").checked == true) {
				rodRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && rodRows[i].style.display == "none" &&
					(rod.innerHTML.indexOf("Element: Ice") != -1 ||
					rod.innerHTML.indexOf(", Ice") != -1) &&
					document.getElementById("CBice").checked == true &&
					document.getElementById("CBrod").checked == true) {
				rodRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && rodRows[i].style.display == "none" &&
					(rod.innerHTML.indexOf("Element: Lightning") != -1 ||
					rod.innerHTML.indexOf(", Lightning") != -1) &&
					document.getElementById("CBlightning").checked == true &&
					document.getElementById("CBrod").checked == true) {
				rodRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && rodRows[i].style.display == "none" &&
					(rod.innerHTML.indexOf("Element: Water") != -1 ||
					rod.innerHTML.indexOf(", Water") != -1) &&
					document.getElementById("CBwater").checked == true &&
					document.getElementById("CBrod").checked == true) {
				rodRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && rodRows[i].style.display == "none" &&
					(rod.innerHTML.indexOf("Element: Wind") != -1 ||
					rod.innerHTML.indexOf(", Wind") != -1) &&
					document.getElementById("CBwind").checked == true &&
					document.getElementById("CBrod").checked == true) {
				rodRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && rodRows[i].style.display == "none" &&
					(rod.innerHTML.indexOf("Element: Earth") != -1 ||
					rod.innerHTML.indexOf(", Earth") != -1) &&
					document.getElementById("CBearth").checked == true &&
					document.getElementById("CBrod").checked == true) {
				rodRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && rodRows[i].style.display == "none" &&
					(rod.innerHTML.indexOf("Element: Light") != -1 ||
					rod.innerHTML.indexOf(", Light") != -1) &&
					document.getElementById("CBlight").checked == true &&
					document.getElementById("CBrod").checked == true) {
				rodRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && rodRows[i].style.display == "none" &&
					(rod.innerHTML.indexOf("Element: Dark") != -1 ||
					rod.innerHTML.indexOf(", Dark") != -1) &&
					document.getElementById("CBdark").checked == true &&
					document.getElementById("CBrod").checked == true) {
				rodRows[i].style.display = "";
			}
		}
		
		let bowTable = document.getElementById("bow");
		let bowRows = bowTable.rows;
		
		for(i = 1; i < (bowRows.length); i++) {
			let bow = bowRows[i].getElementsByTagName("td")[7];
			let stmr = bowRows[i].getElementsByTagName("td")[9];
			
			if(stmr.innerHTML == "true" && bowRows[i].style.display == "none" &&
					(bow.innerHTML.indexOf("Element: Fire") != -1 ||
					bow.innerHTML.indexOf(", Fire") != -1) &&
					document.getElementById("CBfire").checked == true &&
					document.getElementById("CBbow").checked == true) {
				bowRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && bowRows[i].style.display == "none" &&
					(bow.innerHTML.indexOf("Element: Ice") != -1 ||
					bow.innerHTML.indexOf(", Ice") != -1) &&
					document.getElementById("CBice").checked == true &&
					document.getElementById("CBbow").checked == true) {
				bowRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && bowRows[i].style.display == "none" &&
					(bow.innerHTML.indexOf("Element: Lightning") != -1 ||
					bow.innerHTML.indexOf(", Lightning") != -1) &&
					document.getElementById("CBlightning").checked == true &&
					document.getElementById("CBbow").checked == true) {
				bowRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && bowRows[i].style.display == "none" &&
					(bow.innerHTML.indexOf("Element: Water") != -1 ||
					bow.innerHTML.indexOf(", Water") != -1) &&
					document.getElementById("CBwater").checked == true &&
					document.getElementById("CBbow").checked == true) {
				bowRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && bowRows[i].style.display == "none" &&
					(bow.innerHTML.indexOf("Element: Wind") != -1 ||
					bow.innerHTML.indexOf(", Wind") != -1) &&
					document.getElementById("CBwind").checked == true &&
					document.getElementById("CBbow").checked == true) {
				bowRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && bowRows[i].style.display == "none" &&
					(bow.innerHTML.indexOf("Element: Earth") != -1 ||
					bow.innerHTML.indexOf(", Earth") != -1) &&
					document.getElementById("CBearth").checked == true &&
					document.getElementById("CBbow").checked == true) {
				bowRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && bowRows[i].style.display == "none" &&
					(bow.innerHTML.indexOf("Element: Light") != -1 ||
					bow.innerHTML.indexOf(", Light") != -1) &&
					document.getElementById("CBlight").checked == true &&
					document.getElementById("CBbow").checked == true) {
				bowRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && bowRows[i].style.display == "none" &&
					(bow.innerHTML.indexOf("Element: Dark") != -1 ||
					bow.innerHTML.indexOf(", Dark") != -1) &&
					document.getElementById("CBdark").checked == true &&
					document.getElementById("CBbow").checked == true) {
				bowRows[i].style.display = "";
			}
		}
		
		let axeTable = document.getElementById("axe");
		let axeRows = axeTable.rows;
		
		for(i = 1; i < (axeRows.length); i++) {
			let axe = axeRows[i].getElementsByTagName("td")[7];
			let stmr = axeRows[i].getElementsByTagName("td")[9];
			
			if(stmr.innerHTML == "true" && axeRows[i].style.display == "none" &&
					(axe.innerHTML.indexOf("Element: Fire") != -1 ||
					axe.innerHTML.indexOf(", Fire") != -1) &&
					document.getElementById("CBfire").checked == true &&
					document.getElementById("CBaxe").checked == true) {
				axeRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && axeRows[i].style.display == "none" &&
					(axe.innerHTML.indexOf("Element: Ice") != -1 ||
					axe.innerHTML.indexOf(", Ice") != -1) &&
					document.getElementById("CBice").checked == true &&
					document.getElementById("CBaxe").checked == true) {
				axeRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && axeRows[i].style.display == "none" &&
					(axe.innerHTML.indexOf("Element: Lightning") != -1 ||
					axe.innerHTML.indexOf(", Lightning") != -1) &&
					document.getElementById("CBlightning").checked == true &&
					document.getElementById("CBaxe").checked == true) {
				axeRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && axeRows[i].style.display == "none" &&
					(axe.innerHTML.indexOf("Element: Water") != -1 ||
					axe.innerHTML.indexOf(", Water") != -1) &&
					document.getElementById("CBwater").checked == true &&
					document.getElementById("CBaxe").checked == true) {
				axeRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && axeRows[i].style.display == "none" &&
					(axe.innerHTML.indexOf("Element: Wind") != -1 ||
					axe.innerHTML.indexOf(", Wind") != -1) &&
					document.getElementById("CBwind").checked == true &&
					document.getElementById("CBaxe").checked == true) {
				axeRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && axeRows[i].style.display == "none" &&
					(axe.innerHTML.indexOf("Element: Earth") != -1 ||
					axe.innerHTML.indexOf(", Earth") != -1) &&
					document.getElementById("CBearth").checked == true &&
					document.getElementById("CBaxe").checked == true) {
				axeRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && axeRows[i].style.display == "none" &&
					(axe.innerHTML.indexOf("Element: Light") != -1 ||
					axe.innerHTML.indexOf(", Light") != -1) &&
					document.getElementById("CBlight").checked == true &&
					document.getElementById("CBaxe").checked == true) {
				axeRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && axeRows[i].style.display == "none" &&
					(axe.innerHTML.indexOf("Element: Dark") != -1 ||
					axe.innerHTML.indexOf(", Dark") != -1) &&
					document.getElementById("CBdark").checked == true &&
					document.getElementById("CBaxe").checked == true) {
				axeRows[i].style.display = "";
			}
		}
		
		let hammerTable = document.getElementById("hammer");
		let hammerRows = hammerTable.rows;
		
		for(i = 1; i < (hammerRows.length); i++) {
			let hammer = hammerRows[i].getElementsByTagName("td")[7];
			let stmr = hammerRows[i].getElementsByTagName("td")[9];
			
			if(stmr.innerHTML == "true" && hammerRows[i].style.display == "none" &&
					(hammer.innerHTML.indexOf("Element: Fire") != -1 ||
					hammer.innerHTML.indexOf(", Fire") != -1) &&
					document.getElementById("CBfire").checked == true &&
					document.getElementById("CBhammer").checked == true) {
				hammerRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && hammerRows[i].style.display == "none" &&
					(hammer.innerHTML.indexOf("Element: Ice") != -1 ||
					hammer.innerHTML.indexOf(", Ice") != -1) &&
					document.getElementById("CBice").checked == true &&
					document.getElementById("CBhammer").checked == true) {
				hammerRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && hammerRows[i].style.display == "none" &&
					(hammer.innerHTML.indexOf("Element: Lightning") != -1 ||
					hammer.innerHTML.indexOf(", Lightning") != -1) &&
					document.getElementById("CBlightning").checked == true &&
					document.getElementById("CBhammer").checked == true) {
				hammerRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && hammerRows[i].style.display == "none" &&
					(hammer.innerHTML.indexOf("Element: Water") != -1 ||
					hammer.innerHTML.indexOf(", Water") != -1) &&
					document.getElementById("CBwater").checked == true &&
					document.getElementById("CBhammer").checked == true) {
				hammerRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && hammerRows[i].style.display == "none" &&
					(hammer.innerHTML.indexOf("Element: Wind") != -1 ||
					hammer.innerHTML.indexOf(", Wind") != -1) &&
					document.getElementById("CBwind").checked == true &&
					document.getElementById("CBhammer").checked == true) {
				hammerRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && hammerRows[i].style.display == "none" &&
					(hammer.innerHTML.indexOf("Element: Earth") != -1 ||
					hammer.innerHTML.indexOf(", Earth") != -1) &&
					document.getElementById("CBearth").checked == true &&
					document.getElementById("CBhammer").checked == true) {
				hammerRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && hammerRows[i].style.display == "none" &&
					(hammer.innerHTML.indexOf("Element: Light") != -1 ||
					hammer.innerHTML.indexOf(", Light") != -1) &&
					document.getElementById("CBlight").checked == true &&
					document.getElementById("CBhammer").checked == true) {
				hammerRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && hammerRows[i].style.display == "none" &&
					(hammer.innerHTML.indexOf("Element: Dark") != -1 ||
					hammer.innerHTML.indexOf(", Dark") != -1) &&
					document.getElementById("CBdark").checked == true &&
					document.getElementById("CBhammer").checked == true) {
				hammerRows[i].style.display = "";
			}
		}
		
		let spearTable = document.getElementById("spear");
		let spearRows = spearTable.rows;
		
		for(i = 1; i < (spearRows.length); i++) {
			let spear = spearRows[i].getElementsByTagName("td")[7];
			let stmr = spearRows[i].getElementsByTagName("td")[9];
			
			if(stmr.innerHTML == "true" && spearRows[i].style.display == "none" &&
					(spear.innerHTML.indexOf("Element: Fire") != -1 ||
					spear.innerHTML.indexOf(", Fire") != -1) &&
					document.getElementById("CBfire").checked == true &&
					document.getElementById("CBspear").checked == true) {
				spearRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && spearRows[i].style.display == "none" &&
					(spear.innerHTML.indexOf("Element: Ice") != -1 ||
					spear.innerHTML.indexOf(", Ice") != -1) &&
					document.getElementById("CBice").checked == true &&
					document.getElementById("CBspear").checked == true) {
				spearRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && spearRows[i].style.display == "none" &&
					(spear.innerHTML.indexOf("Element: Lightning") != -1 ||
					spear.innerHTML.indexOf(", Lightning") != -1) &&
					document.getElementById("CBlightning").checked == true &&
					document.getElementById("CBspear").checked == true) {
				spearRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && spearRows[i].style.display == "none" &&
					(spear.innerHTML.indexOf("Element: Water") != -1 ||
					spear.innerHTML.indexOf(", Water") != -1) &&
					document.getElementById("CBwater").checked == true &&
					document.getElementById("CBspear").checked == true) {
				spearRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && spearRows[i].style.display == "none" &&
					(spear.innerHTML.indexOf("Element: Wind") != -1 ||
					spear.innerHTML.indexOf(", Wind") != -1) &&
					document.getElementById("CBwind").checked == true &&
					document.getElementById("CBspear").checked == true) {
				spearRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && spearRows[i].style.display == "none" &&
					(spear.innerHTML.indexOf("Element: Earth") != -1 ||
					spear.innerHTML.indexOf(", Earth") != -1) &&
					document.getElementById("CBearth").checked == true &&
					document.getElementById("CBspear").checked == true) {
				spearRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && spearRows[i].style.display == "none" &&
					(spear.innerHTML.indexOf("Element: Light") != -1 ||
					spear.innerHTML.indexOf(", Light") != -1) &&
					document.getElementById("CBlight").checked == true &&
					document.getElementById("CBspear").checked == true) {
				spearRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && spearRows[i].style.display == "none" &&
					(spear.innerHTML.indexOf("Element: Dark") != -1 ||
					spear.innerHTML.indexOf(", Dark") != -1) &&
					document.getElementById("CBdark").checked == true &&
					document.getElementById("CBspear").checked == true) {
				spearRows[i].style.display = "";
			}
		}
		
		let harpTable = document.getElementById("harp");
		let harpRows = harpTable.rows;
		
		for(i = 1; i < (harpRows.length); i++) {
			let harp = harpRows[i].getElementsByTagName("td")[7];
			let stmr = harpRows[i].getElementsByTagName("td")[9];
			
			if(stmr.innerHTML == "true" && harpRows[i].style.display == "none" &&
					(harp.innerHTML.indexOf("Element: Fire") != -1 ||
					harp.innerHTML.indexOf(", Fire") != -1) &&
					document.getElementById("CBfire").checked == true &&
					document.getElementById("CBharp").checked == true) {
				harpRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && harpRows[i].style.display == "none" &&
					(harp.innerHTML.indexOf("Element: Ice") != -1 ||
					harp.innerHTML.indexOf(", Ice") != -1) &&
					document.getElementById("CBice").checked == true &&
					document.getElementById("CBharp").checked == true) {
				harpRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && harpRows[i].style.display == "none" &&
					(harp.innerHTML.indexOf("Element: Lightning") != -1 ||
					harp.innerHTML.indexOf(", Lightning") != -1) &&
					document.getElementById("CBlightning").checked == true &&
					document.getElementById("CBharp").checked == true) {
				harpRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && harpRows[i].style.display == "none" &&
					(harp.innerHTML.indexOf("Element: Water") != -1 ||
					harp.innerHTML.indexOf(", Water") != -1) &&
					document.getElementById("CBwater").checked == true &&
					document.getElementById("CBharp").checked == true) {
				harpRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && harpRows[i].style.display == "none" &&
					(harp.innerHTML.indexOf("Element: Wind") != -1 ||
					harp.innerHTML.indexOf(", Wind") != -1) &&
					document.getElementById("CBwind").checked == true &&
					document.getElementById("CBharp").checked == true) {
				harpRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && harpRows[i].style.display == "none" &&
					(harp.innerHTML.indexOf("Element: Earth") != -1 ||
					harp.innerHTML.indexOf(", Earth") != -1) &&
					document.getElementById("CBearth").checked == true &&
					document.getElementById("CBharp").checked == true) {
				harpRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && harpRows[i].style.display == "none" &&
					(harp.innerHTML.indexOf("Element: Light") != -1 ||
					harp.innerHTML.indexOf(", Light") != -1) &&
					document.getElementById("CBlight").checked == true &&
					document.getElementById("CBharp").checked == true) {
				harpRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && harpRows[i].style.display == "none" &&
					(harp.innerHTML.indexOf("Element: Dark") != -1 ||
					harp.innerHTML.indexOf(", Dark") != -1) &&
					document.getElementById("CBdark").checked == true &&
					document.getElementById("CBharp").checked == true) {
				harpRows[i].style.display = "";
			}
		}
		
		let whipTable = document.getElementById("whip");
		let whipRows = whipTable.rows;
		
		for(i = 1; i < (whipRows.length); i++) {
			let whip = whipRows[i].getElementsByTagName("td")[7];
			let stmr = whipRows[i].getElementsByTagName("td")[9];
			
			if(stmr.innerHTML == "true" && whipRows[i].style.display == "none" &&
					(whip.innerHTML.indexOf("Element: Fire") != -1 ||
					whip.innerHTML.indexOf(", Fire") != -1) &&
					document.getElementById("CBfire").checked == true &&
					document.getElementById("CBwhip").checked == true) {
				whipRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && whipRows[i].style.display == "none" &&
					(whip.innerHTML.indexOf("Element: Ice") != -1 ||
					whip.innerHTML.indexOf(", Ice") != -1) &&
					document.getElementById("CBice").checked == true &&
					document.getElementById("CBwhip").checked == true) {
				whipRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && whipRows[i].style.display == "none" &&
					(whip.innerHTML.indexOf("Element: Lightning") != -1 ||
					whip.innerHTML.indexOf(", Lightning") != -1) &&
					document.getElementById("CBlightning").checked == true &&
					document.getElementById("CBwhip").checked == true) {
				whipRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && whipRows[i].style.display == "none" &&
					(whip.innerHTML.indexOf("Element: Water") != -1 ||
					whip.innerHTML.indexOf(", Water") != -1) &&
					document.getElementById("CBwater").checked == true &&
					document.getElementById("CBwhip").checked == true) {
				whipRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && whipRows[i].style.display == "none" &&
					(whip.innerHTML.indexOf("Element: Wind") != -1 ||
					whip.innerHTML.indexOf(", Wind") != -1) &&
					document.getElementById("CBwind").checked == true &&
					document.getElementById("CBwhip").checked == true) {
				whipRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && whipRows[i].style.display == "none" &&
					(whip.innerHTML.indexOf("Element: Earth") != -1 ||
					whip.innerHTML.indexOf(", Earth") != -1) &&
					document.getElementById("CBearth").checked == true &&
					document.getElementById("CBwhip").checked == true) {
				whipRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && whipRows[i].style.display == "none" &&
					(whip.innerHTML.indexOf("Element: Light") != -1 ||
					whip.innerHTML.indexOf(", Light") != -1) &&
					document.getElementById("CBlight").checked == true &&
					document.getElementById("CBwhip").checked == true) {
				whipRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && whipRows[i].style.display == "none" &&
					(whip.innerHTML.indexOf("Element: Dark") != -1 ||
					whip.innerHTML.indexOf(", Dark") != -1) &&
					document.getElementById("CBdark").checked == true &&
					document.getElementById("CBwhip").checked == true) {
				whipRows[i].style.display = "";
			}
		}
		
		let twTable = document.getElementById("tw");
		let twRows = twTable.rows;
		
		for(i = 1; i < (twRows.length); i++) {
			let tw = twRows[i].getElementsByTagName("td")[7];
			let stmr = twRows[i].getElementsByTagName("td")[9];
			
			if(stmr.innerHTML == "true" && twRows[i].style.display == "none" &&
					(tw.innerHTML.indexOf("Element: Fire") != -1 ||
					tw.innerHTML.indexOf(", Fire") != -1) &&
					document.getElementById("CBfire").checked == true &&
					document.getElementById("CBtw").checked == true) {
				twRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && twRows[i].style.display == "none" &&
					(tw.innerHTML.indexOf("Element: Ice") != -1 ||
					tw.innerHTML.indexOf(", Ice") != -1) &&
					document.getElementById("CBice").checked == true &&
					document.getElementById("CBtw").checked == true) {
				twRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && twRows[i].style.display == "none" &&
					(tw.innerHTML.indexOf("Element: Lightning") != -1 ||
					tw.innerHTML.indexOf(", Lightning") != -1) &&
					document.getElementById("CBlightning").checked == true &&
					document.getElementById("CBtw").checked == true) {
				twRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && twRows[i].style.display == "none" &&
					(tw.innerHTML.indexOf("Element: Water") != -1 ||
					tw.innerHTML.indexOf(", Water") != -1) &&
					document.getElementById("CBwater").checked == true &&
					document.getElementById("CBtw").checked == true) {
				twRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && twRows[i].style.display == "none" &&
					(tw.innerHTML.indexOf("Element: Wind") != -1 ||
					tw.innerHTML.indexOf(", Wind") != -1) &&
					document.getElementById("CBwind").checked == true &&
					document.getElementById("CBtw").checked == true) {
				twRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && twRows[i].style.display == "none" &&
					(tw.innerHTML.indexOf("Element: Earth") != -1 ||
					tw.innerHTML.indexOf(", Earth") != -1) &&
					document.getElementById("CBearth").checked == true &&
					document.getElementById("CBtw").checked == true) {
				twRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && twRows[i].style.display == "none" &&
					(tw.innerHTML.indexOf("Element: Light") != -1 ||
					tw.innerHTML.indexOf(", Light") != -1) &&
					document.getElementById("CBlight").checked == true &&
					document.getElementById("CBtw").checked == true) {
				twRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && twRows[i].style.display == "none" &&
					(tw.innerHTML.indexOf("Element: Dark") != -1 ||
					tw.innerHTML.indexOf(", Dark") != -1) &&
					document.getElementById("CBdark").checked == true &&
					document.getElementById("CBtw").checked == true) {
				twRows[i].style.display = "";
			}
		}
		
		let gunTable = document.getElementById("gun");
		let gunRows = gunTable.rows;
		
		for(i = 1; i < (gunRows.length); i++) {
			let gun = gunRows[i].getElementsByTagName("td")[7];
			let stmr = gunRows[i].getElementsByTagName("td")[9];
			
			if(stmr.innerHTML == "true" && gunRows[i].style.display == "none" &&
					(gun.innerHTML.indexOf("Element: Fire") != -1 ||
					gun.innerHTML.indexOf(", Fire") != -1) &&
					document.getElementById("CBfire").checked == true &&
					document.getElementById("CBgun").checked == true) {
				gunRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && gunRows[i].style.display == "none" &&
					(gun.innerHTML.indexOf("Element: Ice") != -1 ||
					gun.innerHTML.indexOf(", Ice") != -1) &&
					document.getElementById("CBice").checked == true &&
					document.getElementById("CBgun").checked == true) {
				gunRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && gunRows[i].style.display == "none" &&
					(gun.innerHTML.indexOf("Element: Lightning") != -1 ||
					gun.innerHTML.indexOf(", Lightning") != -1) &&
					document.getElementById("CBlightning").checked == true &&
					document.getElementById("CBgun").checked == true) {
				gunRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && gunRows[i].style.display == "none" &&
					(gun.innerHTML.indexOf("Element: Water") != -1 ||
					gun.innerHTML.indexOf(", Water") != -1) &&
					document.getElementById("CBwater").checked == true &&
					document.getElementById("CBgun").checked == true) {
				gunRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && gunRows[i].style.display == "none" &&
					(gun.innerHTML.indexOf("Element: Wind") != -1 ||
					gun.innerHTML.indexOf(", Wind") != -1) &&
					document.getElementById("CBwind").checked == true &&
					document.getElementById("CBgun").checked == true) {
				gunRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && gunRows[i].style.display == "none" &&
					(gun.innerHTML.indexOf("Element: Earth") != -1 ||
					gun.innerHTML.indexOf(", Earth") != -1) &&
					document.getElementById("CBearth").checked == true &&
					document.getElementById("CBgun").checked == true) {
				gunRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && gunRows[i].style.display == "none" &&
					(gun.innerHTML.indexOf("Element: Light") != -1 ||
					gun.innerHTML.indexOf(", Light") != -1) &&
					document.getElementById("CBlight").checked == true &&
					document.getElementById("CBgun").checked == true) {
				gunRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && gunRows[i].style.display == "none" &&
					(gun.innerHTML.indexOf("Element: Dark") != -1 ||
					gun.innerHTML.indexOf(", Dark") != -1) &&
					document.getElementById("CBdark").checked == true &&
					document.getElementById("CBgun").checked == true) {
				gunRows[i].style.display = "";
			}
		}
		
		let maceTable = document.getElementById("mace");
		let maceRows = maceTable.rows;
		
		for(i = 1; i < (maceRows.length); i++) {
			let mace = maceRows[i].getElementsByTagName("td")[7];
			let stmr = maceRows[i].getElementsByTagName("td")[9];
			
			if(stmr.innerHTML == "true" && maceRows[i].style.display == "none" &&
					(mace.innerHTML.indexOf("Element: Fire") != -1 ||
					mace.innerHTML.indexOf(", Fire") != -1) &&
					document.getElementById("CBfire").checked == true &&
					document.getElementById("CBmace").checked == true) {
				maceRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && maceRows[i].style.display == "none" &&
					(mace.innerHTML.indexOf("Element: Ice") != -1 ||
					mace.innerHTML.indexOf(", Ice") != -1) &&
					document.getElementById("CBice").checked == true &&
					document.getElementById("CBmace").checked == true) {
				maceRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && maceRows[i].style.display == "none" &&
					(mace.innerHTML.indexOf("Element: Lightning") != -1 ||
					mace.innerHTML.indexOf(", Lightning") != -1) &&
					document.getElementById("CBlightning").checked == true &&
					document.getElementById("CBmace").checked == true) {
				maceRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && maceRows[i].style.display == "none" &&
					(mace.innerHTML.indexOf("Element: Water") != -1 ||
					mace.innerHTML.indexOf(", Water") != -1) &&
					document.getElementById("CBwater").checked == true &&
					document.getElementById("CBmace").checked == true) {
				maceRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && maceRows[i].style.display == "none" &&
					(mace.innerHTML.indexOf("Element: Wind") != -1 ||
					mace.innerHTML.indexOf(", Wind") != -1) &&
					document.getElementById("CBwind").checked == true &&
					document.getElementById("CBmace").checked == true) {
				maceRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && maceRows[i].style.display == "none" &&
					(mace.innerHTML.indexOf("Element: Earth") != -1 ||
					mace.innerHTML.indexOf(", Earth") != -1) &&
					document.getElementById("CBearth").checked == true &&
					document.getElementById("CBmace").checked == true) {
				maceRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && maceRows[i].style.display == "none" &&
					(mace.innerHTML.indexOf("Element: Light") != -1 ||
					mace.innerHTML.indexOf(", Light") != -1) &&
					document.getElementById("CBlight").checked == true &&
					document.getElementById("CBmace").checked == true) {
				maceRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && maceRows[i].style.display == "none" &&
					(mace.innerHTML.indexOf("Element: Dark") != -1 ||
					mace.innerHTML.indexOf(", Dark") != -1) &&
					document.getElementById("CBdark").checked == true &&
					document.getElementById("CBmace").checked == true) {
				maceRows[i].style.display = "";
			}
		}
		
		let fistTable = document.getElementById("fist");
		let fistRows = fistTable.rows;
		
		for(i = 1; i < (fistRows.length); i++) {
			let fist = fistRows[i].getElementsByTagName("td")[7];
			let stmr = fistRows[i].getElementsByTagName("td")[9];
			
			if(stmr.innerHTML == "true" && fistRows[i].style.display == "none" &&
					(fist.innerHTML.indexOf("Element: Fire") != -1 ||
					fist.innerHTML.indexOf(", Fire") != -1) &&
					document.getElementById("CBfire").checked == true &&
					document.getElementById("CBfist").checked == true) {
				fistRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && fistRows[i].style.display == "none" &&
					(fist.innerHTML.indexOf("Element: Ice") != -1 ||
					fist.innerHTML.indexOf(", Ice") != -1) &&
					document.getElementById("CBice").checked == true &&
					document.getElementById("CBfist").checked == true) {
				fistRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && fistRows[i].style.display == "none" &&
					(fist.innerHTML.indexOf("Element: Lightning") != -1 ||
					fist.innerHTML.indexOf(", Lightning") != -1) &&
					document.getElementById("CBlightning").checked == true &&
					document.getElementById("CBfist").checked == true) {
				fistRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && fistRows[i].style.display == "none" &&
					(fist.innerHTML.indexOf("Element: Water") != -1 ||
					fist.innerHTML.indexOf(", Water") != -1) &&
					document.getElementById("CBwater").checked == true &&
					document.getElementById("CBfist").checked == true) {
				fistRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && fistRows[i].style.display == "none" &&
					(fist.innerHTML.indexOf("Element: Wind") != -1 ||
					fist.innerHTML.indexOf(", Wind") != -1) &&
					document.getElementById("CBwind").checked == true &&
					document.getElementById("CBfist").checked == true) {
				fistRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && fistRows[i].style.display == "none" &&
					(fist.innerHTML.indexOf("Element: Earth") != -1 ||
					fist.innerHTML.indexOf(", Earth") != -1) &&
					document.getElementById("CBearth").checked == true &&
					document.getElementById("CBfist").checked == true) {
				fistRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && fistRows[i].style.display == "none" &&
					(fist.innerHTML.indexOf("Element: Light") != -1 ||
					fist.innerHTML.indexOf(", Light") != -1) &&
					document.getElementById("CBlight").checked == true &&
					document.getElementById("CBfist").checked == true) {
				fistRows[i].style.display = "";
			}
			if(stmr.innerHTML == "true" && fistRows[i].style.display == "none" &&
					(fist.innerHTML.indexOf("Element: Dark") != -1 ||
					fist.innerHTML.indexOf(", Dark") != -1) &&
					document.getElementById("CBdark").checked == true &&
					document.getElementById("CBfist").checked == true) {
				fistRows[i].style.display = "";
			}
		}
	}
});

let tmrFilter = document.querySelector("input[id=ignoreTMR]");
tmrFilter.addEventListener('click', function() {
	if(document.getElementById("ignoreTMR").checked == true) {
		let i = 0;
		let daggerTable = document.getElementById("dagger");
		let daggerRows = daggerTable.rows;
		
		for(i = 1; i < (daggerRows.length); i++) {
			let tmr = daggerRows[i].getElementsByTagName("td")[8];
			
			if(tmr.innerHTML == "false" && daggerRows[i].style.display == "") {
				daggerRows[i].style.display = "";
			}
			else if(tmr.innerHTML == "true" && daggerRows[i].style.display == ""){
				daggerRows[i].style.display = "none";
			}
			
		}
		
		let swordTable = document.getElementById("sword");
		let swordRows = swordTable.rows;
		
		for(i = 1; i < (swordRows.length); i++) {
			let tmr = swordRows[i].getElementsByTagName("td")[8];
			
			if(tmr.innerHTML == "false" && swordRows[i].style.display == "") {
				swordRows[i].style.display = "";
			}
			else if(tmr.innerHTML == "true" && swordRows[i].style.display == ""){
				swordRows[i].style.display = "none";
			}
		}
		
		let gswordTable = document.getElementById("gsword");
		let gswordRows = gswordTable.rows;
		
		for(i = 1; i < (gswordRows.length); i++) {
			let tmr = gswordRows[i].getElementsByTagName("td")[8];
			
			if(tmr.innerHTML == "false" && gswordRows[i].style.display == "") {
				gswordRows[i].style.display = "";
			}
			else if(tmr.innerHTML == "true" && gswordRows[i].style.display == ""){
				gswordRows[i].style.display = "none";
			}
		}
		
		let katanaTable = document.getElementById("katana");
		let katanaRows = katanaTable.rows;
		
		for(i = 1; i < (katanaRows.length); i++) {
			let tmr = katanaRows[i].getElementsByTagName("td")[8];
			
			if(tmr.innerHTML == "false" && katanaRows[i].style.display == "") {
				katanaRows[i].style.display = "";
			}
			else if(tmr.innerHTML == "true" && katanaRows[i].style.display == ""){
				katanaRows[i].style.display = "none";
			}
		}	
		
		let staffTable = document.getElementById("staff");
		let staffRows = staffTable.rows;
		
		for(i = 1; i < (staffRows.length); i++) {
			let tmr = staffRows[i].getElementsByTagName("td")[8];
			
			if(tmr.innerHTML == "false" && staffRows[i].style.display == "") {
				staffRows[i].style.display = "";
			}
			else if(tmr.innerHTML == "true" && staffRows[i].style.display == ""){
				staffRows[i].style.display = "none";
			}
		}
		
		let rodTable = document.getElementById("rod");
		let rodRows = rodTable.rows;
		
		for(i = 1; i < (rodRows.length); i++) {
			let tmr = rodRows[i].getElementsByTagName("td")[8];
			
			if(tmr.innerHTML == "false" && rodRows[i].style.display == "") {
				rodRows[i].style.display = "";
			}
			else if(tmr.innerHTML == "true" && rodRows[i].style.display == ""){
				rodRows[i].style.display = "none";
			}
		}
		
		let bowTable = document.getElementById("bow");
		let bowRows = bowTable.rows;
		
		for(i = 1; i < (bowRows.length); i++) {
			let tmr = bowRows[i].getElementsByTagName("td")[8];
			
			if(tmr.innerHTML == "false" && bowRows[i].style.display == "") {
				bowRows[i].style.display = "";
			}
			else if(tmr.innerHTML == "true" && bowRows[i].style.display == ""){
				bowRows[i].style.display = "none";
			}
		}
		
		let axeTable = document.getElementById("axe");
		let axeRows = axeTable.rows;
		
		for(i = 1; i < (axeRows.length); i++) {
			let tmr = axeRows[i].getElementsByTagName("td")[8];
			
			if(tmr.innerHTML == "false" && axeRows[i].style.display == "") {
				axeRows[i].style.display = "";
			}
			else if(tmr.innerHTML == "true" && axeRows[i].style.display == ""){
				axeRows[i].style.display = "none";
			}
		}
		
		let hammerTable = document.getElementById("hammer");
		let hammerRows = hammerTable.rows;
		
		for(i = 1; i < (hammerRows.length); i++) {
			let tmr = hammerRows[i].getElementsByTagName("td")[8];
			
			if(tmr.innerHTML == "false" && hammerRows[i].style.display == "") {
				hammerRows[i].style.display = "";
			}
			else if(tmr.innerHTML == "true" && hammerRows[i].style.display == ""){
				hammerRows[i].style.display = "none";
			}
		}
		
		let spearTable = document.getElementById("spear");
		let spearRows = spearTable.rows;
		
		for(i = 1; i < (spearRows.length); i++) {
			let tmr = spearRows[i].getElementsByTagName("td")[8];
			
			if(tmr.innerHTML == "false" && spearRows[i].style.display == "") {
				spearRows[i].style.display = "";
			}
			else if(tmr.innerHTML == "true" && spearRows[i].style.display == ""){
				spearRows[i].style.display = "none";
			}
		}
		
		let harpTable = document.getElementById("harp");
		let harpRows = harpTable.rows;
		
		for(i = 1; i < (harpRows.length); i++) {
			let tmr = harpRows[i].getElementsByTagName("td")[8];
			
			if(tmr.innerHTML == "false" && harpRows[i].style.display == "") {
				harpRows[i].style.display = "";
			}
			else if(tmr.innerHTML == "true" && harpRows[i].style.display == ""){
				harpRows[i].style.display = "none";
			}
		}
		
		let whipTable = document.getElementById("whip");
		let whipRows = whipTable.rows;
		
		for(i = 1; i < (whipRows.length); i++) {
			let tmr = whipRows[i].getElementsByTagName("td")[8];
			
			if(tmr.innerHTML == "false" && whipRows[i].style.display == "") {
				whipRows[i].style.display = "";
			}
			else if(tmr.innerHTML == "true" && whipRows[i].style.display == ""){
				whipRows[i].style.display = "none";
			}
		}
		
		let twTable = document.getElementById("tw");
		let twRows = twTable.rows;
		
		for(i = 1; i < (twRows.length); i++) {
			let tmr = twRows[i].getElementsByTagName("td")[8];
			
			if(tmr.innerHTML == "false" && twRows[i].style.display == "") {
				twRows[i].style.display = "";
			}
			else if(tmr.innerHTML == "true" && twRows[i].style.display == ""){
				twRows[i].style.display = "none";
			}
		}
		
		let gunTable = document.getElementById("gun");
		let gunRows = gunTable.rows;
		
		for(i = 1; i < (gunRows.length); i++) {
			let tmr = gunRows[i].getElementsByTagName("td")[8];
			
			if(tmr.innerHTML == "false" && gunRows[i].style.display == "") {
				gunRows[i].style.display = "";
			}
			else if(tmr.innerHTML == "true" && gunRows[i].style.display == ""){
				gunRows[i].style.display = "none";
			}
		}
		
		let maceTable = document.getElementById("mace");
		let maceRows = maceTable.rows;
		
		for(i = 1; i < (maceRows.length); i++) {
			let tmr = maceRows[i].getElementsByTagName("td")[8];
			
			if(tmr.innerHTML == "false" && maceRows[i].style.display == "") {
				maceRows[i].style.display = "";
			}
			else if(tmr.innerHTML == "true" && maceRows[i].style.display == ""){
				maceRows[i].style.display = "none";
			}
		}
		
		let fistTable = document.getElementById("fist");
		let fistRows = fistTable.rows;
		
		for(i = 1; i < (fistRows.length); i++) {
			let tmr = fistRows[i].getElementsByTagName("td")[8];
			
			if(tmr.innerHTML == "false" && fistRows[i].style.display == "") {
				fistRows[i].style.display = "";
			}
			else if(tmr.innerHTML == "true" && fistRows[i].style.display == ""){
				fistRows[i].style.display = "none";
			}
		}
		
	}
	else {
		let i = 0;
		let daggerTable = document.getElementById("dagger");
		let daggerRows = daggerTable.rows;
		
		for(i = 1; i < (daggerRows.length); i++) {
			let dagger = daggerRows[i].getElementsByTagName("td")[7];
			let tmr = daggerRows[i].getElementsByTagName("td")[8];
			
			if(tmr.innerHTML == "true" && daggerRows[i].style.display == "none" &&
					(dagger.innerHTML.indexOf("Element: Fire") != -1 ||
					dagger.innerHTML.indexOf(", Fire") != -1) &&
					document.getElementById("CBfire").checked == true) {
				daggerRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && daggerRows[i].style.display == "none" &&
					(dagger.innerHTML.indexOf("Element: Ice") != -1 ||
					dagger.innerHTML.indexOf(", Ice") != -1) &&
					document.getElementById("CBice").checked == true) {
				daggerRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && daggerRows[i].style.display == "none" &&
					(dagger.innerHTML.indexOf("Element: Lightning") != -1 ||
					dagger.innerHTML.indexOf(", Lightning") != -1) &&
					document.getElementById("CBlightning").checked == true) {
				daggerRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && daggerRows[i].style.display == "none" &&
					(dagger.innerHTML.indexOf("Element: Water") != -1 ||
					dagger.innerHTML.indexOf(", Water") != -1) &&
					document.getElementById("CBwater").checked == true) {
				daggerRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && daggerRows[i].style.display == "none" &&
					(dagger.innerHTML.indexOf("Element: Wind") != -1 ||
					dagger.innerHTML.indexOf(", Wind") != -1) &&
					document.getElementById("CBwind").checked == true) {
				daggerRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && daggerRows[i].style.display == "none" &&
					(dagger.innerHTML.indexOf("Element: Earth") != -1 ||
					dagger.innerHTML.indexOf(", Earth") != -1) &&
					document.getElementById("CBearth").checked == true) {
				daggerRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && daggerRows[i].style.display == "none" &&
					(dagger.innerHTML.indexOf("Element: Light") != -1 ||
					dagger.innerHTML.indexOf(", Light") != -1) &&
					document.getElementById("CBlight").checked == true) {
				daggerRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && daggerRows[i].style.display == "none" &&
					(dagger.innerHTML.indexOf("Element: Dark") != -1 ||
					dagger.innerHTML.indexOf(", Dark") != -1) &&
					document.getElementById("CBdark").checked == true) {
				daggerRows[i].style.display = "";
			}
		}
		
		let swordTable = document.getElementById("sword");
		let swordRows = swordTable.rows;
		
		for(i = 1; i < (swordRows.length); i++) {
			let sword = swordRows[i].getElementsByTagName("td")[7];
			let tmr = swordRows[i].getElementsByTagName("td")[8];
			
			if(tmr.innerHTML == "true" && swordRows[i].style.display == "none" &&
					(sword.innerHTML.indexOf("Element: Fire") != -1 ||
					sword.innerHTML.indexOf(", Fire") != -1) &&
					document.getElementById("CBfire").checked == true) {
				swordRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && swordRows[i].style.display == "none" &&
					(sword.innerHTML.indexOf("Element: Ice") != -1 ||
					sword.innerHTML.indexOf(", Ice") != -1) &&
					document.getElementById("CBice").checked == true) {
				swordRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && swordRows[i].style.display == "none" &&
					(sword.innerHTML.indexOf("Element: Lightning") != -1 ||
					sword.innerHTML.indexOf(", Lightning") != -1) &&
					document.getElementById("CBlightning").checked == true) {
				swordRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && swordRows[i].style.display == "none" &&
					(sword.innerHTML.indexOf("Element: Water") != -1 ||
					sword.innerHTML.indexOf(", Water") != -1) &&
					document.getElementById("CBwater").checked == true) {
				swordRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && swordRows[i].style.display == "none" &&
					(sword.innerHTML.indexOf("Element: Wind") != -1 ||
					sword.innerHTML.indexOf(", Wind") != -1) &&
					document.getElementById("CBwind").checked == true) {
				swordRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && swordRows[i].style.display == "none" &&
					(sword.innerHTML.indexOf("Element: Earth") != -1 ||
					sword.innerHTML.indexOf(", Earth") != -1) &&
					document.getElementById("CBearth").checked == true) {
				swordRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && swordRows[i].style.display == "none" &&
					(sword.innerHTML.indexOf("Element: Light") != -1 ||
					sword.innerHTML.indexOf(", Light") != -1) &&
					document.getElementById("CBlight").checked == true) {
				swordRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && swordRows[i].style.display == "none" &&
					(sword.innerHTML.indexOf("Element: Dark") != -1 ||
					sword.innerHTML.indexOf(", Dark") != -1) &&
					document.getElementById("CBdark").checked == true) {
				swordRows[i].style.display = "";
			}
		}
		
		let gswordTable = document.getElementById("gsword");
		let gswordRows = gswordTable.rows;
		
		for(i = 1; i < (gswordRows.length); i++) {
			let gsword = gswordRows[i].getElementsByTagName("td")[7];
			let tmr = gswordRows[i].getElementsByTagName("td")[8];
			
			if(tmr.innerHTML == "true" && gswordRows[i].style.display == "none" &&
					(gsword.innerHTML.indexOf("Element: Fire") != -1 ||
					gsword.innerHTML.indexOf(", Fire") != -1) &&
					document.getElementById("CBfire").checked == true) {
				gswordRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && gswordRows[i].style.display == "none" &&
					(gsword.innerHTML.indexOf("Element: Ice") != -1 ||
					gsword.innerHTML.indexOf(", Ice") != -1) &&
					document.getElementById("CBice").checked == true) {
				gswordRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && gswordRows[i].style.display == "none" &&
					(gsword.innerHTML.indexOf("Element: Lightning") != -1 ||
					gsword.innerHTML.indexOf(", Lightning") != -1) &&
					document.getElementById("CBlightning").checked == true) {
				gswordRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && gswordRows[i].style.display == "none" &&
					(gsword.innerHTML.indexOf("Element: Water") != -1 ||
					gsword.innerHTML.indexOf(", Water") != -1) &&
					document.getElementById("CBwater").checked == true) {
				gswordRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && gswordRows[i].style.display == "none" &&
					(gsword.innerHTML.indexOf("Element: Wind") != -1 ||
					gsword.innerHTML.indexOf(", Wind") != -1) &&
					document.getElementById("CBwind").checked == true) {
				gswordRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && gswordRows[i].style.display == "none" &&
					(gsword.innerHTML.indexOf("Element: Earth") != -1 ||
					gsword.innerHTML.indexOf(", Earth") != -1) &&
					document.getElementById("CBearth").checked == true) {
				gswordRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && gswordRows[i].style.display == "none" &&
					(gsword.innerHTML.indexOf("Element: Light") != -1 ||
					gsword.innerHTML.indexOf(", Light") != -1) &&
					document.getElementById("CBlight").checked == true) {
				gswordRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && gswordRows[i].style.display == "none" &&
					(gsword.innerHTML.indexOf("Element: Dark") != -1 ||
					gsword.innerHTML.indexOf(", Dark") != -1) &&
					document.getElementById("CBdark").checked == true) {
				gswordRows[i].style.display = "";
			}
		}	
		
		let katanaTable = document.getElementById("katana");
		let katanaRows = katanaTable.rows;
		
		for(i = 1; i < (katanaRows.length); i++) {
			let katana = katanaRows[i].getElementsByTagName("td")[7];
			let tmr = katanaRows[i].getElementsByTagName("td")[8];
			
			if(tmr.innerHTML == "true" && katanaRows[i].style.display == "none" &&
					(katana.innerHTML.indexOf("Element: Fire") != -1 ||
					katana.innerHTML.indexOf(", Fire") != -1) &&
					document.getElementById("CBfire").checked == true) {
				katanaRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && katanaRows[i].style.display == "none" &&
					(katana.innerHTML.indexOf("Element: Ice") != -1 ||
					katana.innerHTML.indexOf(", Ice") != -1) &&
					document.getElementById("CBice").checked == true) {
				katanaRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && katanaRows[i].style.display == "none" &&
					(katana.innerHTML.indexOf("Element: Lightning") != -1 ||
					katana.innerHTML.indexOf(", Lightning") != -1) &&
					document.getElementById("CBlightning").checked == true) {
				katanaRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && katanaRows[i].style.display == "none" &&
					(katana.innerHTML.indexOf("Element: Water") != -1 ||
					katana.innerHTML.indexOf(", Water") != -1) &&
					document.getElementById("CBwater").checked == true) {
				katanaRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && katanaRows[i].style.display == "none" &&
					(katana.innerHTML.indexOf("Element: Wind") != -1 ||
					katana.innerHTML.indexOf(", Wind") != -1) &&
					document.getElementById("CBwind").checked == true) {
				katanaRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && katanaRows[i].style.display == "none" &&
					(katana.innerHTML.indexOf("Element: Earth") != -1 ||
					katana.innerHTML.indexOf(", Earth") != -1) &&
					document.getElementById("CBearth").checked == true) {
				katanaRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && katanaRows[i].style.display == "none" &&
					(katana.innerHTML.indexOf("Element: Light") != -1 ||
					katana.innerHTML.indexOf(", Light") != -1) &&
					document.getElementById("CBlight").checked == true) {
				katanaRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && katanaRows[i].style.display == "none" &&
					(katana.innerHTML.indexOf("Element: Dark") != -1 ||
					katana.innerHTML.indexOf(", Dark") != -1) &&
					document.getElementById("CBdark").checked == true) {
				katanaRows[i].style.display = "";
			}
		}
		
		let staffTable = document.getElementById("staff");
		let staffRows = staffTable.rows;
		
		for(i = 1; i < (staffRows.length); i++) {
			let staff = staffRows[i].getElementsByTagName("td")[7];
			let tmr = staffRows[i].getElementsByTagName("td")[8];
			
			if(tmr.innerHTML == "true" && staffRows[i].style.display == "none" &&
					(staff.innerHTML.indexOf("Element: Fire") != -1 ||
					staff.innerHTML.indexOf(", Fire") != -1) &&
					document.getElementById("CBfire").checked == true) {
				staffRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && staffRows[i].style.display == "none" &&
					(staff.innerHTML.indexOf("Element: Ice") != -1 ||
					staff.innerHTML.indexOf(", Ice") != -1) &&
					document.getElementById("CBice").checked == true) {
				staffRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && staffRows[i].style.display == "none" &&
					(staff.innerHTML.indexOf("Element: Lightning") != -1 ||
					staff.innerHTML.indexOf(", Lightning") != -1) &&
					document.getElementById("CBlightning").checked == true) {
				staffRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && staffRows[i].style.display == "none" &&
					(staff.innerHTML.indexOf("Element: Water") != -1 ||
					staff.innerHTML.indexOf(", Water") != -1) &&
					document.getElementById("CBwater").checked == true) {
				staffRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && staffRows[i].style.display == "none" &&
					(staff.innerHTML.indexOf("Element: Wind") != -1 ||
					staff.innerHTML.indexOf(", Wind") != -1) &&
					document.getElementById("CBwind").checked == true) {
				staffRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && staffRows[i].style.display == "none" &&
					(staff.innerHTML.indexOf("Element: Earth") != -1 ||
					staff.innerHTML.indexOf(", Earth") != -1) &&
					document.getElementById("CBearth").checked == true) {
				staffRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && staffRows[i].style.display == "none" &&
					(staff.innerHTML.indexOf("Element: Light") != -1 ||
					staff.innerHTML.indexOf(", Light") != -1) &&
					document.getElementById("CBlight").checked == true) {
				staffRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && staffRows[i].style.display == "none" &&
					(staff.innerHTML.indexOf("Element: Dark") != -1 ||
					staff.innerHTML.indexOf(", Dark") != -1) &&
					document.getElementById("CBdark").checked == true) {
				staffRows[i].style.display = "";
			}
		}
		
		let rodTable = document.getElementById("rod");
		let rodRows = rodTable.rows;
		
		for(i = 1; i < (rodRows.length); i++) {
			let rod = rodRows[i].getElementsByTagName("td")[7];
			let tmr = rodRows[i].getElementsByTagName("td")[8];
			
			if(tmr.innerHTML == "true" && rodRows[i].style.display == "none" &&
					(rod.innerHTML.indexOf("Element: Fire") != -1 ||
					rod.innerHTML.indexOf(", Fire") != -1) &&
					document.getElementById("CBfire").checked == true) {
				rodRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && rodRows[i].style.display == "none" &&
					(rod.innerHTML.indexOf("Element: Ice") != -1 ||
					rod.innerHTML.indexOf(", Ice") != -1) &&
					document.getElementById("CBice").checked == true) {
				rodRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && rodRows[i].style.display == "none" &&
					(rod.innerHTML.indexOf("Element: Lightning") != -1 ||
					rod.innerHTML.indexOf(", Lightning") != -1) &&
					document.getElementById("CBlightning").checked == true) {
				rodRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && rodRows[i].style.display == "none" &&
					(rod.innerHTML.indexOf("Element: Water") != -1 ||
					rod.innerHTML.indexOf(", Water") != -1) &&
					document.getElementById("CBwater").checked == true) {
				rodRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && rodRows[i].style.display == "none" &&
					(rod.innerHTML.indexOf("Element: Wind") != -1 ||
					rod.innerHTML.indexOf(", Wind") != -1) &&
					document.getElementById("CBwind").checked == true) {
				rodRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && rodRows[i].style.display == "none" &&
					(rod.innerHTML.indexOf("Element: Earth") != -1 ||
					rod.innerHTML.indexOf(", Earth") != -1) &&
					document.getElementById("CBearth").checked == true) {
				rodRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && rodRows[i].style.display == "none" &&
					(rod.innerHTML.indexOf("Element: Light") != -1 ||
					rod.innerHTML.indexOf(", Light") != -1) &&
					document.getElementById("CBlight").checked == true) {
				rodRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && rodRows[i].style.display == "none" &&
					(rod.innerHTML.indexOf("Element: Dark") != -1 ||
					rod.innerHTML.indexOf(", Dark") != -1) &&
					document.getElementById("CBdark").checked == true) {
				rodRows[i].style.display = "";
			}
		}
		
		let bowTable = document.getElementById("bow");
		let bowRows = bowTable.rows;
		
		for(i = 1; i < (bowRows.length); i++) {
			let bow = bowRows[i].getElementsByTagName("td")[7];
			let tmr = bowRows[i].getElementsByTagName("td")[8];
			
			if(tmr.innerHTML == "true" && bowRows[i].style.display == "none" &&
					(bow.innerHTML.indexOf("Element: Fire") != -1 ||
					bow.innerHTML.indexOf(", Fire") != -1) &&
					document.getElementById("CBfire").checked == true) {
				bowRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && bowRows[i].style.display == "none" &&
					(bow.innerHTML.indexOf("Element: Ice") != -1 ||
					bow.innerHTML.indexOf(", Ice") != -1) &&
					document.getElementById("CBice").checked == true) {
				bowRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && bowRows[i].style.display == "none" &&
					(bow.innerHTML.indexOf("Element: Lightning") != -1 ||
					bow.innerHTML.indexOf(", Lightning") != -1) &&
					document.getElementById("CBlightning").checked == true) {
				bowRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && bowRows[i].style.display == "none" &&
					(bow.innerHTML.indexOf("Element: Water") != -1 ||
					bow.innerHTML.indexOf(", Water") != -1) &&
					document.getElementById("CBwater").checked == true) {
				bowRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && bowRows[i].style.display == "none" &&
					(bow.innerHTML.indexOf("Element: Wind") != -1 ||
					bow.innerHTML.indexOf(", Wind") != -1) &&
					document.getElementById("CBwind").checked == true) {
				bowRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && bowRows[i].style.display == "none" &&
					(bow.innerHTML.indexOf("Element: Earth") != -1 ||
					bow.innerHTML.indexOf(", Earth") != -1) &&
					document.getElementById("CBearth").checked == true) {
				bowRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && bowRows[i].style.display == "none" &&
					(bow.innerHTML.indexOf("Element: Light") != -1 ||
					bow.innerHTML.indexOf(", Light") != -1) &&
					document.getElementById("CBlight").checked == true) {
				bowRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && bowRows[i].style.display == "none" &&
					(bow.innerHTML.indexOf("Element: Dark") != -1 ||
					bow.innerHTML.indexOf(", Dark") != -1) &&
					document.getElementById("CBdark").checked == true) {
				bowRows[i].style.display = "";
			}
		}
		
		let axeTable = document.getElementById("axe");
		let axeRows = axeTable.rows;
		
		for(i = 1; i < (axeRows.length); i++) {
			let axe = axeRows[i].getElementsByTagName("td")[7];
			let tmr = axeRows[i].getElementsByTagName("td")[8];
			
			if(tmr.innerHTML == "true" && axeRows[i].style.display == "none" &&
					(axe.innerHTML.indexOf("Element: Fire") != -1 ||
					axe.innerHTML.indexOf(", Fire") != -1) &&
					document.getElementById("CBfire").checked == true) {
				axeRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && axeRows[i].style.display == "none" &&
					(axe.innerHTML.indexOf("Element: Ice") != -1 ||
					axe.innerHTML.indexOf(", Ice") != -1) &&
					document.getElementById("CBice").checked == true) {
				axeRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && axeRows[i].style.display == "none" &&
					(axe.innerHTML.indexOf("Element: Lightning") != -1 ||
					axe.innerHTML.indexOf(", Lightning") != -1) &&
					document.getElementById("CBlightning").checked == true) {
				axeRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && axeRows[i].style.display == "none" &&
					(axe.innerHTML.indexOf("Element: Water") != -1 ||
					axe.innerHTML.indexOf(", Water") != -1) &&
					document.getElementById("CBwater").checked == true) {
				axeRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && axeRows[i].style.display == "none" &&
					(axe.innerHTML.indexOf("Element: Wind") != -1 ||
					axe.innerHTML.indexOf(", Wind") != -1) &&
					document.getElementById("CBwind").checked == true) {
				axeRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && axeRows[i].style.display == "none" &&
					(axe.innerHTML.indexOf("Element: Earth") != -1 ||
					axe.innerHTML.indexOf(", Earth") != -1) &&
					document.getElementById("CBearth").checked == true) {
				axeRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && axeRows[i].style.display == "none" &&
					(axe.innerHTML.indexOf("Element: Light") != -1 ||
					axe.innerHTML.indexOf(", Light") != -1) &&
					document.getElementById("CBlight").checked == true) {
				axeRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && axeRows[i].style.display == "none" &&
					(axe.innerHTML.indexOf("Element: Dark") != -1 ||
					axe.innerHTML.indexOf(", Dark") != -1) &&
					document.getElementById("CBdark").checked == true) {
				axeRows[i].style.display = "";
			}
		}
		
		let hammerTable = document.getElementById("hammer");
		let hammerRows = hammerTable.rows;
		
		for(i = 1; i < (hammerRows.length); i++) {
			let hammer = hammerRows[i].getElementsByTagName("td")[7];
			let tmr = hammerRows[i].getElementsByTagName("td")[8];
			
			if(tmr.innerHTML == "true" && hammerRows[i].style.display == "none" &&
					(hammer.innerHTML.indexOf("Element: Fire") != -1 ||
					hammer.innerHTML.indexOf(", Fire") != -1) &&
					document.getElementById("CBfire").checked == true) {
				hammerRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && hammerRows[i].style.display == "none" &&
					(hammer.innerHTML.indexOf("Element: Ice") != -1 ||
					hammer.innerHTML.indexOf(", Ice") != -1) &&
					document.getElementById("CBice").checked == true) {
				hammerRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && hammerRows[i].style.display == "none" &&
					(hammer.innerHTML.indexOf("Element: Lightning") != -1 ||
					hammer.innerHTML.indexOf(", Lightning") != -1) &&
					document.getElementById("CBlightning").checked == true) {
				hammerRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && hammerRows[i].style.display == "none" &&
					(hammer.innerHTML.indexOf("Element: Water") != -1 ||
					hammer.innerHTML.indexOf(", Water") != -1) &&
					document.getElementById("CBwater").checked == true) {
				hammerRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && hammerRows[i].style.display == "none" &&
					(hammer.innerHTML.indexOf("Element: Wind") != -1 ||
					hammer.innerHTML.indexOf(", Wind") != -1) &&
					document.getElementById("CBwind").checked == true) {
				hammerRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && hammerRows[i].style.display == "none" &&
					(hammer.innerHTML.indexOf("Element: Earth") != -1 ||
					hammer.innerHTML.indexOf(", Earth") != -1) &&
					document.getElementById("CBearth").checked == true) {
				hammerRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && hammerRows[i].style.display == "none" &&
					(hammer.innerHTML.indexOf("Element: Light") != -1 ||
					hammer.innerHTML.indexOf(", Light") != -1) &&
					document.getElementById("CBlight").checked == true) {
				hammerRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && hammerRows[i].style.display == "none" &&
					(hammer.innerHTML.indexOf("Element: Dark") != -1 ||
					hammer.innerHTML.indexOf(", Dark") != -1) &&
					document.getElementById("CBdark").checked == true) {
				hammerRows[i].style.display = "";
			}
		}
		
		let spearTable = document.getElementById("spear");
		let spearRows = spearTable.rows;
		
		for(i = 1; i < (spearRows.length); i++) {
			let spear = spearRows[i].getElementsByTagName("td")[7];
			let tmr = spearRows[i].getElementsByTagName("td")[8];
			
			if(tmr.innerHTML == "true" && spearRows[i].style.display == "none" &&
					(spear.innerHTML.indexOf("Element: Fire") != -1 ||
					spear.innerHTML.indexOf(", Fire") != -1) &&
					document.getElementById("CBfire").checked == true) {
				spearRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && spearRows[i].style.display == "none" &&
					(spear.innerHTML.indexOf("Element: Ice") != -1 ||
					spear.innerHTML.indexOf(", Ice") != -1) &&
					document.getElementById("CBice").checked == true) {
				spearRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && spearRows[i].style.display == "none" &&
					(spear.innerHTML.indexOf("Element: Lightning") != -1 ||
					spear.innerHTML.indexOf(", Lightning") != -1) &&
					document.getElementById("CBlightning").checked == true) {
				spearRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && spearRows[i].style.display == "none" &&
					(spear.innerHTML.indexOf("Element: Water") != -1 ||
					spear.innerHTML.indexOf(", Water") != -1) &&
					document.getElementById("CBwater").checked == true) {
				spearRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && spearRows[i].style.display == "none" &&
					(spear.innerHTML.indexOf("Element: Wind") != -1 ||
					spear.innerHTML.indexOf(", Wind") != -1) &&
					document.getElementById("CBwind").checked == true) {
				spearRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && spearRows[i].style.display == "none" &&
					(spear.innerHTML.indexOf("Element: Earth") != -1 ||
					spear.innerHTML.indexOf(", Earth") != -1) &&
					document.getElementById("CBearth").checked == true) {
				spearRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && spearRows[i].style.display == "none" &&
					(spear.innerHTML.indexOf("Element: Light") != -1 ||
					spear.innerHTML.indexOf(", Light") != -1) &&
					document.getElementById("CBlight").checked == true) {
				spearRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && spearRows[i].style.display == "none" &&
					(spear.innerHTML.indexOf("Element: Dark") != -1 ||
					spear.innerHTML.indexOf(", Dark") != -1) &&
					document.getElementById("CBdark").checked == true) {
				spearRows[i].style.display = "";
			}
		}
		
		let harpTable = document.getElementById("harp");
		let harpRows = harpTable.rows;
		
		for(i = 1; i < (harpRows.length); i++) {
			let harp = harpRows[i].getElementsByTagName("td")[7];
			let tmr = harpRows[i].getElementsByTagName("td")[8];
			
			if(tmr.innerHTML == "true" && harpRows[i].style.display == "none" &&
					(harp.innerHTML.indexOf("Element: Fire") != -1 ||
					harp.innerHTML.indexOf(", Fire") != -1) &&
					document.getElementById("CBfire").checked == true) {
				harpRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && harpRows[i].style.display == "none" &&
					(harp.innerHTML.indexOf("Element: Ice") != -1 ||
					harp.innerHTML.indexOf(", Ice") != -1) &&
					document.getElementById("CBice").checked == true) {
				harpRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && harpRows[i].style.display == "none" &&
					(harp.innerHTML.indexOf("Element: Lightning") != -1 ||
					harp.innerHTML.indexOf(", Lightning") != -1) &&
					document.getElementById("CBlightning").checked == true) {
				harpRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && harpRows[i].style.display == "none" &&
					(harp.innerHTML.indexOf("Element: Water") != -1 ||
					harp.innerHTML.indexOf(", Water") != -1) &&
					document.getElementById("CBwater").checked == true) {
				harpRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && harpRows[i].style.display == "none" &&
					(harp.innerHTML.indexOf("Element: Wind") != -1 ||
					harp.innerHTML.indexOf(", Wind") != -1) &&
					document.getElementById("CBwind").checked == true) {
				harpRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && harpRows[i].style.display == "none" &&
					(harp.innerHTML.indexOf("Element: Earth") != -1 ||
					harp.innerHTML.indexOf(", Earth") != -1) &&
					document.getElementById("CBearth").checked == true) {
				harpRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && harpRows[i].style.display == "none" &&
					(harp.innerHTML.indexOf("Element: Light") != -1 ||
					harp.innerHTML.indexOf(", Light") != -1) &&
					document.getElementById("CBlight").checked == true) {
				harpRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && harpRows[i].style.display == "none" &&
					(harp.innerHTML.indexOf("Element: Dark") != -1 ||
					harp.innerHTML.indexOf(", Dark") != -1) &&
					document.getElementById("CBdark").checked == true) {
				harpRows[i].style.display = "";
			}
		}
		
		let whipTable = document.getElementById("whip");
		let whipRows = whipTable.rows;
		
		for(i = 1; i < (whipRows.length); i++) {
			let whip = whipRows[i].getElementsByTagName("td")[7];
			let tmr = whipRows[i].getElementsByTagName("td")[8];
			
			if(tmr.innerHTML == "true" && whipRows[i].style.display == "none" &&
					(whip.innerHTML.indexOf("Element: Fire") != -1 ||
					whip.innerHTML.indexOf(", Fire") != -1) &&
					document.getElementById("CBfire").checked == true) {
				whipRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && whipRows[i].style.display == "none" &&
					(whip.innerHTML.indexOf("Element: Ice") != -1 ||
					whip.innerHTML.indexOf(", Ice") != -1) &&
					document.getElementById("CBice").checked == true) {
				whipRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && whipRows[i].style.display == "none" &&
					(whip.innerHTML.indexOf("Element: Lightning") != -1 ||
					whip.innerHTML.indexOf(", Lightning") != -1) &&
					document.getElementById("CBlightning").checked == true) {
				whipRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && whipRows[i].style.display == "none" &&
					(whip.innerHTML.indexOf("Element: Water") != -1 ||
					whip.innerHTML.indexOf(", Water") != -1) &&
					document.getElementById("CBwater").checked == true) {
				whipRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && whipRows[i].style.display == "none" &&
					(whip.innerHTML.indexOf("Element: Wind") != -1 ||
					whip.innerHTML.indexOf(", Wind") != -1) &&
					document.getElementById("CBwind").checked == true) {
				whipRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && whipRows[i].style.display == "none" &&
					(whip.innerHTML.indexOf("Element: Earth") != -1 ||
					whip.innerHTML.indexOf(", Earth") != -1) &&
					document.getElementById("CBearth").checked == true) {
				whipRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && whipRows[i].style.display == "none" &&
					(whip.innerHTML.indexOf("Element: Light") != -1 ||
					whip.innerHTML.indexOf(", Light") != -1) &&
					document.getElementById("CBlight").checked == true) {
				whipRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && whipRows[i].style.display == "none" &&
					(whip.innerHTML.indexOf("Element: Dark") != -1 ||
					whip.innerHTML.indexOf(", Dark") != -1) &&
					document.getElementById("CBdark").checked == true) {
				whipRows[i].style.display = "";
			}
		}
		
		let twTable = document.getElementById("tw");
		let twRows = twTable.rows;
		
		for(i = 1; i < (twRows.length); i++) {
			let tw = twRows[i].getElementsByTagName("td")[7];
			let tmr = twRows[i].getElementsByTagName("td")[8];
			
			if(tmr.innerHTML == "true" && twRows[i].style.display == "none" &&
					(tw.innerHTML.indexOf("Element: Fire") != -1 ||
					tw.innerHTML.indexOf(", Fire") != -1) &&
					document.getElementById("CBfire").checked == true) {
				twRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && twRows[i].style.display == "none" &&
					(tw.innerHTML.indexOf("Element: Ice") != -1 ||
					tw.innerHTML.indexOf(", Ice") != -1) &&
					document.getElementById("CBice").checked == true) {
				twRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && twRows[i].style.display == "none" &&
					(tw.innerHTML.indexOf("Element: Lightning") != -1 ||
					tw.innerHTML.indexOf(", Lightning") != -1) &&
					document.getElementById("CBlightning").checked == true) {
				twRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && twRows[i].style.display == "none" &&
					(tw.innerHTML.indexOf("Element: Water") != -1 ||
					tw.innerHTML.indexOf(", Water") != -1) &&
					document.getElementById("CBwater").checked == true) {
				twRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && twRows[i].style.display == "none" &&
					(tw.innerHTML.indexOf("Element: Wind") != -1 ||
					tw.innerHTML.indexOf(", Wind") != -1) &&
					document.getElementById("CBwind").checked == true) {
				twRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && twRows[i].style.display == "none" &&
					(tw.innerHTML.indexOf("Element: Earth") != -1 ||
					tw.innerHTML.indexOf(", Earth") != -1) &&
					document.getElementById("CBearth").checked == true) {
				twRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && twRows[i].style.display == "none" &&
					(tw.innerHTML.indexOf("Element: Light") != -1 ||
					tw.innerHTML.indexOf(", Light") != -1) &&
					document.getElementById("CBlight").checked == true) {
				twRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && twRows[i].style.display == "none" &&
					(tw.innerHTML.indexOf("Element: Dark") != -1 ||
					tw.innerHTML.indexOf(", Dark") != -1) &&
					document.getElementById("CBdark").checked == true) {
				twRows[i].style.display = "";
			}
		}
		
		let gunTable = document.getElementById("gun");
		let gunRows = gunTable.rows;
		
		for(i = 1; i < (gunRows.length); i++) {
			let gun = gunRows[i].getElementsByTagName("td")[7];
			let tmr = gunRows[i].getElementsByTagName("td")[8];
			
			if(tmr.innerHTML == "true" && gunRows[i].style.display == "none" &&
					(gun.innerHTML.indexOf("Element: Fire") != -1 ||
					gun.innerHTML.indexOf(", Fire") != -1) &&
					document.getElementById("CBfire").checked == true) {
				gunRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && gunRows[i].style.display == "none" &&
					(gun.innerHTML.indexOf("Element: Ice") != -1 ||
					gun.innerHTML.indexOf(", Ice") != -1) &&
					document.getElementById("CBice").checked == true) {
				gunRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && gunRows[i].style.display == "none" &&
					(gun.innerHTML.indexOf("Element: Lightning") != -1 ||
					gun.innerHTML.indexOf(", Lightning") != -1) &&
					document.getElementById("CBlightning").checked == true) {
				gunRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && gunRows[i].style.display == "none" &&
					(gun.innerHTML.indexOf("Element: Water") != -1 ||
					gun.innerHTML.indexOf(", Water") != -1) &&
					document.getElementById("CBwater").checked == true) {
				gunRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && gunRows[i].style.display == "none" &&
					(gun.innerHTML.indexOf("Element: Wind") != -1 ||
					gun.innerHTML.indexOf(", Wind") != -1) &&
					document.getElementById("CBwind").checked == true) {
				gunRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && gunRows[i].style.display == "none" &&
					(gun.innerHTML.indexOf("Element: Earth") != -1 ||
					gun.innerHTML.indexOf(", Earth") != -1) &&
					document.getElementById("CBearth").checked == true) {
				gunRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && gunRows[i].style.display == "none" &&
					(gun.innerHTML.indexOf("Element: Light") != -1 ||
					gun.innerHTML.indexOf(", Light") != -1) &&
					document.getElementById("CBlight").checked == true) {
				gunRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && gunRows[i].style.display == "none" &&
					(gun.innerHTML.indexOf("Element: Dark") != -1 ||
					gun.innerHTML.indexOf(", Dark") != -1) &&
					document.getElementById("CBdark").checked == true) {
				gunRows[i].style.display = "";
			}
		}
		
		let maceTable = document.getElementById("mace");
		let maceRows = maceTable.rows;
		
		for(i = 1; i < (maceRows.length); i++) {
			let mace = maceRows[i].getElementsByTagName("td")[7];
			let tmr = maceRows[i].getElementsByTagName("td")[8];
			
			if(tmr.innerHTML == "true" && maceRows[i].style.display == "none" &&
					(mace.innerHTML.indexOf("Element: Fire") != -1 ||
					mace.innerHTML.indexOf(", Fire") != -1) &&
					document.getElementById("CBfire").checked == true) {
				maceRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && maceRows[i].style.display == "none" &&
					(mace.innerHTML.indexOf("Element: Ice") != -1 ||
					mace.innerHTML.indexOf(", Ice") != -1) &&
					document.getElementById("CBice").checked == true) {
				maceRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && maceRows[i].style.display == "none" &&
					(mace.innerHTML.indexOf("Element: Lightning") != -1 ||
					mace.innerHTML.indexOf(", Lightning") != -1) &&
					document.getElementById("CBlightning").checked == true) {
				maceRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && maceRows[i].style.display == "none" &&
					(mace.innerHTML.indexOf("Element: Water") != -1 ||
					mace.innerHTML.indexOf(", Water") != -1) &&
					document.getElementById("CBwater").checked == true) {
				maceRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && maceRows[i].style.display == "none" &&
					(mace.innerHTML.indexOf("Element: Wind") != -1 ||
					mace.innerHTML.indexOf(", Wind") != -1) &&
					document.getElementById("CBwind").checked == true) {
				maceRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && maceRows[i].style.display == "none" &&
					(mace.innerHTML.indexOf("Element: Earth") != -1 ||
					mace.innerHTML.indexOf(", Earth") != -1) &&
					document.getElementById("CBearth").checked == true) {
				maceRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && maceRows[i].style.display == "none" &&
					(mace.innerHTML.indexOf("Element: Light") != -1 ||
					mace.innerHTML.indexOf(", Light") != -1) &&
					document.getElementById("CBlight").checked == true) {
				maceRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && maceRows[i].style.display == "none" &&
					(mace.innerHTML.indexOf("Element: Dark") != -1 ||
					mace.innerHTML.indexOf(", Dark") != -1) &&
					document.getElementById("CBdark").checked == true) {
				maceRows[i].style.display = "";
			}
		}
		
		let fistTable = document.getElementById("fist");
		let fistRows = fistTable.rows;
		
		for(i = 1; i < (fistRows.length); i++) {
			let fist = fistRows[i].getElementsByTagName("td")[7];
			let tmr = fistRows[i].getElementsByTagName("td")[8];
			
			if(tmr.innerHTML == "true" && fistRows[i].style.display == "none" &&
					(fist.innerHTML.indexOf("Element: Fire") != -1 ||
					fist.innerHTML.indexOf(", Fire") != -1) &&
					document.getElementById("CBfire").checked == true) {
				fistRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && fistRows[i].style.display == "none" &&
					(fist.innerHTML.indexOf("Element: Ice") != -1 ||
					fist.innerHTML.indexOf(", Ice") != -1) &&
					document.getElementById("CBice").checked == true) {
				fistRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && fistRows[i].style.display == "none" &&
					(fist.innerHTML.indexOf("Element: Lightning") != -1 ||
					fist.innerHTML.indexOf(", Lightning") != -1) &&
					document.getElementById("CBlightning").checked == true) {
				fistRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && fistRows[i].style.display == "none" &&
					(fist.innerHTML.indexOf("Element: Water") != -1 ||
					fist.innerHTML.indexOf(", Water") != -1) &&
					document.getElementById("CBwater").checked == true) {
				fistRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && fistRows[i].style.display == "none" &&
					(fist.innerHTML.indexOf("Element: Wind") != -1 ||
					fist.innerHTML.indexOf(", Wind") != -1) &&
					document.getElementById("CBwind").checked == true) {
				fistRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && fistRows[i].style.display == "none" &&
					(fist.innerHTML.indexOf("Element: Earth") != -1 ||
					fist.innerHTML.indexOf(", Earth") != -1) &&
					document.getElementById("CBearth").checked == true) {
				fistRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && fistRows[i].style.display == "none" &&
					(fist.innerHTML.indexOf("Element: Light") != -1 ||
					fist.innerHTML.indexOf(", Light") != -1) &&
					document.getElementById("CBlight").checked == true) {
				fistRows[i].style.display = "";
			}
			if(tmr.innerHTML == "true" && fistRows[i].style.display == "none" &&
					(fist.innerHTML.indexOf("Element: Dark") != -1 ||
					fist.innerHTML.indexOf(", Dark") != -1) &&
					document.getElementById("CBdark").checked == true) {
				fistRows[i].style.display = "";
			}
		}
	}
});
