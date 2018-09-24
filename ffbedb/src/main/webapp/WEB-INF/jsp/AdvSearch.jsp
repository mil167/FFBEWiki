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
						<img src="../../resources/dagger.png" alt="dagger" id="dagger" onclick="switchImg('dagger')">
						<img src="../../resources/sword.png" alt="sword" id="sword" onclick="switchImg('sword')">
						<img src="../../resources/gsword.png" alt="gsword" id="gsword" onclick="switchImg('gsword')">
						<img src="../../resources/katana.png" alt="katana" id="katana" onclick="switchImg('katana')">
						<img src="../../resources/staff.png" alt="staff" id="staff" onclick="switchImg('staff')">
						<img src="../../resources/rod.png" alt="rod" id="rod" onclick="switchImg('rod')">	
						<img src="../../resources/bow.png" alt="bow" id="bow" onclick="switchImg('bow')">
						<img src="../../resources/axe.png" alt="axe" id="axe" onclick="switchImg('axe')">
					</div>
					<div class="column">
						<img src="../../resources/hammer.png" alt="hammer" id="hammer" onclick="switchImg('hammer')">
						<img src="../../resources/spear.png" alt="spear" id="spear" onclick="switchImg('spear')">
						<img src="../../resources/harp.png" alt="harp" id="harp" onclick="switchImg('harp')">
						<img src="../../resources/whip.png" alt="whip" id="whip" onclick="switchImg('whip')">
						<img src="../../resources/tw.png" alt="tw" id="tw" onclick="switchImg('tw')">
						<img src="../../resources/gun.png" alt="gun" id="gun" onclick="switchImg('gun')">	
						<img src="../../resources/mace.png" alt="mace" id="mace" onclick="switchImg('mace')">
						<img src="../../resources/fist.png" alt="fist" id="fist" onclick="switchImg('fist')">
					</div>							
				</div>							
						
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
					</tr>
					<%
					while(rs_dagger.next()) {
					%>
					<tr>
						<td align="center"><%= rs_dagger.getString("name") %></td>
						<td align="center"><%= rs_dagger.getInt("basehp") %></td>
						<td align="center"><%= rs_dagger.getInt("basemp") %></td>
						<td align="center"><%= rs_dagger.getInt("baseatk") %></td>
						<td align="center"><%= rs_dagger.getInt("basemag") %></td>
						<td align="center"><%= rs_dagger.getInt("basedef") %></td>
						<td align="center"><%= rs_dagger.getInt("basespr") %></td>
						<td align="left" style="white-space: pre-wrap"><%= rs_dagger.getString("effects") %></td>
					</tr>
					<% }
					%>
				</table>
				<br>
				<br>
				
				<%
				Statement st_wep = con.createStatement();
				ResultSet rs_wep = st_wep.executeQuery("select * from public.wp_list");
				
				Statement st_elem = con.createStatement();
				ResultSet rs_elem = st_elem.executeQuery("select * from public.element");
				%>
				
				<form name="weaponSelect" method="post" action="filter">
					<select name="wep" id="wep">
						<option>Select a Weapon type: </option>
						<%
							while(rs_wep.next()) {
						%>
								<option><%= rs_wep.getString("wid")%></option>
						<%
							}
						%>
					</select>
					<select name="element" id="element">
						<option>Select an Element: </option>
						<%
							while(rs_elem.next()) {
						%>
							<option><%= rs_elem.getString("elem")%></option>
						<% 	
							}
						%>
					</select>
					<input type="Submit" value="Submit"></input>
				</form> 
				<%
				String wid = request.getParameter("wep");
				String element = request.getParameter("element");
				System.out.println("wid is: " + wid);
				System.out.println("element is: " + element);
				
				%>
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
	  table = document.getElementById("accs");
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
	let brightImg = "../../resources/" + filter_type + ".png"
	if(document.getElementById(filter_type).getAttribute('src') == brightImg) {
		let darkImg = "../../resources/dark" + filter_type + ".png";
		document.getElementById(filter_type).src = darkImg;
	}
	else {
		document.getElementById(filter_type).src = brightImg;	
	}
	
}
</script>
</html>