<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<style><%@include file="/WEB-INF/css/AdvSearch.css"%></style>
<title>FFBE Advanced Search</title>


 <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
 <link rel="icon" type="image/png" sizes="16x16" href="resources/favicon.ico">
 <link rel="manifest" href="/manifest.json">
</head>
<body>

				<%@ page language="java" import="java.sql.*" %>
				<%
				try {
					Class.forName("org.postgresql.Driver");
					String dbURL = "jdbc:postgresql://localhost:5432/springffbe?user=postgres&password=cse132b";
					Connection con = DriverManager.getConnection(dbURL);
				%>
				<%
				Statement statement_dagger = con.createStatement();
				ResultSet rs_dagger = statement_dagger.executeQuery("SELECT * FROM public.dagger");
				
				%>
				<ul id="navbar">
					<li><a href="weapon">Weapons</a></li>
					<li><a href="armor">Armors</a></li>
					<li><a href="accessory">Accessories</a></li>
					<li><a class="active" href="filter">Filter</a></li>
				</ul>
				<button onclick="backToTop()" id="topBtn" title="Scroll to Top">Top</button>
				<br>
				<p> PAGE IS UNDER CONSTRUCTION (WIP) </p>
				
				<div class="row">
					<div class="column">
						<img src="../../resources/dagger.png" alt="dagger" id="daggericon">
						<img src="../../resources/sword.png" alt="sword" id="swordicon">
						<img src="../../resources/gsword.png" alt="gsword" id="gswordicon">
						<img src="../../resources/katana.png" alt="katana" id="katanaicon">
						<img src="../../resources/staff.png" alt="staff" id="stafficon">
						<img src="../../resources/rod.png" alt="rod" id="rodicon">	
						<img src="../../resources/bow.png" alt="bow" id="bowicon">
						<img src="../../resources/axe.png" alt="axe" id="axeicon">
					</div>
					<div class="column">
						<img src="../../resources/hammer.png" alt="hammer" id="hammericon">
						<img src="../../resources/spear.png" alt="spear" id="spearicon">
						<img src="../../resources/harp.png" alt="harp" id="harpicon">
						<img src="../../resources/whip.png" alt="whip" id="whipicon">
						<img src="../../resources/tw.png" alt="tw" id="twicon">
						<img src="../../resources/gun.png" alt="gun" id="gunicon">	
						<img src="../../resources/mace.png" alt="mace" id="maceicon">
						<img src="../../resources/fist.png" alt="fist" id="fisticon">
					</div>							
				</div>	
				
				<input id="CBdagger" type="checkbox" name="CBdagger" style="display:none">
				<input id="CBsword" type="checkbox" name="CBsword" style="display:none">
				<input id="CBgsword" type="checkbox" name="CBgsword" style="display:none">
				<input id="CBkatana" type="checkbox" name="CBkatana" style="display:none">
				<input id="CBstaff" type="checkbox" name="CBstaff" style="display:none">
				<input id="CBrod" type="checkbox" name="CBrod" style="display:none">
				<input id="CBbow" type="checkbox" name="CBbow" style="display:none">
				<input id="CBaxe" type="checkbox" name="CBaxe" style="display:none">
				<input id="CBhammer" type="checkbox" name="CBhammer" style="display:none">
				<input id="CBspear" type="checkbox" name="CBspear" style="display:none">
				<input id="CBharp" type="checkbox" name="CBharp" style="display:none">
				<input id="CBwhip" type="checkbox" name="CBwhip" style="display:none">
				<input id="CBtw" type="checkbox" name="CBtw" style="display:none">
				<input id="CBgun" type="checkbox" name="CBgun" style="display:none">
				<input id="CBmace" type="checkbox" name="CBmace" style="display:none">
				<input id="CBfist" type="checkbox" name="CBfist" style="display:none">
				
				<div class="row">
					<div class="column">
						<img src ="../../resources/fire.png" alt="fire" id="fireicon">
						<img src ="../../resources/ice.png" alt="ice" id="iceicon">
						<img src ="../../resources/lightning.png" alt="lightning" id="lightningicon">
						<img src ="../../resources/water.png" alt="water" id="watericon">
						<img src ="../../resources/wind.png" alt="wind" id="windicon">
						<img src ="../../resources/earth.png" alt="earth" id="earthicon">
						<img src ="../../resources/light.png" alt="light" id="lighticon">
						<img src ="../../resources/dark.png" alt="dark" id="darkicon">
					</div>
				</div>		
				
				<input id="CBfire"	type="checkbox" name="CBfire" style="display:none">
				<input id="CBice"	type="checkbox" name="CBice" style="display:none">
				<input id="CBlightning"	type="checkbox" name="CBlightning" style="display:none">
				<input id="CBwater"	type="checkbox" name="CBwater" style="display:none">
				<input id="CBwind"	type="checkbox" name="CBwind" style="display:none">
				<input id="CBearth"	type="checkbox" name="CBearth" style="display:none">
				<input id="CBlight"	type="checkbox" name="CBlight" style="display:none">
				<input id="CBdark"	type="checkbox" name="CBdark" style="display:none">
				
				<br>
				
				<table id="dagger">
					<caption><strong>Daggers</strong></caption>
					<tr>
						<th onclick="sortTable(0,'dagger')" style="cursor:pointer">Weapon Name</th>
						<th onclick="sortTable(1,'dagger')" style="cursor:pointer">Base HP </th>
						<th onclick="sortTable(2,'dagger')" style="cursor:pointer">Base MP </th>
						<th onclick="sortTable(3,'dagger')" style="cursor:pointer">Base ATK </th>
						<th onclick="sortTable(4,'dagger')" style="cursor:pointer">Base MAG </th>
						<th onclick="sortTable(5,'dagger')" style="cursor:pointer">Base DEF </th>
						<th onclick="sortTable(6,'dagger')" style="cursor:pointer">Base SPR </th>
						<th>Additional Effects</th>
						<th style="display: none">TMR</th>
						<th style="display: none">STMR</th>
						<th style="display: none">Time Limited</th>						
					</tr>
					<%
					while(rs_dagger.next()) {
					%>
					<tr style="display:none">
						<td align="center"><%= rs_dagger.getString("name") %></td>
						<td align="center"><%= rs_dagger.getInt("basehp") %></td>
						<td align="center"><%= rs_dagger.getInt("basemp") %></td>
						<td align="center"><%= rs_dagger.getInt("baseatk") %></td>
						<td align="center"><%= rs_dagger.getInt("basemag") %></td>
						<td align="center"><%= rs_dagger.getInt("basedef") %></td>
						<td align="center"><%= rs_dagger.getInt("basespr") %></td>
						<td align="left" style="white-space: pre-wrap"><%= rs_dagger.getString("effects") %></td>
						<td style="display: none"><%= rs_dagger.getBoolean("tmr") %></td>
						<td style="display: none"><%= rs_dagger.getBoolean("stmr") %></td>
						<td style="display: none"><%= rs_dagger.getBoolean("limitedtime") %></td>						
					</tr>
					<% }
					%>
				</table>
				<br>
				<br>
				

				<% 
				rs_dagger.close();
				statement_dagger.close();
				con.close();
				}
				catch(SQLException e) {
					e.printStackTrace();
				}
				finally {
				}
				%>

