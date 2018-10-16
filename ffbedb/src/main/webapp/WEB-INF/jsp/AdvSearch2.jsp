<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<style><%@include file="/WEB-INF/css/AdvSearch.css"%></style>
<title>FFBE Advanced Armor Search</title>


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
					//String dbURL = "jdbc:postgresql://ec2-54-235-90-0.compute-1.amazonaws.com:5432/ddpko2antmanq7?user=yqajgjdfdywxwf&password=c0d32a119c31956b3159809231b8167066e7ae0af40f09dea640db5ede8e0dde";
					Connection con = DriverManager.getConnection(dbURL);
				%>
				<%
				Statement statement_lshield = con.createStatement();
				ResultSet rs_lshield = statement_lshield.executeQuery("SELECT * FROM public.lshield");
				
				%>
				<ul id="navbar">
					<li><a href="weapon">Weapons</a></li>
					<li><a href="armor">Armors</a></li>
					<li><a href="accessory">Accessories</a></li>
					<li><a href="filter">Weapon Search</a></li>
					<li><a class="active" href="filter2">Armor Search</a></li>
				</ul>
				<button onclick="backToTop()" id="topBtn" title="Scroll to Top">Top</button>
				<br>
				<p> Advanced Armor Search (WIP) </p>
				
				<div class="row">
					<div class="column">
						<img src="../../resources/darklshield.png" alt="lshield" id="lshieldicon">
						<img src="../../resources/darkhshield.png" alt="hshield" id="hshieldicon">
						<img src="../../resources/darkhat.png" alt="hat" id="haticon">
						<img src="../../resources/darkhelm.png" alt="helm" id="helmicon">
						<img src="../../resources/darkclothes.png" alt="clothes" id="clothesicon">
						<img src="../../resources/darklarmor.png" alt="larmor" id="larmoricon">	
						<img src="../../resources/darkharmor.png" alt="harmor" id="harmoricon">
						<img src="../../resources/darkrobe.png" alt="robe" id="robeicon">
					</div>					
				</div>	
				
				<input id="CBlshield" type="checkbox" name="CBlshield" style="display:none">
				<input id="CBhshield" type="checkbox" name="CBhshield" style="display:none">
				<input id="CBhat" type="checkbox" name="CBhat" style="display:none">
				<input id="CBhelm" type="checkbox" name="CBhelm" style="display:none">
				<input id="CBclothes" type="checkbox" name="CBclothes" style="display:none">
				<input id="CBlarmor" type="checkbox" name="CBlarmor" style="display:none">
				<input id="CBharmor" type="checkbox" name="CBharmor" style="display:none">
				<input id="CBrobe" type="checkbox" name="CBrobe" style="display:none">
				
				<div class="row">
					<div class="column">
						<img src ="../../resources/darkfire.png" alt="fire" id="fireicon">
						<img src ="../../resources/darkice.png" alt="ice" id="iceicon">
						<img src ="../../resources/darklightning.png" alt="lightning" id="lightningicon">
						<img src ="../../resources/darkwater.png" alt="water" id="watericon">
						<img src ="../../resources/darkwind.png" alt="wind" id="windicon">
						<img src ="../../resources/darkearth.png" alt="earth" id="earthicon">
						<img src ="../../resources/darklight.png" alt="light" id="lighticon">
						<img src ="../../resources/darkdark.png" alt="dark" id="darkicon">
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
				
				<table id="lshield">
					<caption><strong>Light Shields</strong></caption>
					<tr>
						<th onclick="sortTable(0,'lshield')" style="cursor:pointer">Armor Name</th>
						<th onclick="sortTable(1,'lshield')" style="cursor:pointer">Base HP </th>
						<th onclick="sortTable(2,'lshield')" style="cursor:pointer">Base MP </th>
						<th onclick="sortTable(3,'lshield')" style="cursor:pointer">Base ATK </th>
						<th onclick="sortTable(4,'lshield')" style="cursor:pointer">Base MAG </th>
						<th onclick="sortTable(5,'lshield')" style="cursor:pointer">Base DEF </th>
						<th onclick="sortTable(6,'lshield')" style="cursor:pointer">Base SPR </th>
						<th>Additional Effects</th>
						<th style="display: none">TMR</th>
						<th style="display: none">STMR</th>
						<th style="display: none">Time Limited</th>						
					</tr>
					<%
					while(rs_lshield.next()) {
					%>
					<tr style="display:none">
						<td align="center"><%= rs_lshield.getString("name") %></td>
						<td align="center"><%= rs_lshield.getInt("basehp") %></td>
						<td align="center"><%= rs_lshield.getInt("basemp") %></td>
						<td align="center"><%= rs_lshield.getInt("baseatk") %></td>
						<td align="center"><%= rs_lshield.getInt("basemag") %></td>
						<td align="center"><%= rs_lshield.getInt("basedef") %></td>
						<td align="center"><%= rs_lshield.getInt("basespr") %></td>
						<td align="left" style="white-space: pre-wrap"><%= rs_lshield.getString("effects") %></td>
						<td style="display: none"><%= rs_lshield.getBoolean("tmr") %></td>
						<td style="display: none"><%= rs_lshield.getBoolean("stmr") %></td>
						<td style="display: none"><%= rs_lshield.getBoolean("limitedtime") %></td>						
					</tr>
					<% }
					%>
				</table>
				<%
				Statement statement_hshield = con.createStatement();
				ResultSet rs_hshield = statement_hshield.executeQuery("SELECT * FROM public.hshield");
				%>
				<br>	
				<table id="hshield">
					<caption><strong>Heavy Shields</strong></caption>
					<tr>
						<th onclick="sortTable(0,'hshield')" style="cursor:pointer">Weapon Name</th>
						<th onclick="sortTable(1,'hshield')" style="cursor:pointer">Base HP </th>
						<th onclick="sortTable(2,'hshield')" style="cursor:pointer">Base MP </th>
						<th onclick="sortTable(3,'hshield')" style="cursor:pointer">Base ATK </th>
						<th onclick="sortTable(4,'hshield')" style="cursor:pointer">Base MAG </th>
						<th onclick="sortTable(5,'hshield')" style="cursor:pointer">Base DEF </th>
						<th onclick="sortTable(6,'hshield')" style="cursor:pointer">Base SPR </th>
						<th>Additional Effects</th>
						<th style="display: none">TMR</th>
						<th style="display: none">STMR</th>
						<th style="display: none">Time Limited</th>						
					</tr>
					<%
					while(rs_hshield.next()) {
					%>
					<tr style="display:none">
						<td align="center"><%= rs_hshield.getString("name") %></td>
						<td align="center"><%= rs_hshield.getInt("basehp") %></td>
						<td align="center"><%= rs_hshield.getInt("basemp") %></td>
						<td align="center"><%= rs_hshield.getInt("baseatk") %></td>
						<td align="center"><%= rs_hshield.getInt("basemag") %></td>
						<td align="center"><%= rs_hshield.getInt("basedef") %></td>
						<td align="center"><%= rs_hshield.getInt("basespr") %></td>
						<td align="left" style="white-space: pre-wrap"><%= rs_hshield.getString("effects") %></td>
						<td style="display: none"><%= rs_hshield.getBoolean("tmr") %></td>
						<td style="display: none"><%= rs_hshield.getBoolean("stmr") %></td>
						<td style="display: none"><%= rs_hshield.getBoolean("limitedtime") %></td>						
					</tr>
					<% }
					%>
				</table>
				
				<%
				Statement statement_hat = con.createStatement();
				ResultSet rs_hat = statement_hat.executeQuery("SELECT * FROM public.hat");
				%>
				<br>	
				<table id="hat">
					<caption><strong>Great Swords</strong></caption>
					<tr>
						<th onclick="sortTable(0,'hat')" style="cursor:pointer">Weapon Name</th>
						<th onclick="sortTable(1,'hat')" style="cursor:pointer">Base HP </th>
						<th onclick="sortTable(2,'hat')" style="cursor:pointer">Base MP </th>
						<th onclick="sortTable(3,'hat')" style="cursor:pointer">Base ATK </th>
						<th onclick="sortTable(4,'hat')" style="cursor:pointer">Base MAG </th>
						<th onclick="sortTable(5,'hat')" style="cursor:pointer">Base DEF </th>
						<th onclick="sortTable(6,'hat')" style="cursor:pointer">Base SPR </th>
						<th>Additional Effects</th>
						<th style="display: none">TMR</th>
						<th style="display: none">STMR</th>
						<th style="display: none">Time Limited</th>						
					</tr>
					<%
					while(rs_hat.next()) {
					%>
					<tr style="display:none">
						<td align="center"><%= rs_hat.getString("name") %></td>
						<td align="center"><%= rs_hat.getInt("basehp") %></td>
						<td align="center"><%= rs_hat.getInt("basemp") %></td>
						<td align="center"><%= rs_hat.getInt("baseatk") %></td>
						<td align="center"><%= rs_hat.getInt("basemag") %></td>
						<td align="center"><%= rs_hat.getInt("basedef") %></td>
						<td align="center"><%= rs_hat.getInt("basespr") %></td>
						<td align="left" style="white-space: pre-wrap"><%= rs_hat.getString("effects") %></td>
						<td style="display: none"><%= rs_hat.getBoolean("tmr") %></td>
						<td style="display: none"><%= rs_hat.getBoolean("stmr") %></td>
						<td style="display: none"><%= rs_hat.getBoolean("limitedtime") %></td>						
					</tr>
					<% }
					%>
				</table>	
				
				<%
				Statement statement_helm = con.createStatement();
				ResultSet rs_helm = statement_helm.executeQuery("SELECT * FROM public.helm");
				%>
				<br>	
				<table id="helm">
					<caption><strong>Helms</strong></caption>
					<tr>
						<th onclick="sortTable(0,'helm')" style="cursor:pointer">Weapon Name</th>
						<th onclick="sortTable(1,'helm')" style="cursor:pointer">Base HP </th>
						<th onclick="sortTable(2,'helm')" style="cursor:pointer">Base MP </th>
						<th onclick="sortTable(3,'helm')" style="cursor:pointer">Base ATK </th>
						<th onclick="sortTable(4,'helm')" style="cursor:pointer">Base MAG </th>
						<th onclick="sortTable(5,'helm')" style="cursor:pointer">Base DEF </th>
						<th onclick="sortTable(6,'helm')" style="cursor:pointer">Base SPR </th>
						<th>Additional Effects</th>
						<th style="display: none">TMR</th>
						<th style="display: none">STMR</th>
						<th style="display: none">Time Limited</th>						
					</tr>
					<%
					while(rs_helm.next()) {
					%>
					<tr style="display:none">
						<td align="center"><%= rs_helm.getString("name") %></td>
						<td align="center"><%= rs_helm.getInt("basehp") %></td>
						<td align="center"><%= rs_helm.getInt("basemp") %></td>
						<td align="center"><%= rs_helm.getInt("baseatk") %></td>
						<td align="center"><%= rs_helm.getInt("basemag") %></td>
						<td align="center"><%= rs_helm.getInt("basedef") %></td>
						<td align="center"><%= rs_helm.getInt("basespr") %></td>
						<td align="left" style="white-space: pre-wrap"><%= rs_helm.getString("effects") %></td>
						<td style="display: none"><%= rs_helm.getBoolean("tmr") %></td>
						<td style="display: none"><%= rs_helm.getBoolean("stmr") %></td>
						<td style="display: none"><%= rs_helm.getBoolean("limitedtime") %></td>						
					</tr>
					<% }
					%>
				</table>								
				
				<%
				Statement statement_clothes = con.createStatement();
				ResultSet rs_clothes = statement_clothes.executeQuery("SELECT * FROM public.clothes");
				%>
				<br>	
				<table id="clothes">
					<caption><strong>Clothes</strong></caption>
					<tr>
						<th onclick="sortTable(0,'clothes')" style="cursor:pointer">Weapon Name</th>
						<th onclick="sortTable(1,'clothes')" style="cursor:pointer">Base HP </th>
						<th onclick="sortTable(2,'clothes')" style="cursor:pointer">Base MP </th>
						<th onclick="sortTable(3,'clothes')" style="cursor:pointer">Base ATK </th>
						<th onclick="sortTable(4,'clothes')" style="cursor:pointer">Base MAG </th>
						<th onclick="sortTable(5,'clothes')" style="cursor:pointer">Base DEF </th>
						<th onclick="sortTable(6,'clothes')" style="cursor:pointer">Base SPR </th>
						<th>Additional Effects</th>
						<th style="display: none">TMR</th>
						<th style="display: none">STMR</th>
						<th style="display: none">Time Limited</th>						
					</tr>
					<%
					while(rs_clothes.next()) {
					%>
					<tr style="display:none">
						<td align="center"><%= rs_clothes.getString("name") %></td>
						<td align="center"><%= rs_clothes.getInt("basehp") %></td>
						<td align="center"><%= rs_clothes.getInt("basemp") %></td>
						<td align="center"><%= rs_clothes.getInt("baseatk") %></td>
						<td align="center"><%= rs_clothes.getInt("basemag") %></td>
						<td align="center"><%= rs_clothes.getInt("basedef") %></td>
						<td align="center"><%= rs_clothes.getInt("basespr") %></td>
						<td align="left" style="white-space: pre-wrap"><%= rs_clothes.getString("effects") %></td>
						<td style="display: none"><%= rs_clothes.getBoolean("tmr") %></td>
						<td style="display: none"><%= rs_clothes.getBoolean("stmr") %></td>
						<td style="display: none"><%= rs_clothes.getBoolean("limitedtime") %></td>						
					</tr>
					<% }
					%>
				</table>					

				<%
				Statement statement_larmor = con.createStatement();
				ResultSet rs_larmor = statement_larmor.executeQuery("SELECT * FROM public.larmor");
				%>
				<br>	
				<table id="larmor">
					<caption><strong>Light Armor</strong></caption>
					<tr>
						<th onclick="sortTable(0,'larmor')" style="cursor:pointer">Weapon Name</th>
						<th onclick="sortTable(1,'larmor')" style="cursor:pointer">Base HP </th>
						<th onclick="sortTable(2,'larmor')" style="cursor:pointer">Base MP </th>
						<th onclick="sortTable(3,'larmor')" style="cursor:pointer">Base ATK </th>
						<th onclick="sortTable(4,'larmor')" style="cursor:pointer">Base MAG </th>
						<th onclick="sortTable(5,'larmor')" style="cursor:pointer">Base DEF </th>
						<th onclick="sortTable(6,'larmor')" style="cursor:pointer">Base SPR </th>
						<th>Additional Effects</th>
						<th style="display: none">TMR</th>
						<th style="display: none">STMR</th>
						<th style="display: none">Time Limited</th>						
					</tr>
					<%
					while(rs_larmor.next()) {
					%>
					<tr style="display:none">
						<td align="center"><%= rs_larmor.getString("name") %></td>
						<td align="center"><%= rs_larmor.getInt("basehp") %></td>
						<td align="center"><%= rs_larmor.getInt("basemp") %></td>
						<td align="center"><%= rs_larmor.getInt("baseatk") %></td>
						<td align="center"><%= rs_larmor.getInt("basemag") %></td>
						<td align="center"><%= rs_larmor.getInt("basedef") %></td>
						<td align="center"><%= rs_larmor.getInt("basespr") %></td>
						<td align="left" style="white-space: pre-wrap"><%= rs_larmor.getString("effects") %></td>
						<td style="display: none"><%= rs_larmor.getBoolean("tmr") %></td>
						<td style="display: none"><%= rs_larmor.getBoolean("stmr") %></td>
						<td style="display: none"><%= rs_larmor.getBoolean("limitedtime") %></td>						
					</tr>
					<% }
					%>
				</table>	
				
				<%
				Statement statement_harmor = con.createStatement();
				ResultSet rs_harmor = statement_harmor.executeQuery("SELECT * FROM public.harmor");
				%>
				<br>	
				<table id="harmor">
					<caption><strong>Heavy Armor</strong></caption>
					<tr>
						<th onclick="sortTable(0,'harmor')" style="cursor:pointer">Weapon Name</th>
						<th onclick="sortTable(1,'harmor')" style="cursor:pointer">Base HP </th>
						<th onclick="sortTable(2,'harmor')" style="cursor:pointer">Base MP </th>
						<th onclick="sortTable(3,'harmor')" style="cursor:pointer">Base ATK </th>
						<th onclick="sortTable(4,'harmor')" style="cursor:pointer">Base MAG </th>
						<th onclick="sortTable(5,'harmor')" style="cursor:pointer">Base DEF </th>
						<th onclick="sortTable(6,'harmor')" style="cursor:pointer">Base SPR </th>
						<th>Additional Effects</th>
						<th style="display: none">TMR</th>
						<th style="display: none">STMR</th>
						<th style="display: none">Time Limited</th>						
					</tr>
					<%
					while(rs_harmor.next()) {
					%>
					<tr style="display:none">
						<td align="center"><%= rs_harmor.getString("name") %></td>
						<td align="center"><%= rs_harmor.getInt("basehp") %></td>
						<td align="center"><%= rs_harmor.getInt("basemp") %></td>
						<td align="center"><%= rs_harmor.getInt("baseatk") %></td>
						<td align="center"><%= rs_harmor.getInt("basemag") %></td>
						<td align="center"><%= rs_harmor.getInt("basedef") %></td>
						<td align="center"><%= rs_harmor.getInt("basespr") %></td>
						<td align="left" style="white-space: pre-wrap"><%= rs_harmor.getString("effects") %></td>
						<td style="display: none"><%= rs_harmor.getBoolean("tmr") %></td>
						<td style="display: none"><%= rs_harmor.getBoolean("stmr") %></td>
						<td style="display: none"><%= rs_harmor.getBoolean("limitedtime") %></td>						
					</tr>
					<% }
					%>
				</table>					
				
				<%
				Statement statement_robe = con.createStatement();
				ResultSet rs_robe = statement_robe.executeQuery("SELECT * FROM public.robe");
				%>
				<br>	
				<table id="robe">
					<caption><strong>Robe</strong></caption>
					<tr>
						<th onclick="sortTable(0,'robe')" style="cursor:pointer">Weapon Name</th>
						<th onclick="sortTable(1,'robe')" style="cursor:pointer">Base HP </th>
						<th onclick="sortTable(2,'robe')" style="cursor:pointer">Base MP </th>
						<th onclick="sortTable(3,'robe')" style="cursor:pointer">Base ATK </th>
						<th onclick="sortTable(4,'robe')" style="cursor:pointer">Base MAG </th>
						<th onclick="sortTable(5,'robe')" style="cursor:pointer">Base DEF </th>
						<th onclick="sortTable(6,'robe')" style="cursor:pointer">Base SPR </th>
						<th>Additional Effects</th>
						<th style="display: none">TMR</th>
						<th style="display: none">STMR</th>
						<th style="display: none">Time Limited</th>						
					</tr>
					<%
					while(rs_robe.next()) {
					%>
					<tr style="display:none">
						<td align="center"><%= rs_robe.getString("name") %></td>
						<td align="center"><%= rs_robe.getInt("basehp") %></td>
						<td align="center"><%= rs_robe.getInt("basemp") %></td>
						<td align="center"><%= rs_robe.getInt("baseatk") %></td>
						<td align="center"><%= rs_robe.getInt("basemag") %></td>
						<td align="center"><%= rs_robe.getInt("basedef") %></td>
						<td align="center"><%= rs_robe.getInt("basespr") %></td>
						<td align="left" style="white-space: pre-wrap"><%= rs_robe.getString("effects") %></td>
						<td style="display: none"><%= rs_robe.getBoolean("tmr") %></td>
						<td style="display: none"><%= rs_robe.getBoolean("stmr") %></td>
						<td style="display: none"><%= rs_robe.getBoolean("limitedtime") %></td>						
					</tr>
					<% }
					%>
				</table>	
																																			
				<% 
				rs_lshield.close();
				statement_lshield.close();
				
				rs_hshield.close();
				statement_hshield.close();
				
				rs_hat.close();
				statement_hat.close();
				
				rs_helm.close();
				statement_helm.close();
				
				rs_clothes.close();
				statement_clothes.close();
				
				rs_larmor.close();
				statement_larmor.close();
				
				rs_harmor.close();
				statement_harmor.close();
				
				rs_robe.close();
				statement_robe.close();
			
				
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
function sortTable(n, name) {
	  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
	  table = document.getElementById(name);
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
</script>
</html>