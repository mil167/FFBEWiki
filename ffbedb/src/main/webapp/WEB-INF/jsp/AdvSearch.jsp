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
				<p> Advanced Weapon Search (WIP) </p>
				
				<div class="row">
					<div class="column">
						<img src="../../resources/darkdagger.png" alt="dagger" id="daggericon">
						<img src="../../resources/darksword.png" alt="sword" id="swordicon">
						<img src="../../resources/darkgsword.png" alt="gsword" id="gswordicon">
						<img src="../../resources/darkkatana.png" alt="katana" id="katanaicon">
						<img src="../../resources/darkstaff.png" alt="staff" id="stafficon">
						<img src="../../resources/darkrod.png" alt="rod" id="rodicon">	
						<img src="../../resources/darkbow.png" alt="bow" id="bowicon">
						<img src="../../resources/darkaxe.png" alt="axe" id="axeicon">
					</div>
					<div class="column">
						<img src="../../resources/darkhammer.png" alt="hammer" id="hammericon">
						<img src="../../resources/darkspear.png" alt="spear" id="spearicon">
						<img src="../../resources/darkharp.png" alt="harp" id="harpicon">
						<img src="../../resources/darkwhip.png" alt="whip" id="whipicon">
						<img src="../../resources/darktw.png" alt="tw" id="twicon">
						<img src="../../resources/darkgun.png" alt="gun" id="gunicon">	
						<img src="../../resources/darkmace.png" alt="mace" id="maceicon">
						<img src="../../resources/darkfist.png" alt="fist" id="fisticon">
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
				<%
				Statement statement_sword = con.createStatement();
				ResultSet rs_sword = statement_sword.executeQuery("SELECT * FROM public.sword");
				%>
				<br>	
				<table id="sword">
					<caption><strong>Swords</strong></caption>
					<tr>
						<th onclick="sortTable(0,'sword')" style="cursor:pointer">Weapon Name</th>
						<th onclick="sortTable(1,'sword')" style="cursor:pointer">Base HP </th>
						<th onclick="sortTable(2,'sword')" style="cursor:pointer">Base MP </th>
						<th onclick="sortTable(3,'sword')" style="cursor:pointer">Base ATK </th>
						<th onclick="sortTable(4,'sword')" style="cursor:pointer">Base MAG </th>
						<th onclick="sortTable(5,'sword')" style="cursor:pointer">Base DEF </th>
						<th onclick="sortTable(6,'sword')" style="cursor:pointer">Base SPR </th>
						<th>Additional Effects</th>
						<th style="display: none">TMR</th>
						<th style="display: none">STMR</th>
						<th style="display: none">Time Limited</th>						
					</tr>
					<%
					while(rs_sword.next()) {
					%>
					<tr style="display:none">
						<td align="center"><%= rs_sword.getString("name") %></td>
						<td align="center"><%= rs_sword.getInt("basehp") %></td>
						<td align="center"><%= rs_sword.getInt("basemp") %></td>
						<td align="center"><%= rs_sword.getInt("baseatk") %></td>
						<td align="center"><%= rs_sword.getInt("basemag") %></td>
						<td align="center"><%= rs_sword.getInt("basedef") %></td>
						<td align="center"><%= rs_sword.getInt("basespr") %></td>
						<td align="left" style="white-space: pre-wrap"><%= rs_sword.getString("effects") %></td>
						<td style="display: none"><%= rs_sword.getBoolean("tmr") %></td>
						<td style="display: none"><%= rs_sword.getBoolean("stmr") %></td>
						<td style="display: none"><%= rs_sword.getBoolean("limitedtime") %></td>						
					</tr>
					<% }
					%>
				</table>
				
				<%
				Statement statement_gsword = con.createStatement();
				ResultSet rs_gsword = statement_gsword.executeQuery("SELECT * FROM public.gsword");
				%>
				<br>	
				<table id="gsword">
					<caption><strong>Great Swords</strong></caption>
					<tr>
						<th onclick="sortTable(0,'gsword')" style="cursor:pointer">Weapon Name</th>
						<th onclick="sortTable(1,'gsword')" style="cursor:pointer">Base HP </th>
						<th onclick="sortTable(2,'gsword')" style="cursor:pointer">Base MP </th>
						<th onclick="sortTable(3,'gsword')" style="cursor:pointer">Base ATK </th>
						<th onclick="sortTable(4,'gsword')" style="cursor:pointer">Base MAG </th>
						<th onclick="sortTable(5,'gsword')" style="cursor:pointer">Base DEF </th>
						<th onclick="sortTable(6,'gsword')" style="cursor:pointer">Base SPR </th>
						<th>Additional Effects</th>
						<th style="display: none">TMR</th>
						<th style="display: none">STMR</th>
						<th style="display: none">Time Limited</th>						
					</tr>
					<%
					while(rs_gsword.next()) {
					%>
					<tr style="display:none">
						<td align="center"><%= rs_gsword.getString("name") %></td>
						<td align="center"><%= rs_gsword.getInt("basehp") %></td>
						<td align="center"><%= rs_gsword.getInt("basemp") %></td>
						<td align="center"><%= rs_gsword.getInt("baseatk") %></td>
						<td align="center"><%= rs_gsword.getInt("basemag") %></td>
						<td align="center"><%= rs_gsword.getInt("basedef") %></td>
						<td align="center"><%= rs_gsword.getInt("basespr") %></td>
						<td align="left" style="white-space: pre-wrap"><%= rs_gsword.getString("effects") %></td>
						<td style="display: none"><%= rs_gsword.getBoolean("tmr") %></td>
						<td style="display: none"><%= rs_gsword.getBoolean("stmr") %></td>
						<td style="display: none"><%= rs_gsword.getBoolean("limitedtime") %></td>						
					</tr>
					<% }
					%>
				</table>	
				
				<%
				Statement statement_katana = con.createStatement();
				ResultSet rs_katana = statement_katana.executeQuery("SELECT * FROM public.katana");
				%>
				<br>	
				<table id="katana">
					<caption><strong>Katanas</strong></caption>
					<tr>
						<th onclick="sortTable(0,'katana')" style="cursor:pointer">Weapon Name</th>
						<th onclick="sortTable(1,'katana')" style="cursor:pointer">Base HP </th>
						<th onclick="sortTable(2,'katana')" style="cursor:pointer">Base MP </th>
						<th onclick="sortTable(3,'katana')" style="cursor:pointer">Base ATK </th>
						<th onclick="sortTable(4,'katana')" style="cursor:pointer">Base MAG </th>
						<th onclick="sortTable(5,'katana')" style="cursor:pointer">Base DEF </th>
						<th onclick="sortTable(6,'katana')" style="cursor:pointer">Base SPR </th>
						<th>Additional Effects</th>
						<th style="display: none">TMR</th>
						<th style="display: none">STMR</th>
						<th style="display: none">Time Limited</th>						
					</tr>
					<%
					while(rs_katana.next()) {
					%>
					<tr style="display:none">
						<td align="center"><%= rs_katana.getString("name") %></td>
						<td align="center"><%= rs_katana.getInt("basehp") %></td>
						<td align="center"><%= rs_katana.getInt("basemp") %></td>
						<td align="center"><%= rs_katana.getInt("baseatk") %></td>
						<td align="center"><%= rs_katana.getInt("basemag") %></td>
						<td align="center"><%= rs_katana.getInt("basedef") %></td>
						<td align="center"><%= rs_katana.getInt("basespr") %></td>
						<td align="left" style="white-space: pre-wrap"><%= rs_katana.getString("effects") %></td>
						<td style="display: none"><%= rs_katana.getBoolean("tmr") %></td>
						<td style="display: none"><%= rs_katana.getBoolean("stmr") %></td>
						<td style="display: none"><%= rs_katana.getBoolean("limitedtime") %></td>						
					</tr>
					<% }
					%>
				</table>								
				
				<%
				Statement statement_staff = con.createStatement();
				ResultSet rs_staff = statement_gsword.executeQuery("SELECT * FROM public.staff");
				%>
				<br>	
				<table id="staff">
					<caption><strong>Staves</strong></caption>
					<tr>
						<th onclick="sortTable(0,'staff')" style="cursor:pointer">Weapon Name</th>
						<th onclick="sortTable(1,'staff')" style="cursor:pointer">Base HP </th>
						<th onclick="sortTable(2,'staff')" style="cursor:pointer">Base MP </th>
						<th onclick="sortTable(3,'staff')" style="cursor:pointer">Base ATK </th>
						<th onclick="sortTable(4,'staff')" style="cursor:pointer">Base MAG </th>
						<th onclick="sortTable(5,'staff')" style="cursor:pointer">Base DEF </th>
						<th onclick="sortTable(6,'staff')" style="cursor:pointer">Base SPR </th>
						<th>Additional Effects</th>
						<th style="display: none">TMR</th>
						<th style="display: none">STMR</th>
						<th style="display: none">Time Limited</th>						
					</tr>
					<%
					while(rs_staff.next()) {
					%>
					<tr style="display:none">
						<td align="center"><%= rs_staff.getString("name") %></td>
						<td align="center"><%= rs_staff.getInt("basehp") %></td>
						<td align="center"><%= rs_staff.getInt("basemp") %></td>
						<td align="center"><%= rs_staff.getInt("baseatk") %></td>
						<td align="center"><%= rs_staff.getInt("basemag") %></td>
						<td align="center"><%= rs_staff.getInt("basedef") %></td>
						<td align="center"><%= rs_staff.getInt("basespr") %></td>
						<td align="left" style="white-space: pre-wrap"><%= rs_staff.getString("effects") %></td>
						<td style="display: none"><%= rs_staff.getBoolean("tmr") %></td>
						<td style="display: none"><%= rs_staff.getBoolean("stmr") %></td>
						<td style="display: none"><%= rs_staff.getBoolean("limitedtime") %></td>						
					</tr>
					<% }
					%>
				</table>					

				<%
				Statement statement_rod = con.createStatement();
				ResultSet rs_rod = statement_rod.executeQuery("SELECT * FROM public.rod");
				%>
				<br>	
				<table id="rod">
					<caption><strong>Great Swords</strong></caption>
					<tr>
						<th onclick="sortTable(0,'rod')" style="cursor:pointer">Weapon Name</th>
						<th onclick="sortTable(1,'rod')" style="cursor:pointer">Base HP </th>
						<th onclick="sortTable(2,'rod')" style="cursor:pointer">Base MP </th>
						<th onclick="sortTable(3,'rod')" style="cursor:pointer">Base ATK </th>
						<th onclick="sortTable(4,'rod')" style="cursor:pointer">Base MAG </th>
						<th onclick="sortTable(5,'rod')" style="cursor:pointer">Base DEF </th>
						<th onclick="sortTable(6,'rod')" style="cursor:pointer">Base SPR </th>
						<th>Additional Effects</th>
						<th style="display: none">TMR</th>
						<th style="display: none">STMR</th>
						<th style="display: none">Time Limited</th>						
					</tr>
					<%
					while(rs_rod.next()) {
					%>
					<tr style="display:none">
						<td align="center"><%= rs_rod.getString("name") %></td>
						<td align="center"><%= rs_rod.getInt("basehp") %></td>
						<td align="center"><%= rs_rod.getInt("basemp") %></td>
						<td align="center"><%= rs_rod.getInt("baseatk") %></td>
						<td align="center"><%= rs_rod.getInt("basemag") %></td>
						<td align="center"><%= rs_rod.getInt("basedef") %></td>
						<td align="center"><%= rs_rod.getInt("basespr") %></td>
						<td align="left" style="white-space: pre-wrap"><%= rs_rod.getString("effects") %></td>
						<td style="display: none"><%= rs_rod.getBoolean("tmr") %></td>
						<td style="display: none"><%= rs_rod.getBoolean("stmr") %></td>
						<td style="display: none"><%= rs_rod.getBoolean("limitedtime") %></td>						
					</tr>
					<% }
					%>
				</table>	
				
				<%
				Statement statement_bow = con.createStatement();
				ResultSet rs_bow = statement_bow.executeQuery("SELECT * FROM public.bow");
				%>
				<br>	
				<table id="bow">
					<caption><strong>Bows</strong></caption>
					<tr>
						<th onclick="sortTable(0,'bow')" style="cursor:pointer">Weapon Name</th>
						<th onclick="sortTable(1,'bow')" style="cursor:pointer">Base HP </th>
						<th onclick="sortTable(2,'bow')" style="cursor:pointer">Base MP </th>
						<th onclick="sortTable(3,'bow')" style="cursor:pointer">Base ATK </th>
						<th onclick="sortTable(4,'bow')" style="cursor:pointer">Base MAG </th>
						<th onclick="sortTable(5,'bow')" style="cursor:pointer">Base DEF </th>
						<th onclick="sortTable(6,'bow')" style="cursor:pointer">Base SPR </th>
						<th>Additional Effects</th>
						<th style="display: none">TMR</th>
						<th style="display: none">STMR</th>
						<th style="display: none">Time Limited</th>						
					</tr>
					<%
					while(rs_bow.next()) {
					%>
					<tr style="display:none">
						<td align="center"><%= rs_bow.getString("name") %></td>
						<td align="center"><%= rs_bow.getInt("basehp") %></td>
						<td align="center"><%= rs_bow.getInt("basemp") %></td>
						<td align="center"><%= rs_bow.getInt("baseatk") %></td>
						<td align="center"><%= rs_bow.getInt("basemag") %></td>
						<td align="center"><%= rs_bow.getInt("basedef") %></td>
						<td align="center"><%= rs_bow.getInt("basespr") %></td>
						<td align="left" style="white-space: pre-wrap"><%= rs_bow.getString("effects") %></td>
						<td style="display: none"><%= rs_bow.getBoolean("tmr") %></td>
						<td style="display: none"><%= rs_bow.getBoolean("stmr") %></td>
						<td style="display: none"><%= rs_bow.getBoolean("limitedtime") %></td>						
					</tr>
					<% }
					%>
				</table>					
				
				<%
				Statement statement_axe = con.createStatement();
				ResultSet rs_axe = statement_axe.executeQuery("SELECT * FROM public.axe");
				%>
				<br>	
				<table id="axe">
					<caption><strong>Axes</strong></caption>
					<tr>
						<th onclick="sortTable(0,'axe')" style="cursor:pointer">Weapon Name</th>
						<th onclick="sortTable(1,'axe')" style="cursor:pointer">Base HP </th>
						<th onclick="sortTable(2,'axe')" style="cursor:pointer">Base MP </th>
						<th onclick="sortTable(3,'axe')" style="cursor:pointer">Base ATK </th>
						<th onclick="sortTable(4,'axe')" style="cursor:pointer">Base MAG </th>
						<th onclick="sortTable(5,'axe')" style="cursor:pointer">Base DEF </th>
						<th onclick="sortTable(6,'axe')" style="cursor:pointer">Base SPR </th>
						<th>Additional Effects</th>
						<th style="display: none">TMR</th>
						<th style="display: none">STMR</th>
						<th style="display: none">Time Limited</th>						
					</tr>
					<%
					while(rs_axe.next()) {
					%>
					<tr style="display:none">
						<td align="center"><%= rs_axe.getString("name") %></td>
						<td align="center"><%= rs_axe.getInt("basehp") %></td>
						<td align="center"><%= rs_axe.getInt("basemp") %></td>
						<td align="center"><%= rs_axe.getInt("baseatk") %></td>
						<td align="center"><%= rs_axe.getInt("basemag") %></td>
						<td align="center"><%= rs_axe.getInt("basedef") %></td>
						<td align="center"><%= rs_axe.getInt("basespr") %></td>
						<td align="left" style="white-space: pre-wrap"><%= rs_axe.getString("effects") %></td>
						<td style="display: none"><%= rs_axe.getBoolean("tmr") %></td>
						<td style="display: none"><%= rs_axe.getBoolean("stmr") %></td>
						<td style="display: none"><%= rs_axe.getBoolean("limitedtime") %></td>						
					</tr>
					<% }
					%>
				</table>	
				
				<%
				Statement statement_hammer = con.createStatement();
				ResultSet rs_hammer = statement_hammer.executeQuery("SELECT * FROM public.hammer");
				%>
				<br>	
				<table id="hammer">
					<caption><strong>Hammers</strong></caption>
					<tr>
						<th onclick="sortTable(0,'hammer')" style="cursor:pointer">Weapon Name</th>
						<th onclick="sortTable(1,'hammer')" style="cursor:pointer">Base HP </th>
						<th onclick="sortTable(2,'hammer')" style="cursor:pointer">Base MP </th>
						<th onclick="sortTable(3,'hammer')" style="cursor:pointer">Base ATK </th>
						<th onclick="sortTable(4,'hammer')" style="cursor:pointer">Base MAG </th>
						<th onclick="sortTable(5,'hammer')" style="cursor:pointer">Base DEF </th>
						<th onclick="sortTable(6,'hammer')" style="cursor:pointer">Base SPR </th>
						<th>Additional Effects</th>
						<th style="display: none">TMR</th>
						<th style="display: none">STMR</th>
						<th style="display: none">Time Limited</th>						
					</tr>
					<%
					while(rs_hammer.next()) {
					%>
					<tr style="display:none">
						<td align="center"><%= rs_hammer.getString("name") %></td>
						<td align="center"><%= rs_hammer.getInt("basehp") %></td>
						<td align="center"><%= rs_hammer.getInt("basemp") %></td>
						<td align="center"><%= rs_hammer.getInt("baseatk") %></td>
						<td align="center"><%= rs_hammer.getInt("basemag") %></td>
						<td align="center"><%= rs_hammer.getInt("basedef") %></td>
						<td align="center"><%= rs_hammer.getInt("basespr") %></td>
						<td align="left" style="white-space: pre-wrap"><%= rs_hammer.getString("effects") %></td>
						<td style="display: none"><%= rs_hammer.getBoolean("tmr") %></td>
						<td style="display: none"><%= rs_hammer.getBoolean("stmr") %></td>
						<td style="display: none"><%= rs_hammer.getBoolean("limitedtime") %></td>						
					</tr>
					<% }
					%>
				</table>	
				
				<%
				Statement statement_spear = con.createStatement();
				ResultSet rs_spear = statement_spear.executeQuery("SELECT * FROM public.spear");
				%>
				<br>	
				<table id="spear">
					<caption><strong>Spears</strong></caption>
					<tr>
						<th onclick="sortTable(0,'spear')" style="cursor:pointer">Weapon Name</th>
						<th onclick="sortTable(1,'spear')" style="cursor:pointer">Base HP </th>
						<th onclick="sortTable(2,'spear')" style="cursor:pointer">Base MP </th>
						<th onclick="sortTable(3,'spear')" style="cursor:pointer">Base ATK </th>
						<th onclick="sortTable(4,'spear')" style="cursor:pointer">Base MAG </th>
						<th onclick="sortTable(5,'spear')" style="cursor:pointer">Base DEF </th>
						<th onclick="sortTable(6,'spear')" style="cursor:pointer">Base SPR </th>
						<th>Additional Effects</th>
						<th style="display: none">TMR</th>
						<th style="display: none">STMR</th>
						<th style="display: none">Time Limited</th>						
					</tr>
					<%
					while(rs_spear.next()) {
					%>
					<tr style="display:none">
						<td align="center"><%= rs_spear.getString("name") %></td>
						<td align="center"><%= rs_spear.getInt("basehp") %></td>
						<td align="center"><%= rs_spear.getInt("basemp") %></td>
						<td align="center"><%= rs_spear.getInt("baseatk") %></td>
						<td align="center"><%= rs_spear.getInt("basemag") %></td>
						<td align="center"><%= rs_spear.getInt("basedef") %></td>
						<td align="center"><%= rs_spear.getInt("basespr") %></td>
						<td align="left" style="white-space: pre-wrap"><%= rs_spear.getString("effects") %></td>
						<td style="display: none"><%= rs_spear.getBoolean("tmr") %></td>
						<td style="display: none"><%= rs_spear.getBoolean("stmr") %></td>
						<td style="display: none"><%= rs_spear.getBoolean("limitedtime") %></td>						
					</tr>
					<% }
					%>
				</table>	
				
				<%
				Statement statement_harp = con.createStatement();
				ResultSet rs_harp = statement_harp.executeQuery("SELECT * FROM public.harp");
				%>
				<br>	
				<table id="harp">
					<caption><strong>Harps</strong></caption>
					<tr>
						<th onclick="sortTable(0,'harp')" style="cursor:pointer">Weapon Name</th>
						<th onclick="sortTable(1,'harp')" style="cursor:pointer">Base HP </th>
						<th onclick="sortTable(2,'harp')" style="cursor:pointer">Base MP </th>
						<th onclick="sortTable(3,'harp')" style="cursor:pointer">Base ATK </th>
						<th onclick="sortTable(4,'harp')" style="cursor:pointer">Base MAG </th>
						<th onclick="sortTable(5,'harp')" style="cursor:pointer">Base DEF </th>
						<th onclick="sortTable(6,'harp')" style="cursor:pointer">Base SPR </th>
						<th>Additional Effects</th>
						<th style="display: none">TMR</th>
						<th style="display: none">STMR</th>
						<th style="display: none">Time Limited</th>						
					</tr>
					<%
					while(rs_harp.next()) {
					%>
					<tr style="display:none">
						<td align="center"><%= rs_harp.getString("name") %></td>
						<td align="center"><%= rs_harp.getInt("basehp") %></td>
						<td align="center"><%= rs_harp.getInt("basemp") %></td>
						<td align="center"><%= rs_harp.getInt("baseatk") %></td>
						<td align="center"><%= rs_harp.getInt("basemag") %></td>
						<td align="center"><%= rs_harp.getInt("basedef") %></td>
						<td align="center"><%= rs_harp.getInt("basespr") %></td>
						<td align="left" style="white-space: pre-wrap"><%= rs_harp.getString("effects") %></td>
						<td style="display: none"><%= rs_harp.getBoolean("tmr") %></td>
						<td style="display: none"><%= rs_harp.getBoolean("stmr") %></td>
						<td style="display: none"><%= rs_harp.getBoolean("limitedtime") %></td>						
					</tr>
					<% }
					%>
				</table>	
				
				<%
				Statement statement_whip = con.createStatement();
				ResultSet rs_whip = statement_whip.executeQuery("SELECT * FROM public.whip");
				%>
				<br>	
				<table id="whip">
					<caption><strong>Whips</strong></caption>
					<tr>
						<th onclick="sortTable(0,'whip')" style="cursor:pointer">Weapon Name</th>
						<th onclick="sortTable(1,'whip')" style="cursor:pointer">Base HP </th>
						<th onclick="sortTable(2,'whip')" style="cursor:pointer">Base MP </th>
						<th onclick="sortTable(3,'whip')" style="cursor:pointer">Base ATK </th>
						<th onclick="sortTable(4,'whip')" style="cursor:pointer">Base MAG </th>
						<th onclick="sortTable(5,'whip')" style="cursor:pointer">Base DEF </th>
						<th onclick="sortTable(6,'whip')" style="cursor:pointer">Base SPR </th>
						<th>Additional Effects</th>
						<th style="display: none">TMR</th>
						<th style="display: none">STMR</th>
						<th style="display: none">Time Limited</th>						
					</tr>
					<%
					while(rs_whip.next()) {
					%>
					<tr style="display:none">
						<td align="center"><%= rs_whip.getString("name") %></td>
						<td align="center"><%= rs_whip.getInt("basehp") %></td>
						<td align="center"><%= rs_whip.getInt("basemp") %></td>
						<td align="center"><%= rs_whip.getInt("baseatk") %></td>
						<td align="center"><%= rs_whip.getInt("basemag") %></td>
						<td align="center"><%= rs_whip.getInt("basedef") %></td>
						<td align="center"><%= rs_whip.getInt("basespr") %></td>
						<td align="left" style="white-space: pre-wrap"><%= rs_whip.getString("effects") %></td>
						<td style="display: none"><%= rs_whip.getBoolean("tmr") %></td>
						<td style="display: none"><%= rs_whip.getBoolean("stmr") %></td>
						<td style="display: none"><%= rs_whip.getBoolean("limitedtime") %></td>						
					</tr>
					<% }
					%>
				</table>		
				
				<%
				Statement statement_tw = con.createStatement();
				ResultSet rs_tw = statement_tw.executeQuery("SELECT * FROM public.tw");
				%>
				<br>	
				<table id="tw">
					<caption><strong>Throwing Weapons</strong></caption>
					<tr>
						<th onclick="sortTable(0,'tw')" style="cursor:pointer">Weapon Name</th>
						<th onclick="sortTable(1,'tw')" style="cursor:pointer">Base HP </th>
						<th onclick="sortTable(2,'tw')" style="cursor:pointer">Base MP </th>
						<th onclick="sortTable(3,'tw')" style="cursor:pointer">Base ATK </th>
						<th onclick="sortTable(4,'tw')" style="cursor:pointer">Base MAG </th>
						<th onclick="sortTable(5,'tw')" style="cursor:pointer">Base DEF </th>
						<th onclick="sortTable(6,'tw')" style="cursor:pointer">Base SPR </th>
						<th>Additional Effects</th>
						<th style="display: none">TMR</th>
						<th style="display: none">STMR</th>
						<th style="display: none">Time Limited</th>						
					</tr>
					<%
					while(rs_tw.next()) {
					%>
					<tr style="display:none">
						<td align="center"><%= rs_tw.getString("name") %></td>
						<td align="center"><%= rs_tw.getInt("basehp") %></td>
						<td align="center"><%= rs_tw.getInt("basemp") %></td>
						<td align="center"><%= rs_tw.getInt("baseatk") %></td>
						<td align="center"><%= rs_tw.getInt("basemag") %></td>
						<td align="center"><%= rs_tw.getInt("basedef") %></td>
						<td align="center"><%= rs_tw.getInt("basespr") %></td>
						<td align="left" style="white-space: pre-wrap"><%= rs_tw.getString("effects") %></td>
						<td style="display: none"><%= rs_tw.getBoolean("tmr") %></td>
						<td style="display: none"><%= rs_tw.getBoolean("stmr") %></td>
						<td style="display: none"><%= rs_tw.getBoolean("limitedtime") %></td>						
					</tr>
					<% }
					%>
				</table>	
				
				<%
				Statement statement_gun = con.createStatement();
				ResultSet rs_gun = statement_gun.executeQuery("SELECT * FROM public.gun");
				%>
				<br>	
				<table id="gun">
					<caption><strong>Guns</strong></caption>
					<tr>
						<th onclick="sortTable(0,'gun')" style="cursor:pointer">Weapon Name</th>
						<th onclick="sortTable(1,'gun')" style="cursor:pointer">Base HP </th>
						<th onclick="sortTable(2,'gun')" style="cursor:pointer">Base MP </th>
						<th onclick="sortTable(3,'gun')" style="cursor:pointer">Base ATK </th>
						<th onclick="sortTable(4,'gun')" style="cursor:pointer">Base MAG </th>
						<th onclick="sortTable(5,'gun')" style="cursor:pointer">Base DEF </th>
						<th onclick="sortTable(6,'gun')" style="cursor:pointer">Base SPR </th>
						<th>Additional Effects</th>
						<th style="display: none">TMR</th>
						<th style="display: none">STMR</th>
						<th style="display: none">Time Limited</th>						
					</tr>
					<%
					while(rs_gun.next()) {
					%>
					<tr style="display:none">
						<td align="center"><%= rs_gun.getString("name") %></td>
						<td align="center"><%= rs_gun.getInt("basehp") %></td>
						<td align="center"><%= rs_gun.getInt("basemp") %></td>
						<td align="center"><%= rs_gun.getInt("baseatk") %></td>
						<td align="center"><%= rs_gun.getInt("basemag") %></td>
						<td align="center"><%= rs_gun.getInt("basedef") %></td>
						<td align="center"><%= rs_gun.getInt("basespr") %></td>
						<td align="left" style="white-space: pre-wrap"><%= rs_gun.getString("effects") %></td>
						<td style="display: none"><%= rs_gun.getBoolean("tmr") %></td>
						<td style="display: none"><%= rs_gun.getBoolean("stmr") %></td>
						<td style="display: none"><%= rs_gun.getBoolean("limitedtime") %></td>						
					</tr>
					<% }
					%>
				</table>		
				
				<%
				Statement statement_mace = con.createStatement();
				ResultSet rs_mace = statement_mace.executeQuery("SELECT * FROM public.mace");
				%>
				<br>	
				<table id="mace">
					<caption><strong>Great Swords</strong></caption>
					<tr>
						<th onclick="sortTable(0,'mace')" style="cursor:pointer">Weapon Name</th>
						<th onclick="sortTable(1,'mace')" style="cursor:pointer">Base HP </th>
						<th onclick="sortTable(2,'mace')" style="cursor:pointer">Base MP </th>
						<th onclick="sortTable(3,'mace')" style="cursor:pointer">Base ATK </th>
						<th onclick="sortTable(4,'mace')" style="cursor:pointer">Base MAG </th>
						<th onclick="sortTable(5,'mace')" style="cursor:pointer">Base DEF </th>
						<th onclick="sortTable(6,'mace')" style="cursor:pointer">Base SPR </th>
						<th>Additional Effects</th>
						<th style="display: none">TMR</th>
						<th style="display: none">STMR</th>
						<th style="display: none">Time Limited</th>						
					</tr>
					<%
					while(rs_mace.next()) {
					%>
					<tr style="display:none">
						<td align="center"><%= rs_mace.getString("name") %></td>
						<td align="center"><%= rs_mace.getInt("basehp") %></td>
						<td align="center"><%= rs_mace.getInt("basemp") %></td>
						<td align="center"><%= rs_mace.getInt("baseatk") %></td>
						<td align="center"><%= rs_mace.getInt("basemag") %></td>
						<td align="center"><%= rs_mace.getInt("basedef") %></td>
						<td align="center"><%= rs_mace.getInt("basespr") %></td>
						<td align="left" style="white-space: pre-wrap"><%= rs_mace.getString("effects") %></td>
						<td style="display: none"><%= rs_mace.getBoolean("tmr") %></td>
						<td style="display: none"><%= rs_mace.getBoolean("stmr") %></td>
						<td style="display: none"><%= rs_mace.getBoolean("limitedtime") %></td>						
					</tr>
					<% }
					%>
				</table>	
				
				<%
				Statement statement_fist = con.createStatement();
				ResultSet rs_fist = statement_fist.executeQuery("SELECT * FROM public.fist");
				%>
				<br>	
				<table id="fist">
					<caption><strong>Fists</strong></caption>
					<tr>
						<th onclick="sortTable(0,'fist')" style="cursor:pointer">Weapon Name</th>
						<th onclick="sortTable(1,'fist')" style="cursor:pointer">Base HP </th>
						<th onclick="sortTable(2,'fist')" style="cursor:pointer">Base MP </th>
						<th onclick="sortTable(3,'fist')" style="cursor:pointer">Base ATK </th>
						<th onclick="sortTable(4,'fist')" style="cursor:pointer">Base MAG </th>
						<th onclick="sortTable(5,'fist')" style="cursor:pointer">Base DEF </th>
						<th onclick="sortTable(6,'fist')" style="cursor:pointer">Base SPR </th>
						<th>Additional Effects</th>
						<th style="display: none">TMR</th>
						<th style="display: none">STMR</th>
						<th style="display: none">Time Limited</th>						
					</tr>
					<%
					while(rs_fist.next()) {
					%>
					<tr style="display:none">
						<td align="center"><%= rs_fist.getString("name") %></td>
						<td align="center"><%= rs_fist.getInt("basehp") %></td>
						<td align="center"><%= rs_fist.getInt("basemp") %></td>
						<td align="center"><%= rs_fist.getInt("baseatk") %></td>
						<td align="center"><%= rs_fist.getInt("basemag") %></td>
						<td align="center"><%= rs_fist.getInt("basedef") %></td>
						<td align="center"><%= rs_fist.getInt("basespr") %></td>
						<td align="left" style="white-space: pre-wrap"><%= rs_fist.getString("effects") %></td>
						<td style="display: none"><%= rs_fist.getBoolean("tmr") %></td>
						<td style="display: none"><%= rs_fist.getBoolean("stmr") %></td>
						<td style="display: none"><%= rs_fist.getBoolean("limitedtime") %></td>						
					</tr>
					<% }
					%>
				</table>																															
				<% 
				rs_dagger.close();
				statement_dagger.close();
				
				rs_sword.close();
				statement_sword.close();
				
				rs_gsword.close();
				statement_gsword.close();
				
				rs_katana.close();
				statement_katana.close();
				
				rs_staff.close();
				statement_staff.close();
				
				rs_rod.close();
				statement_rod.close();
				
				rs_bow.close();
				statement_bow.close();
				
				rs_axe.close();
				statement_axe.close();
				
				rs_hammer.close();
				statement_hammer.close();
				
				rs_spear.close();
				statement_spear.close();
				
				rs_harp.close();
				statement_harp.close();
				
				rs_whip.close();
				statement_whip.close();
				
				rs_tw.close();
				statement_tw.close();
				
				rs_gun.close();
				statement_gun.close();
				
				rs_mace.close();
				statement_mace.close();
				
				rs_fist.close();
				statement_fist.close();
				
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
			// Earth element hammmer exists in the database
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
</script>
</html>