</body>

<script type="text/javascript">
function sortTable(n) {
	  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
	  table = document.getElementById("dagger");
	  switching = true;
	  //Set the sorting direction to ascending:
	  dir = "asc"; 
	  /*Make a loop that will continue until
	  no switching has been done:*/
	  while (switching) {
	    //start by saying: no switching is done:
	    switching = false;
	    rows = table.rows;
	    /*Loop through all table rows (except the
	    first, which contains table headers):*/
	    for (i = 1; i < (rows.length - 1); i++) {
	      //start by saying there should be no switching:
	      shouldSwitch = false;
	      /*Get the two elements you want to compare,
	      one from current row and one from the next:*/
		  x = rows[i].getElementsByTagName("TD")[n];
		  y = rows[i + 1].getElementsByTagName("TD")[n];
		  /*check if the two rows should switch place,
		    based on the direction, asc or desc:*/
		  if(n == 0){
		  if (dir == "asc") {
		    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
		      //if so, mark as a switch and break the loop:
		      shouldSwitch= true;
		      break;
		    }
		    } else if (dir == "desc") {
		      if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
		      //if so, mark as a switch and break the loop:
		        shouldSwitch = true;
		        break;
		      }
		    }
		  }
		  else {
			 if (dir == "asc") {
				 if (Number(x.innerHTML) > Number(y.innerHTML)) {
					  shouldSwitch = true;
					  break;
					}
			 } else if (dir == "desc") {
				 if (Number(x.innerHTML) < Number(y.innerHTML)) {
					  shouldSwitch = true;
					  break;
				 }
			 }
		  }
	    }

	    if (shouldSwitch) {
	      /*If a switch has been marked, make the switch
	      and mark that a switch has been done:*/
	      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
	      switching = true;
	      //Each time a switch is done, increase this count by 1:
	      switchcount ++;      
	    } else {
	      /*If no switching has been done AND the direction is "asc",
	      set the direction to "desc" and run the while loop again.*/
	      if (switchcount == 0 && dir == "asc") {
	        dir = "desc";
	        switching = true;
	      }
	    }
	  }
}

