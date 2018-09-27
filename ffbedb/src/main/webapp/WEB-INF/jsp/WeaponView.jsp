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
					<li id="navbar"><a class="active" href="weapon">Weapons</a></li>
					<li id="navbar"><a href="armor">Armors</a></li>
					<li id="navbar"><a href="accessory">Accessories</a></li>
					<li><a href="filter">Filter</a></li>
				</ul>
				<button onclick="backToTop()" id="topBtn" title="Scroll to Top">Top</button>
				<br>
				<div id="listcontents">
					<p><strong>&nbsp;&nbsp;Contents&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a onclick="hide()" id="hide">[hide]</a></strong></p>
					<ol id="contents">
						<li><a href="#Daggers">Daggers</a></li>
						<li><a href="#Swords">Swords</a></li>
						<li><a href="#Great Swords">Great Swords</a></li>
						<li><a href="#Katanas">Katanas</a></li>
						<li><a href="#Staves">Staves</a></li>
						<li><a href="#Rods">Rods</a></li>
						<li><a href="#Bows">Bows</a></li>
						<li><a href="#Axes">Axes</a></li>
						<li><a href="#Hammers">Hammers</a></li>
						<li><a href="#Spears">Spears</a></li>
						<li><a href="#Harps">Harps</a></li>
						<li><a href="#Whips">Whips</a></li>
						<li><a href="#Throwing Weapons">Throwing Weapons</a></li>
						<li><a href="#Guns">Guns</a></li>
						<li><a href="#Maces">Maces</a></li>
						<li><a href="#Fists">Fists</a></li>
					</ol>
				</div>
				<br>
				<br>
				<div id="daggerDiv">
				<h1><strong>Daggers</strong></h1>
				<input id="CBdaggerTMR" type="checkbox" name="daggerTMR">Ignore TMR(s)
				<input id="CBdaggerSTMR" type="checkbox" name="daggerSTMR">Ignore STMR(s)
				<input id="CBdaggerLT" type="checkbox" name="daggerLT">Ignore Limited Time Item(s)
				<table id="dagger">
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
					<tr>
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
				</div>
				<br>
				<br>
				<%
				Statement statement_sword = con.createStatement();
				ResultSet rs_sword = statement_sword.executeQuery("SELECT * FROM public.sword");
				%>
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
					</tr>
					<%
					while(rs_sword.next()) {
					%>
					<tr>
						<td align="center"><%= rs_sword.getString("name") %></td>
						<td align="center"><%= rs_sword.getInt("basehp") %></td>
						<td align="center"><%= rs_sword.getInt("basemp") %></td>
						<td align="center"><%= rs_sword.getInt("baseatk") %></td>
						<td align="center"><%= rs_sword.getInt("basemag") %></td>
						<td align="center"><%= rs_sword.getInt("basedef") %></td>
						<td align="center"><%= rs_sword.getInt("basespr") %></td>
						<td align="left" style="white-space: pre-wrap"><%= rs_sword.getString("effects") %></td>
					</tr>
					<% }
					%>	
				</table>
				<br>
				<br>
				<%
				Statement statement_gsword = con.createStatement();
				ResultSet rs_gsword = statement_gsword.executeQuery("SELECT * FROM public.gsword");
				%>
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
					</tr>
					<%
					while(rs_gsword.next()) {
					%>
					<tr>
						<td align="center"><%= rs_gsword.getString("name") %></td>
						<td align="center"><%= rs_gsword.getInt("basehp") %></td>
						<td align="center"><%= rs_gsword.getInt("basemp") %></td>
						<td align="center"><%= rs_gsword.getInt("baseatk") %></td>
						<td align="center"><%= rs_gsword.getInt("basemag") %></td>
						<td align="center"><%= rs_gsword.getInt("basedef") %></td>
						<td align="center"><%= rs_gsword.getInt("basespr") %></td>
						<td align="left" style="white-space: pre-wrap"><%= rs_gsword.getString("effects") %></td>
					</tr>
					<% }
					%>						
												
				</table>
				<br>
				<br>
				<%
				Statement statement_staff = con.createStatement();
				ResultSet rs_staff = statement_staff.executeQuery("SELECT * FROM public.staff");
				%>
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
					</tr>
					<%
					while(rs_staff.next()) {
					%>
					<tr>
						<td align="center"><%= rs_staff.getString("name") %></td>
						<td align="center"><%= rs_staff.getInt("basehp") %></td>
						<td align="center"><%= rs_staff.getInt("basemp") %></td>
						<td align="center"><%= rs_staff.getInt("baseatk") %></td>
						<td align="center"><%= rs_staff.getInt("basemag") %></td>
						<td align="center"><%= rs_staff.getInt("basedef") %></td>
						<td align="center"><%= rs_staff.getInt("basespr") %></td>
						<td align="left" style="white-space: pre-wrap"><%= rs_staff.getString("effects") %></td>
					</tr>
					<% }
					%>	
				</table>					
				<br>
				<br>
				<%
				Statement statement_katana = con.createStatement();
				ResultSet rs_katana = statement_katana.executeQuery("SELECT * FROM public.katana");
				%>
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
					</tr>
					<%
					while(rs_katana.next()) {
					%>
					<tr>
						<td align="center"><%= rs_katana.getString("name") %></td>
						<td align="center"><%= rs_katana.getInt("basehp") %></td>
						<td align="center"><%= rs_katana.getInt("basemp") %></td>
						<td align="center"><%= rs_katana.getInt("baseatk") %></td>
						<td align="center"><%= rs_katana.getInt("basemag") %></td>
						<td align="center"><%= rs_katana.getInt("basedef") %></td>
						<td align="center"><%= rs_katana.getInt("basespr") %></td>
						<td align="left" style="white-space: pre-wrap"><%= rs_katana.getString("effects") %></td>
					</tr>
					<% }
					%>	
				</table>	
				<br>
				<br>
				<%
				Statement statement_rod = con.createStatement();
				ResultSet rs_rod = statement_rod.executeQuery("SELECT * FROM public.rod");
				%>
				<table id="rod">
					<caption><strong>Rods</strong></caption>
					<tr>
						<th onclick="sortTable(0,'rod')" style="cursor:pointer">Weapon Name</th>
						<th onclick="sortTable(1,'rod')" style="cursor:pointer">Base HP </th>
						<th onclick="sortTable(2,'rod')" style="cursor:pointer">Base MP </th>
						<th onclick="sortTable(3,'rod')" style="cursor:pointer">Base ATK </th>
						<th onclick="sortTable(4,'rod')" style="cursor:pointer">Base MAG </th>
						<th onclick="sortTable(5,'rod')" style="cursor:pointer">Base DEF </th>
						<th onclick="sortTable(6,'rod')" style="cursor:pointer">Base SPR </th>
						<th>Additional Effects</th>
					</tr>
					<%
					while(rs_rod.next()) {
					%>
					<tr>
						<td align="center"><%= rs_rod.getString("name") %></td>
						<td align="center"><%= rs_rod.getInt("basehp") %></td>
						<td align="center"><%= rs_rod.getInt("basemp") %></td>
						<td align="center"><%= rs_rod.getInt("baseatk") %></td>
						<td align="center"><%= rs_rod.getInt("basemag") %></td>
						<td align="center"><%= rs_rod.getInt("basedef") %></td>
						<td align="center"><%= rs_rod.getInt("basespr") %></td>
						<td align="left" style="white-space: pre-wrap"><%= rs_rod.getString("effects") %></td>
					</tr>
					<% }
					%>	
				</table>		
				<br>
				<br>
				<%
				Statement statement_bow = con.createStatement();
				ResultSet rs_bow = statement_bow.executeQuery("SELECT * FROM public.bow");
				%>
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
					</tr>
					<%
					while(rs_bow.next()) {
					%>
					<tr>
						<td align="center"><%= rs_bow.getString("name") %></td>
						<td align="center"><%= rs_bow.getInt("basehp") %></td>
						<td align="center"><%= rs_bow.getInt("basemp") %></td>
						<td align="center"><%= rs_bow.getInt("baseatk") %></td>
						<td align="center"><%= rs_bow.getInt("basemag") %></td>
						<td align="center"><%= rs_bow.getInt("basedef") %></td>
						<td align="center"><%= rs_bow.getInt("basespr") %></td>
						<td align="left" style="white-space: pre-wrap"><%= rs_bow.getString("effects") %></td>
					</tr>
					<% }
					%>	
				</table>		
				<br>
				<br>
				<%
				Statement statement_axe = con.createStatement();
				ResultSet rs_axe = statement_axe.executeQuery("SELECT * FROM public.axe");
				%>
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
					</tr>
					<%
					while(rs_axe.next()) {
					%>
					<tr>
						<td align="center"><%= rs_axe.getString("name") %></td>
						<td align="center"><%= rs_axe.getInt("basehp") %></td>
						<td align="center"><%= rs_axe.getInt("basemp") %></td>
						<td align="center"><%= rs_axe.getInt("baseatk") %></td>
						<td align="center"><%= rs_axe.getInt("basemag") %></td>
						<td align="center"><%= rs_axe.getInt("basedef") %></td>
						<td align="center"><%= rs_axe.getInt("basespr") %></td>
						<td align="left" style="white-space: pre-wrap"><%= rs_axe.getString("effects") %></td>
					</tr>
					<% }
					%>	
				</table>
				<br>
				<br>
				<%
				Statement statement_hammer = con.createStatement();
				ResultSet rs_hammer = statement_hammer.executeQuery("SELECT * FROM public.hammer");
				%>
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
					</tr>
					<%
					while(rs_hammer.next()) {
					%>
					<tr>
						<td align="center"><%= rs_hammer.getString("name") %></td>
						<td align="center"><%= rs_hammer.getInt("basehp") %></td>
						<td align="center"><%= rs_hammer.getInt("basemp") %></td>
						<td align="center"><%= rs_hammer.getInt("baseatk") %></td>
						<td align="center"><%= rs_hammer.getInt("basemag") %></td>
						<td align="center"><%= rs_hammer.getInt("basedef") %></td>
						<td align="center"><%= rs_hammer.getInt("basespr") %></td>
						<td align="left" style="white-space: pre-wrap"><%= rs_hammer.getString("effects") %></td>
					</tr>
					<% }
					%>	
				</table>	
				<br>
				<br>
				<%
				Statement statement_spear = con.createStatement();
				ResultSet rs_spear = statement_spear.executeQuery("SELECT * FROM public.spear");
				%>
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
					</tr>
					<%
					while(rs_spear.next()) {
					%>
					<tr>
						<td align="center"><%= rs_spear.getString("name") %></td>
						<td align="center"><%= rs_spear.getInt("basehp") %></td>
						<td align="center"><%= rs_spear.getInt("basemp") %></td>
						<td align="center"><%= rs_spear.getInt("baseatk") %></td>
						<td align="center"><%= rs_spear.getInt("basemag") %></td>
						<td align="center"><%= rs_spear.getInt("basedef") %></td>
						<td align="center"><%= rs_spear.getInt("basespr") %></td>
						<td align="left" style="white-space: pre-wrap"><%= rs_spear.getString("effects") %></td>
					</tr>
					<% }
					%>	
				</table>
				<br>
				<br>
				<%
				Statement statement_harp = con.createStatement();
				ResultSet rs_harp = statement_harp.executeQuery("SELECT * FROM public.harp");
				%>
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
					</tr>
					<%
					while(rs_harp.next()) {
					%>
					<tr>
						<td align="center"><%= rs_harp.getString("name") %></td>
						<td align="center"><%= rs_harp.getInt("basehp") %></td>
						<td align="center"><%= rs_harp.getInt("basemp") %></td>
						<td align="center"><%= rs_harp.getInt("baseatk") %></td>
						<td align="center"><%= rs_harp.getInt("basemag") %></td>
						<td align="center"><%= rs_harp.getInt("basedef") %></td>
						<td align="center"><%= rs_harp.getInt("basespr") %></td>
						<td align="left" style="white-space: pre-wrap"><%= rs_harp.getString("effects") %></td>
					</tr>
					<% }
					%>	
				</table>
				<br>
				<br>
				<%
				Statement statement_whip = con.createStatement();
				ResultSet rs_whip = statement_whip.executeQuery("SELECT * FROM public.whip");
				%>
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
					</tr>
					<%
					while(rs_whip.next()) {
					%>
					<tr>
						<td align="center"><%= rs_whip.getString("name") %></td>
						<td align="center"><%= rs_whip.getInt("basehp") %></td>
						<td align="center"><%= rs_whip.getInt("basemp") %></td>
						<td align="center"><%= rs_whip.getInt("baseatk") %></td>
						<td align="center"><%= rs_whip.getInt("basemag") %></td>
						<td align="center"><%= rs_whip.getInt("basedef") %></td>
						<td align="center"><%= rs_whip.getInt("basespr") %></td>
						<td align="left" style="white-space: pre-wrap"><%= rs_whip.getString("effects") %></td>
					</tr>
					<% }
					%>	
				</table>
				<br>
				<br>
				<%
				Statement statement_tw = con.createStatement();
				ResultSet rs_tw = statement_tw.executeQuery("SELECT * FROM public.tw");
				%>
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
					</tr>
					<%
					while(rs_tw.next()) {
					%>
					<tr>
						<td align="center"><%= rs_tw.getString("name") %></td>
						<td align="center"><%= rs_tw.getInt("basehp") %></td>
						<td align="center"><%= rs_tw.getInt("basemp") %></td>
						<td align="center"><%= rs_tw.getInt("baseatk") %></td>
						<td align="center"><%= rs_tw.getInt("basemag") %></td>
						<td align="center"><%= rs_tw.getInt("basedef") %></td>
						<td align="center"><%= rs_tw.getInt("basespr") %></td>
						<td align="left" style="white-space: pre-wrap"><%= rs_tw.getString("effects") %></td>
					</tr>
					<% }
					%>	
				</table>
				<br>
				<br>
				<%
				Statement statement_gun = con.createStatement();
				ResultSet rs_gun = statement_gun.executeQuery("SELECT * FROM public.gun");
				%>
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
					</tr>
					<%
					while(rs_gun.next()) {
					%>
					<tr>
						<td align="center"><%= rs_gun.getString("name") %></td>
						<td align="center"><%= rs_gun.getInt("basehp") %></td>
						<td align="center"><%= rs_gun.getInt("basemp") %></td>
						<td align="center"><%= rs_gun.getInt("baseatk") %></td>
						<td align="center"><%= rs_gun.getInt("basemag") %></td>
						<td align="center"><%= rs_gun.getInt("basedef") %></td>
						<td align="center"><%= rs_gun.getInt("basespr") %></td>
						<td align="left" style="white-space: pre-wrap"><%= rs_gun.getString("effects") %></td>
					</tr>
					<% }
					%>	
				</table>
				<br>
				<br>
				<%
				Statement statement_mace = con.createStatement();
				ResultSet rs_mace = statement_mace.executeQuery("SELECT * FROM public.mace");
				%>
				<table id="mace">
					<caption><strong>Maces</strong></caption>
					<tr>
						<th onclick="sortTable(0,'mace')" style="cursor:pointer">Weapon Name</th>
						<th onclick="sortTable(1,'mace')" style="cursor:pointer">Base HP </th>
						<th onclick="sortTable(2,'mace')" style="cursor:pointer">Base MP </th>
						<th onclick="sortTable(3,'mace')" style="cursor:pointer">Base ATK </th>
						<th onclick="sortTable(4,'mace')" style="cursor:pointer">Base MAG </th>
						<th onclick="sortTable(5,'mace')" style="cursor:pointer">Base DEF </th>
						<th onclick="sortTable(6,'mace')" style="cursor:pointer">Base SPR </th>
						<th>Additional Effects</th>
					</tr>
					<%
					while(rs_mace.next()) {
					%>
					<tr>
						<td align="center"><%= rs_mace.getString("name") %></td>
						<td align="center"><%= rs_mace.getInt("basehp") %></td>
						<td align="center"><%= rs_mace.getInt("basemp") %></td>
						<td align="center"><%= rs_mace.getInt("baseatk") %></td>
						<td align="center"><%= rs_mace.getInt("basemag") %></td>
						<td align="center"><%= rs_mace.getInt("basedef") %></td>
						<td align="center"><%= rs_mace.getInt("basespr") %></td>
						<td align="left" style="white-space: pre-wrap"><%= rs_mace.getString("effects") %></td>
					</tr>
					<% }
					%>	
				</table>	
				<br>
				<br>
				<%
				Statement statement_fist = con.createStatement();
				ResultSet rs_fist = statement_fist.executeQuery("SELECT * FROM public.fist");
				%>
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
					</tr>
					<%
					while(rs_fist.next()) {
					%>
					<tr>
						<td align="center"><%= rs_fist.getString("name") %></td>
						<td align="center"><%= rs_fist.getInt("basehp") %></td>
						<td align="center"><%= rs_fist.getInt("basemp") %></td>
						<td align="center"><%= rs_fist.getInt("baseatk") %></td>
						<td align="center"><%= rs_fist.getInt("basemag") %></td>
						<td align="center"><%= rs_fist.getInt("basedef") %></td>
						<td align="center"><%= rs_fist.getInt("basespr") %></td>
						<td align="left" style="white-space: pre-wrap"><%= rs_fist.getString("effects") %></td>
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

function sortTable(n,name) {
	  let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
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

function hide() {
	let list = document.getElementById("contents");
	if(list.style.display == "none") {
		list.style.display = "block";
	}
	else {
		list.style.display = "none";
	}
}

let daggerTMRCB = document.querySelector("input[name=daggerTMR]");
daggerTMRCB.addEventListener('change', function() {
	let table = document.getElementById("dagger");
	let rows = table.rows;
	let x, i = 0;
	
	if(this.checked) {
		for (i = 1; i < (rows.length - 1); i++) {
			x = rows[i].getElementsByTagName("TD")[8];
			if(x.innerHTML === 'true') {
				rows[i].style.display = 'none';
			}
		}
	}
	else {
		for (i = 1; i < (rows.length - 1); i++) {
			x = rows[i].getElementsByTagName("TD")[8];
			if(x.innerHTML === 'true') {
				rows[i].style.display = '';
			}
		}
		
	}
});

let daggerSTMRCB = document.querySelector("input[name=daggerSTMR]");
daggerSTMRCB.addEventListener('change', function() {
	let table = document.getElementById("dagger");
	let rows = table.rows;
	let x, i = 0;
	
	if(this.checked) {
		for (i = 1; i < (rows.length - 1); i++) {
			x = rows[i].getElementsByTagName("TD")[9];
			if(x.innerHTML === 'true') {
				rows[i].style.display = 'none';
			}
		}
	}
	else {
		for (i = 1; i < (rows.length - 1); i++) {
			x = rows[i].getElementsByTagName("TD")[9];
			if(x.innerHTML === 'true') {
				rows[i].style.display = '';
			}
		}
		
	}
});

let daggerLTCB = document.querySelector("input[name=daggerLT]");
daggerLTCB.addEventListener('change', function() {
	let table = document.getElementById("dagger");
	let rows = table.rows;
	let x, i = 0;
	
	if(this.checked) {
		for (i = 1; i < (rows.length - 1); i++) {
			x = rows[i].getElementsByTagName("TD")[10];
			if(x.innerHTML === 'true') {
				rows[i].style.display = 'none';
			}
		}
	}
	else {
		for (i = 1; i < (rows.length - 1); i++) {
			x = rows[i].getElementsByTagName("TD")[10];
			if(x.innerHTML === 'true') {
				rows[i].style.display = '';
			}
		}
		
	}
});

</script>
</html>