<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<style><%@include file="/WEB-INF/css/WeaponView.css"%></style>
<title>FFBE Weapon View</title>
 <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
</head>
<body>
	<table>
		<tr>
			<td>
				<%@ page language="java" import="java.sql.*" %>
				<%
				try {
					Class.forName("org.postgresql.Driver");
					String dbURL = "jdbc:postgresql://localhost:5432/springffbe?user=postgres&password=cse132b";
					Connection con = DriverManager.getConnection(dbURL);
				%>
				<%
				Statement statement = con.createStatement();
				ResultSet rs = statement.executeQuery("SELECT * FROM public.weapon");
				
				%>
				<ul id="navbar">
					<li><a class="active" href="weapon">Weapons</a></li>
					<li><a href="armor">Armors</a></li>
					<li><a href="accessory">Accessories</a></li>
				</ul>

				<table id="weps">
					<tr>
						<th onclick="sortTable(0)" style="cursor:pointer">Weapon Name</th>
						<th onclick="sortTable(1)" style="cursor:pointer">Base HP </th>
						<th onclick="sortTable(2)" style="cursor:pointer">Base MP </th>
						<th onclick="sortTable(3)" style="cursor:pointer">Base ATK </th>
						<th onclick="sortTable(4)" style="cursor:pointer">Base MAG </th>
						<th onclick="sortTable(5)" style="cursor:pointer">Base DEF </th>
						<th onclick="sortTable(6)" style="cursor:pointer">Base SPR </th>
						<th onclick="sortTable(7)" style="cursor:pointer">Weapon Type </th>
					</tr>
					<%
					while(rs.next()) {
					%>
					<tr>
						<td align="center"><%= rs.getString("name") %></td>
						<td align="center"><%= rs.getInt("basehp") %></td>
						<td align="center"><%= rs.getInt("basemp") %></td>
						<td align="center"><%= rs.getInt("baseatk") %></td>
						<td align="center"><%= rs.getInt("basemag") %></td>
						<td align="center"><%= rs.getInt("basedef") %></td>
						<td align="center"><%= rs.getInt("basespr") %></td>
						<td align="center"><%= rs.getString("wid") %></td>
					</tr>
					<% }
					%>
				</table>
				<%

				
				
				rs.close();
				statement.close();
				con.close();
				}
				catch(SQLException e) {
					e.printStackTrace();
				}
				finally {
				}
				%>
			</td>
		</tr>
	</table>

</body>

<script type="text/javascript">
function sortTable(n) {
	  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
	  table = document.getElementById("weps");
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
		  if(n == 0 || n == 7){
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
</script>
</html>