window.onscroll = function() {activateBtn()};

function activateBtn() {
	if(document.documentElement.scrollTop > 50) {
		document.getElementById("topBtn").style.display = "block";
	}
	else {
		document.getElementById("topBtn").style.display = "none";
	}
}

function backToTop() {
	document.documentElement.scrollTop = 0;
}

function switchImg(filter_type) {
	let brightImg = "../../resources/" + filter_type + ".png";
	if(document.getElementById(filter_type).getAttribute('src') == brightImg) {
		let darkImg = "../../resources/dark" + filter_type + ".png";
		document.getElementById(filter_type).src = darkImg;
	}
	else {
		document.getElementById(filter_type).src = brightImg;	
	}
	
}

let daggerIcon = document.querySelector("img[id=daggericon]");
daggerIcon.addEventListener('click', function() {
	
	let brightImg = "../../resources/dagger.png";
	if(document.getElementById("daggericon").getAttribute('src') == brightImg) {
		let darkImg = "../../resources/darkdagger.png";
		document.getElementById("daggericon").src = darkImg;
		document.getElementById("CBdagger").checked = true;
	}
	else {
		document.getElementById("daggericon").src = brightImg;	
		document.getElementById("CBdagger").checked = false;
	}
});

let swordIcon = document.querySelector("img[id=swordicon]");
swordIcon.addEventListener('click', function() {
	
	let brightImg = "../../resources/sword.png";
	if(document.getElementById("swordicon").getAttribute('src') == brightImg) {
		let darkImg = "../../resources/darksword.png";
		document.getElementById("swordicon").src = darkImg;
		document.getElementById("CBsword").checked = true;
	}
	else {
		document.getElementById("swordicon").src = brightImg;	
		document.getElementById("CBsword").checked = false;
	}
});

let gswordIcon = document.querySelector("img[id=gswordicon]");
gswordIcon.addEventListener('click', function() {
	
	let brightImg = "../../resources/gsword.png";
	if(document.getElementById("gswordicon").getAttribute('src') == brightImg) {
		let darkImg = "../../resources/darkgsword.png";
		document.getElementById("gswordicon").src = darkImg;
		document.getElementById("CBgsword").checked = true;
	}
	else {
		document.getElementById("gswordicon").src = brightImg;	
		document.getElementById("CBgsword").checked = false;
	}
});
	
