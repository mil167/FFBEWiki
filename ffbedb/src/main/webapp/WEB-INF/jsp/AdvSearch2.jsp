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
					//String dbURL = "jdbc:postgresql://localhost:5432/springffbe?user=postgres&password=cse132b";
					String dbURL = "jdbc:postgresql://ec2-54-235-90-0.compute-1.amazonaws.com:5432/ddpko2antmanq7?user=yqajgjdfdywxwf&password=c0d32a119c31956b3159809231b8167066e7ae0af40f09dea640db5ede8e0dde";
					Connection con = DriverManager.getConnection(dbURL);
				%>
				<%
				Statement statement_lshield = con.createStatement();
				ResultSet rs_lshield = statement_lshield.executeQuery("SELECT * FROM public.lshield");
				
				%>
				<ul id="navbar">
					<li><a href="/">Home</a></li>
					<li><a href="weapon">Weapons</a></li>
					<li><a href="armor">Armors</a></li>
					<li><a href="accessory">Accessories</a></li>
					<li><a href="filter">Weapon Search</a></li>
					<li><a class="active" href="filter2">Armor Search</a></li>
				</ul>
				<button onclick="backToTop()" id="topBtn" title="Scroll to Top">Top</button>
				<br>
				<div id="genDiv">
				
				<div class="row">
					<h2>1) Choose an armor category to filter by:</h2>
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
					<h2>2) Choose an elemental resistance category to filter by:</h2>
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
				
				<div class="row">
					<h2>3) (Optional) Choose any extra filters below:</h2>
					<input id="CBTMR" type="checkbox" name="ignoreTMR" style="display:none">Ignore Trust Master Rewards (TMRs)
					<label class="switch">
						<input type="checkbox" id="ignoreTMR">
						<span class="slider"></span>
					</label>	
					<br>
						
					<input id="CBSTMR" type="checkbox" name="ignoreSTMR" style="display:none">Ignore Super Trust Master Rewards (STMRs)
						<label class="switch">
							<input type="checkbox" id="ignoreSTMR">
							<span class="slider"></span>
						</label>
						<br>
						
					<input id="CBLT" type="checkbox" name="ignoreLT" style="display:none">Ignore Limited Time Item(s) (i.e. King Mog, Story Event, Premium Bundles, etc.)
						<label class="switch">
							<input type="checkbox" id="ignoreLT">
							<span class="slider"></span>
						</label>						
				</div>
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
				</div>
																																			
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

</script>
<script src="../../js/AdvSearch2.js"></script>
</html>