let katanaIcon = document.querySelector("img[id=katanaicon]");
katanaIcon.addEventListener('click', function() {
	
	let brightImg = "../../resources/katana.png";
	if(document.getElementById("katanaicon").getAttribute('src') == brightImg) {
		let darkImg = "../../resources/darkkatana.png";
		document.getElementById("katanaicon").src = darkImg;
		document.getElementById("CBkatana").checked = true;
	}
	else {
		document.getElementById("katanaicon").src = brightImg;	
		document.getElementById("CBkatana").checked = false;
	}
});

let staffIcon = document.querySelector("img[id=stafficon]");
staffIcon.addEventListener('click', function() {
	
	let brightImg = "../../resources/staff.png";
	if(document.getElementById("stafficon").getAttribute('src') == brightImg) {
		let darkImg = "../../resources/darkstaff.png";
		document.getElementById("stafficon").src = darkImg;
		document.getElementById("CBstaff").checked = true;
	}
	else {
		document.getElementById("stafficon").src = brightImg;	
		document.getElementById("CBstaff").checked = false;
	}
});

let rodIcon = document.querySelector("img[id=rodicon]");
rodIcon.addEventListener('click', function() {
	
	let brightImg = "../../resources/rod.png";
	if(document.getElementById("rodicon").getAttribute('src') == brightImg) {
		let darkImg = "../../resources/darkrod.png";
		document.getElementById("rodicon").src = darkImg;
		document.getElementById("CBrod").checked = true;
	}
	else {
		document.getElementById("rodicon").src = brightImg;	
		document.getElementById("CBrod").checked = false;
	}
});

let bowIcon = document.querySelector("img[id=bowicon]");
bowIcon.addEventListener('click', function() {
	
	let brightImg = "../../resources/bow.png";
	if(document.getElementById("bowicon").getAttribute('src') == brightImg) {
		let darkImg = "../../resources/darkbow.png";
		document.getElementById("bowicon").src = darkImg;
		document.getElementById("CBbow").checked = true;
	}
	else {
		document.getElementById("bowicon").src = brightImg;	
		document.getElementById("CBbow").checked = false;
	}
});

let axeIcon = document.querySelector("img[id=axeicon]");
axeIcon.addEventListener('click', function() {
	
	let brightImg = "../../resources/axe.png";
	if(document.getElementById("axeicon").getAttribute('src') == brightImg) {
		let darkImg = "../../resources/darkaxe.png";
		document.getElementById("axeicon").src = darkImg;
		document.getElementById("CBaxe").checked = true;
	}
	else {
		document.getElementById("axeicon").src = brightImg;	
		document.getElementById("CBaxe").checked = false;
	}
});

let hammerIcon = document.querySelector("img[id=hammericon]");
hammerIcon.addEventListener('click', function() {
	
	let brightImg = "../../resources/hammer.png";
	if(document.getElementById("hammericon").getAttribute('src') == brightImg) {
		let darkImg = "../../resources/darkhammer.png";
		document.getElementById("hammericon").src = darkImg;
		document.getElementById("CBhammer").checked = true;
	}
	else {
		document.getElementById("hammericon").src = brightImg;	
		document.getElementById("CBhammer").checked = false;
	}
});

let spearIcon = document.querySelector("img[id=spearicon]");
spearIcon.addEventListener('click', function() {
	
	let brightImg = "../../resources/spear.png";
	if(document.getElementById("spearicon").getAttribute('src') == brightImg) {
		let darkImg = "../../resources/darkspear.png";
		document.getElementById("spearicon").src = darkImg;
		document.getElementById("CBspear").checked = true;
	}
	else {
		document.getElementById("spearicon").src = brightImg;	
		document.getElementById("CBspear").checked = false;
	}
});

let harpIcon = document.querySelector("img[id=harpicon]");
harpIcon.addEventListener('click', function() {
	
	let brightImg = "../../resources/harp.png";
	if(document.getElementById("harpicon").getAttribute('src') == brightImg) {
		let darkImg = "../../resources/darkharp.png";
		document.getElementById("harpicon").src = darkImg;
		document.getElementById("CBharp").checked = true;
	}
	else {
		document.getElementById("harpicon").src = brightImg;	
		document.getElementById("CBharp").checked = false;
	}
});

let whipIcon = document.querySelector("img[id=whipicon]");
whipIcon.addEventListener('click', function() {
	
	let brightImg = "../../resources/whip.png";
	if(document.getElementById("whipicon").getAttribute('src') == brightImg) {
		let darkImg = "../../resources/darkwhip.png";
		document.getElementById("whipicon").src = darkImg;
		document.getElementById("CBwhip").checked = true;
	}
	else {
		document.getElementById("whipicon").src = brightImg;	
		document.getElementById("CBwhip").checked = false;
	}
});

let twIcon = document.querySelector("img[id=twicon]");
twIcon.addEventListener('click', function() {
	
	let brightImg = "../../resources/tw.png";
	if(document.getElementById("twicon").getAttribute('src') == brightImg) {
		let darkImg = "../../resources/darktw.png";
		document.getElementById("twicon").src = darkImg;
		document.getElementById("CBtw").checked = true;
	}
	else {
		document.getElementById("twicon").src = brightImg;	
		document.getElementById("CBtw").checked = false;
	}
});

let gunIcon = document.querySelector("img[id=gunicon]");
gunIcon.addEventListener('click', function() {
	
	let brightImg = "../../resources/gun.png";
	if(document.getElementById("gunicon").getAttribute('src') == brightImg) {
		let darkImg = "../../resources/darkgun.png";
		document.getElementById("gunicon").src = darkImg;
		document.getElementById("CBgun").checked = true;
	}
	else {
		document.getElementById("gunicon").src = brightImg;	
		document.getElementById("CBgun").checked = false;
	}
});

let maceIcon = document.querySelector("img[id=maceicon]");
maceIcon.addEventListener('click', function() {
	
	let brightImg = "../../resources/mace.png";
	if(document.getElementById("maceicon").getAttribute('src') == brightImg) {
		let darkImg = "../../resources/darkmace.png";
		document.getElementById("maceicon").src = darkImg;
		document.getElementById("CBmace").checked = true;
	}
	else {
		document.getElementById("maceicon").src = brightImg;	
		document.getElementById("CBmace").checked = false;
	}
});

let fistIcon = document.querySelector("img[id=fisticon]");
fistIcon.addEventListener('click', function() {
	
	let brightImg = "../../resources/fist.png";
	if(document.getElementById("fisticon").getAttribute('src') == brightImg) {
		let darkImg = "../../resources/darkfist.png";
		document.getElementById("fisticon").src = darkImg;
		document.getElementById("CBfist").checked = true;
	}
	else {
		document.getElementById("fisticon").src = brightImg;	
		document.getElementById("CBfist").checked = false;
	}
});

let fireIcon = document.querySelector("img[id=fireicon]");
fireIcon.addEventListener('click', function() {
	let brightImg = "../../resources/fire.png";
	if(document.getElementById("fireicon").getAttribute('src') == brightImg) {
		let darkImg = "../../resources/darkfire.png";
		document.getElementById("fireicon").src = darkImg;
		document.getElementById("CBfire").checked = true;
	}
	else {
		document.getElementById("fireicon").src = brightImg;
		document.getElementById("CBfire").checked = false;
	}
});

let iceIcon = document.querySelector("img[id=iceicon]");
iceIcon.addEventListener('click', function() {
	let brightImg = "../../resources/ice.png";
	if(document.getElementById("iceicon").getAttribute('src') == brightImg) {
		let darkImg = "../../resources/darkice.png";
		document.getElementById("iceicon").src = darkImg;
		document.getElementById("CBice").checked = true;
	}
	else {
		document.getElementById("iceicon").src = brightImg;
		document.getElementById("CBice").checked = false;
	}
});

let lightningIcon = document.querySelector("img[id=lightningicon]");
lightningIcon.addEventListener('click', function() {
	let brightImg = "../../resources/lightning.png";
	if(document.getElementById("lightningicon").getAttribute('src') == brightImg) {
		let darkImg = "../../resources/darklightning.png";
		document.getElementById("lightningicon").src = darkImg;
		document.getElementById("CBlightning").checked = true;
	}
	else {
		document.getElementById("lightningicon").src = brightImg;
		document.getElementById("CBlightning").checked = false;
	}
});

let waterIcon = document.querySelector("img[id=watericon]");
waterIcon.addEventListener('click', function() {
	let brightImg = "../../resources/water.png";
	if(document.getElementById("watericon").getAttribute('src') == brightImg) {
		let darkImg = "../../resources/darkwater.png";
		document.getElementById("watericon").src = darkImg;
		document.getElementById("CBwater").checked = true;
	}
	else {
		document.getElementById("watericon").src = brightImg;
		document.getElementById("CBwater").checked = false;
	}
});

let windIcon = document.querySelector("img[id=windicon]");
windIcon.addEventListener('click', function() {
	let brightImg = "../../resources/wind.png";
	if(document.getElementById("windicon").getAttribute('src') == brightImg) {
		let darkImg = "../../resources/darkwind.png";
		document.getElementById("windicon").src = darkImg;
		document.getElementById("CBwind").checked = true;
	}
	else {
		document.getElementById("windicon").src = brightImg;
		document.getElementById("CBwind").checked = false;
	}
});

let earthIcon = document.querySelector("img[id=earthicon]");
earthIcon.addEventListener('click', function() {
	let brightImg = "../../resources/earth.png";
	if(document.getElementById("earthicon").getAttribute('src') == brightImg) {
		let darkImg = "../../resources/darkearth.png";
		document.getElementById("earthicon").src = darkImg;
		document.getElementById("CBearth").checked = true;
	}
	else {
		document.getElementById("earthicon").src = brightImg;
		document.getElementById("CBearth").checked = false;
	}
});

let lightIcon = document.querySelector("img[id=lighticon]");
lightIcon.addEventListener('click', function() {
	let brightImg = "../../resources/light.png";
	if(document.getElementById("lighticon").getAttribute('src') == brightImg) {
		let darkImg = "../../resources/darklight.png";
		document.getElementById("lighticon").src = darkImg;
		document.getElementById("CBlight").checked = true;
	}
	else {
		document.getElementById("lighticon").src = brightImg;
		document.getElementById("CBlight").checked = false;
	}
});

let darkIcon = document.querySelector("img[id=darkicon]");
darkIcon.addEventListener('click', function() {
	let brightImg = "../../resources/dark.png";
	if(document.getElementById("darkicon").getAttribute('src') == brightImg) {
		let darkImg = "../../resources/darkdark.png";
		document.getElementById("darkicon").src = darkImg;
		document.getElementById("CBdark").checked = true;
	}
	else {
		document.getElementById("darkicon").src = brightImg;
		document.getElementById("CBdark").checked = false;
	}
});

let x, i = 0;
let daggerTable = document.getElementById("dagger");
let rows = daggerTable.rows;
if(document.getElementById("CBdagger").checked == false) {
	for (i = 1; i < (rows.length - 1); i++) {
		if(document.getElementById("CBfire").checked == false) {
			x = rows[i].getElementsByTagName("TD")[7];
			if(x.innerHTML.indexOf("Element: Fire")!= -1 || x.innerHTML.indexOf(", Fire") != -1) {
				rows[i].style.display = '';
			}
			else {
				rows[i].style.display = "none";
			}
			//repeat for all other elements and weapons
		}
	}
}
	


</script>
</html>